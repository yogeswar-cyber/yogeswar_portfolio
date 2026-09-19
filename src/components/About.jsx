import React from 'react';
import { Shield, Layout, Zap, Cpu, Terminal, ArrowUpRight, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const keyFocusAreas = [
  { label: 'Website Designing & Building', icon: Layout, desc: 'Responsive, aesthetic, modern web interfaces & layouts' },
  { label: 'Vibe Coding & Prototyping', icon: Zap, desc: 'Fast AI-assisted development with engineering discipline' },
  { label: 'Problem Solving & Logic', icon: Code2, desc: 'Algorithmic thinking, data structures & clean debugging' },
  { label: 'Cyber Security & Malware', icon: Shield, desc: 'Threat intelligence, malware summarization & defense' },
  { label: 'Applied AI & ML', icon: Cpu, desc: 'Smart log parsing, heuristic analysis & data modeling' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>01 // About Me</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            From Foundations to <span className="text-[#FF5E0E]">Cyber Security & Web Craft</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            A continuous trajectory rooted in engineering fundamentals, driven by a passion for modern website design, rapid vibe coding, and resilient defensive systems.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative card (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5E0E]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 font-mono text-xs text-gray-400 mb-6 pb-4 border-b border-white/[0.06]">
              <Terminal className="w-4 h-4 text-[#FF5E0E]" />
              <span>DEVELOPER_PROFILE_OBJECTIVE.md</span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              <p>
                My journey into technology began with my <strong className="text-white font-semibold">Diploma in Computer Engineering</strong> (74% First Class with Distinction), where I developed a robust foundational mastery of programming, web design, relational databases, hardware interfacing, and computer networks.
              </p>
              <p>
                Today, as a <strong className="text-white font-semibold">B.E. CSE (Cyber Security)</strong> student at Velammal College of Engineering & Technology, I combine security engineering with my deep interest in <strong className="text-[#FF7A29] font-medium">website designing and building</strong>.
              </p>
              <p>
                I actively embrace modern <strong className="text-white font-semibold">"vibe coding"</strong>—leveraging AI-accelerated workflows for lightning-fast prototyping—while keeping every solution anchored in deep <strong className="text-white font-semibold">problem-solving knowledge</strong>, core computer science logic, and clean code principles.
              </p>
              <p>
                From authoring the <strong className="text-[#FF9436] font-medium">Intelligent Malware Report Summarizer</strong> to hardware IoT telemetry, I bring disciplined consistency—maintaining 100% attendance during my Elysium Technologies internship—to drive every initiative from concept to completion.
              </p>
            </div>

            {/* Quick badges */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2.5">
              {[
                'Website Designing', 
                'Vibe Coding', 
                'Problem Solving', 
                'Cyber Security', 
                'Malware Summarizer', 
                'Python & C', 
                'Modern UI/UX', 
                'Networks & Linux'
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Core Focus Areas Grid (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {keyFocusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.label}
                  className="p-4 rounded-xl glass-panel glass-panel-hover flex items-start gap-4 group interactive-element"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-white group-hover:text-[#FF5E0E] transition-colors flex items-center gap-1">
                      <span>{area.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="font-mono text-xs text-gray-400 mt-0.5">
                      {area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
