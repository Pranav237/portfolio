"use client";

import { useEffect, useRef, useState } from "react";
import { timeline } from "@/data/timeline_data";
import Section from "@/components/Section";
import DynamicBackground from "@/components/DynamicBackground";
import Lenis from "@studio-freight/lenis";

export default function Page() {
  const [activeColor, setActiveColor] = useState<string>(timeline[0].bgColor);



  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // SNAP ENGINE
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        const scrollY = window.scrollY;

        let closestIndex = 0;
        let closestDist = Infinity;

        sectionRefs.current.forEach((el, i) => {
          if (!el) return;
          const dist = Math.abs(el.offsetTop - scrollY);
          if (dist < closestDist) {
            closestDist = dist;
            closestIndex = i;
          }
        });

        const target = sectionRefs.current[closestIndex]?.offsetTop ?? 0;
        lenis.scrollTo(target);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <DynamicBackground color={activeColor} />

      {timeline.map((item, index) => (
        <Section
          key={item.id}
          index={index}
          data={item}
          onVisible={() => setActiveColor(item.bgColor)}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
        />
      ))}
    </main>
  );
}
