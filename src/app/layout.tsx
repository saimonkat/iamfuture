import React from "react";
import type { Metadata } from "next";
import { Inter, Dancing_Script, Archivo } from "next/font/google";
import HeaderContext from "./Context";
import { Cookie } from "@/components/Cookie";

import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/Providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--dancing-script",
});

const archivo = Archivo({
  subsets: ["latin"],
  /*  weight: ["400", "500", "600", "700"], */
  variable: "--archivo",
});

export const metadata: Metadata = {
  title: "IamFuture",
  description: "The Future of Finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} ${dancing_script.variable} ${archivo.variable}`}
      >
        <HeaderContext>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Sidebar />
            <Cookie />
            <div className="xl:ml-22">{children}</div>
          </ThemeProvider>
        </HeaderContext>
      </body>
    </html>
  );
}
