"use client";

import Accordion from "@mui/material/Accordion";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import InlineHeading from "../Layout/Headings/InlineHeading";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useId } from "react";

const PAGE_CONTENT = {
  PAGE_TITLE: "About",
  TITLE: "Who's behind Nexum Labs?",
  ABOUT_INFO: `
  Based out of Aberdeen, UK we aim to help SMEs up and down the country to provide better value with the tools they are already using. It is our goal to work with you to better integrate the workflows to save time and money.
  `,
  BACKGROUND: `
  Hi, I'm Alex and I've worked in tech for over 10 years covering a range of different businesses. I come from a technical background working as a software engineer and always enjoy problem solving. Working in several industries and in B2B capacities I understand what is important to businesses both small and large.

  I decide to found Nexum Labs after seeing countless clients falling into the same patterns with manual work even in the internet age! Repeated data entry and duplication, over use of common tools to do tasks they are not designed for. All of this leads to inefficiencies and potential data problems.
  `,
};

const FAQ_CONTENT: { TITLE: string; DESCRIPTION: string }[] = [
  {
    TITLE: "Can't I just use AI?",
    DESCRIPTION: `
    Sure you can and there is nothing wrong with that. However you would need to prompt it each time, feed it the data manually, or connect it to your data source and then spend time to build a process that works. This can also change as models are updated and it does mean re-prompting each time which will keep incurring a cost.

    For more long term solutions have some script or automate process will prove beneficial. You could also have the AI help devise the script or process yourself as well and that could prove pretty good. This is also something we can help you with, or of course we are happy to help with this as well.
    `,
  },
  {
    TITLE:
      "What is your policy on AI? And how will AI be used in the engagement?",
    DESCRIPTION: `
    We follow strictly ethical use of AI in all the projects we work on and will always be upfront and open with you about where we may use AI to assist in the process. Like any tool AI proves to be valuable and can help speed up processes and with a small team help leverage talent even more. As a result we will use AI tools along side our own skills to enhance the outcome.

    As we are from a technical background we prefer AI assisted processes and do not relie on AI to provide full solutions. From experience this proves to be problamatic and can be avoided with some oversight.
    `,
  },
  {
    TITLE: "What is involved in the audit?",
    DESCRIPTION: `
    Our audit process is designed for use to get to know you, your business and the core workflows. We will spend time with you, either remotely via a video call or in person and discuss the key workflows. This allows us to understand the business flows and the needs helping us better talior our proposal for your needs.

    After the audit we will give you a timeframe for when we will provide you a detailed audit document that outlines the core areas flagged to improve and suggestions around what could be done to enhance them. This document will usually contain immediate areas to focus on and some bigger follow ups.

    After getting the audit document from us it is also perfectly fine to end our engagement here if you so desire, but we hope the document provides some continued collaboration. And if you so wish we can discuss that at this time.
    `,
  },
  {
    TITLE:
      "What happens after you have added an automation process do I need technical knowledge?",
    DESCRIPTION: `
    As part of our engagement we will also look to understand the businesses technical capabilities and will suggest different solutions depending on what we assess and agree on. We try to tailor the solution for the clients need as we understand different clients do have different needs.

    As a result we will always provide a comprehensive handover documentation and walk you through it on the handover. But we do also provide semi and fully hosted solutions as required and will suggest different options prior to any engagement.
  `,
  },
  {
    TITLE: "How long do projects typically take?",
    DESCRIPTION: `
    Most projects run 2 - 4 weeks after the audit handover and the project is signed off. This is something we will highlight in the statement of work as well.
    `,
  },
];

const FaqAccordion: React.FC = () => {
  const id = useId();

  return (
    <>
      {FAQ_CONTENT.map((x) => (
        <Accordion key={x.TITLE}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel1-content`}
            id={`${id}-panel1-header`}
          >
            <Typography component="span">{x.TITLE}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={{ whiteSpace: "pre-line" }}
            >
              {x.DESCRIPTION}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
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
          {PAGE_CONTENT.ABOUT_INFO}
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <Box>
        <InlineHeading text="background" />
        <Typography
          color="textSecondary"
          variant="body2"
          sx={{ whiteSpace: "pre-line" }}
        >
          {PAGE_CONTENT.BACKGROUND}
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <Box>
        <InlineHeading text="FAQ" />
        <FaqAccordion />
      </Box>
      {/*<Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <Box>
        <InlineHeading text="FAQ" />
      </Box>*/}
    </Box>
  );
};

export default AboutPage;
