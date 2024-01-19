import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Overwatch 2 Counters List",
  description:
    "* Note these are general counters and just because you choose a character's counter doesn't mean you'll automatically win, but it will improve your chances. Don't be that guy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-[#eee]`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
