import { env } from "@/env";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const absoluteUrl = (pathname: string) => {
  if (pathname.startsWith("/")) {
    return `${env.NEXT_PUBLIC_APP_URL}${pathname}`;
  } else {
    throw new Error("Invalid pathname");
  }
};
