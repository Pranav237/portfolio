"use client";

import { useState } from "react";

interface Props {
  children?: React.ReactNode;
}

export default function Collapsible({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[80%] max-w-xl bg-white/10 rounded-xl overflow-hidden">
      {/* Top bar */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-12 text-white/70 bg-white/5 flex items-center justify-center"
      >
        {open ? "▲ Collapse" : "▼ Expand"}
      </button>

      {/* Expanding content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[60vh]" : "max-h-0"
        }`}
      >
        <div className="p-4 text-white/70 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
