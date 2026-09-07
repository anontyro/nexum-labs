import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

const TITLE = "About";
const DESCRIPTION =
  "Meet Nexum Labs, an Aberdeen-based consultancy helping UK SMEs automate manual work and get more value from the tools they already use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `${TITLE} | NexumLabs`,
    description: DESCRIPTION,
    url: "/about",
  },
  twitter: {
    title: `${TITLE} | NexumLabs`,
    description: DESCRIPTION,
  },
};

const About = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default About;
