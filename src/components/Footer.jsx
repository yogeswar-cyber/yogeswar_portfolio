import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#040507] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] font-mono font-bold text-xs">
            YS
          </div>
          <div>
            <div className="font-display font-bold text-white text-sm">
              {personalInfo.name}
            </div>
            <div className="font-mono text-[10px] text-gray-500">
              B.E. CSE (Cyber Security) • Velammal College of Engg & Tech
            </div>
          </div>
        </div>

        <div className="font-mono text-[11px] text-gray-400 text-center">
          Designed with precision & engineered on authentic academic credentials.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#FF5E0E] text-gray-400 hover:text-black font-mono text-xs transition-all interactive-element"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
