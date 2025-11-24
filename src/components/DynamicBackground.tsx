"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

interface Props {
  color: string;
}

export default function DynamicBackground({ color }: Props) {
  const tint = useMotionValue(color);

  useEffect(() => {
    animate(tint, color, { duration: 0.25, ease: "easeInOut" });
  }, [color]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/content/bg.png')",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: tint, opacity: 0.60 }}
      />
    </div>
  );
}
