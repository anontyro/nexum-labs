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
  Hi, I'm Alex, the person behind Nexum Labs. I've worked in tech for over 10 years across a range of different businesses. I come from a technical background as a software engineer and always enjoy solving problems. Having worked across several industries and in B2B roles, I understand what matters to businesses both small and large.

  I decided to found Nexum Labs after seeing countless clients fall into the same patterns of manual work, even in this day and age. Repeated data entry and duplication, and tools stretched to do jobs they were never designed for. All of this leads to inefficiencies and potential data problems.
  `,
};

const FAQ_CONTENT: { TITLE: string; DESCRIPTION: string }[] = [
  {
    TITLE: "Can't I just use AI?",
    DESCRIPTION: `
    Sure you can, and there's nothing wrong with that. However, you would need to prompt it each time, feed it the data manually, or connect it to your data source and spend time building a process that works. This can also change as the underlying models are updated, meaning you'd need to keep re-prompting, which adds an ongoing cost.

    For a longer-term solution, having a script or automated process in place will prove far more beneficial. You could even have the AI help you design that script or process yourself. Or, if you'd rather we took care of it, we're always happy to help.
    `,
  },
  {
    TITLE:
      "What's your policy on AI, and how will it be used in our engagement?",
    DESCRIPTION: `
    We follow a strictly ethical approach to using AI in every project we work on, and we'll always be upfront with you about where we use it to assist the process. Like any tool, AI is valuable — it helps speed up our processes and lets a small team like ours make the most of our talent. As a result, we use AI tools alongside our own skills to enhance the outcome.

    Coming from a technical background, we prefer AI-assisted processes rather than relying on AI to deliver full solutions on its own. In our experience, that approach tends to cause problems, ones that are easily avoided with the right oversight.
    `,
  },
  {
    TITLE: "What is involved in the audit?",
    DESCRIPTION: `
    Our audit process is designed to get to know you, your business, and your core workflows. We'll spend time with you, either remotely via video call or in person, to discuss how you work. This helps us understand your business and tailor our proposal to your needs.

    After the audit, we'll give you a timeframe for when you'll receive a detailed audit document outlining the areas we've flagged for improvement, along with suggestions on what could be done to address them. This document usually covers immediate priorities as well as some bigger follow-up opportunities.

    It's also perfectly fine to end our engagement once you have the audit document, if that's what you'd prefer — though we hope it provides the basis for continued collaboration. If you'd like to carry on working together, we can discuss that at this point.
    `,
  },
  {
    TITLE: "How much does this cost?",
    DESCRIPTION: `
    We keep pricing simple: every engagement is a fixed price agreed upfront, never billed by the hour, so there are no surprises along the way.

    The audit itself starts from £200, depending on the size and complexity of your business. If you decide to move forward with a project afterwards, we'll deduct the audit fee from the overall cost, so it's never wasted spend either way.

    Once the audit is complete, we'll put together a fixed-price proposal for the build phase based on exactly what needs doing, so you'll know the full cost before committing to anything further.
    `,
  },
  {
    TITLE: "How do you handle the security of our data?",
    DESCRIPTION: `
    We take this seriously, especially since automation often means connecting to the tools and information that run your business day to day.

    We're happy to sign an NDA before any detailed discussions take place, so you can speak openly about your processes and data without concern. We also carry professional indemnity insurance, giving you extra protection and peace of mind while we work together.
    `,
  },
  {
    TITLE: "Will we be locked into using you after the project is finished?",
    DESCRIPTION: `
    No. Everything we build is handed over to you along with clear documentation, so you own it outright and aren't reliant on us to keep it running.

    We deliberately avoid designing anything that locks you in. If in future you'd rather bring maintenance in-house, hand it to another provider, or simply pause working with us, you're free to do so with everything you need already in hand.
    `,
  },
  {
    TITLE: "What support do we get after the project is delivered?",
    DESCRIPTION: `
    After handover, we check in with you after one week and again after one month to make sure everything is running smoothly and to catch any early issues.

    Beyond that, we're always happy to help with questions or small tweaks. For anything more involved, or ongoing support on a regular basis, we can put a separate support arrangement in place, that way we can keep being genuinely helpful without it being an open-ended, unpaid commitment on either side.
    `,
  },
  {
    TITLE:
      "Once an automation process is in place, do I need technical knowledge to use it?",
    DESCRIPTION: `
    As part of our engagement, we'll also get a sense of your team's technical comfort level and suggest solutions that fit, since every client's needs are different.

    We always provide comprehensive documentation and walk you through everything during handover. We also offer partially and fully hosted solutions where needed, and we'll talk through the right option with you before any engagement begins.
  `,
  },
  {
    TITLE: "How long do projects typically take?",
    DESCRIPTION: `
    Most projects run 2 - 4 weeks after the audit handover and the project is signed off. This is something we will highlight in the statement of work as well.
    `,
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CONTENT.map((x) => ({
    "@type": "Question",
    name: x.TITLE,
    acceptedAnswer: {
      "@type": "Answer",
      text: x.DESCRIPTION.replace(/\s+/g, " ").trim(),
    },
  })),
};

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
        <Typography component="h1" variant="h4">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      {/*<Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <Box>
        <InlineHeading text="FAQ" />
      </Box>*/}
    </Box>
  );
};

export default AboutPage;
