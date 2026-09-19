import React, { useState } from 'react';
import { Layers, ShieldCheck, Cpu, Rocket, ChevronRight, CheckCircle2 } from 'lucide-react';
import { journeyStages } from '../data/portfolio';

const icons = {
  Layers,
  ShieldCheck,
  Cpu,
  Rocket
};

export default function JourneyPathway() {
  const [selectedStage, setSelectedStage] = useState(journeyStages[0].id);

  const activeData = journeyStages.find((s) => s.id === selectedStage) || journeyStages[0];

  return (
    <section id="journey" className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>02 // The Trajectory</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Where My <span className="text-[#FF5E0E]">Journey Started</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            My Diploma in Computer Engineering is the foundational bedrock that led toward advanced Cyber Security specialization.
          </p>
        </div>

        {/* 4-Stage Interactive Futuristic Pathway */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {journeyStages.map((stage) => {
            const Icon = icons[stage.icon] || Layers;
            const isSelected = stage.id === selectedStage;

            return (
              <div
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden interactive-element ${
                  isSelected
                    ? 'bg-[#101420] border-2 border-[#FF5E0E] shadow-[0_0_30px_rgba(255,94,14,0.25)] -translate-y-1'
                    : 'glass-panel hover:border-white/20'
                }`}
              >
                {/* Stage number */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                    isSelected ? 'bg-[#FF5E0E] text-black' : 'bg-white/5 text-gray-400'
                  }`}>
                    STAGE {stage.id}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'text-[#FF5E0E] bg-[#FF5E0E]/20' : 'text-gray-400 bg-white/5'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className={`font-display font-bold text-base mb-1 ${
                  isSelected ? 'text-white' : 'text-gray-200'
                }`}>
                  {stage.title}
                </h3>
                <p className="font-mono text-xs text-gray-400 mb-2 truncate">
                  {stage.subtitle}
                </p>
                <div className="text-[11px] text-[#FF9436] font-mono">
                  {stage.period}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Details Card */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-[#FF5E0E]/30 relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5E0E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF7A29]">
                <span>STAGE {activeData.id}</span>
                <span>•</span>
                <span>{activeData.institution}</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                {activeData.subtitle}
              </h3>

              <div className="inline-block px-3 py-1 rounded-md bg-[#FF5E0E]/15 border border-[#FF5E0E]/30 text-[#FF9436] font-mono text-xs font-semibold mb-4">
                {activeData.grade}
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mb-6">
                {activeData.description}
              </p>

              <div>
                <div className="text-xs font-mono uppercase text-gray-400 mb-2">
                  Key Competencies Acquired:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeData.keySkills.map((sk) => (
                    <span
                      key={sk}
                      className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E0E]" />
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-black/50 border border-white/[0.08] font-mono text-xs text-gray-300 space-y-3">
              <div className="text-[#FF5E0E] font-bold pb-2 border-b border-white/10">
                PATHWAY PROGRESSION
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5E0E]">01</span>
                  <span>Diploma Foundations (74%)</span>
                </div>
                <div className="text-gray-500 pl-4">↓ Technical Bedrock</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5E0E]">02</span>
                  <span>B.E. CSE Cyber Security</span>
                </div>
                <div className="text-gray-500 pl-4">↓ Practical Defense</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5E0E]">03</span>
                  <span>Applied ML & Weather IoT Project</span>
                </div>
                <div className="text-gray-500 pl-4">↓ Enterprise Readiness</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5E0E]">04</span>
                  <span>Future Security Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
