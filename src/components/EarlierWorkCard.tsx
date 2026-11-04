import React from 'react';
import { ExternalLink, BarChart3, Trophy, Flame, Sparkles } from 'lucide-react';
import { EarlierWorkItem } from '../data/content';

interface EarlierWorkCardProps {
  item: EarlierWorkItem;
}

export const EarlierWorkCard: React.FC<EarlierWorkCardProps> = ({ item }) => {
  // Render creative visual covers for earlier case studies
  const renderVisualCover = () => {
    if (item.thumbnail) {
      return (
        <div className="relative w-full h-48 bg-slate-900 overflow-hidden group/img">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-2.5 left-3">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
              {item.period}
            </span>
          </div>
        </div>
      );
    }

    if (item.title.includes('JioSaavn')) {
      return (
        <div className="relative w-full h-48 p-4 bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22] text-white flex flex-col justify-between overflow-hidden border-b border-emerald-900">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-300" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-200">
                JioSaavn Intellect
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 font-medium">
              B2B AdTech
            </span>
          </div>

          <div className="relative z-10 my-1 bg-black/40 backdrop-blur-md p-2.5 rounded-lg border border-emerald-500/20">
            <div className="flex justify-between text-[10px] text-emerald-200 mb-1">
              <span>Campaign ROI Dashboard</span>
              <span className="font-mono text-emerald-400 font-bold">Live CTR 2%</span>
            </div>
            <div className="w-full bg-emerald-950 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-300 h-full w-[75%]" />
            </div>
            <div className="flex justify-between text-[9px] text-emerald-300/80 mt-1">
              <span>30M+ Expected Impr.</span>
              <span>Custom reports</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] text-emerald-100 font-medium pt-1">
            <span>2022 Case Study</span>
            <span className="font-mono text-emerald-300">Figma Prototype</span>
          </div>
        </div>
      );
    }

    if (item.title.includes('Duolingo')) {
      return (
        <div className="relative w-full h-48 p-3.5 bg-gradient-to-b from-[#58CC02] via-[#46A302] to-[#2E7A00] text-white flex flex-col justify-between overflow-hidden border-b border-[#2E7A00]">
          {/* Subtle playful ambient glow */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/15 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-6 w-28 h-28 bg-[#FFF94F]/20 rounded-full blur-lg pointer-events-none" />

          {/* Duolingo App Mobile Bar */}
          <div className="relative z-10 flex items-center justify-between bg-black/35 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
            <div className="flex items-center gap-1.5">
              {/* Cute Duo Owl Badge */}
              <div className="w-5 h-5 rounded-full bg-[#58CC02] border border-white/60 flex items-center justify-center shadow-xs">
                <span className="text-[11px] leading-none select-none">🦉</span>
              </div>
              <span className="text-[11px] font-black tracking-tight text-white uppercase">
                Squad Pod
              </span>
            </div>
            {/* Gamified counters: Streak and Gems */}
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
              <span className="flex items-center gap-0.5 text-amber-300">
                <Flame className="w-3 h-3 fill-amber-400 text-amber-400" /> 14d
              </span>
              <span className="flex items-center gap-0.5 text-cyan-200">
                💎 350
              </span>
            </div>
          </div>

          {/* Center: Small-Group Gang Learning Pod UI */}
          <div className="relative z-10 my-0.5 bg-white/95 text-slate-900 rounded-xl p-2.5 shadow-lg border border-white">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1">
                <Trophy className="w-3 h-3 text-amber-500 fill-amber-400" />
                Spanish A2 Pod
              </span>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 bg-green-100 text-green-800 rounded font-mono">
                3/4 Active
              </span>
            </div>

            {/* Squad Member Avatars and Activity */}
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <div className="flex items-center -space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  BK
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  ES
                </div>
                <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  MK
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#58CC02]">
                +620 XP today
              </span>
            </div>

            {/* Shared Reward Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden p-0.5">
              <div className="bg-[#58CC02] h-full rounded-full w-[82%]" />
            </div>
            <div className="flex items-center justify-between text-[8px] text-slate-500 font-medium mt-1">
              <span>8,200 / 10,000 XP</span>
              <span className="text-amber-600 font-bold">Unlock Chest 🎁</span>
            </div>
          </div>

          {/* Footer of cover */}
          <div className="relative z-10 flex items-center justify-between text-[10px] text-green-100 font-medium px-0.5">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FFF94F]" /> Peer accountability feature
            </span>
            <span className="font-mono text-white/90 font-semibold bg-black/20 px-1.5 py-0.5 rounded text-[9px]">
              2022 Deck
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-black p-5 flex flex-col justify-between text-white border-b border-slate-800">
        <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
          {item.period}
        </span>
        <h4 className="text-lg font-semibold tracking-tight text-white">
          {item.title}
        </h4>
        <span className="text-xs text-slate-400">Earlier Case Study</span>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-[#161619] rounded-[24px] border border-[#E2E2E8] dark:border-[#27272A] shadow-[0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div>
        {renderVisualCover()}

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-semibold text-[#86868B] dark:text-[#A1A1A8] uppercase tracking-wider">
              {item.period}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#F5F5F7] dark:bg-[#222226] text-[#6E6E73] dark:text-[#A1A1A8] font-medium border border-[#E8E8ED] dark:border-[#2E2E33]">
              Case Study
            </span>
          </div>

          <h4 className="text-lg font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-2.5 leading-snug">
            {item.title}
          </h4>

          <p className="text-sm text-[#55555A] dark:text-neutral-300 leading-relaxed mb-3">
            {item.oneLine}
          </p>

          {item.detailLine && (
            <p className="text-xs text-[#86868B] dark:text-neutral-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-neutral-800">
              {item.detailLine}
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="p-5 sm:p-6 pt-0 mt-auto flex flex-wrap gap-2">
        {item.buttons.map((btn) => (
          <a
            key={btn.label}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] dark:text-white bg-[#F5F5F8] dark:bg-[#202024] hover:bg-[#EAEAEF] dark:hover:bg-[#28282D] border border-[#E2E2E8] dark:border-[#333338] px-3 py-1.5 rounded-lg transition-colors"
          >
            <span>{btn.label}</span>
            <ExternalLink className="w-3 h-3 text-[#86868B] dark:text-neutral-400" />
          </a>
        ))}
      </div>
    </div>
  );
};
