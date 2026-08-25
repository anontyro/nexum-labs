"use client";

import { Box, Divider, Link, Stack, Typography } from "@mui/material";

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
              Let us automate the pain away
            </Typography>
            <Link
              component={NextLink}
              href="/contact"
              variant="body2"
              underline="hover"
            >
              Contact Us
            </Link>
          </Stack>
          <Stack direction="column">
            <Typography variant="body2" color="textSecondary">
              Base In: Aberdeen, UK
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default StandardFooter;
