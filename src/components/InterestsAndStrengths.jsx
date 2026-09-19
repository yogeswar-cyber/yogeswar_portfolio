import React from 'react';
import { areasOfInterest, strengths } from '../data/portfolio';
import { ShieldAlert, BrainCircuit, Layout, Zap, CheckCircle2, Award } from 'lucide-react';

const interestIcons = {
  ShieldAlert,
  BrainCircuit,
  Layout,
  Zap
};

export default function InterestsAndStrengths() {
  return (
    <section className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Areas of Interest */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>09 // Focus Vectors</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-8">
            Areas of <span className="text-[#FF5E0E]">Interest</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {areasOfInterest.map((item) => {
              const Icon = interestIcons[item.icon] || Layout;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 group interactive-element"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] mb-4 group-hover:bg-[#FF5E0E] group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#FF5E0E] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths from Resume & Modern Engineering */}
        <div>
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>10 // Core Competencies</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-8">
            Verified <span className="text-[#FF5E0E]">Strengths</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((str, idx) => (
              <div
                key={str.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#FF5E0E]/30 transition-all duration-300"
              >
                <div className="font-mono text-xs text-[#FF7A29] font-bold mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>STRENGTH // 0{idx + 1}</span>
                </div>
                <h3 className="font-display font-semibold text-sm sm:text-base text-white mb-2">
                  {str.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {str.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
