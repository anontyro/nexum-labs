"use client";

import {
  Box,
  Button,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";

const steps = [
  {
    label: "Audit",
    description: `We organise time with you to understand your current setup and the way you work. In the session we talk through your processes and learn how things operate. This gives us an opportunity to do a deep dive into your workflows and identify the pain points.
    Afterwards, we build out a comprehensive report on our findings and send it to you regardless of whether we move on to the next stage.
    `,
  },
  {
    label: "Build",
    description: `After discussing the audit findings, we decide together on the best path forward to remove those pain points. This means building out automations or custom scripts, depending on what's needed.
    We make sure updates are communicated throughout, so you always understand the direction and what's being delivered.`,
  },
  {
    label: "Deliver",
    description: `Once the final solution is ready, we deploy it, document everything, and hold a handover session to cover any final details. While this is usually where our conversations wrap up, we'll also check in briefly after one week and again after one month.
    This helps ensure a smooth transition, and of course we're happy to be engaged for further follow ups after that if required.`,
  },
];

type HowWeWorkProps = {};

const HowWeWork: React.FC<HowWeWorkProps> = ({}) => {
  const [activeStep, setActiveStep] = useState(0);

  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: "800px" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => {
          return (
            <Step key={step.label}>
              <StepLabel>
                <Typography>{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ marginBottom: "0.5rem", whiteSpace: "pre-line" }}
                >
                  {step.description}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Button
                    sx={{
                      padding: "1px",
                    }}
                    size="small"
                    variant="outlined"
                    onClick={handleNext}
                    ref={continueButtonRef}
                  >
                    Next
                  </Button>
                  <Button
                    sx={{
                      padding: "1px",
                    }}
                    size="small"
                    variant="text"
                    color="secondary"
                    onClick={handlePrevious}
                    ref={backButtonRef}
                  >
                    Previous
                  </Button>
                </Stack>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length && (
        <Button
          sx={{
            padding: "1px",
          }}
          size="small"
          onClick={handleReset}
        >
          Reset
        </Button>
      )}
    </Box>
  );
};

export default HowWeWork;
