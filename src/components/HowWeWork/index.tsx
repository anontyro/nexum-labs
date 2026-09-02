"use client";

import { Box, Divider, Typography } from "@mui/material";
import InlineHeading from "../Layout/Headings/InlineHeading";

const HOW_WE_WORK_CONTENT = {
  TITLE: "A Fast efficient process that gets results",
  DESCRIPTION: `
  We understand that time is valuable and so is getting the process right. With these two things in mind we built the process around these core ideas. The inital audit provides context and surfaces issues, we then discuss the audit outcomes and settle on a statement of work together.

  Then we will go and build out the processes whilst providing weekly updates on the progress before a demo of the process. This is done when things are mostly in place but still allows for course correction as required. Then deployment and handover with the documentation required.

  We will also check back in a few more times to ease the transition over and ensure the process is settled in and working as expected.
  `,
  SERVICE_TITLE: "What we do",
  SERVICE_DESCRIPTION: `
  At our core we offer services built to client needs to enhance productivity and efficiency of existing processes. This results in automation of tasks which can be done via n8n providing a robust automation process to relie on. We do also develop other scripts and processes as required.

  In somecases we may even need to build more bespoke processes to capture or transform data, these tend to be bigger scoped and more involved but can be shaped exactly to the business needs. Although these are less common cases and find usually other processes solve the problems.
  `,
};

const HowWeWork = () => {
  return (
    <Box
      sx={{
        margin: "2rem",
      }}
    >
      <Box>
        <InlineHeading text="How We Work" sx={{ fontSize: "1rem" }} />
        <Typography component="h2" variant="h4">
          {HOW_WE_WORK_CONTENT.TITLE}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          sx={{ whiteSpace: "pre-line" }}
        >
          {HOW_WE_WORK_CONTENT.DESCRIPTION}
        </Typography>
      </Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box>
        <InlineHeading text="Services" sx={{ fontSize: "1rem" }} />
        <Typography component="h2" variant="h4">
          {HOW_WE_WORK_CONTENT.SERVICE_TITLE}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          sx={{ whiteSpace: "pre-line" }}
        >
          {HOW_WE_WORK_CONTENT.SERVICE_DESCRIPTION}
        </Typography>
      </Box>
    </Box>
  );
};

export default HowWeWork;
