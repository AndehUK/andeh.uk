"use client";

import { useRouter } from "next/navigation";
import { useMode } from "../providers/mode-provider";
import { useEffect, useState } from "react";
import { Loader2, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";

type NavigationRoute = {
  label: string;
  description: string;
  href: string;
};

const NAVIGATION_ROUTES: NavigationRoute[] = [
  {
    label: "Home",
    description: "Navigate to the home page",
    href: "/",
  },
  {
    label: "About",
    description: "Navigate to the about page",
    href: "/about",
  },
  {
    label: "Projects",
    description: "Navigate to the projects page",
    href: "/projects",
  },
  {
    label: "Blog",
    description: "Navigate to the blog page",
    href: "/blog",
  },
  {
    label: "Contact",
    description: "Navigate to the contact page",
    href: "/contact",
  },
];

export const NavigationOverlay = () => {
  const [isRouting, setIsRouting] = useState<boolean>(false);
  const { mode, setMode } = useMode();
  const router = useRouter();
  const { state } = useSidebar();

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

  const gridClassExpanded = "min-[885px]:grid-cols-2";
  const gridClassCollapsed = "sm:grid-cols-2";

  return (
    <div
      className="inset-0 flex h-full transform items-center justify-center transition-all duration-300"
      style={{
        animation: "fadeIn 1s ease-out",
      }}
    >
      <div
        className={cn(
          "grid max-w-4xl gap-8 p-8",
          state === "expanded" ? gridClassExpanded : gridClassCollapsed,
        )}
      >
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
