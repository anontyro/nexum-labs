"use client";

import { Box, Divider, Typography } from "@mui/material";
import InlineHeading from "../Layout/Headings/InlineHeading";

const HOW_WE_WORK_CONTENT = {
  TITLE: "A fast, efficient process that gets results",
  DESCRIPTION: `
  We understand that time is valuable, and so is getting the process right. With those two things in mind, we built our process around a few core ideas. The initial audit gives us context and surfaces any issues; we then discuss the findings together and agree on a statement of work.

  From there, we build out the solution, sharing weekly updates on progress and running a demo once things are mostly in place, while there's still room for course correction. Then comes deployment and handover, along with the documentation you need.

  We'll also check back in a few times afterwards to help smooth the transition and make sure everything settles in and works as expected.
  `,
  SERVICE_TITLE: "What we do",
  SERVICE_DESCRIPTION: `
  At our core, we build services around your needs to improve the productivity and efficiency of your existing processes. Most often this means automating tasks into a reliable, repeatable workflow you can depend on. We also develop other scripts and processes as required.

  In some cases we build more bespoke processes to capture or transform data. These tend to be bigger in scope and more involved, but can be shaped exactly around your business needs, though they're less common, as most problems can be solved with a simpler approach.
  `,
  SERVICES: [
    {
      TITLE: "Automation Workflows",
      DESCRIPTION: `
      Getting tired of chasing clients for invoice payments? Finding it hard to keep leads organised? Having to manually update the same data in two or more places? These are the kinds of workflows we help automate. Once set up and running, they can make a noticeable difference to your day-to-day work.
      `,
    },
    {
      TITLE: "Custom Solutions",
      DESCRIPTION: `
      For more specific needs that require extra control or particular logic, we also offer bespoke solutions. These tend to be more involved and may need a closer look at how your data and processes flow. But if there's a way to automate away some of your pain points, we'll find it.
      `,
    },
  ],
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
        <Typography component="h1" variant="h4">
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
      {HOW_WE_WORK_CONTENT.SERVICES.map((x, index) => (
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

export default HowWeWork;
