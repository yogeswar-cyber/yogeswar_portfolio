import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import DepthPortrait3D from './DepthPortrait3D';
import CyberSphere3D from './CyberSphere3D';

/* ==========================================================
   CONTINUOUS GLITCH CSS ANIMATIONS
========================================================== */
const GLITCH_CSS = `
  @keyframes continuousGlitch1 {
    0% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    6% {
      clip-path: polygon(0 18%, 100% 18%, 100% 34%, 0 34%);
      transform: translate(-4px, -1px);
      opacity: 0.95;
    }
    10% {
      clip-path: polygon(0 44%, 100% 44%, 100% 56%, 0 56%);
      transform: translate(4px, 1px);
      opacity: 0.9;
    }
    14% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    38% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    42% {
      clip-path: polygon(0 66%, 100% 66%, 100% 84%, 0 84%);
      transform: translate(-5px, 0px);
      opacity: 0.95;
    }
    46% {
      clip-path: polygon(0 10%, 100% 10%, 100% 25%, 0 25%);
      transform: translate(3px, -1px);
      opacity: 0.85;
    }
    50% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    72% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    76% {
      clip-path: polygon(0 32%, 100% 32%, 100% 46%, 0 46%);
      transform: translate(-4px, 1px);
      opacity: 0.9;
    }
    80% {
      clip-path: polygon(0 76%, 100% 76%, 100% 90%, 0 90%);
      transform: translate(4px, -1px);
      opacity: 0.85;
    }
    84% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    100% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
  }

  @keyframes continuousGlitch2 {
    0% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    18% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    22% {
      clip-path: polygon(0 52%, 100% 52%, 100% 70%, 0 70%);
      transform: translate(5px, 1px);
      opacity: 0.92;
    }
    26% {
      clip-path: polygon(0 14%, 100% 14%, 100% 28%, 0 28%);
      transform: translate(-4px, -1px);
      opacity: 0.85;
    }
    30% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    54% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    58% {
      clip-path: polygon(0 26%, 100% 26%, 100% 42%, 0 42%);
      transform: translate(5px, -1px);
      opacity: 0.9;
    }
    62% {
      clip-path: polygon(0 78%, 100% 78%, 100% 94%, 0 94%);
      transform: translate(-4px, 1px);
      opacity: 0.85;
    }
    66% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    90% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    93% {
      clip-path: polygon(0 38%, 100% 38%, 100% 54%, 0 54%);
      transform: translate(-5px, 0);
      opacity: 0.9;
    }
    97% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    100% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
  }

  @keyframes continuousScanLine {
    0% {
      top: 15%;
      opacity: 0;
      transform: scaleX(0.3);
    }
    15% {
      opacity: 0.9;
      transform: scaleX(1.05);
    }
    30% {
      top: 85%;
      opacity: 0;
      transform: scaleX(0.5);
    }
    100% {
      top: 85%;
      opacity: 0;
    }
  }

  @keyframes microJitter {
    0%, 100% { transform: translate(0, 0); }
    12% { transform: translate(-1px, 0.5px); }
    14% { transform: translate(1.5px, -0.5px); }
    16% { transform: translate(0, 0); }
    58% { transform: translate(1px, -1px); }
    60% { transform: translate(-1px, 0.5px); }
    62% { transform: translate(0, 0); }
    86% { transform: translate(1px, 0.5px); }
    88% { transform: translate(0, 0); }
  }
`;

/* ==========================================================
   HERO COMPONENT — CONTINUOUS GLITCH & REFERENCE 06
========================================================== */
export default function Hero() {
  const FULL_NAME = 'Yogeswar S';

  // Animation states
  const [initStage, setInitStage] = useState('init'); // 'init' -> 'typing' -> 'ready'
  const [typedText, setTypedText] = useState('');
  const [revealed, setRevealed] = useState(false);

  /* --------------------------------------------------------
     1. INITIALIZATION & TYPING SEQUENCE
  -------------------------------------------------------- */
  useEffect(() => {
    // Stage 1: Initializing tag shows for 500ms
    const initTimer = setTimeout(() => {
      setInitStage('typing');
    }, 500);

    return () => clearTimeout(initTimer);
  }, []);

  // Stage 2: Character-by-character typing
  useEffect(() => {
    if (initStage !== 'typing') return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= FULL_NAME.length) {
        setTypedText(FULL_NAME.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setInitStage('ready');
        setRevealed(true);
      }
    }, 85); // 85ms per character

    return () => clearInterval(typingInterval);
  }, [initStage]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <style>{GLITCH_CSS}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ================================================
              LEFT HERO CONTENT (Cols 7 on desktop)
          ================================================ */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">

            {/* 1. INITIALIZATION TERMINAL TAG */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-black/60 border border-[#FF5E0E]/40 font-mono text-xs text-[#FF7A29] mb-5 shadow-[0_0_15px_rgba(255,94,14,0.15)] select-none">
              <span className="text-[#FF5E0E] font-bold">&gt;</span>
              <span className="tracking-widest font-semibold">INITIALIZING...</span>
              <span className="w-1.5 h-3 bg-[#FF5E0E] animate-pulse ml-0.5 inline-block" />
            </div>

            {/* 2. TYPING & CONTINUOUS GLITCH NAME (Yogeswar S) */}
            <div className="relative select-none mb-4 cursor-pointer group">
              <h1
                className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.08] relative inline-block"
                style={{
                  animation: revealed ? 'microJitter 2.8s infinite ease-in-out' : 'none',
                }}
              >
                {/* Base Typed string */}
                <span className="relative z-10">{typedText || ' '}</span>

                {/* Thin orange blinking cursor */}
                <span className="inline-block w-[3px] sm:w-[4px] h-[0.82em] bg-[#FF5E0E] ml-1.5 sm:ml-2 align-middle animate-[pulse_1s_infinite] shadow-[0_0_8px_#FF5E0E] relative z-10" />

                {/* --- CONTINUOUS GLITCH OVERLAY LAYERS --- */}
                {revealed && (
                  <>
                    {/* Layer 1: Orange chromatic horizontal slices (Continuous) */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 text-[#FF5E0E] select-none pointer-events-none"
                      style={{
                        zIndex: 12,
                        filter: 'drop-shadow(0 0 7px #FF5E0E)',
                        animation: 'continuousGlitch1 2.4s infinite linear',
                      }}
                    >
                      {typedText}
                    </span>

                    {/* Layer 2: White/Amber chromatic horizontal slices (Continuous) */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 text-[#FFAE5E] select-none pointer-events-none"
                      style={{
                        zIndex: 13,
                        filter: 'drop-shadow(0 0 6px #FFAE5E)',
                        animation: 'continuousGlitch2 3.1s infinite linear',
                      }}
                    >
                      {typedText}
                    </span>

                    {/* Continuous Digital Scanline Slice */}
                    <div
                      className="absolute left-[-12px] right-[-12px] h-[1.5px] bg-[#FF5E0E] pointer-events-none shadow-[0_0_10px_#FF5E0E]"
                      style={{
                        zIndex: 14,
                        animation: 'continuousScanLine 3.6s infinite ease-in-out',
                      }}
                    />
                  </>
                )}
              </h1>
            </div>

            {/* 3. SUBTITLE (Sequential Reveal) */}
            <div
              className={`transition-all duration-700 delay-100 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-200 mb-3 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="text-white font-semibold">Cyber Security</span>
                <span className="text-[#FF5E0E]">•</span>
                <span className="text-gray-200">Website Designing & Building</span>
                <span className="text-[#FF5E0E]">•</span>
                <span className="text-gray-300 font-medium">Vibe Coding & Problem Solving</span>
                <span className="text-[#FF5E0E] font-mono font-bold animate-pulse">_</span>
              </h2>
            </div>

            {/* 4. TAGLINE & DESCRIPTION (Sequential Reveal) */}
            <div
              className={`transition-all duration-700 delay-200 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="font-mono text-xs text-gray-400 tracking-wide mb-2 flex items-center gap-2">
                <span className="text-gray-300 font-medium">Student</span>
                <span className="text-[#FF5E0E]/60">|</span>
                <span className="text-gray-300 font-medium">Developer</span>
                <span className="text-[#FF5E0E]/60">|</span>
                <span className="text-gray-300 font-medium">Problem Solver</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mb-8 font-light">
                Building secure & creative digital experiences. Motivated Computer Science & Engineering (Cyber Security) student with a passion for designing and building modern web experiences through rapid vibe coding and rigorous problem-solving foundations.
              </p>
            </div>

            {/* 5. CALL TO ACTION BUTTONS (Sequential Reveal) */}
            <div
              className={`flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto transition-all duration-700 delay-300 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {/* View Projects Button — Matching Reference 06 */}
              <a
                href="#project"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#FF5E0E] text-black font-semibold text-sm transition-all duration-300 hover:bg-[#FF7A29] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,94,14,0.45)] interactive-element w-full sm:w-auto justify-center"
              >
                <span>View Projects</span>
                <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </a>

              {/* Download Resume Button — Dark/Outlined */}
              <a
                href={personalInfo.resumePdf}
                download="Yogeswar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF5E0E]/50 text-white font-semibold text-sm transition-all duration-200 group interactive-element w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-[#FF5E0E] group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-gray-300 hover:text-white text-sm font-medium transition-colors interactive-element w-full sm:w-auto group"
              >
                <Mail className="w-4 h-4 text-[#FF5E0E] group-hover:scale-110 transition-transform" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* 6. STATISTICS CARD (Sequential Reveal) */}
            <div
              className={`grid grid-cols-3 gap-4 p-4 rounded-2xl bg-black/40 border border-white/[0.08] backdrop-blur-md w-full max-w-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-700 delay-400 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white">
                  74%
                </div>
                <div className="font-mono text-[11px] text-gray-400">
                  Diploma 1st Class
                </div>
              </div>
              <div className="border-l border-white/[0.08] pl-4">
                <div className="font-display font-bold text-xl sm:text-2xl text-[#FF7A29]">
                  100%
                </div>
                <div className="font-mono text-[11px] text-gray-400">
                  Internship Attendance
                </div>
              </div>
              <div className="border-l border-white/[0.08] pl-4">
                <div className="font-display font-bold text-xl sm:text-2xl text-white">
                  8+
                </div>
                <div className="font-mono text-[11px] text-gray-400">
                  Verified Certs & Skills
                </div>
              </div>
            </div>

          </div>

          {/* ================================================
              RIGHT HERO VISUALS (Cols 5 on desktop):
              Depth Portrait 3D with Continuous Glitch & Lines
          ================================================ */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Subtle ambient Three.js sphere in distant background */}
            <div className="absolute -top-14 inset-x-0 flex items-center justify-center opacity-30 pointer-events-none">
              <CyberSphere3D />
            </div>

            {/* 3D Depth Portrait with Continuous Glitch */}
            <div className="relative z-20 w-full flex justify-center">
              <DepthPortrait3D
                photoUrl="/assets/new_pic.png"
                isContinuousGlitch={true}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
