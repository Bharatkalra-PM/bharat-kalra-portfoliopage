import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, GitCompare, ShieldCheck, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../data/content';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {

  // Render creative designed covers for case studies without static thumbnail
  const renderCreativeCover = () => {
    if (caseStudy.slug === 'claude') {
      return (
        <div className="relative w-full min-h-[250px] sm:h-64 p-4 sm:p-6 bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#0C0A09] text-white flex flex-col justify-between overflow-hidden border-b border-stone-800">
          {/* Ambient warm terracotta glow */}
          <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#D97757]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-[#D97757]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-stone-300">
                Claude Artifacts · Diff
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-stone-800/90 text-stone-300 border border-stone-700">
              Prototype
            </span>
          </div>

          {/* Interactive UI Mockup Graphic */}
          <div className="relative z-10 my-2 p-2.5 sm:p-3 rounded-xl bg-stone-900/90 border border-stone-700/80 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] pb-1.5 border-b border-stone-800 text-stone-400">
              <span className="flex items-center gap-1.5 font-medium text-stone-300">
                <GitCompare className="w-3.5 h-3.5 text-[#D97757]" />
                Version 2 of 2 · 2 sections
              </span>
              <span className="text-[9px] bg-[#D97757]/20 text-[#D97757] px-1.5 py-0.5 rounded font-mono font-semibold">
                COMPARE ON
              </span>
            </div>
            <div className="mt-1.5 space-y-1 font-mono text-[10px] sm:text-[11px]">
              <div className="flex items-center gap-1.5 text-red-400/90 line-through bg-red-950/30 px-2 py-1 rounded">
                <span className="text-red-500 font-bold select-none">-</span>
                <span className="truncate">Pursuant to our review of available vendor options...</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/35 px-2 py-1 rounded font-medium">
                <span className="text-emerald-400 font-bold select-none">+</span>
                <span className="truncate">After digging into your needs, here is our pick...</span>
              </div>
            </div>
          </div>

          {/* Key Stat Footnote - strictly on the same line */}
          <div className="relative z-10 pt-2 border-t border-stone-800/80 flex items-center gap-2 flex-nowrap text-xs">
            <span className="font-mono font-bold text-white whitespace-nowrap text-sm sm:text-base shrink-0">
              18 of 26
            </span>
            <span className="text-[11px] sm:text-xs text-stone-400 truncate">
              users re-prompt instead of partially accepting
            </span>
          </div>
        </div>
      );
    }

    if (caseStudy.slug === 'amazon') {
      return (
        <div className="relative w-full min-h-[250px] sm:h-64 p-4 sm:p-6 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0A0F1D] text-white flex flex-col justify-between overflow-hidden border-b border-slate-800">
          {/* Ambient Amazon electric amber glow */}
          <div className="absolute -top-16 -right-16 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-200">
                Amazon · Trust Decision Engine
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800/90 text-amber-300 border border-amber-500/30">
              2 Prototypes
            </span>
          </div>

          {/* Trust Signal Graphic Card */}
          <div className="relative z-10 my-2 p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white">Highly Trusted Seller</span>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                94 / 100
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-sans text-slate-300 pt-1 border-t border-slate-800">
              <div className="flex items-center gap-1">
                <span className="text-amber-400 font-semibold">96%</span> resolved issues
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 font-semibold">92%</span> kept 90+ days
              </div>
            </div>
          </div>

          {/* Key Stat Footnote - strictly on the same line */}
          <div className="relative z-10 pt-2 border-t border-slate-800 flex items-center gap-2 flex-nowrap text-xs">
            <span className="font-mono font-bold text-amber-400 whitespace-nowrap text-sm sm:text-base shrink-0">
              90%
            </span>
            <span className="text-[11px] sm:text-xs text-slate-300 truncate">
              stuck at trust stage abandoned or switched
            </span>
          </div>
        </div>
      );
    }

    // Default fallback designed cover
    return (
      <div className="w-full h-64 p-7 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white flex flex-col justify-between border-b border-slate-800">
        <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
          {caseStudy.meta.split('·')[0].trim()}
        </span>
        <h4 className="text-2xl font-semibold tracking-tight text-white">
          {caseStudy.title}
        </h4>
        <span className="text-xs text-slate-400">
          Product Case Study
        </span>
      </div>
    );
  };

  return (
    <div
      className="group bg-white dark:bg-[#161619] rounded-[26px] border border-[#E2E2E8] dark:border-[#27272A] shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
    >
      <div>
        {/* Cover image or designed cover */}
        <Link to={`/work/${caseStudy.slug}`} className="block relative overflow-hidden bg-slate-950">
          {caseStudy.thumbnail ? (
            <div className="relative w-full overflow-hidden aspect-[16/9] sm:aspect-auto sm:h-64 bg-[#0d1616] flex items-center justify-center">
              {/* Product image in full color without cropping any text */}
              <img
                src={caseStudy.thumbnail}
                alt={caseStudy.title}
                className="w-full h-full object-contain sm:object-cover sm:object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Status Pill on thumbnail - hidden on mobile to avoid overlapping slide copy, visible on sm+ */}
              <div className="hidden sm:flex absolute bottom-3 left-4 right-4 z-10 items-center justify-between text-white text-xs">
                <span className="font-medium bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {caseStudy.tags[0]} · {caseStudy.tags[1]}
                </span>
                <span className="font-semibold text-white/90 bg-black/70 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                  {caseStudy.meta.split('·')[1]?.trim() || '2026'}
                </span>
              </div>
            </div>
          ) : (
            renderCreativeCover()
          )}
        </Link>

        {/* Card Body */}
        <div className="p-6 sm:p-8">
          {/* Metadata & Tag row */}
          <div className="flex items-center gap-2 text-xs text-[#86868B] dark:text-[#A1A1A8] mb-2.5 flex-wrap font-medium">
            <span>{caseStudy.meta}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-[26px] font-semibold tracking-tight text-[#1D1D1F] dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
            <Link to={`/work/${caseStudy.slug}`} className="hover:underline">
              {caseStudy.title}
            </Link>
          </h3>

          {/* Hook */}
          <p className="text-[#55555A] dark:text-[#A8A8B2] text-[15px] sm:text-[16px] leading-relaxed mb-6">
            {caseStudy.hook}
          </p>

          {/* Metric Chips with subtle color accents */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            {caseStudy.chips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-flex items-center text-xs font-medium text-[#1D1D1F] dark:text-[#E4E4EB] bg-[#F5F5F8] dark:bg-[#202024] border border-[#E4E4EB] dark:border-[#2C2C32] px-3.5 py-1.5 rounded-xl shadow-xs"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 text-xs text-[#86868B] dark:text-[#8E8E93] flex-wrap pt-1 border-t border-slate-100 dark:border-[#242428]">
            {caseStudy.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                {idx > 0 && <span aria-hidden="true">·</span>}
                <span className="font-medium">{tag}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-3 border-t border-[#F2F2F5] dark:border-[#222226] bg-[#FAFAFC]/50 dark:bg-[#141417]/80">
        <Link
          to={`/work/${caseStudy.slug}`}
          className="inline-flex items-center justify-between w-full text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 py-1.5 transition-all"
        >
          <span className="flex items-center gap-1.5">
            <span>Read full case study</span>
          </span>
          <div className="w-8 h-8 rounded-full bg-[#EAEAEF] dark:bg-[#25252A] group-hover:bg-[#1D1D1F] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Link>
      </div>
    </div>
  );
};
