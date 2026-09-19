import React from 'react';
import { MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function CinematicPortrait({ photoUrl = '/assets/profile_cinematic.png' }) {
  return (
    <div className="relative flex flex-col items-center select-none group">
      
      {/* 1. Cinematic Ambient Backlight Glow (Warm Amber / Studio Rim Light) */}
      <div 
        className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] bg-gradient-to-tr from-[#FF5E0E]/20 via-[#FF7A29]/10 to-transparent blur-2xl pointer-events-none opacity-80"
        aria-hidden="true"
      />

      {/* 2. Outer Luxury Editorial Bezel */}
      <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-white/[0.02] border border-white/[0.10] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,94,14,0.12)] backdrop-blur-xl">
        
        {/* 3. Inner Portrait Frame */}
        <div className="relative w-[280px] sm:w-[330px] md:w-[350px] aspect-[4/5] rounded-[1.25rem] overflow-hidden bg-[#07090E]">
          
          {/* Authentic Portrait Image */}
          <img
            src={photoUrl}
            alt="Yogeswar S - B.E. CSE (Cyber Security) Student"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="eager"
          />

          {/* Cinematic Vignette & Bottom Dissolve */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-[#060709]/20 to-transparent opacity-90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060709]/30 via-transparent to-[#060709]/30 pointer-events-none" />

          {/* Top Status Pill (Clean & Minimalist) */}
          <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-gray-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>CSE (Cyber Security)</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#FF9436]">
              <MapPin className="w-3 h-3 text-[#FF5E0E]" />
              <span>Madurai</span>
            </div>
          </div>

          {/* Bottom Editorial Accreditation Plate */}
          <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-display font-bold text-base text-white flex items-center gap-1.5 tracking-wide">
                  <span>Yogeswar S</span>
                  <ShieldCheck className="w-4 h-4 text-[#FF5E0E]" />
                </div>
                <div className="font-mono text-[11px] text-[#FF9436] font-medium mt-0.5">
                  Web Designer • Cyber Security • Problem Solver
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Subtle Under-Card Subtle Caption */}
      <div className="mt-3.5 flex items-center gap-2 text-gray-400 font-mono text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E0E]" />
        <span>Velammal College of Engineering & Technology</span>
      </div>

    </div>
  );
}
