import React, { useRef } from 'react';
import { music } from '../data/content';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface MusicSectionProps {
  onOpenLightbox: (src: string, alt: string) => void;
}

export const MusicSection: React.FC<MusicSectionProps> = ({ onOpenLightbox }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-[#18181C] rounded-[24px] border border-[#E8E8ED] dark:border-[#2C2C32] p-6 sm:p-8 md:p-10 mb-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors">
      <div className="max-w-2xl mb-8">
        <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-2">
          Music
        </span>
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white mb-4">
          {music.heading}
        </h3>
        <p className="text-base text-[#6E6E73] dark:text-[#A8A8B2] leading-relaxed mb-6">
          {music.text}
        </p>
      </div>

      {/* Gallery Header Controls */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-[#86868B] dark:text-[#A1A1A8]">
          Photos ({music.gallery.length}) · Click to enlarge
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous photos"
            className="p-2 rounded-full border border-[#E8E8ED] dark:border-[#2C2C32] bg-white dark:bg-[#202024] hover:bg-[#F5F5F7] dark:hover:bg-[#28282D] text-[#1D1D1F] dark:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next photos"
            className="p-2 rounded-full border border-[#E8E8ED] dark:border-[#2C2C32] bg-white dark:bg-[#202024] hover:bg-[#F5F5F7] dark:hover:bg-[#28282D] text-[#1D1D1F] dark:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Snap Gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory focus:outline-none"
        tabIndex={0}
        aria-label="Music photo gallery"
      >
        {music.gallery.map((photo, index) => (
          <div
            key={index}
            onClick={() => onOpenLightbox(photo.src, photo.alt)}
            className="group relative flex-none w-64 sm:w-72 md:w-80 h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#F5F5F7] dark:bg-[#202024] border border-[#E8E8ED] dark:border-[#2C2C32] cursor-pointer snap-start transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-2.5 rounded-full bg-white/90 text-[#1D1D1F] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
