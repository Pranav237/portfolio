export default function LiquidGlass({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        relative
        px-8 py-6
        rounded-3xl
        backdrop-blur-[5px]    /* TRUE GLASS without blurring children */
        bg-white/5              /* subtle transparency */
        border border-white/10  /* smooth premium edge */
        shadow-[0_4px_25px_rgba(0,0,0,0.15)]
        max-w-[450px]
        w-[80vw]
        text-center
      "
    >
      {children}
    </div>
  );
}
