"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

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
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { setOpenMobile, isMobile } = useSidebar();

  const executeAction = (actionUrl: string) => {
    if (actionUrl.startsWith("~")) {
      if (actionUrl === "~command") {
        setMode(mode !== "command" ? "command" : "home");
      } else if (actionUrl === "~navigation") {
        setMode(mode !== "navigation" ? "navigation" : "home");
      } else if (actionUrl === "~home") {
        setMode("home");
      }
    } else {
      router.push(actionUrl);
      setMode("home");
    }

    if (isMobile) {
      setOpenMobile(false);
    }
  };

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
                              aria-disabled
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
          }
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
