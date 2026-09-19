import React, { useState, useRef, useEffect } from 'react';
import { Shield, Scan, Sparkles, CheckCircle2, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractivePhoto({ photoUrl = '/assets/profile.png' }) {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isScanning, setIsScanning] = useState(false);
  const [scanStatus, setScanStatus] = useState('READY'); // READY, SCANNING, VERIFIED
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt & parallax handler
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Normalizing between -15 and 15 degrees
    const tiltX = (y - 0.5) * -18;
    const tiltY = (x - 0.5) * 18;

    setTilt({ x: tiltX, y: tiltY });
    setMousePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 50, y: 50 });
  };

  // Section 4A: Click / Tap Trigger Cyber Scan Animation
  const triggerScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanStatus('SCANNING');

    // After 1.8 seconds scan completes
    setTimeout(() => {
      setScanStatus('VERIFIED');

      // Subtle orange spark celebration
      try {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.6 },
          colors: ['#FF5E0E', '#FF9436', '#FFFFFF'],
          disableForReducedMotion: true
        });
      } catch (err) {
        // Safe fallback
      }

      setTimeout(() => {
        setIsScanning(false);
        setScanStatus('READY');
      }, 2500);
    }, 1800);
  };

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* 3D Tilt Wrapper */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={triggerScan}
        className="relative group cursor-pointer interactive-element perspective-1000"
        style={{ perspective: '1000px' }}
      >
        {/* Layer 6: Subtle Floating Particles / Corner HUD Accents */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#FF5E0E] z-30 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
        <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#FF5E0E] z-30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#FF5E0E] z-30 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#FF5E0E] z-30 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

        {/* Layer 4 & 5: Concentric Cyber HUD ring (Appears and spins when scanning or hovered) */}
        <div
          className={`absolute -inset-4 sm:-inset-6 rounded-3xl border border-[#FF5E0E]/30 pointer-events-none transition-all duration-700 ${
            isScanning
              ? 'scale-105 border-[#FF5E0E] animate-spin-slow opacity-100 shadow-[0_0_30px_rgba(255,94,14,0.4)]'
              : isHovered
              ? 'opacity-60 scale-100'
              : 'opacity-20 scale-95'
          }`}
          style={{
            borderStyle: isScanning ? 'dashed' : 'solid',
          }}
        />

        {/* Main 3D Card Body */}
        <div
          className="relative w-[270px] sm:w-[320px] md:w-[340px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0D14] border border-white/10 shadow-2xl transition-all duration-300 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
              isScanning ? 1.04 : isHovered ? 1.02 : 1
            }) translateZ(${isScanning ? '25px' : '0px'})`,
            transformStyle: 'preserve-3d',
            boxShadow: isScanning
              ? '0 25px 60px -15px rgba(255, 94, 14, 0.45), 0 0 30px rgba(255, 94, 14, 0.3)'
              : isHovered
              ? '0 20px 50px -10px rgba(255, 94, 14, 0.25)'
              : '0 15px 35px -10px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Layer 1: The Authentic Yogeswar S Portrait (100% genuine, natural) */}
          <img
            src={photoUrl}
            alt="Yogeswar S - B.E. CSE (Cyber Security) Student"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out"
            style={{
              transform: `scale(1.04) translate(${tilt.y * 0.3}px, ${-tilt.x * 0.3}px)`,
            }}
          />

          {/* Layer 2: Glass depth frame & gradient shade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-transparent opacity-80" />

          {/* Layer 3: Dynamic Cursor-following Soft Orange Glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 200px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 94, 14, 0.28), transparent 70%)`,
              opacity: isHovered || isScanning ? 1 : 0,
            }}
          />

          {/* SECTION 4A: Laser Cyber Scan Line */}
          {isScanning && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF5E0E] to-transparent shadow-[0_0_15px_#FF5E0E] animate-scanline z-30" />
          )}

          {/* Cyber Coordinates HUD overlay */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] text-gray-300">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                scanStatus === 'VERIFIED'
                  ? 'bg-emerald-400'
                  : scanStatus === 'SCANNING'
                  ? 'bg-[#FF5E0E] animate-ping'
                  : 'bg-emerald-400'
              }`}
            />
            <span>{scanStatus === 'SCANNING' ? 'SCANNING...' : scanStatus === 'VERIFIED' ? 'IDENTITY VERIFIED' : 'SEC_ID: YS-2026'}</span>
          </div>

          <div className="absolute top-3 right-3 z-20 font-mono text-[10px] text-[#FF9436] px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
            SYS: ACTIVE
          </div>

          {/* Bottom Card Identity Info */}
          <div className="absolute bottom-3 inset-x-3 z-20 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
            <div>
              <div className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                <span>Yogeswar S</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E0E]" />
              </div>
              <div className="font-mono text-[10px] text-gray-400">
                Velammal CSE (Cyber Security)
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-[#FF7A29] bg-[#FF5E0E]/15 px-2 py-1 rounded border border-[#FF5E0E]/30">
              <Scan className="w-3 h-3 animate-pulse" />
              <span>{isScanning ? 'Scanning' : 'Tap to Scan'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Helper text below photo */}
      <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-gray-400 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/[0.06]">
        <Sparkles className="w-3.5 h-3.5 text-[#FF5E0E]" />
        <span>Click or tap photo to trigger interactive Cyber Scan</span>
      </div>
    </div>
  );
}
