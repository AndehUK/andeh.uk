"use client";

import { useCommandHelp } from "@/hooks/use-command-help";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useMode } from "../providers/mode-provider";

type CommandItem = {
  name: string;
  description: string;
};

const COMMAND_LIST: CommandItem[] = [
  {
    name: "help",
    description: "Show this help dialog.",
  },
  {
    name: "cd",
    description: "Navigate to a different page.",
  },
  {
    name: "ls",
    description: "Display a list of pages you can navigate to.",
  },
  {
    name: "navigate",
    description: "Show the navigation menu.",
  },
  {
    name: "source",
    description: "View the source code for this website.",
  },
  {
    name: "github",
    description: "View my GitHub profile.",
  },
  {
    name: "linkedin",
    description: "View my LinkedIn profile.",
  },
];

export const CommandHelpModal = () => {
  const { isOpen, close } = useCommandHelp();
  const { mode } = useMode();

  if (mode !== "command") return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="mx-4 max-w-md">
        <DialogHeader>
          <DialogTitle>Command Help</DialogTitle>
        </DialogHeader>

        <div className="h-13 w-full rounded-xl bg-white/5 p-2">
          <ul>
            {COMMAND_LIST.map((command) => (
              <li key={command.name}>
                <code className="text-sm">
                  <span className="font-bold">{command.name}</span> -{" "}
                  {command.description}
                </code>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};
