import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Het Gajera",
  description:
    "Designer & Developer | Crafting engaging web experiences with a focus on animation, responsiveness, and interactivity",
  openGraph: {
    title: "Het Gajera",
    description:
      "Designer & Developer | Crafting engaging web experiences with a focus on animation, responsiveness, and interactivity",
    url: "https://hetgajera.vercel.app/",
    siteName: "Het Gajera",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 628,
        alt: "Het Gajera",
      },
    ],
    locale: "en_US",
  },
  keywords: [
    "Het",
    "Het Gajera",
    "Designer",
    "Developer",
    "Portfolio",
    "Frontend Developer",
  ],
};

const DrukWide = localfont({
  src: [
    {
      path: "../assets/fonts/DrukWideMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/DrukWideBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/DrukWideSuper.ttf",
      weight: "900",
      style: "black",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta
          name="google-site-verification"
          content="kbIGtFg4O7wsl6Im-UEqRtiW0oSGeAe4HXUl6JczJa8"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${DrukWide.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
