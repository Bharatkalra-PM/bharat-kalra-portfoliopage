import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { quotes } from '../data/content';

export const QuoteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = quotes.length;

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextQuote();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextQuote();
    } else if (e.key === 'ArrowLeft') {
      prevQuote();
    }
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="How I think quotes carousel"
      aria-roledescription="carousel"
      className="relative bg-gradient-to-br from-[#18181B] via-[#1F1F23] to-[#121214] text-white rounded-[26px] p-8 sm:p-12 md:p-14 my-10 border border-[#2D2D32] shadow-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      {/* Ambient subtle glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between mb-8">
        <div className="flex items-center gap-2.5">
          <Quote className="w-5 h-5 text-amber-400" />
          <span className="text-[11px] font-semibold tracking-widest text-[#A1A1A8] uppercase">
            How I think
          </span>
          <span className="text-xs font-mono font-medium text-stone-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10 ml-2">
            0{currentIndex + 1} / 0{total}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevQuote}
            aria-label="Previous quote"
            className="p-2 rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextQuote}
            aria-label="Next quote"
            className="p-2 rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quote Display */}
      <div className="min-h-[120px] sm:min-h-[140px] flex items-center justify-center py-2">
        <p
          key={currentIndex}
          className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-white/95 text-center leading-relaxed transition-opacity duration-500 max-w-3xl"
        >
          "{quotes[currentIndex]}"
        </p>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {quotes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to quote ${idx + 1}`}
            aria-current={currentIndex === idx ? 'true' : 'false'}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === idx
                ? 'w-6 h-2 bg-white'
                : 'w-2 h-2 bg-[#48484A] hover:bg-[#86868B]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
