import "./globals.css";
import type { Metadata } from "next";

import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "iHealth",
  description: "iHealth is a dynamic app offering fun social interactions and professional client-trainer relationships. Users can socialize with friends and track health data, set up calendars, and communicate privately with trainers, fostering a supportive community and efficient health management.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning >
      <body >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)}/>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
