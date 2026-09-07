"use client";

import { Box, Typography } from "@mui/material";
import InlineHeading from "../Layout/Headings/InlineHeading";

const PROJECT_CONTENT = {
  TITLE: "How we spend our time",
  DESCRIPTION: `
  A sample of ways we've improved workflows for SMEs and clients to solve real-world problems.
  `,
  PROJECTS: [
    {
      TITLE: "Lead Capture and Follow-Up",
      DESCRIPTION: `
      A common area we see people struggle with is automating lead capture and the follow-up work that comes with it. It's easy for this to slip when there are so many other things demanding your attention.
      `,
      TAGS: "",
    },
  ],
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
        <Typography component="h1" variant="h4">
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
      {PROJECT_CONTENT.PROJECTS.map((x, index) => (
        <Box sx={{ marginTop: "1rem" }} key={x.TITLE}>
          <Typography
            color={index % 2 === 0 ? "primary" : "secondary"}
            variant="h6"
            sx={{
              fontFamily: "Space Grotesk",
            }}
          >
            {x.TITLE}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
            sx={{ whiteSpace: "pre-line" }}
          >
            {x.DESCRIPTION}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
