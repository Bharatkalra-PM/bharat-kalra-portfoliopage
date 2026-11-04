import React, { useEffect, useRef, useState } from 'react';
import { velocity } from '../data/content';

export const VelocityStrip: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const maxWeeks = 3;

  return (
    <div
      ref={containerRef}
      className="bg-[#1D1D1F] text-white rounded-[24px] p-6 sm:p-8 md:p-10 my-8 shadow-sm border border-[#2D2D30]"
    >
      <div className="max-w-3xl mb-8">
        <span className="text-[11px] font-semibold tracking-widest text-[#86868B] uppercase block mb-2">
          Velocity
        </span>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white leading-snug">
          {velocity.heading}
        </h3>
      </div>

      <div className="space-y-6">
        {velocity.items.map((item, index) => {
          const widthPercent = (item.weeks / maxWeeks) * 100;

          const barGradients = [
            'from-amber-400 via-amber-300 to-yellow-200',
            'from-[#E08A68] via-[#D97757] to-[#F2DDD0]',
            'from-emerald-400 via-teal-300 to-emerald-200',
            'from-blue-400 via-indigo-300 to-sky-200',
          ];

          return (
            <div key={item.project} className="group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm mb-2 gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{item.project}</span>
                  <span className="text-xs text-stone-500">·</span>
                  <span className="text-xs text-stone-300">{item.scope}</span>
                </div>
                <span className="text-xs font-mono font-bold tabular-nums text-white shrink-0 bg-stone-800 px-2 py-0.5 rounded border border-stone-700">
                  {item.time}
                </span>
              </div>

              {/* Progress bar container */}
              <div className="h-3.5 w-full bg-[#2C2C2E] rounded-full overflow-hidden p-0.5 shadow-inner">
                <div
                  className={`h-full bg-gradient-to-r ${barGradients[index % barGradients.length]} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                  style={{
                    width: animated ? `${widthPercent}%` : '0%',
                    transitionDelay: `${index * 150}ms`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
