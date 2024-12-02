"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useMode } from "../providers/mode-provider";
import { useNavigationList } from "@/hooks/use-navigation-ls";

type NavigationItem = {
  name: string;
  usage: string;
};

const NAVIGATION_LIST: NavigationItem[] = [
  {
    name: "Home",
    usage: "cd ~/home",
  },
  {
    name: "About",
    usage: "cd ~/about",
  },
  {
    name: "Projects",
    usage: "cd ~/projects",
  },
  {
    name: "Blog",
    usage: "cd ~/blog",
  },
  {
    name: "Contact",
    usage: "cd ~/contact",
  },
];

export const NavigationListModal = () => {
  const { isOpen, close } = useNavigationList();
  const { mode } = useMode();

  if (mode !== "command") return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="mx-4 max-w-md">
        <DialogHeader>
          <DialogTitle>Navigation List</DialogTitle>
        </DialogHeader>

        <div className="h-13 w-full rounded-xl bg-white/5 p-2">
          <ul>
            {NAVIGATION_LIST.map((navItem) => (
              <li key={navItem.name}>
                <code className="text-sm">
                  <span className="font-bold">{navItem.name}</span> - Usage:{" "}
                  {navItem.usage}
                </code>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};
