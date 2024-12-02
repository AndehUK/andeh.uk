"use client";

import { useRouter } from "next/navigation";
import { useMode } from "../providers/mode-provider";
import { useEffect, useState } from "react";
import { Loader2, XIcon } from "lucide-react";
import { Button } from "../ui/button";

type NavigationRoute = {
  label: string;
  description: string;
  href: string;
};

const NAVIGATION_ROUTES: NavigationRoute[] = [
  {
    label: "Home",
    description: "Navigate to home section",
    href: "/",
  },
  {
    label: "About",
    description: "Navigate to home section",
    href: "/about",
  },
  {
    label: "Projects",
    description: "Navigate to home section",
    href: "/projects",
  },
  {
    label: "Blog",
    description: "Navigate to home section",
    href: "/blog",
  },
  {
    label: "Contact",
    description: "Navigate to home section",
    href: "/contact",
  },
];

export const NavigationOverlay = () => {
  const [isRouting, setIsRouting] = useState<boolean>(false);
  const { mode, setMode } = useMode();
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMode("home");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setMode]);

  const navigateTo = (href: string) => {
    setIsRouting(true);
    router.push(href);
    setTimeout(() => {
      router.push(href);
      setMode("home");
      setIsRouting(false);
    }, 500);
  };

  if (mode !== "navigation") return null;

  return (
    <div
      className="inset-0 flex h-full transform items-center justify-center transition-all duration-300"
      style={{
        animation: "fadeIn 1s ease-out",
      }}
    >
      <div className="grid max-w-4xl grid-cols-2 gap-8 p-8">
        {NAVIGATION_ROUTES.map((item, i) => (
          <Button
            key={i}
            size="unspecified"
            className="group relative transform flex-col items-start rounded-lg bg-slate-800 p-8 transition-all duration-300 hover:scale-105 hover:bg-slate-700"
            style={{
              animation: `fadeIn 0.3s ease-out ${i * 0.15}s`,
            }}
            onClick={() => navigateTo(item.href)}
            disabled={isRouting}
          >
            {isRouting && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50">
                <Loader2 className="animate-spin text-white" />
              </div>
            )}
            <div className={isRouting ? "opacity-50" : ""}>
              <h3 className="mb-2 text-2xl text-white">{item.label}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          </Button>
        ))}
      </div>
      <button
        className="absolute right-8 top-8 text-slate-400 transition-colors duration-300 hover:text-white"
        onClick={() => setMode("home")}
      >
        <XIcon size={24} />
      </button>
    </div>
  );
};
