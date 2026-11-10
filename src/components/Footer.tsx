import React from 'react';
import { footer } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0C0C0E] border-t border-[#E8E8ED] dark:border-[#27272A] py-8 px-6 transition-colors">
      <div className="max-w-[1100px] mx-auto text-center space-y-2">
        <p className="text-[11px] text-[#86868B] dark:text-[#71717A] font-normal tracking-normal">
          {footer.line1}
        </p>
        <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A8] font-normal">
          {footer.line2}
        </p>
      </div>
    </footer>
  );
};
