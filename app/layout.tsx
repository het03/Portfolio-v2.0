import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/UI/theme-provider";

export const metadata: Metadata = {
  title: "Het",
  description: "Het's portfolio showcasing his works and resume.",
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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Het" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${DrukWide.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
