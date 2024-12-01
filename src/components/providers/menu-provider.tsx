"use client";

import { useMountedState } from "react-use";

export const MenuProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return <></>;
};
