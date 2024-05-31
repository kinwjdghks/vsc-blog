import type { Metadata } from "next";
import "./globals.css";
// Fonts
import { Fira_Code } from "next/font/google";
// Components
import { NextUIProviders } from "@/lib/providers/NextUIProvider";
import { NextUIProvider } from "@nextui-org/react";

import NavBar from "./components/NavBar";
import PostList from "./components/PostList";

// If loading a variable font, you don't need to specify the font weight
const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vsCode Like Blog",
  description: "vsCode Like Blog generated by jihokim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="relative" lang="en">
      <NextUIProviders>
        <body
          className={`${inter.className} flex flex-row justify-start w-full overflow-x-hidden relative`}
        >
          <NavBar />
          <PostList />
          {children}
        </body>
      </NextUIProviders>
    </html>
  );
}
