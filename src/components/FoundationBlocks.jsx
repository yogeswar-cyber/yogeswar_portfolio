import React, { useState } from 'react';
import { Code2, Globe, Database, Shield, Terminal, Cloud, HardDrive, Check } from 'lucide-react';
import { foundationAreas } from '../data/portfolio';

const iconMap = {
  Code2,
  Globe,
  Database,
  Shield,
  Terminal,
  Cloud,
  HardDrive
};

export default function FoundationBlocks() {
  const [activeArea, setActiveArea] = useState(null);

  return (
    <section id="foundation" className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>03 // Core Architecture</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            My Technical <span className="text-[#FF5E0E]">Foundation</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            The comprehensive technical competencies established during my Diploma in Computer Engineering that empower my cybersecurity focus.
          </p>
        </div>

        {/* Foundation Architecture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {foundationAreas.map((area) => {
            const Icon = iconMap[area.icon] || Code2;
            const isHovered = activeArea === area.id;

            return (
              <div
                key={area.id}
                onMouseEnter={() => setActiveArea(area.id)}
                onMouseLeave={() => setActiveArea(null)}
                className="p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 relative group interactive-element flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] group-hover:bg-[#FF5E0E] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 group-hover:text-[#FF7A29] transition-colors">
                      FOUNDATION
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#FF5E0E] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6 font-light">
                    {area.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-gray-300 group-hover:border-[#FF5E0E]/30 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
