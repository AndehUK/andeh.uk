"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { ProjectCard } from "./landing/project-card";
import { BlogPost } from "./landing/blog-post";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div
        className={cn(
          "transform transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        <h1 className="mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-6xl font-bold text-transparent">
          Hello, I&apos;m Andrew Mason
        </h1>
        <p className="mb-12 max-w-2xl text-2xl text-slate-400">
          A software engineer specializing in full-stack development, with a
          passion for creating elegant solutions to complex problems.
        </p>
      </div>

      <div
        className={`mb-16 grid transform grid-cols-2 gap-8 transition-all delay-300 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
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

      <div
        className={`transform transition-all delay-500 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <h2 className="mb-8 text-3xl font-semibold">Latest Thoughts</h2>
        <div className="flex flex-col gap-y-6">
          <BlogPost
            title="System Design: Building for Scale"
            description="Exploring modern architecture patterns for scalable applications..."
            date="Nov 25, 2024"
            href="/"
          />
          <BlogPost
            title="The Future of Web Development"
            description="Analyzing upcoming trends and technologies in web development..."
            date="Nov 20, 2024"
            href="/"
          />
        </div>
      </div>
    </div>
  );
}
