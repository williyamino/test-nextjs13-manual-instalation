import type { ReactNode } from "react";

import "./globals.css";
import NavBar from "../components/nav-bar/NavBar";
import { exo2, orbitron } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-center text-xs border-t py-3 text-slate-500">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
