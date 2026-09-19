import React from 'react';
import { internshipExperience } from '../data/portfolio';
import { Building2, Calendar, MapPin, CheckCircle2, Award, ExternalLink } from 'lucide-react';

export default function Experience({ onOpenCert }) {
  return (
    <section id="experience" className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>05 // Industry Experience</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Internship <span className="text-[#FF5E0E]">Timeline</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            Practical exposure and hands-on industry training in cyber security fundamentals and applied machine learning.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="p-6 sm:p-10 rounded-2xl glass-panel border border-white/10 hover:border-[#FF5E0E]/40 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5E0E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Details (7 Cols) */}
            <div className="lg:col-span-7">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#FF5E0E]/15 border border-[#FF5E0E]/30 text-[#FF9436] font-mono text-xs font-semibold">
                  INTERNSHIP
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  100% Attendance Maintained
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                {internshipExperience.role}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300 mb-6">
                <div className="flex items-center gap-1.5 text-[#FF7A29]">
                  <Building2 className="w-4 h-4" />
                  <span>{internshipExperience.company}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{internshipExperience.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{internshipExperience.location}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {internshipExperience.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E0E] mt-2 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="font-mono text-xs text-gray-400 truncate max-w-sm">
                  {internshipExperience.verification}
                </div>
              </div>
            </div>

            {/* Certificate Preview Card (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div
                onClick={() => onOpenCert && onOpenCert('elysium-internship')}
                className="group cursor-pointer relative rounded-xl overflow-hidden border border-white/15 bg-black/60 p-2 hover:border-[#FF5E0E] transition-all duration-300 shadow-xl interactive-element"
              >
                <img
                  src={internshipExperience.certificateImage}
                  alt="Elysium Technologies Internship Certificate"
                  className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-bold backdrop-blur-xs">
                  <Award className="w-4 h-4 text-[#FF5E0E]" />
                  <span>Click to Expand Certificate</span>
                </div>
              </div>
              <span className="font-mono text-[11px] text-gray-400 mt-3 text-center">
                Visual Evidence: Official Elysium Technologies Certificate (Ref: EGC: ETPL: 2025-2026)
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
