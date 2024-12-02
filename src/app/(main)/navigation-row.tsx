"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationRow = () => {
  const pathname = usePathname();

  const activeClassName = "text-primary hover:text-primary/80";
  const className = "text-foreground/80 hover:text-foreground";

  return (
    <div className="hidden items-center gap-x-4 sm:flex">
      <Link
        href="/"
        className={cn(
          "hover:underline",
          pathname === "/" ? activeClassName : className,
        )}
      >
        Home
      </Link>
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Link
        href="/about"
        className={cn(
          "hover:underline",
          pathname === "/about" ? activeClassName : className,
        )}
      >
        About
      </Link>
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Button variant="ghost" className="p-0" disabled>
        Projects
      </Button>
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Button variant="ghost" className="p-0" disabled>
        Blog
      </Button>
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Button variant="ghost" className="p-0" disabled>
        Contact
      </Button>
    </div>
  );
};
