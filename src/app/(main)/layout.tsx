import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/theme-toggle";
import { ModeProvider } from "@/components/providers/mode-provider";
import { CommandOverlay } from "@/components/overlays/command-overlay";
import { NavigationOverlay } from "@/components/overlays/navigation-overlay";
import { MenuProvider } from "@/components/providers/menu-provider";
import { NavigationRow } from "./navigation-row";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <ModeProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 w-full shrink-0 items-center justify-between gap-4">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <NavigationRow />
            </div>
            <div className="px-4">
              <ThemeToggle />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4">
            <MenuProvider />
            <CommandOverlay />
            <NavigationOverlay />
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ModeProvider>
  );
}
