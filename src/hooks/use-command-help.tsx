import { create } from "zustand";

type CommandHelpState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useCommandHelp = create<CommandHelpState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
