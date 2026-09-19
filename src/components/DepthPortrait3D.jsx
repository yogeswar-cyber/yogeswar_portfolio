import React, { useEffect, useRef, useState } from 'react';

/* ==========================================================
   PARTICLE DISSOLVE COORDINATES (Right-side disintegrating)
========================================================== */
const DISSOLVE_PARTICLES = [
  // Upper dissolve
  [58, 47, 1.5, 8, -4],
  [61, 49, 2, 15, -8],
  [64, 51, 1, 20, -3],
  [67, 52, 2, 27, -10],
  [70, 54, 1.5, 35, -5],
  [73, 56, 2, 43, -12],
  [77, 58, 1, 51, -7],
  [81, 60, 2, 61, -11],
  [85, 62, 1.5, 70, -6],
  // Main shoulder dissolve
  [59, 56, 2, 7, 3],
  [62, 58, 1, 14, 7],
  [65, 60, 2, 22, 2],
  [68, 62, 1.5, 30, 8],
  [71, 64, 2, 38, 4],
  [74, 66, 1, 47, 10],
  [78, 68, 2, 56, 5],
  [82, 70, 1.5, 65, 11],
  [86, 72, 2, 75, 7],
  // Lower dissolve
  [58, 67, 1, 5, 13],
  [61, 70, 2, 12, 17],
  [64, 73, 1.5, 19, 21],
  [67, 76, 2, 27, 18],
  [70, 79, 1, 36, 24],
  [73, 82, 2, 45, 21],
  [77, 85, 1.5, 55, 27],
  [81, 88, 2, 67, 24],
  [86, 90, 1, 78, 29],
  // High flying particles
  [66, 43, 1, 18, -15],
  [70, 45, 2, 27, -19],
  [74, 47, 1.5, 37, -23],
  [78, 49, 2, 48, -18],
  [83, 52, 1, 59, -22],
  [88, 55, 2, 72, -16],
  // Inner dissolve
  [60, 62, 1, 6, 9],
  [63, 65, 1.5, 14, 13],
  [66, 68, 1, 22, 16],
  [69, 71, 2, 31, 19],
  [72, 74, 1, 40, 22],
  [76, 78, 1.5, 49, 25],
  [80, 82, 2, 60, 22],
  // Extra edge particles
  [62, 55, 1, 11, -2],
  [66, 57, 1.5, 20, -6],
  [70, 59, 1, 29, -2],
  [74, 62, 2, 39, -7],
  [78, 65, 1, 49, -3],
  [82, 68, 1.5, 59, -8],
];

/* ==========================================================
   IRREGULAR FRAGMENTS
========================================================== */
const FRAGMENTS = [
  { x: 61, y: 52, s: 5, r: -20, dx: 12, dy: -5 },
  { x: 65, y: 56, s: 4, r: 25, dx: 19, dy: -8 },
  { x: 69, y: 60, s: 6, r: -15, dx: 27, dy: -3 },
  { x: 73, y: 64, s: 4, r: 30, dx: 35, dy: -10 },
  { x: 77, y: 68, s: 5, r: -35, dx: 43, dy: -5 },
  { x: 67, y: 71, s: 4, r: 18, dx: 25, dy: 10 },
  { x: 72, y: 76, s: 6, r: -25, dx: 36, dy: 13 },
  { x: 78, y: 81, s: 4, r: 40, dx: 49, dy: 16 },
  { x: 82, y: 74, s: 5, r: -10, dx: 55, dy: 8 },
];

/* ==========================================================
   OUTER FLOATING PARTICLES
========================================================== */
const FLOATING_PARTICLES = [
  [7, 19, 2], [13, 31, 1], [8, 55, 2], [15, 76, 1.5], [10, 88, 1],
  [23, 10, 1.5], [42, 7, 1], [57, 10, 1.5], [74, 8, 1],
  [90, 20, 2], [96, 34, 1], [93, 51, 1.5], [96, 73, 2], [88, 88, 1],
  [69, 95, 1.5], [44, 95, 1], [20, 92, 2],
];

/* ==========================================================
   HORIZONTAL SIGNAL LINES (From Reference 06)
========================================================== */
const SIGNAL_LINES = [
  // Top right bright laser beam
  { top: '22%', left: '48%', width: '48%', height: '2px', color: '#FF5E0E', glow: '0 0 14px #FF5E0E, 0 0 24px rgba(255,94,14,0.6)', anim: 'hLineFlicker 3.2s ease-in-out infinite', opacity: 0.9 },
  // Neck/ear level thin scanline extending left
  { top: '34%', left: '-8%', width: '58%', height: '1.5px', color: '#FF7A29', glow: '0 0 10px #FF7A29', anim: 'hLineDrift 4.5s ease-in-out infinite', opacity: 0.8 },
  // Mid shoulder sharp line extending wide to right
  { top: '48%', left: '38%', width: '68%', height: '2px', color: '#FF5E0E', glow: '0 0 12px #FF5E0E', anim: 'hLinePulse 2.8s ease-in-out infinite', opacity: 0.85 },
  // Center broken laser segment
  { top: '56%', left: '-12%', width: '38%', height: '1px', color: '#FFAE5E', glow: '0 0 8px #FFAE5E', anim: 'hLineFlicker 4s ease-in-out 0.6s infinite', opacity: 0.7 },
  // Lower blazer horizontal data beam
  { top: '72%', left: '25%', width: '60%', height: '1.5px', color: '#FF5E0E', glow: '0 0 10px rgba(255,94,14,0.7)', anim: 'hLineDrift 5s ease-in-out 1.2s infinite', opacity: 0.75 },
  // Bottom horizontal baseline
  { top: '84%', left: '-5%', width: '70%', height: '1px', color: '#FF7A29', glow: '0 0 6px #FF7A29', anim: 'hLinePulse 3.6s ease-in-out 0.4s infinite', opacity: 0.6 },
];

/* ==========================================================
   CSS ANIMATIONS
========================================================== */
const CSS = `
  @keyframes pdFloat {
    0%, 100% { transform: translate3d(0,0,0); opacity: .2; }
    50% { transform: translate3d(0,-8px,0); opacity: .85; }
  }

  @keyframes pdDissolve {
    0% {
      transform: translate3d(0,0,0) rotate(0deg) scale(.5);
      opacity: 0;
    }
    18% { opacity: .9; }
    50% {
      transform: translate3d(var(--dx),var(--dy),0) rotate(70deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate3d(calc(var(--dx) * 1.5),calc(var(--dy) * 1.35),0) rotate(180deg) scale(.08);
      opacity: 0;
    }
  }

  @keyframes pdFragment {
    0% {
      transform: translate3d(0,0,0) rotate(var(--rot)) scale(.45);
      opacity: 0;
    }
    20% { opacity: .9; }
    55% {
      transform: translate3d(var(--dx),var(--dy),0) rotate(calc(var(--rot) + 90deg)) scale(1);
      opacity: .95;
    }
    100% {
      transform: translate3d(calc(var(--dx) * 1.45),calc(var(--dy) * 1.35),0) rotate(calc(var(--rot) + 180deg)) scale(.08);
      opacity: 0;
    }
  }

  @keyframes pdDust {
    0%, 100% { transform: translate3d(0,0,0); opacity: .1; }
    50% { transform: translate3d(8px,-6px,0); opacity: .75; }
  }

  @keyframes pdOrbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes pdOrbitReverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  @keyframes pdGlow {
    0%, 100% { opacity: .25; transform: scale(.97); }
    50% { opacity: .5; transform: scale(1.03); }
  }

  @keyframes pdPulse {
    0% { transform: translate(-50%,-50%) scale(.4); opacity: .7; }
    100% { transform: translate(-50%,-50%) scale(1.9); opacity: 0; }
  }

  @keyframes pdScan {
    0% { transform: translateY(-120%); opacity: 0; }
    20% { opacity: .25; }
    80% { opacity: .08; }
    100% { transform: translateY(120%); opacity: 0; }
  }

  @keyframes hLineFlicker {
    0%, 100% { opacity: 0.85; transform: scaleX(1); }
    45% { opacity: 0.95; transform: scaleX(1.02); }
    48% { opacity: 0.4; }
    52% { opacity: 1; transform: scaleX(1.04); }
    85% { opacity: 0.75; transform: scaleX(0.98); }
  }

  @keyframes hLineDrift {
    0%, 100% { transform: translateX(0); opacity: 0.75; }
    50% { transform: translateX(10px); opacity: 0.95; }
  }

  @keyframes hLinePulse {
    0%, 100% { opacity: 0.6; filter: brightness(1); }
    50% { opacity: 0.95; filter: brightness(1.3); }
  }

  @keyframes continuousPortraitGlitch1 {
    0%, 100% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
    7% {
      clip-path: polygon(0 28%, 100% 28%, 100% 42%, 0 42%);
      transform: translate(-8px, 1px);
      opacity: 0.92;
      filter: brightness(1.25) drop-shadow(0 0 10px #FF5E0E);
    }
    12% {
      clip-path: polygon(0 54%, 100% 54%, 100% 68%, 0 68%);
      transform: translate(7px, -1px);
      opacity: 0.88;
      filter: brightness(1.2) drop-shadow(0 0 8px #FFAE5E);
    }
    16% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
    50% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
    54% {
      clip-path: polygon(0 38%, 100% 38%, 100% 48%, 0 48%);
      transform: translate(-6px, 1px);
      opacity: 0.9;
      filter: brightness(1.2) drop-shadow(0 0 8px #FF5E0E);
    }
    58% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
  }

  @keyframes continuousPortraitGlitch2 {
    0%, 100% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
    28% {
      opacity: 0;
    }
    32% {
      clip-path: polygon(0 62%, 100% 62%, 100% 76%, 0 76%);
      transform: translate(7px, -1px);
      opacity: 0.9;
      filter: brightness(1.2) drop-shadow(0 0 8px #FFAE5E);
    }
    36% {
      clip-path: polygon(0 16%, 100% 16%, 100% 26%, 0 26%);
      transform: translate(-5px, 1px);
      opacity: 0.82;
      filter: brightness(1.15) drop-shadow(0 0 6px #FF7A29);
    }
    40% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    84% {
      clip-path: polygon(0 70%, 100% 70%, 100% 82%, 0 82%);
      transform: translate(6px, 0);
      opacity: 0.85;
      filter: brightness(1.2) drop-shadow(0 0 8px #FFAE5E);
    }
    88% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pd-motion, .pd-motion * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

export default function DepthPortrait3D({
  photoUrl = '/assets/new_pic.png',
  isContinuousGlitch = true,
}) {
  const containerRef = useRef(null);
  const pointerLock = useRef(false);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [mobile, setMobile] = useState(false);

  // Responsive mobile check
  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Pointer movement for smooth 3D parallax
  const handlePointerMove = (e) => {
    if (mobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  const handleEnter = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
    setMouse({ x: 0, y: 0 });
  };

  const handlePointerDown = () => {
    if (pointerLock.current) return;
    pointerLock.current = true;
    setZoomed((prev) => !prev);
    setPulse(true);
    setTimeout(() => setPulse(false), 700);
    setTimeout(() => { pointerLock.current = false; }, 120);
  };

  // Parallax offsets
  const px = (depth) => (mobile ? 0 : mouse.x * depth * 12);
  const py = (depth) => (mobile ? 0 : mouse.y * depth * 9);
  const rotateY = mobile ? 0 : mouse.x * 3;
  const rotateX = mobile ? 0 : mouse.y * -2.2;
  const scale = zoomed ? 1.07 : hovered ? 1.025 : 1;

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{
        width: 'clamp(290px, 38vw, 440px)',
        aspectRatio: '1 / 1',
        perspective: '1200px',
        touchAction: 'manipulation',
      }}
      onPointerMove={handlePointerMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onPointerDown={handlePointerDown}
    >
      <style>{CSS}</style>

      {/* ====================================================
          BACK ATMOSPHERE & GLOW
      ==================================================== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate3d(${-px(0.2)}px, ${-py(0.2)}px, 0)`,
          transition: 'transform .6s cubic-bezier(.25,.46,.45,.94)',
        }}
      >
        {/* Main warm orange atmospheric glow behind Yogeswar's head */}
        <div
          className="absolute"
          style={{
            inset: '12%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,94,14,.22), rgba(255,94,14,.06) 48%, transparent 74%)',
            filter: 'blur(28px)',
            animation: 'pdGlow 5s ease-in-out infinite',
          }}
        />

        {/* Secondary soft orange core */}
        <div
          className="absolute"
          style={{
            inset: '28%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,122,41,.14), transparent 70%)',
            filter: 'blur(16px)',
          }}
        />

        {/* Subtle cyber grid backdrop */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.065,
            backgroundImage: `
              linear-gradient(rgba(255,94,14,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,94,14,.18) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(circle, black 12%, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(circle, black 12%, transparent 72%)',
          }}
        />

        {/* Outer orbital ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: '5%',
            border: '1px solid rgba(255,94,14,.22)',
            animation: 'pdOrbit 28s linear infinite',
          }}
        >
          <span
            className="absolute rounded-full"
            style={{
              width: 5,
              height: 5,
              top: '8%',
              left: '22%',
              background: '#FF5E0E',
              boxShadow: '0 0 14px rgba(255,94,14,.9)',
            }}
          />
        </div>

        {/* Inner reverse orbit */}
        <div
          className="absolute rounded-full"
          style={{
            inset: '14%',
            border: '1px dashed rgba(255,122,41,.15)',
            transform: 'rotate(48deg) scaleY(.6)',
            animation: 'pdOrbitReverse 24s linear infinite',
          }}
        />
      </div>

      {/* ====================================================
          HORIZONTAL DIGITAL SIGNAL LINES (From Reference 06)
      ==================================================== */}
      <div
        className="absolute inset-0 pointer-events-none overflow-visible"
        style={{
          transform: `translate3d(${px(0.35)}px, ${py(0.35)}px, 0)`,
          transition: 'transform .5s ease',
          zIndex: 7,
        }}
      >
        {SIGNAL_LINES.map((line, idx) => (
          <div
            key={`sig-line-${idx}`}
            style={{
              position: 'absolute',
              top: line.top,
              left: line.left,
              width: line.width,
              height: line.height,
              background: `linear-gradient(90deg, transparent, ${line.color} 20%, ${line.color} 80%, transparent)`,
              boxShadow: line.glow,
              opacity: line.opacity,
              animation: line.anim,
              transformOrigin: 'left center',
              zIndex: 7,
            }}
          >
            {/* Small glowing head dot on lines */}
            {idx % 2 === 0 && (
              <span
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translate(50%, -50%)',
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: '#FFAE5E',
                  boxShadow: '0 0 8px #FF5E0E',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ====================================================
          CYBER HUD FRAME & TECHNICAL MARKERS
      ==================================================== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate3d(${px(0.22)}px, ${py(0.22)}px, 0)`,
          transition: 'transform .55s ease',
          zIndex: 8,
        }}
      >
        {/* Top-left corner bracket */}
        <div
          className="absolute"
          style={{
            top: '10%',
            left: '8%',
            width: '60px',
            height: '38px',
            borderTop: '1px solid rgba(255,94,14,.48)',
            borderLeft: '1px solid rgba(255,94,14,.48)',
            borderTopLeftRadius: '4px',
          }}
        >
          <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '14px', height: '1px', background: 'rgba(255,94,14,.7)' }} />
        </div>

        {/* Top-right corner bracket */}
        <div
          className="absolute"
          style={{
            top: '10%',
            right: '8%',
            width: '60px',
            height: '38px',
            borderTop: '1px solid rgba(255,94,14,.48)',
            borderRight: '1px solid rgba(255,94,14,.48)',
            borderTopRightRadius: '4px',
          }}
        >
          <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '14px', height: '1px', background: 'rgba(255,94,14,.7)' }} />
        </div>

        {/* Bottom-left corner bracket */}
        <div
          className="absolute"
          style={{
            bottom: '9%',
            left: '8%',
            width: '48px',
            height: '32px',
            borderBottom: '1px solid rgba(255,94,14,.35)',
            borderLeft: '1px solid rgba(255,94,14,.35)',
            borderBottomLeftRadius: '4px',
          }}
        />

        {/* Bottom-right corner bracket */}
        <div
          className="absolute"
          style={{
            bottom: '9%',
            right: '8%',
            width: '48px',
            height: '32px',
            borderBottom: '1px solid rgba(255,94,14,.35)',
            borderRight: '1px solid rgba(255,94,14,.35)',
            borderBottomRightRadius: '4px',
          }}
        />

        {/* Frame micro-labels */}
        <span className="absolute font-mono text-[7px] tracking-[1.8px] text-[#FF7A29]/50" style={{ top: '7%', left: '9%' }}>
          CSE // 01
        </span>
        <span className="absolute font-mono text-[7px] tracking-[1.8px] text-[#FF7A29]/50" style={{ top: '7%', right: '9%' }}>
          CYBER // 02
        </span>
        <span className="absolute font-mono text-[7px] tracking-[1.6px] text-[#FF7A29]/40" style={{ bottom: '6%', left: '9%' }}>
          SYSTEM // ONLINE
        </span>
        <span className="absolute font-mono text-[7px] tracking-[1.6px] text-[#FF7A29]/40" style={{ bottom: '6%', right: '9%' }}>
          GLITCH // CONTINUOUS
        </span>
      </div>

      {/* ====================================================
          PORTRAIT LAYER (Real Image with 3D Depth & Continuous Glitch)
      ==================================================== */}
      <div
        className="absolute inset-0 flex items-end justify-center"
        style={{
          transform: mobile
            ? `scale(${scale})`
            : `
              perspective(900px)
              translate3d(${px(0.65)}px, ${py(0.65)}px, 25px)
              rotateY(${rotateY}deg)
              rotateX(${rotateX}deg)
              scale(${scale})
            `,
          transformStyle: 'preserve-3d',
          transition: 'transform .45s cubic-bezier(.25,.46,.45,.94)',
          zIndex: 10,
        }}
      >
        {/* Soft depth shadow behind portrait */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '74%',
            height: '70%',
            bottom: '6%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,94,14,.13), transparent 70%)',
            filter: 'blur(24px)',
          }}
        />

        {/* Ground shadow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '70%',
            height: '14%',
            bottom: '3%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,0,0,.82), transparent 70%)',
            filter: 'blur(16px)',
          }}
        />

        {/* Click pulse ring */}
        {pulse && (
          <div
            className="absolute pointer-events-none"
            style={{
              left: '50%',
              top: '52%',
              width: '32%',
              aspectRatio: '1',
              borderRadius: '50%',
              border: '1px solid rgba(255,94,14,.6)',
              boxShadow: '0 0 30px rgba(255,94,14,.3)',
              animation: 'pdPulse .7s ease-out forwards',
              zIndex: 3,
            }}
          />
        )}

        {/* Real Profile Image */}
        <div className="relative w-[96%] max-h-[92%] flex items-end justify-center">
          <img
            src={photoUrl || '/assets/new_pic.png'}
            alt="Yogeswar S"
            draggable={false}
            onError={(e) => {
              e.currentTarget.src = '/assets/new_pic.png';
            }}
            style={{
              position: 'relative',
              zIndex: 6,
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              WebkitMaskImage: `
                linear-gradient(
                  103deg,
                  #000 0%,
                  #000 52%,
                  rgba(0,0,0,.99) 56%,
                  rgba(0,0,0,.88) 62%,
                  rgba(0,0,0,.67) 69%,
                  rgba(0,0,0,.42) 76%,
                  rgba(0,0,0,.18) 84%,
                  rgba(0,0,0,.04) 90%,
                  transparent 96%
                )
              `,
              maskImage: `
                linear-gradient(
                  103deg,
                  #000 0%,
                  #000 52%,
                  rgba(0,0,0,.99) 56%,
                  rgba(0,0,0,.88) 62%,
                  rgba(0,0,0,.67) 69%,
                  rgba(0,0,0,.42) 76%,
                  rgba(0,0,0,.18) 84%,
                  rgba(0,0,0,.04) 90%,
                  transparent 96%
                )
              `,
              filter: `
                brightness(1.03)
                contrast(1.04)
                drop-shadow(0 28px 44px rgba(0,0,0,.78))
                drop-shadow(0 0 24px rgba(255,94,14,${hovered ? 0.22 : 0.1}))
              `,
              transition: 'filter .4s ease',
            }}
          />

          {/* Continuous Glitch Slice Layer 1 */}
          {isContinuousGlitch && (
            <img
              src={photoUrl || '/assets/new_pic.png'}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none select-none"
              style={{
                zIndex: 8,
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                animation: 'continuousPortraitGlitch1 2.8s infinite linear',
              }}
            />
          )}

          {/* Continuous Glitch Slice Layer 2 */}
          {isContinuousGlitch && (
            <img
              src={photoUrl || '/assets/new_pic.png'}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none select-none"
              style={{
                zIndex: 8,
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                animation: 'continuousPortraitGlitch2 3.6s infinite linear',
              }}
            />
          )}
        </div>
      </div>

      {/* ====================================================
          PARTICLE DISSOLVE LAYER (Right-side Disintegration)
      ==================================================== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate3d(${px(0.85)}px, ${py(0.85)}px, 45px)`,
          transition: 'transform .3s ease',
          zIndex: 24,
        }}
      >
        {DISSOLVE_PARTICLES.map(([x, y, size, dx, dy], index) => (
          <span
            key={`dissolve-${index}`}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: index % 5 === 0 ? '#FFAE5E' : index % 3 === 0 ? '#FF7A29' : '#FF5E0E',
              boxShadow: '0 0 10px rgba(255,94,14,.8)',
              '--dx': `${dx}px`,
              '--dy': `${dy}px`,
              animation: `pdDissolve ${2.2 + (index % 6) * 0.28}s ease-out ${(index % 13) * 0.11}s infinite`,
            }}
          />
        ))}

        {/* Irregular Fragments */}
        {FRAGMENTS.map((fragment, index) => (
          <span
            key={`fragment-${index}`}
            style={{
              position: 'absolute',
              left: `${fragment.x}%`,
              top: `${fragment.y}%`,
              width: `${fragment.s}px`,
              height: `${fragment.s * 0.7}px`,
              background: index % 2 === 0 ? 'rgba(255,122,41,.92)' : 'rgba(255,174,94,.85)',
              clipPath: index % 2 === 0
                ? 'polygon(0 20%, 80% 0, 100% 70%, 25% 100%)'
                : 'polygon(15% 0, 100% 35%, 75% 100%, 0 70%)',
              boxShadow: '0 0 9px rgba(255,94,14,.72)',
              '--dx': `${fragment.dx}px`,
              '--dy': `${fragment.dy}px`,
              '--rot': `${fragment.r}deg`,
              animation: `pdFragment ${2.7 + (index % 3) * 0.45}s ease-out ${index * 0.2}s infinite`,
            }}
          />
        ))}

        {/* Ambient Orange Dust Cloud */}
        {[...Array(44)].map((_, index) => {
          const x = 58 + ((index * 17) % 40);
          const y = 39 + ((index * 29) % 53);
          const size = index % 6 === 0 ? 2 : index % 3 === 0 ? 1.5 : 1;
          return (
            <span
              key={`dust-${index}`}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: index % 3 === 0 ? '#FFAE5E' : '#FF5E0E',
                boxShadow: '0 0 7px rgba(255,94,14,.62)',
                animation: `pdDust ${2.0 + (index % 6) * 0.34}s ease-in-out ${index * 0.055}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* ====================================================
          OUTER FLOATING PARTICLES
      ==================================================== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate3d(${px(0.95)}px, ${py(0.95)}px, 55px)`,
          zIndex: 30,
        }}
      >
        {FLOATING_PARTICLES.map(([x, y, size], index) => (
          <span
            key={`floating-${index}`}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: index % 2 === 0 ? '#FF5E0E' : '#FF7A29',
              boxShadow: '0 0 10px rgba(255,94,14,.8)',
              animation: `pdFloat ${2.4 + index * 0.13}s ease-in-out ${index * 0.17}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ====================================================
          IDEAS INTO REALITY (Right-side Vertical Element)
      ==================================================== */}
      <div
        className="absolute right-[-24px] sm:right-[-32px] top-[26%] hidden sm:flex flex-col items-center gap-2.5 pointer-events-none select-none"
        style={{
          zIndex: 32,
          transform: `translate3d(${px(0.4)}px, ${py(0.4)}px, 0)`,
        }}
      >
        <div className="w-[1px] h-7 bg-gradient-to-b from-transparent to-[#FF5E0E]/40" />
        <div className="font-mono text-[9px] tracking-[0.38em] text-gray-400/60 font-light flex flex-col gap-1 select-none text-center">
          <span>IDEAS</span>
          <span>INTO</span>
          <span className="text-[#FF7A29]/80 font-medium">REALITY</span>
        </div>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#FF5E0E]/40 to-transparent" />
      </div>

      {/* ====================================================
          CODE DETAIL (Bottom-Right Subtle Code Snippet)
      ==================================================== */}
      <div
        className="absolute right-[-10px] sm:right-[-18px] bottom-[10%] hidden md:block font-mono text-[9px] leading-snug text-gray-500/40 pointer-events-none select-none"
        style={{
          zIndex: 32,
          transform: `translate3d(${px(0.3)}px, ${py(0.3)}px, 0)`,
        }}
      >
        <div className="text-gray-500/50">while (curiosity)</div>
        <div className="pl-1.5">&#123;</div>
        <div className="pl-3 text-[#FF7A29]/60">build();</div>
        <div className="pl-1.5">&#125;</div>
      </div>
    </div>
  );
}
