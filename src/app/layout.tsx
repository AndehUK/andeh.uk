import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beta.andeh.uk"),
  alternates: {
    canonical: "/",
  },
  title: "Andeh (Beta Site)",
  description:
    "Blending aesthetics with functionality using a diverse tech stack in crafting seamless user experiences and robust backend architectures.",
  icons: [{ rel: "icon", url: "/assets/avatar2.png" }],
  openGraph: {
    images: [{ url: "/assets/og_image.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#fb5f5f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="andeh-theme"
        >
          <main>{children}</main>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
