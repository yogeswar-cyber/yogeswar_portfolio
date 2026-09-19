import React, { useState, useRef, useCallback, useEffect } from 'react';

const SILHOUETTE_POINTS = [
  [80,898],[90,800],[110,730],[140,700],[180,680],
  [230,665],[270,655],[320,650],[360,660],[350,620],
  [335,595],[310,570],[295,555],[305,520],[285,480],
  [240,440],[215,410],[230,350],[275,300],[345,270],
  [420,270],[490,280],[550,310],[585,340],[585,385],
  [550,425],[575,455],[580,485],[565,525],[555,570],
  [580,615],[630,630],[705,655],[716,675],[716,898],
];

const POINTS_STR = SILHOUETTE_POINTS.map(([x,y])=>x+','+y).join(' ');

function calcPerimeter(pts){
  let t=0;
  for(let i=1;i<pts.length;i++){const dx=pts[i][0]-pts[i-1][0],dy=pts[i][1]-pts[i-1][1];t+=Math.sqrt(dx*dx+dy*dy);}
  return Math.ceil(t);
}
const PERIMETER=calcPerimeter(SILHOUETTE_POINTS);

const PARTICLES=[
  {cx:145,cy:695,r:2.5,delay:0},{cx:295,cy:558,r:2,delay:0.4},
  {cx:220,cy:415,r:2.5,delay:0.8},{cx:350,cy:272,r:2,delay:1.2},
  {cx:490,cy:282,r:2.5,delay:0.6},{cx:580,cy:490,r:2,delay:1.0},
  {cx:635,cy:635,r:2.5,delay:0.2},{cx:560,cy:428,r:2,delay:1.4},
];

function buildCSS(p){
  return [
    '@keyframes scanTravel {',
    '  0%   { stroke-dashoffset: 0; }',
    '  100% { stroke-dashoffset: '+(-p)+'; }',
    '}',
    '@keyframes particleFloat {',
    '  0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }',
    '  50%       { transform: translateY(-5px) scale(1.3); opacity: 1; }',
    '}',
    '@keyframes secondaryContour {',
    '  0%   { opacity: 0; }',
    '  60%  { opacity: 0.35; }',
    '  100% { opacity: 0.2; }',
    '}',
    '@keyframes neonPulseRing {',
    '  0%   { transform: scale(0.6); opacity: 0.9; }',
    '  100% { transform: scale(2.2); opacity: 0; }',
    '}',
    '@keyframes cyberGridFade {',
    '  0%   { opacity: 0.55; }',
    '  60%  { opacity: 0.4; }',
    '  100% { opacity: 0; }',
    '}',
  ].join('\n');
}

export default function NeonSilhouettePortrait({ photoUrl }) {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pulseTimer = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isMobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({ x: ((e.clientY-cy)/(rect.height/2))*3, y: -((e.clientX-cx)/(rect.width/2))*3 });
  }, [isMobile]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => { setIsHovered(false); setTilt({x:0,y:0}); };
  const handleClick = () => {
    if (isPulsing) return;
    setIsPulsing(true);
    if (pulseTimer.current) clearTimeout(pulseTimer.current);
    pulseTimer.current = setTimeout(() => setIsPulsing(false), 1100);
  };
  useEffect(() => () => clearTimeout(pulseTimer.current), []);

  const glowOpacity = isHovered ? 1 : 0.65;
  const sw = isHovered ? 2.5 : 1.8;
  const fstd = isHovered ? 14 : 8;
  const CSS = buildCSS(PERIMETER);

  return (
    <div
      ref={containerRef}
      className="relative select-none cursor-pointer"
      style={{ width: 'clamp(260px, 34vw, 370px)' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <style>{CSS}</style>

      <div className="absolute pointer-events-none" style={{
        inset: '-40px',
        background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,94,14,0.18) 0%, transparent 70%)',
        filter: 'blur('+(isHovered?18:12)+'px)',
        transition: 'filter 0.5s ease, opacity 0.5s ease',
        opacity: isHovered ? 1 : 0.7,
      }} />

      {isPulsing && (
        <div className="absolute inset-0 pointer-events-none z-30">
          <div style={{ position:'absolute', inset:'10%', borderRadius:'50%', border:'2px solid rgba(255,94,14,0.8)', animation:'neonPulseRing 1s ease-out forwards' }} />
          <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0, animation:'cyberGridFade 1s ease-out forwards' }}>
            <defs><pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,94,14,0.3)" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#dotGrid)" />
          </svg>
        </div>
      )}

      <div style={{
        transform: isMobile ? 'none' : ('perspective(800px) rotateX('+tilt.x+'deg) rotateY('+tilt.y+'deg) scale('+(isHovered?1.02:1)+')'),
        transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
        position: 'relative', zIndex: 10,
      }}>
        <img src={photoUrl} alt="Yogeswar S" draggable={false} style={{ width:'100%', height:'auto', display:'block', objectFit:'cover', objectPosition:'top center', filter:'brightness(1.04) contrast(1.03)' }} />

        <svg viewBox="0 0 716 898" preserveAspectRatio="none" style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', overflow:'visible' }}>
          <defs>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation={fstd*0.6} result="coloredBlur" />
              <feFlood floodColor="#FF5E0E" floodOpacity="0.8" result="floodColor" />
              <feComposite in="floodColor" in2="coloredBlur" operator="in" result="glowLayer" />
              <feMerge><feMergeNode in="glowLayer" /><feMergeNode in="glowLayer" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="neonGlowBright" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation={fstd} result="coloredBlur" />
              <feFlood floodColor="#FF7A29" floodOpacity="1" result="floodColor" />
              <feComposite in="floodColor" in2="coloredBlur" operator="in" result="glowLayer" />
              <feMerge><feMergeNode in="glowLayer" /><feMergeNode in="glowLayer" /><feMergeNode in="glowLayer" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <polyline points={POINTS_STR} fill="none" stroke="#FF5E0E" strokeWidth={sw}
            strokeLinecap="round" strokeLinejoin="round"
            filter={isHovered ? 'url(#neonGlowBright)' : 'url(#neonGlow)'}
            opacity={glowOpacity} style={{ transition: 'opacity 0.4s ease' }} />

          {isHovered && (
            <polyline points={POINTS_STR} fill="none" stroke="#FFAE5E"
              strokeWidth={sw+1.5} strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray={PERIMETER*0.1+' '+PERIMETER}
              filter="url(#neonGlowBright)" opacity={0.9}
              style={{ animation: 'scanTravel 2s linear infinite' }} />
          )}

          {PARTICLES.map((p,i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r={isHovered?p.r:p.r*0.6}
              fill="#FF5E0E" opacity={isHovered?0.9:0.4} filter="url(#neonGlow)"
              style={{ transition:'r 0.4s ease, opacity 0.4s ease', animation:'particleFloat 2.5s ease-in-out '+p.delay+'s infinite' }} />
          ))}

          {isHovered && (
            <polyline points={POINTS_STR} fill="none" stroke="#FFD4A3"
              strokeWidth={0.6} strokeLinecap="round" strokeLinejoin="round"
              opacity={0.3} strokeDasharray="6 14"
              style={{ animation: 'secondaryContour 0.6s ease-out forwards' }} />
          )}
        </svg>
      </div>
    </div>
  );
}
