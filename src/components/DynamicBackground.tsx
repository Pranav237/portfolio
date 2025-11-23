"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

interface Props {
  colors: readonly [string, string, string];
}

export default function DynamicBackground({ colors }: Props) {
  const c1 = useMotionValue(colors[0]);
  const c2 = useMotionValue(colors[1]);
  const c3 = useMotionValue(colors[2]);

  // Animate tint when colors change
  useEffect(() => {
    animate(c1, colors[0], { duration: 0.4, ease: "easeInOut" });
    animate(c2, colors[1], { duration: 0.4, ease: "easeInOut" });
    animate(c3, colors[2], { duration: 0.4, ease: "easeInOut" });
  }, [colors]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      {/* STATIC BLOB BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/content/bg.png')",
        }}
      />

      {/* TINT OVERLAY LAYERS */}
      
      <motion.div
  className="absolute inset-0"
  style={{
    backgroundColor: c1,
    opacity: 0.18,
    zIndex: 20,
  }}
/>

<motion.div
  className="absolute inset-0"
  style={{
    backgroundColor: c2,
    opacity: 0.12,
    zIndex: 21,
  }}
/>

<motion.div
  className="absolute inset-0"
  style={{
    backgroundColor: c3,
    opacity: 0.10,
    zIndex: 22,
  }}
/>

    </div>
  );
}
