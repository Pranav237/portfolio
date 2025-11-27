"use client";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("pranav@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <footer className="w-full py-16 text-white flex flex-col items-center gap-4 opacity-80">

      <a
        href="/content/resume.pdf"
        download
        className="hover:opacity-100 transition-opacity"
      >
        Download Resume
      </a>

      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        className="hover:opacity-100 transition-opacity"
      >
        LinkedIn
      </a>

      <button
        onClick={copyEmail}
        className="hover:opacity-100 transition-opacity"
      >
        {copied ? "Copied!" : "Copy Email"}
      </button>

    </footer>
  );
}
