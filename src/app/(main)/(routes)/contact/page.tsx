"use client";

import { useMode } from "@/components/providers/mode-provider";
import { useEffect } from "react";

const ContactPage = () => {
  const { mode, setMode } = useMode();

  useEffect(() => {
    setMode("home");
  }, [setMode]);

  if (mode !== "home") return null;

  return <div>Contact</div>;
};

export default ContactPage;
