import type { Metadata } from "next";
import { Kadwa } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

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
    <ClerkProvider
      appearance={{
        baseTheme: [neobrutalism],
        variables: {
          colorPrimary: "#f7b801"
        },
        elements: {
          logoImage: "w-1/2 h-auto",
        }
      }
      }
    >
      <html lang="en">
        <body className={cn("font-kadwa antialiased", kadwa.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
