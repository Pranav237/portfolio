"use client";

import "./globals.css";

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/700.css";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter bg-black">
        {children}
      </body>
    </html>
  );
}
