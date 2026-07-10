"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";

interface MobileCardSliderProps {
  children: ReactNode[];
  itemCount: number;
  hint?: string;
}

export default function MobileCardSlider({
  children,
  itemCount,
  hint = "Swipe to see more →",
}: MobileCardSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const totalPages = Math.ceil(itemCount / 2);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || itemCount === 0) return;
    const cardWidth = el.scrollWidth / itemCount;
    const page = Math.round(el.scrollLeft / (cardWidth * 2));
    setActivePage(Math.min(page, totalPages - 1));
  }, [itemCount, totalPages]);

  const scrollToPage = (page: number) => {
    const el = scrollRef.current;
    if (!el || itemCount === 0) return;
    const cardWidth = el.scrollWidth / itemCount;
    el.scrollTo({ left: page * cardWidth * 2, behavior: "smooth" });
    setActivePage(page);
  };

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4"
      >
        {children.map((child, i) => (
          <div
            key={i}
            className="w-[calc(50%-6px)] shrink-0 snap-start"
          >
            {child}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activePage === i ? "w-6 bg-cyan-400" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}

      {hint && (
        <p className="mt-3 text-center text-xs text-zinc-500">{hint}</p>
      )}
    </div>
  );
}
