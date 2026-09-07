import type { Metadata } from "next";
import ContactForm from "@/components/Contact";

const TITLE = "Contact";
const DESCRIPTION =
  "Get in touch with Nexum Labs to discuss automating your business workflows. Based in Aberdeen, working with SMEs across the UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `${TITLE} | NexumLabs`,
    description: DESCRIPTION,
    url: "/contact",
  },
  twitter: {
    title: `${TITLE} | NexumLabs`,
    description: DESCRIPTION,
  },
};

const Contact = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
