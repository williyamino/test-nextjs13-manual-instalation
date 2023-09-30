import Link from "next/link";
import type { ReactNode } from "react";

import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col px-4 py-2 min-h-screen">
        <header>
          <nav>
            <ul className="flex gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li>
                <Link href="/about" prefetch={false}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-center text-xs border-t py-3">
          Game data and images courtesy of{" "}
          <a href="https://rawg.io" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
