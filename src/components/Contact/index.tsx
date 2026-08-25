"use client";

import { Margin } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

const ContactForm = () => {
  return (
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
          <form>
            <Stack direction="column" spacing={2}>
              <TextField id="contact-name" label="Name" variant="outlined" />
              <TextField id="company-name" label="Company" variant="outlined" />
              <TextField id="contact-email" label="Email" variant="outlined" />
              <TextField
                multiline
                rows={4}
                id="content"
                label="What would you like to automate or improve?"
                variant="outlined"
              />
              <Button variant="contained">Send It</Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Divider />
      <Box sx={{ margin: "1rem" }}>
        <Typography variant="body1" color="textSecondary">
          Prefer to email?
        </Typography>
        <Link href="malito:hello@nexumlabs.co.uk" color="secondary">
          hello@nexumlabs.co.uk
        </Link>
      </Box>
    </Box>
  );
};

export default ContactForm;
