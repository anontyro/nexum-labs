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
    description: `We organise time with you to understand your current setup and the way you work. In the session we talk through the processes and learn how things operate. This gives us an oppotunity to do a deep dive into your workflows and identify the pain points.
    After we build out a comprehensive report on the finding and send it to you regadless of if we move on to the next stage.
    `,
  },
  {
    label: "Build",
    description: `After discussion around the audit findings we will decide on the path forward to remove pain points. This will be building out automations via n8n or custom scripts, depending on the need.
    We will make sure that updates are communicated and you understand the direction and what is to be delivered.`,
  },
  {
    label: "Deliver",
    description: `Once the final solution is created we will deploy and document it along with have a handover session discussing any additional details. Although, this may be were most of our converstations end we will conduct two brief follow ups on one week and one month.
    This is to help ensure a smooth transition, of course we can be engaged for further follow ups after as well if required.`,
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
