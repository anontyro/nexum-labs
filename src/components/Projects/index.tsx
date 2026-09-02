"use client";

import { Box, Typography } from "@mui/material";
import InlineHeading from "../Layout/Headings/InlineHeading";

const PROJECT_CONTENT = {
  TITLE: "How we spend our time",
  DESCRIPTION: `
  Here you can find the different processes and ways we have made peoples lives better.
  `,
};

const Projects = () => {
  return (
    <Box
      sx={{
        margin: "2rem",
      }}
    >
      <Box>
        <InlineHeading text="Projects" sx={{ fontSize: "1rem" }} />
        <Typography component="h2" variant="h4">
          {PROJECT_CONTENT.TITLE}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          sx={{ whiteSpace: "pre-line" }}
        >
          {PROJECT_CONTENT.DESCRIPTION}
        </Typography>
      </Box>
    </Box>
  );
};

export default Projects;
