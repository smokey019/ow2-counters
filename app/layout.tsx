import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import heroes from "./data/heroes.json";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Overwatch 2 Counters List",
  description:
    "* Note these are general counters and just because you choose a character's counter doesn't mean you'll automatically win, but it will improve your chances.  Don't be that guy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div key="1" className="dark min-h-screen flex flex-col">
          <header className="bg-gray-800 p-4 dark:bg-gray-950 flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="font-bold text-2xl text-white mb-4 md:mb-0">
              Overwatch 2 Counters List
            </h1>
            <div className="flex-1 grid grid-cols-4 gap-4">
              {heroes.map((item) => (
                <img
                  key={item.key}
                  alt={item.name}
                  className="object-cover w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
                  height={50}
                  src={item.portrait}
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-200">
                Login
              </button>
              <button className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors duration-200">
                Tier List
              </button>
            </div>
          </header>
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
