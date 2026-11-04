import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface MetricBoxProps {
  value: string;
  label: string;
  className?: string;
  size?: 'default' | 'compact' | 'large';
  dark?: boolean;
}

export const MetricBox: React.FC<MetricBoxProps> = ({
  value,
  label,
  className = '',
  size = 'default',
  dark = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState<string>(value);
  const boxRef = useRef<HTMLDivElement>(null);

  // Check if string contains an arrow
  const isTransition = value.includes('→');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAnimatedValue(value);
      return;
    }

    // If it's a simple single number, e.g. "4", "8", "50", count up
    // Or if it's like "8+" or "2x" or "73%"
    const match = value.match(/^([^\d]*)(\d+(\.\d+)?)([^\d]*)$/);
    if (match) {
      const prefix = match[1];
      const targetNum = parseFloat(match[2]);
      const suffix = match[4];
      const isDecimal = match[2].includes('.');
      const decimals = isDecimal ? match[2].split('.')[1].length : 0;

      const duration = 1200; // ms
      const startTime = performance.now();

      const updateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = targetNum * easeProgress;

        setAnimatedValue(`${prefix}${current.toFixed(decimals)}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setAnimatedValue(value);
        }
      };

      requestAnimationFrame(updateCount);
    } else {
      setAnimatedValue(value);
    }
  }, [isVisible, value]);

  // Size styling
  const numSizeClass =
    size === 'large'
      ? 'text-3xl sm:text-4xl'
      : size === 'compact'
      ? 'text-lg sm:text-xl'
      : 'text-2xl sm:text-3xl';

  const labelSizeClass =
    size === 'compact'
      ? 'text-xs text-[#86868B] dark:text-[#8E8E93]'
      : 'text-xs sm:text-[13px] text-[#6E6E73] dark:text-[#A1A1A8]';

  return (
    <div
      ref={boxRef}
      className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
        dark
          ? 'bg-[#242426] border border-[#3A3A3D] text-white hover:border-[#555]'
          : 'bg-gradient-to-br from-white to-[#F8F8FB] dark:from-[#18181C] dark:to-[#141416] border border-[#E2E2E8] dark:border-[#2C2C32] text-[#1D1D1F] dark:text-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D0D0D8] dark:hover:border-[#44444C]'
      } ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        {isTransition ? (
          <div className="flex items-center gap-1.5 flex-wrap">
            {value.split('→').map((part, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#86868B] dark:text-[#A1A1A8]`} />
                )}
                <span className={`font-bold tracking-tight text-[#1D1D1F] dark:text-white ${numSizeClass}`}>
                  {part.trim()}
                </span>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <span className={`font-bold tracking-tight text-[#1D1D1F] dark:text-white tabular-nums ${numSizeClass}`}>
            {animatedValue}
          </span>
        )}
      </div>
      <div className={`leading-snug font-normal ${labelSizeClass}`}>
        {label}
      </div>
    </div>
  );
};
