import type { Metadata } from "next";
import Projects from "@/components/Projects";

const TITLE = "Projects";
const DESCRIPTION =
  "Real examples of how Nexum Labs has helped UK SMEs automate lead capture, invoicing, and other manual workflows.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `${TITLE} | NexumLabs`,
    description: DESCRIPTION,
    url: "/projects",
  },
  twitter: {
    title: `${TITLE} | NexumLabs`,
    description: DESCRIPTION,
  },
};

const ProjectsPage = () => {
  return (
    <div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
