"use server";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  "contact-name": z.string().min(3, "A contact name is required"),
  "company-name": z.string().min(3, "A company name is required"),
  "contact-email": z.email("Invalid email"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
});

type ContactPayload = z.infer<typeof contactSchema>;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const contactForm = contactSchema.safeParse(body);

  if (!contactForm.success) {
    // Example of how this structure will look
    // {
    //   "errors": {
    //     "contact-email": { "_errors": ["Invalid email"] },
    //     "content": { "_errors": ["Message must be at least 10 characters"] }
    //   }
    // }
    return NextResponse.json(
      { errors: z.treeifyError(contactForm.error) },
      { status: 422 },
    );
  }

  const formWebhook = await fetch(process.env.CONTACT_WEB_HOOK_URL ?? "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Auth: `${process.env.CONTACT_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!formWebhook.ok) {
    return NextResponse.json(
      {
        success: false,
        error: "Unable to send contact to a valid webhook",
      },
      {
        status: 502,
      },
    );
  }

  return NextResponse.json(
    {
      success: true,
    },
    {
      status: 201,
    },
  );
}
