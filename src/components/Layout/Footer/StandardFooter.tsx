"use client";

import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import EmailIcon from "@mui/icons-material/Email";

import NextLink from "next/link";

const StandardFooter = () => {
  return (
    <Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box sx={{ margin: "0 2rem 1rem 2rem" }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Stack direction="column">
            <Typography
              variant="h5"
              component="h4"
              sx={{ flexGrow: 1, textTransform: "uppercase", opacity: "0.5" }}
            >
              <Typography variant="h5" component="span" color="primary">
                {`>_ `}
              </Typography>
              <Typography variant="h5" component="span">
                {`Nexum`}
              </Typography>
              <Typography variant="h5" component="span" color="primary">
                {`Labs`}
              </Typography>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Building efficiency together
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Stack direction="column" sx={{ alignItems: "center" }}>
              <EmailIcon />
              <Link
                component={NextLink}
                href="/contact"
                variant="body2"
                underline="hover"
              >
                Contact Us
              </Link>
            </Stack>
            <Stack direction="column" sx={{ alignItems: "center" }}>
              <LocationCityIcon />
              <Typography variant="body2" color="textSecondary">
                Aberdeen, UK
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="column">
            <Typography variant="body2" color="textSecondary">
              All rights reserved 2026 ©
            </Typography>
            <Link href="mailto:hello@nexumlabs.co.uk" color="secondary">
              hello@nexumlabs.co.uk
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default StandardFooter;
