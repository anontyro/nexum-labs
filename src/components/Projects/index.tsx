"use client";

import { Box, Typography } from "@mui/material";
import InlineHeading from "../Layout/Headings/InlineHeading";

const PROJECT_CONTENT = {
  TITLE: "How we spend our time",
  DESCRIPTION: `
  A sample of ways we have improved workflows across different SMEs and clients to solve real world problems.
  `,
  PROJECTS: [
    {
      TITLE: "Lead capture and follow up",
      DESCRIPTION: `
      A common area we often see people struggling with is automating the process of lead capture and all the follow up that is required here. It can be hard to keep everything up-to-date and organised when there are many other things requiring attention.
      
      
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
