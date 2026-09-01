"use client";

import { Box, Divider, Typography } from "@mui/material";
import InlineHeading from "../Layout/Headings/InlineHeading";

const PAGE_CONTENT = {
  PAGE_TITLE: "About",
  TITLE: "Who's behind Nexum Labs?",
  ABOUT_INFO: "",
  BACKGROUND: "",
};

const AboutPage: React.FC = () => {
  return (
    <Box
      sx={{
        margin: "2rem",
      }}
    >
      <Box>
        <InlineHeading text="About" sx={{ fontSize: "1rem" }} />
        <Typography component="h2" variant="h4">
          Who's behind Nexum Labs?
        </Typography>
        <Typography color="textSecondary" variant="body2">
          Based out of Aberdeen, UK we are a consulting firm that aims to save
          you time and money.
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <Box>
        <InlineHeading text="background" />
        <Typography color="textSecondary" variant="body2">
          Hi, I'm Alex and person behind Nexum Labs. I have worked in a number
          of technical roles for over 10 years mostly as a software engineer in
          a range of different companies from small start ups to larger
          enterpise organisations. I have worked across many roles such as
          frontend, backend, devops on a number of different systems.
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <Box>
        <InlineHeading text="FAQ" />
      </Box>
    </Box>
  );
};

export default AboutPage;
