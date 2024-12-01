import type { Metadata, Viewport } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Andrew Mason | Software Engineer",
    template: "%s | Andrew Mason",
  },
  description:
    "Software engineer specializing in full-stack development, with expertise in Python, TypeScript, and web technologies. Currently studying Computer Science at Nottingham Trent University.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Python Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Software Development",
    "Nottingham",
    "UK Developer",
  ],
  authors: [{ name: "Andrew Mason" }],
  creator: "Andrew Mason",
  publisher: "Andrew Mason",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Andrew Mason | Software Engineer",
    description:
      "Software engineer specializing in full-stack development, with expertise in Python, TypeScript, and web technologies.",
    url: "https://andeh.uk",
    siteName: "Andrew Mason",
    images: [
      {
        url: "/og-image.png", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Andrew Mason - Software Engineer",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Mason | Software Engineer",
    description:
      "Software engineer specializing in full-stack development, with expertise in Python, TypeScript, and web technologies.",
    images: ["/og-image.png"], // Same as OpenGraph image
  },
  verification: {
    google: "your-google-verification-code", // Optional: Add if you want to verify with Google
    yandex: "your-yandex-verification-code", // Optional: Add if you want to verify with Yandex
  },
  alternates: {
    canonical: "https://andeh.uk",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/icon-128x128.png" }],
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
  category: "Technology",
};

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};
