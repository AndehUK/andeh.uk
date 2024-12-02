"use client";

import { type Mode, useMode } from "@/components/providers/mode-provider";
import { CommandIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const AVAILABLE_COMMANDS: string[] = [
  "cd ~/home",
  "cd ~/about",
  "cd ~/projects",
  "cd ~/contact",
  "ls",
  "help",
];

export const CommandOverlay = () => {
  const { mode, setMode } = useMode();
  const [command, setCommand] = useState<string>("");
  const router = useRouter();

  const transitionToPage = useCallback(
    (path: string, mode: Mode = "home") => {
      setMode("transition");
      router.push(path);
      setMode(mode);
    },
    [router, setMode],
  );

  const processCommand = useCallback(() => {
    if (AVAILABLE_COMMANDS.includes(command)) {
      if (command === "cd ~/about") {
        transitionToPage("/about");
      } else if (command === "cd ~/home") {
        transitionToPage("/");
      }
    } else {
      toast.error(
        "Invalid command. Please try again or use the 'help' command.",
      );
    }

    setCommand("");
  }, [command, transitionToPage]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMode("home");
      } else if (e.key === "Enter") {
        e.preventDefault();
        processCommand();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [processCommand, setMode]);

  if (mode !== "command") return null;

  return (
    <div
      className="inset-0 flex h-full transform items-center justify-center transition-all duration-300"
      style={{
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        className="w-full max-w-2xl transform p-8 transition-all duration-500"
        style={{
          animation: "slideIn 0.5s ease-out",
        }}
      >
        <div className="mb-6 flex items-center gap-4">
          <CommandIcon className="text-purple-400" size={24} />
          <span className="text-purple-400">Command Mode</span>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-slate-800 p-4">
          <span className="text-purple-400">→</span>
          <input
            type="text"
            className="flex-1 border-none bg-transparent text-white outline-none"
            placeholder="Type a command (e.g., 'cd ~/about', 'cd ~/projects')"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            autoFocus
          />
        </div>
        <button
          className="absolute right-8 top-8 text-slate-400 transition-colors duration-300 hover:text-white"
          onClick={() => setMode("home")}
        >
          <XIcon size={24} />
        </button>
      </div>
    </div>
  );
};
