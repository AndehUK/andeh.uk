"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import { toast } from "sonner";

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
} from "@/components/ui/sidebar";

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
    }[];
  }[];
}) {
  const executeAction = (actionUrl: string) => {
    if (actionUrl === "~command") {
      executeCommandAction();
    } else if (actionUrl === "~navigation") {
      executeNavigationAction();
    }
  };

  const executeCommandAction = () => {
    toast.success("Command executed!");
  };

  const executeNavigationAction = () => {
    toast.success("Navigation command received!");
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
                            <a href={subItem.url}>
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
                    asChild
                    className="group/item"
                    size="lg"
                    tooltip={item.title}
                  >
                    <a href={item.url}>
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
