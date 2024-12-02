"use client";

import React, { useState } from "react";
import { Menu, X, Terminal, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 z-50 flex h-screen w-24 flex-col items-center border-r border-slate-800 bg-slate-900 py-8">
        <Link
          href="/"
          className="mb-12 transition-all duration-700 hover:scale-110"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-600">
            <span className="text-xl font-bold text-white">AM</span>
          </div>
        </Link>

        <div className="flex flex-col items-center gap-8">
          <button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-slate-700">
            <Terminal
              className="text-slate-400 transition-colors group-hover:text-white"
              size={20}
            />
          </button>

          <button
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-slate-700"
            onClick={() => setIsOpen(true)}
          >
            <Menu
              className="text-slate-400 transition-colors group-hover:text-white"
              size={20}
            />
          </button>
        </div>

        <div className="mt-auto flex flex-col gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors duration-300 hover:text-white"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors duration-300 hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-slate-400 transition-colors duration-300 hover:text-white"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Full Navigation Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-95"
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            className="grid max-w-4xl grid-cols-2 gap-8 p-8"
            style={{
              animation: "slideIn 0.5s ease-out",
            }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Labs", path: "/labs" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <div
                key={i}
                className="group transform cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => setIsOpen(false)}
                style={{
                  animation: `slideIn 0.5s ease-out ${i * 0.1}s`,
                }}
              >
                <div className="rounded-lg bg-slate-800 p-8 transition-all duration-300 group-hover:bg-slate-700">
                  <h3 className="mb-2 text-2xl text-white">{item.name}</h3>
                  <p className="text-slate-400">
                    Navigate to {item.name.toLowerCase()} section
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute right-8 top-8 text-slate-400 transition-colors duration-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
