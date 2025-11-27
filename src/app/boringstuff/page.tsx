"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center text-white text-center">
      <h1 className="text-4xl mb-6 font-title">Contact Me</h1>

      <a
        href="/content/resume.pdf"
        download
        className="mb-4 opacity-80 hover:opacity-100 transition-opacity"
      >
        Download Resume
      </a>

      <a
        href="https://www.linkedin.com/in/pranavr23"
        target="_blank"
        className="mb-4 opacity-80 hover:opacity-100 transition-opacity"
      >
        LinkedIn
      </a>

      <button
        onClick={() => navigator.clipboard.writeText("pranavramnath23@gmail.com")}
        className="opacity-80 hover:opacity-100 transition-opacity"
      >
        Copy Email
      </button>
    </main>
  );
}
