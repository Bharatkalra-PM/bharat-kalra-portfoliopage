import React, { useState, useEffect, useCallback } from 'react';
import { quotes } from '../data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const QuoteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevQuote = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  }, []);

  const nextQuote = useCallback(() => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevQuote();
    } else if (e.key === 'ArrowRight') {
      nextQuote();
    }
  };

  // Subtle auto-advance every 8 seconds when not hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextQuote();
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused, nextQuote]);

  return (
    <section
      aria-label="How I think quotes"
      className="bg-[#0C0C0E] text-white py-14 sm:py-16 md:py-20 border-y border-[#27272A] transition-colors relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        {/* Section title in refined serif */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-white/90">
            How I think
          </h2>
        </div>

        {/* Quote display box */}
        <div className="max-w-3xl mx-auto min-h-[140px] sm:min-h-[160px] flex items-center justify-center text-center px-4">
          <p
            key={currentIndex}
            className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white/95 leading-relaxed tracking-normal animate-in fade-in duration-500"
          >
            "{quotes[currentIndex]}"
          </p>
        </div>

        {/* Carousel controls & pagination */}
        <div className="flex items-center justify-center gap-6 mt-8 sm:mt-10">
          <button
            onClick={prevQuote}
            aria-label="Previous quote"
            className="p-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dot pills */}
          <div className="flex items-center gap-2">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to quote ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextQuote}
            aria-label="Next quote"
            className="p-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Current position counter */}
        <div className="text-center mt-3 text-[11px] font-mono text-white/40 tracking-wider">
          {currentIndex + 1} of {quotes.length}
        </div>
      </div>
    </section>
  );
};
