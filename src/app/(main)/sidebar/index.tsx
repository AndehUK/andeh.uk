"use client";

import * as React from "react";
import {
  Code2Icon,
  GithubIcon,
  Linkedin,
  MailIcon,
  MenuIcon,
  TerminalIcon,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Command Mode",
      url: "~command",
      icon: TerminalIcon,
    },
    {
      title: "Navigation",
      url: "~navigation",
      icon: MenuIcon,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Code2Icon,
      items: [
        { title: "All Projects", url: "/projects" },
        { title: "Collaboration Tool", url: "/projects" },
      ],
    },
  ],
  navSecondary: [
    {
      title: "GitHub",
      url: "https://github.com/AndehUK",
      icon: GithubIcon,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/andehx/",
      icon: Linkedin,
    },
    {
      title: "Email",
      url: "mailto:andy@andeh.uk",
      icon: MailIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/claude">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 text-sidebar-primary-foreground">
                  <Image src="/logo.svg" alt="logo" height={24} width={24} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Andrew Mason</span>
                  <span className="truncate text-xs">Andeh UK</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
