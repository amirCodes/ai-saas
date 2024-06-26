import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Manrope } from "next/font/google";
import ConvexClientProvider from "./providers/ConvexClerkProvider";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Podcast",
  description: "Create Podcast with AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
