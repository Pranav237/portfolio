"use client";

import { useEffect, useState } from "react";
import DynamicBackground from "@/components/DynamicBackground";
import LiquidGlass from "@/components/LiquidGlass";
import { timeline } from "@/data/timeline_data";

const latest = timeline[timeline.length - 1];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const { documentElement: html, body } = document;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("pranavramnath23@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const linkClass =
    "block font-body text-base text-white/90 opacity-95 hover:text-white hover:opacity-100 transition-colors";

  return (
    <main className="relative h-[calc(100vh-4rem)] overflow-hidden">
      <DynamicBackground color={latest.bgColor} />

      <section className="h-full w-full flex flex-col items-center justify-center text-white text-center px-4">
        <div className="-mt-6 sm:-mt-10">
          <h1
            className="font-title text-6xl mb-4"
            style={{ color: latest.yearColor }}
          >
            Contact
          </h1>

          <p className="font-title text-lg opacity-80 mb-10">
            Resume, LinkedIn, and email.
          </p>

          <LiquidGlass>
            <div className="font-body text-base leading-relaxed flex flex-col items-center gap-6">
              <a
                href="/content/PranavResume.pdf"
                download
                className={linkClass}
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/pranavr23"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>

              <div className="space-y-1 w-full">
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`${linkClass} w-full cursor-pointer bg-transparent border-0 p-0`}
                >
                  Copy Email
                </button>
                {copied && (
                  <div className="text-sm text-green-300/90 animate-fade">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </LiquidGlass>
        </div>
      </section>
    </main>
  );
}
