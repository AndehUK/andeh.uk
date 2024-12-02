"use client";

import { useMode } from "@/components/providers/mode-provider";
import { BookIcon, Code2Icon, GitBranchIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const { mode } = useMode();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (mode !== "home") return null;

  return (
    <div className="mx-auto max-w-6xl p-8">
      {/* Introduction Section */}
      <div
        style={{
          animation: isVisible ? "slideIn 0.5s ease-out" : "none",
        }}
      >
        <h1 className="mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-6xl font-bold text-transparent">
          About Me
        </h1>
        <p className="mb-12 max-w-3xl text-xl text-slate-400">
          I&apos;m a software developer with a strong focus on full-stack web
          development, currently pursuing my Computer Science degree at
          Nottingham Trent University while actively working on commercial
          projects.
        </p>
      </div>

      <div
        style={{
          animation: isVisible ? "slideIn 0.5s ease-out 0.6s" : "none",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <h2 className="mb-8 text-3xl font-semibold text-white">
          Technical Expertise
        </h2>
        <div className="rounded-lg bg-slate-800/50 p-6">
          <GitBranchIcon className="mb-4 text-purple-400" size={24} />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Core Technologies
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li>• JavaScript/TypeScript</li>
                <li>• Python</li>
                <li>• React & Next.js</li>
                <li>• TailwindCSS</li>
                <li>• Building RESTful APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Additional Skills
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Git & GitHub Actions</li>
                <li>• Database Design (SQL & NoSQL)</li>
                <li>• Cloud Services (AWS, Azure, GCP)</li>
                <li>• DevOps & CI/CD</li>
                <li>• System Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div
        style={{
          animation: isVisible ? "slideIn 0.5s ease-out 0.2s" : "none",
          opacity: isVisible ? 1 : 0,
        }}
        className="my-16"
      >
        <h2 className="mb-8 text-3xl font-semibold text-white">
          Professional Journey
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-slate-800/50 p-6">
            <TerminalIcon className="mb-4 text-purple-400" size={24} />
            <h3 className="mb-2 text-xl font-semibold text-white">
              Current Role
            </h3>
            <p className="text-slate-400">
              Front-end Web Developer at{" "}
              <Hyperlink
                label="Smooth Brain Games"
                href="https://smoothbrain.gg"
              />
              , where I develop responsive web applications using React and
              collaborate with design teams to implement user interfaces.
            </p>
          </div>
          <div className="rounded-lg bg-slate-800/50 p-6">
            <Code2Icon className="mb-4 text-blue-400" size={24} />
            <h3 className="mb-2 text-xl font-semibold text-white">
              Previous Experience
            </h3>
            <p className="text-slate-400">
              Full-stack development at{" "}
              <Hyperlink
                label="Projekt Rising"
                href="https://projektrising.ai"
              />
              , Python development at{" "}
              <Hyperlink
                label="BisectHosting"
                href="https://bisecthosting.com/Andeh"
              />
              , and various freelance projects focusing on TypeScript and
              Next.js.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div
        style={{
          animation: isVisible ? "slideIn 0.5s ease-out 0.4s" : "none",
          opacity: isVisible ? 1 : 0,
        }}
        className="mb-16"
      >
        <h2 className="mb-8 text-3xl font-semibold text-white">Education</h2>
        <div className="rounded-lg bg-slate-800/50 p-6">
          <BookIcon className="mb-4 text-red-400" size={24} />
          <h3 className="mb-2 text-xl font-semibold text-white">
            Academic Background
          </h3>
          <div className="space-y-4 text-slate-400">
            <p>
              Currently pursuing BSc Computer Science at{" "}
              <Hyperlink
                label="Nottingham Trent
              University"
                href="https://www.ntu.ac.uk/course/science-and-technology/ug/bsc-hons-computer-science"
              />
              , with coursework in software development, algorithms, and data
              structures.
            </p>
            <p>
              Achieved D* D* in Level 3 Diploma at{" "}
              <Hyperlink
                label="Nottingham College"
                href="https://www.nottinghamcollege.ac.uk/courses/it-national-diploma-level-3"
              />
              , covering IT fundamentals, programming, and cyber security.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
    </div>
  );
};

const Hyperlink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="font-bold text-primary hover:text-primary/80"
    >
      {label}
    </Link>
  );
};

export default AboutPage;
