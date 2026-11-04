import React from 'react';
import { footer } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0C0C0E] border-t border-[#E8E8ED] dark:border-[#27272A] py-12 px-6 transition-colors">
      <div className="max-w-[1100px] mx-auto text-center space-y-3">
        {/* Styled like the disclaimer under an AI chat box */}
        <p className="text-xs text-[#86868B] dark:text-[#A1A1A8] font-normal tracking-wide">
          {footer.line1}
        </p>
        <p className="text-xs text-[#86868B]/80 dark:text-[#A1A1A8]/70 font-normal">
          {footer.line2}
        </p>
      </div>
    </footer>
  );
};
