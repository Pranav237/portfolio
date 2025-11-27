"use client";

import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("pranav@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">

      {/* Soft Blurred Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[60vw] h-[60vw] rounded-full bg-[#4b4bff]/20 blur-[120px] absolute top-[10%] left-[15%]" />
        <div className="w-[50vw] h-[50vw] rounded-full bg-[#9b5bff]/20 blur-[140px] absolute bottom-[10%] right-[10%]" />
      </div>

      {/* Header */}
      <h1 className="font-title text-5xl text-white mb-10">Contact Me</h1>

      {/* Card */}
      <div className="bg-white/10 backdrop-blur-xl shadow-xl rounded-3xl px-10 py-12 text-center font-body text-white/90 space-y-6 max-w-sm border border-white/10">
        <a
          href="/content/PranavResume.pdf"
          download
          className="block hover:text-white transition"
        >
          Download Resume
        </a>

        <a
          href="https://www.linkedin.com/in/pranavr23"
          target="_blank"
          className="block hover:text-white transition"
        >
          LinkedIn
        </a>

        <div className="space-y-1">
          <button
            onClick={handleCopy}
            className="block w-full text-white/90 hover:text-white transition"
          >
            Copy Email
          </button>

          {/* Smooth fading notification */}
          {copied && (
            <div className="text-sm text-green-300 opacity-80 animate-fade">
              Copied!
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
