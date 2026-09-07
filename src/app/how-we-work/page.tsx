import type { Metadata } from "next";
import HowWeWork from "@/components/HowWeWork";

const TITLE = "How We Work";
const DESCRIPTION =
  "See how Nexum Labs' audit-first process delivers fixed-price automation projects for UK SMEs, from the initial audit through to handover.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/how-we-work",
  },
  openGraph: {
    title: `${TITLE} | NexumLabs`,
    description: DESCRIPTION,
    url: "/how-we-work",
  },
  twitter: {
    title: `${TITLE} | NexumLabs`,
    description: DESCRIPTION,
  },
};

const HowWeWorkPage = () => {
  return (
    <div>
      <HowWeWork />
    </div>
  );
};

export default HowWeWorkPage;
