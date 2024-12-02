"use client";

import { useMountedState } from "react-use";
import { CommandHelpModal } from "../modals/command-help-modal";
import { NavigationListModal } from "../modals/navigation-list-modal";

export const MenuProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <CommandHelpModal />
      <NavigationListModal />
    </>
  );
};
