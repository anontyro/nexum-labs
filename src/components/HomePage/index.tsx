"use client";

import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import InlineHeading from "../Layout/Headings/InlineHeading";

const PAGE_CONTENT = {
  TITLE: "Integrations & automation, done properly.",
  SUB_TITLE:
    "We build the n8n workflows that keep your business moving without extra headcount.",
};

const Homepage = () => {
  return (
    <Box
      sx={{
        margin: "2rem",
      }}
    >
      <Box>
        <Typography component="h2" variant="h4">
          {PAGE_CONTENT.TITLE}
        </Typography>
        <Typography variant="body1">{PAGE_CONTENT.SUB_TITLE}</Typography>
      </Box>
      <Box
        sx={{
          margin: "1rem 0",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Button variant="contained" href="/contact">
            Contact Us
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            href="/how-we-work"
            sx={{ transform: "rotate(1.4deg)" }}
          >
            See how it works
          </Button>
        </Stack>
      </Box>
      <Box>
        <Stack direction="column">
          <InlineHeading text="Services" />

          {/* Start of services, INTEGRATIONS*/}
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="column">
              <Typography
                color="primary"
                variant="h6"
                sx={{
                  fontFamily: "Space Grotesk",
                }}
              >
                Integrations
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{}}>
                tools talking to other tools
              </Typography>
            </Stack>
            <Typography
              color="primary"
              sx={{
                fontSize: "3rem",
                fontFamily: "Space Grotesk",
                fontWeight: 900,
                opacity: 0.3,
              }}
            >
              01
            </Typography>
          </Stack>
          <Divider />

          {/*  n8n*/}
          <Box
            sx={{
              paddingTop: "10px",
              transform: "rotate(-1.6deg)",
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack direction="column">
                <Typography
                  color="secondary"
                  variant="h6"
                  sx={{
                    fontFamily: "Space Grotesk",
                  }}
                >
                  n8n Automations
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{}}>
                  workflows that run themselves
                </Typography>
              </Stack>
              <Typography
                color="secondary"
                sx={{
                  fontSize: "3rem",
                  fontFamily: "Space Grotesk",
                  fontWeight: 900,
                  opacity: 0.3,
                }}
              >
                02
              </Typography>
            </Stack>
            <Divider />
          </Box>

          {/*  bespoke work*/}
          <Box>
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "10px",
              }}
            >
              <Stack direction="column">
                <Typography
                  color="textPrimary"
                  variant="h6"
                  sx={{
                    fontFamily: "Space Grotesk",
                  }}
                >
                  Bespoke builds
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{}}>
                  fully designed automation for specific cases
                </Typography>
              </Stack>
              <Typography
                color="textPrimary"
                sx={{
                  fontSize: "3rem",
                  fontFamily: "Space Grotesk",
                  fontWeight: 900,
                  opacity: 0.3,
                }}
              >
                03
              </Typography>
            </Stack>
            <Divider sx={{ margin: "2rem 0" }} />
          </Box>
          {/* How we Work */}
          <InlineHeading text="How we work" />
          <HowWeWork />
        </Stack>
      </Box>
    </Box>
  );
};

export default Homepage;
