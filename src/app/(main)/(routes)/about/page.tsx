"use client";

import { useMode } from "@/components/providers/mode-provider";

const AboutPage = () => {
  const { mode } = useMode();

  if (mode !== "home") return null;

  return <div>About</div>;
};

export default AboutPage;
