"use client";

import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { TimelineItem } from "@/data/timeline_data";
import LiquidGlass from "@/components/LiquidGlass";

interface Props {
  data: TimelineItem;
  index: number;
  onVisible?: () => void;
}

const Section = forwardRef<HTMLElement, Props>(
  ({ data, index, onVisible }, ref) => {
    const { ref: inViewRef } = useInView({
      threshold: 0.5,
      triggerOnce: false,
      onChange: (visible) => {
        if (visible && onVisible) onVisible();
      },
    });

    function setRefs(el: HTMLElement | null) {
      inViewRef(el);
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = el;
    }

    return (
      <section
        data-snap
        ref={setRefs}
        className="h-screen w-full flex flex-col items-center justify-center text-white text-center"
      >
        <h1
          className="font-title text-6xl mb-4"
          style={{ color: data.yearColor }}
        >
          {data.year}
        </h1>

        <p className="font-title text-lg opacity-80 mb-10">
          {data.title}
        </p>

        <LiquidGlass>
          <div className="font-body text-base leading-relaxed opacity-95">
            {data.content.map((line, i) => (
              <p key={i} className="mb-2">
                {line}
              </p>
            ))}
          </div>
        </LiquidGlass>
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
