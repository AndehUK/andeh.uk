"use client";

import { Sun, Moon, Stars } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isResolved, setIsResolved] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (!isResolved) {
      setIsDark(resolvedTheme === "dark");

      setTimeout(() => {
        setIsResolved(true);
      }, 1000);
    }
  }, [resolvedTheme, isResolved]);

  // Update when theme changes
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const updateTheme = () => {
    // Only update the theme, let the effect handle the visual state
    setTheme(isDark ? "light" : "dark");
  };

  if (!isResolved) {
    return <Skeleton className="relative h-8 w-16 rounded-full" />;
  }

  return (
    <button
      onClick={updateTheme}
      className={`relative h-8 w-16 rounded-full p-1 transition-colors duration-500 ${isDark ? "bg-slate-900" : "bg-white"} flex items-center border-2 border-purple-600/20 hover:border-purple-600/40`}
      aria-label="Toggle theme"
    >
      {/* Toggle track background with gradient */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transition-opacity duration-500 ${isDark ? "opacity-50" : "opacity-10"} `}
      />

      {/* Toggle thumb */}
      <div
        className={`z-10 flex h-6 w-6 transform items-center justify-center rounded-full transition-transform duration-500 ease-out ${isDark ? "translate-x-8 bg-slate-800" : "translate-x-0 bg-white"} shadow-lg`}
      >
        {/* Sun/Moon icons with animation */}
        <div className="relative h-full w-full">
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-100"} `}
          >
            <Sun className="h-4 w-4 text-purple-600" />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isDark ? "opacity-100" : "opacity-0"} `}
          >
            <Moon className="h-4 w-4 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Background stars (visible in dark mode) */}
      <div
        className={`absolute inset-0 flex items-center justify-around transition-opacity duration-500 ${isDark ? "opacity-100" : "opacity-0"} `}
      >
        {[...Array(3)].map((_, i) => (
          <Stars
            key={i}
            className="h-2 w-2 text-blue-400/40"
            style={{
              transform: `translate(${i * 2}px, ${(i % 2) * -3}px)`,
            }}
          />
        ))}
      </div>
    </button>
  );
};

export default ThemeToggle;
