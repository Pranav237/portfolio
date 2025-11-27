"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 px-6 py-3 flex items-center justify-center gap-8 text-white">
      <Link
        href="/goodstuff"
        className={`transition-opacity ${
          path === "/goodstuff" ? "opacity-100" : "opacity-60 hover:opacity-100"
        }`}
      >
        Glimpse of My Life
      </Link>

      <Link
        href="/boringstuff"
        className={`transition-opacity ${
          path === "/boringstuff" ? "opacity-100" : "opacity-60 hover:opacity-100"
        }`}
      >
        Contact Me
      </Link>
    </nav>
  );
}
