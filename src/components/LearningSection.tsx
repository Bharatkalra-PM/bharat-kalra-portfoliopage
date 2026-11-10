import React from 'react';
import { ExternalLink, Eye, Award, GraduationCap } from 'lucide-react';
import { learning, education } from '../data/content';

interface LearningSectionProps {
  onOpenLightbox: (src: string, alt: string) => void;
}

export const LearningSection: React.FC<LearningSectionProps> = ({ onOpenLightbox }) => {
  return (
    <div>
      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {learning.map((item) => (
          <div
            key={item.title}
            className="group bg-white dark:bg-[#18181C] rounded-[24px] border border-[#E2E2E8] dark:border-[#2C2C32] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#86868B] dark:text-[#A1A1A8] mb-3 font-medium">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#25252A] text-slate-800 dark:text-[#E4E4EB] font-semibold text-[11px]">
                  <Award className="w-3.5 h-3.5 text-[#1D1D1F] dark:text-white" />
                  {item.issuer}
                </span>
                <span className="font-mono text-xs text-stone-500 dark:text-stone-400 font-semibold">{item.period}</span>
              </div>

              <h4 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mb-3">
                {item.title}
              </h4>

              {item.takeaway && (
                <p className="text-sm text-[#55555A] dark:text-[#A8A8B2] leading-relaxed mb-4">
                  {item.takeaway}
                </p>
              )}

              {item.covers && (
                <p className="text-sm text-[#55555A] dark:text-[#A8A8B2] leading-relaxed mb-4">
                  <strong className="text-[#1D1D1F] dark:text-white font-semibold">Covers: </strong>
                  {item.covers}
                </p>
              )}
            </div>

            {/* Actions: Image certificate preview & verify link */}
            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-[#2C2C32] flex items-center justify-between gap-3 flex-wrap">
              {item.image ? (
                <button
                  type="button"
                  onClick={() => onOpenLightbox(item.image!, `${item.title} Certificate - ${item.issuer}`)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D1D1F] dark:text-white hover:text-black dark:hover:text-neutral-200 py-1.5 px-3 rounded-lg bg-[#F5F5F8] dark:bg-[#222226] hover:bg-[#EAEAEF] dark:hover:bg-[#2C2C32] border border-[#E2E2E8] dark:border-[#33333A] transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#1D1D1F] dark:text-white" />
                  <span>View certificate (Lightbox)</span>
                </button>
              ) : (
                <span />
              )}

              {item.verifyUrl && (
                <a
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] dark:text-white hover:underline transition-colors"
                >
                  <span>
                    {item.title.toLowerCase().includes('yoga') || item.title.toLowerCase().includes('sthapna')
                      ? 'Course page'
                      : 'Verify credential'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#86868B] dark:text-[#A1A1A8]" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="bg-white dark:bg-[#18181C] rounded-[26px] border border-[#E2E2E8] dark:border-[#2C2C32] p-6 sm:p-8 shadow-xs transition-colors">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          <h4 className="text-base font-semibold text-[#1D1D1F] dark:text-white">
            Education
          </h4>
        </div>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm py-2 border-b border-slate-100 dark:border-[#26262B] last:border-0"
            >
              <div className="text-[#1D1D1F] dark:text-white font-semibold">
                {edu.degree} <span className="text-[#86868B] dark:text-[#A1A1A8] font-normal">· {edu.institution}</span>
              </div>
              <span className="text-xs font-mono font-medium text-[#86868B] dark:text-[#8E8E93] shrink-0 mt-0.5 sm:mt-0">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
