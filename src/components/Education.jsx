import React from 'react';
import { educationList } from '../data/portfolio';
import { GraduationCap, Calendar, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>08 // Academic Trajectory</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Education <span className="text-[#FF5E0E]">Timeline</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            A clear evolution from secondary school to comprehensive computer engineering diploma, leading to bachelor's specialization in cybersecurity.
          </p>
        </div>

        {/* Timeline nodes */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-[#FF5E0E] before:via-white/10 before:to-transparent">
          {educationList.map((item, idx) => {
            const isSpecialization = item.type === 'specialization';
            const isFoundation = item.type === 'foundation';

            return (
              <div
                key={item.degree}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                } gap-6 sm:gap-12 group`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0D14] border-2 border-[#FF5E0E] flex items-center justify-center text-[#FF5E0E] z-10 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(255,94,14,0.4)]">
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-3rem)] pl-16 sm:pl-0">
                  <div className={`p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 border ${
                    isSpecialization
                      ? 'border-[#FF5E0E]/40 shadow-[0_0_25px_rgba(255,94,14,0.15)]'
                      : isFoundation
                      ? 'border-white/15'
                      : 'border-white/[0.06]'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                        isSpecialization
                          ? 'bg-[#FF5E0E] text-black'
                          : isFoundation
                          ? 'bg-[#FF5E0E]/20 text-[#FF9436]'
                          : 'bg-white/10 text-gray-400'
                      }`}>
                        {isSpecialization ? 'SPECIALIZATION' : isFoundation ? 'CORE FOUNDATION' : 'SECONDARY'}
                      </span>
                      <span className="font-mono text-xs text-gray-400">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                      {item.degree}
                    </h3>

                    <div className="font-mono text-xs text-[#FF7A29] mb-3">
                      {item.institution}
                    </div>

                    <div className="inline-block px-2.5 py-1 rounded bg-black/40 border border-white/10 text-xs font-mono font-semibold text-emerald-400 mb-3">
                      {item.status}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
