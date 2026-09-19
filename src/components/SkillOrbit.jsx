import React, { useState } from 'react';
import { skillsOrbit } from '../data/portfolio';
import { Sparkles, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';

export default function SkillOrbit() {
  const [selectedOrbit, setSelectedOrbit] = useState(skillsOrbit[0].id);

  const activeCategory = skillsOrbit.find((s) => s.id === selectedOrbit) || skillsOrbit[0];

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>04 // Technical Competencies</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Technology <span className="text-[#FF5E0E]">Orbit</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            An interactive multi-dimensional constellation of skills rooted in my computer engineering foundation.
          </p>
        </div>

        {/* Orbit Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Category Grid & Center Node (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Center Core Node */}
            <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-[#FF5E0E]/20 via-[#FF7A29]/10 to-transparent border border-[#FF5E0E]/40 flex items-center gap-3 w-full max-w-md shadow-[0_0_30px_rgba(255,94,14,0.15)]">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E0E] text-black font-mono font-bold flex items-center justify-center shrink-0">
                YS
              </div>
              <div>
                <div className="font-mono text-xs text-[#FF7A29] font-bold">ORBITAL SYSTEM CORE</div>
                <div className="font-display font-bold text-white text-base">Yogeswar S • CSE (Cyber Security)</div>
              </div>
            </div>

            {/* Orbit Category Selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {skillsOrbit.map((cat) => {
                const isActive = cat.id === selectedOrbit;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedOrbit(cat.id)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden interactive-element ${
                      isActive
                        ? 'bg-[#121622] border-2 border-[#FF5E0E] shadow-[0_0_20px_rgba(255,94,14,0.3)] -translate-y-1'
                        : 'glass-panel hover:border-white/20'
                    }`}
                  >
                    <div className="font-mono text-[10px] text-gray-400 uppercase mb-1">
                      {cat.category}
                    </div>
                    <div className={`font-display font-bold text-sm ${isActive ? 'text-[#FF7A29]' : 'text-white'}`}>
                      {cat.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Expanded Category Skill Details (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl glass-panel border border-[#FF5E0E]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF5E0E]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="font-mono text-[11px] text-[#FF9436] uppercase tracking-wider">ACTIVE ORBIT</span>
                <h3 className="font-display font-bold text-2xl text-white">{activeCategory.name}</h3>
              </div>
              <span className="font-mono text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded">
                {activeCategory.skills.length} Core Skills
              </span>
            </div>

            <div className="space-y-3">
              {activeCategory.skills.map((skill, index) => (
                <div
                  key={skill}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between group hover:border-[#FF5E0E]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] font-mono text-xs">
                      0{index + 1}
                    </div>
                    <span className="font-mono text-sm text-white font-medium">{skill}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#FF5E0E] opacity-75" />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 font-mono text-[11px] text-gray-400">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5E0E]" />
              <span>Competencies verified via Academic Resume & Practical Lab Coursework</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
