"use client";

import { ChevronRight, HouseIcon, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useMode } from "@/components/providers/mode-provider";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: LucideIcon;
    }[];
  }[];
}) {
  const { mode, setMode } = useMode();
  const pathname = usePathname();
  const { setOpenMobile, isMobile } = useSidebar();

  const executeAction = (actionUrl: string) => {
    if (actionUrl === "~command") {
      setMode(mode !== "command" ? "command" : "home");
    } else if (actionUrl === "~navigation") {
      setMode(mode !== "navigation" ? "navigation" : "home");
    } else if (actionUrl === "~home") {
      setMode("home");
    }

    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const isRouteDisabled = (url: string) => {
    if (url === "/" && mode !== "home") {
      return false;
    }

    return url === pathname;
  };

  if (pathname === "/") {
    items[0] = {
      title: "Home",
      url: "~home",
      icon: HouseIcon,
    };
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          if (!!item.items) {
            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="group/item"
                      tooltip={item.title}
                    >
                      {item.icon && (
                        <item.icon className="!size-8 rounded-xl bg-slate-800 p-1 transition duration-300 group-hover/item:scale-110 group-hover/item:bg-slate-700" />
                      )}
                      <span>{item.title}</span>
                      {!!item.items && (
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a
                              href={subItem.url}
                              className="flex items-center gap-x-2"
                            >
                              {subItem.icon && <subItem.icon />}
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          } else {
            if (item.url.startsWith("~")) {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => executeAction(item.url)}
                    tooltip={item.title}
                    className="group/item"
                    size="lg"
                  >
                    {item.icon && (
                      <item.icon className="!size-8 rounded-xl bg-slate-800 p-1 transition duration-300 group-hover/item:scale-110 group-hover/item:bg-slate-700" />
                    )}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            } else {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="group/item"
                    size="lg"
                    tooltip={item.title}
                    disabled={isRouteDisabled(item.url)}
                    onClick={() => {
                      if (isMobile) {
                        setOpenMobile(false);
                      }
                    }}
                  >
                    <a href={item.url} className="flex items-center gap-x-2">
                      {item.icon && (
                        <item.icon className="!size-8 rounded-xl bg-slate-800 p-1 transition duration-300 group-hover/item:scale-110 group-hover/item:bg-slate-700" />
                      )}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            }
          }
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
