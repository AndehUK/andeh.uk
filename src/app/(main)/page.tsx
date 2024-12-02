"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "./landing/project-card";
import { BlogPost } from "./landing/blog-post";
import { useMode } from "@/components/providers/mode-provider";

export default function HomePage() {
  const { mode } = useMode();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (mode !== "home") return null;

  return (
    <div
      className="mx-auto max-w-6xl p-8"
      style={{
        animation: isVisible ? "slideIn 0.5s ease-out" : "none",
      }}
    >
      <div>
        <h1 className="mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-6xl font-bold text-transparent">
          Hello, I&apos;m Andrew
        </h1>
        <p className="mb-12 max-w-2xl text-2xl text-slate-400">
          A software engineer specializing in full-stack development, with a
          passion for creating elegant solutions to complex problems.
        </p>
      </div>

      <div className="mb-16 grid gap-8 sm:grid-cols-2">
        <ProjectCard
          name="Real-time Collaboration Document Editor"
          description="A WebSocket-powered document editor platform enabling real-time collaboration"
          href="/"
        />
        <ProjectCard
          name="ExVision"
          description="Intelligent AI platform powered by OpenAI's GPT models"
          href="/"
        />
      </div>

      <div>
        <h2 className="mb-8 text-3xl font-semibold">Latest Thoughts</h2>
        <div className="flex flex-col gap-y-6">
          <BlogPost
            title="Blog Coming Soon!"
            description="This part of my website is still under construction. Check back soon for updates!"
            date="December 2, 2024"
            href="/"
          />
        </div>
      </div>
    </div>
  );
}
