"use client";

import { Margin } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { FormEvent, useState } from "react";
import { z } from "zod";

const POST_CONTACT_FORM = "/api/contact";
const SUCCESS_MESSAGE =
  "Thanks for getting in contact we will get back to you soon";
const ERROR_MESSAGE = "Error submitting the form check the errors below";

const contactErrorSchema = z.object({
  errors: z.object({
    "contact-name": z.object({ _errors: z.array(z.string()) }).optional(),
    "company-name": z.object({ _errors: z.array(z.string()) }).optional(),
    "contact-email": z.object({ _errors: z.array(z.string()) }).optional(),
    content: z.object({ _errors: z.array(z.string()) }).optional(),
  }),
});

type ContactErrors = z.infer<typeof contactErrorSchema>;

const parseErrors = (response: Response): string[] => {
  const parsed = contactErrorSchema.safeParse(response);

  if (!parsed.success) {
    return [
      "Unable to send the form, try sending an email instead to hello@nexumlabs.co.uk",
    ];
  }

  const { errors } = parsed.data;

  const nameError = errors["contact-name"]?._errors[0];
  const companyNameError = errors["company-name"]?._errors[0];
  const emailError = errors["contact-email"]?._errors[0];
  const contentError = errors["content"]?._errors[0];

  const filtered = [
    nameError,
    companyNameError,
    emailError,
    contentError,
  ].filter((x): x is string => x !== undefined);

  return filtered;
};

const alertDialogs = {
  NONE: 0,
  SUCCESS: 1,
  ERROR: 2,
};

type AlertDialog = (typeof alertDialogs)[keyof typeof alertDialogs];

const ContactForm = () => {
  const [openAlert, setOpenAlert] = useState(alertDialogs.NONE);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleOpen = (type: AlertDialog) => () => {
    setOpenAlert(type);
  };

  const openSuccess = handleOpen(alertDialogs.SUCCESS);
  const openError = handleOpen(alertDialogs.ERROR);

  const handleClose = () => {
    setOpenAlert(alertDialogs.NONE);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setErrorMessages([]);

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const response = await fetch(POST_CONTACT_FORM, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      openSuccess();
      form.reset();
    } else {
      const errorMessages = parseErrors(response);
      setErrorMessages(errorMessages);
      openError();
    }
  };

  return (
    <>
      <Box
        sx={{
          margin: {
            xs: 0,
            sm: "2rem",
          },
        }}
      >
        <Typography component="h2" variant="h4">
          Contact Us
        </Typography>
        <Stack sx={{ alignItems: "center" }}>
          {errorMessages.length > 0 && (
            <Alert variant="outlined" severity="error">
              {errorMessages.map((x) => x)}
            </Alert>
          )}
          <Box
            sx={{
              padding: "1rem",
              margin: {
                xs: "1rem",
                sm: "1rem",
              },
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack direction="column" spacing={2}>
                <TextField
                  id="contact-name"
                  name="contact-name"
                  label="Name"
                  required
                  variant="outlined"
                />
                <TextField
                  id="company-name"
                  name="company-name"
                  label="Company"
                  required
                  variant="outlined"
                />
                <TextField
                  id="contact-email"
                  name="contact-email"
                  label="Email"
                  type="email"
                  required
                  variant="outlined"
                />
                <TextField
                  multiline
                  rows={4}
                  id="content"
                  name="content"
                  label="What would you like to automate or improve?"
                  required
                  variant="outlined"
                />
                <Button type="submit" variant="contained">
                  Send It
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Divider />
        <Box sx={{ margin: "1rem" }}>
          <Typography variant="body1" color="textSecondary">
            Prefer to email?
          </Typography>
          <Link href="mailto:hello@nexumlabs.co.uk" color="secondary">
            hello@nexumlabs.co.uk
          </Link>
        </Box>
      </Box>
      <Snackbar
        open={openAlert === alertDialogs.SUCCESS}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {SUCCESS_MESSAGE}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openAlert === alertDialogs.ERROR}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {ERROR_MESSAGE}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
