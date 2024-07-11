import type { Metadata } from "next";
import { Kadwa } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const kadwa = Kadwa({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-kadwa',
});

export const metadata: Metadata = {
  title: "Snap Sage",
  description: "AI Powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-kadwa antialiased", kadwa.variable)}>
        {children}
      </body>
    </html>
  );
}
