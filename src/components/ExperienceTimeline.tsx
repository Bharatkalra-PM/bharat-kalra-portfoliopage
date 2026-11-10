import React from 'react';
import { experience, skills } from '../data/content';
import { MetricBox } from './MetricBox';

export const ExperienceTimeline: React.FC = () => {
  return (
    <div>
      {/* Roles Timeline Container - Vertical line ONLY runs along roles */}
      <div className="relative">
        {/* Vertical timeline line - stops cleanly before Skills */}
        <div className="absolute left-3.5 sm:left-4 top-4 bottom-4 w-px bg-[#E8E8ED] dark:bg-[#27272A]" aria-hidden="true" />

        <div className="space-y-10 sm:space-y-12">
          {experience.map((role, idx) => {
            const isCompact = role.isCompact;

            return (
              <div key={`${role.company}-${idx}`} className="relative pl-10 sm:pl-12">
                {/* Timeline marker node */}
                <div
                  className={`absolute left-2 sm:left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-[#111114] ${
                    idx === 0 ? 'bg-[#1D1D1F] dark:bg-white ring-4 ring-[#E8E8ED] dark:ring-[#2E2E34]' : 'bg-[#86868B] dark:bg-[#55555C]'
                  }`}
                  aria-hidden="true"
                />

                {/* Role Card */}
                <div
                  className={`rounded-[22px] border transition-all duration-300 ${
                    isCompact
                      ? 'p-5 bg-[#FAFAFA] dark:bg-[#141417] border-[#E8E8ED]/80 dark:border-[#26262B] text-[#6E6E73] dark:text-[#A1A1A8]'
                      : 'p-6 sm:p-8 bg-white dark:bg-[#18181C] border-[#E8E8ED] dark:border-[#2C2C32] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 gap-1">
                    <div>
                      <h4
                        className={`font-semibold tracking-tight text-[#1D1D1F] dark:text-white ${
                          isCompact ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
                        }`}
                      >
                        {role.title}
                      </h4>
                      <span className="text-sm font-medium text-[#6E6E73] dark:text-[#A1A1A8]">
                        {role.company}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#86868B] dark:text-[#8E8E93] tabular-nums shrink-0">
                      {role.period}
                    </span>
                  </div>

                  {/* Metric Board - Upfront 2-col on mobile, single clean line on desktop */}
                  {role.metrics && role.metrics.length > 0 && (
                    <div className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-flow-col md:auto-cols-fr gap-2 sm:gap-2.5">
                      {role.metrics.map((m, mIdx) => (
                        <MetricBox
                          key={mIdx}
                          value={m.value}
                          label={m.label}
                          size="compact"
                          className="bg-[#F5F5F7] dark:bg-[#202024]"
                        />
                      ))}
                    </div>
                  )}

                  {/* Bullets */}
                  <ul className="space-y-2 mt-3">
                    {role.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className={`text-sm leading-relaxed flex items-start gap-2 ${
                          isCompact ? 'text-[#86868B] dark:text-[#8E8E93]' : 'text-[#6E6E73] dark:text-[#C4C4CC]'
                        }`}
                      >
                        <span className="text-[#86868B] dark:text-[#666] select-none mt-1.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Award note if present */}
                  {role.award && (
                    <div className="mt-4 pt-3 border-t border-[#F5F5F7] dark:border-[#26262B] text-xs font-medium text-[#1D1D1F] dark:text-white">
                      Award: {role.award}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills cloud & Also section */}
      <div className="mt-14 pt-10 border-t border-[#E8E8ED] dark:border-[#27272A]">
        <h3 className="text-xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white mb-6">
          Skills
        </h3>

        <div className="space-y-4">
          {/* AI Skills */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white min-w-16">AI:</span>
            <div className="flex flex-wrap gap-1.5">
              {skills.ai.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-[#1D1D1F] dark:text-[#E4E4EB] bg-[#F5F5F7] dark:bg-[#222226] border border-[#E8E8ED] dark:border-[#2E2E34] px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Product Skills */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white min-w-16">Product:</span>
            <div className="flex flex-wrap gap-1.5">
              {skills.product.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-[#1D1D1F] dark:text-[#E4E4EB] bg-[#F5F5F7] dark:bg-[#222226] border border-[#E8E8ED] dark:border-[#2E2E34] px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Skills */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white min-w-16">Tech:</span>
            <div className="flex flex-wrap gap-1.5">
              {skills.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-[#1D1D1F] dark:text-[#E4E4EB] bg-[#F5F5F7] dark:bg-[#222226] border border-[#E8E8ED] dark:border-[#2E2E34] px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Also: Business acumen note */}
        <div className="mt-6 p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#18181C] border border-[#E8E8ED] dark:border-[#2C2C32] text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A8] leading-relaxed">
          <strong className="text-[#1D1D1F] dark:text-white font-semibold">Also: </strong>
          {skills.also}
        </div>
      </div>
    </div>
  );
};
