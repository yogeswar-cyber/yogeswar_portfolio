jsx = """import React, { useState, useRef, useCallback, useEffect } from 'react';

// DepthPortrait3D
// Premium layered parallax portrait — NO outline tracing, NO face modification.
// 3 depth layers: background (slow), portrait (medium), foreground (fast).

// ── Network node positions for back layer
const NODES = [
  {x:8,y:12},{x:22,y:7},{x:38,y:18},{x:55,y:8},{x:72,y:15},
  {x:85,y:22},{x:92,y:40},{x:88,y:62},{x:78,y:78},{x:60,y:88},
  {x:40,y:92},{x:20,y:85},{x:8,y:70},{x:5,y:48},{x:15,y:32},
  {x:30,y:52},{x:50,y:45},{x:65,y:55},{x:48,y:70},{x:35,y:75},
];

// Edges between nodes (index pairs)
const EDGES = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],
  [9,10],[10,11],[11,12],[12,13],[13,14],[14,0],[2,16],[16,17],
  [17,18],[18,19],[19,15],[15,16],
];

// Foreground floating particles
const PARTICLES = [
  {x:10,y:20,size:2,speed:1.2},{x:88,y:15,size:1.5,speed:0.9},
  {x:5,y:60,size:2.5,speed:1.5},{x:92,y:55,size:1.5,speed:1.1},
  {x:15,y:85,size:2,speed:0.8},{x:80,y:82,size:2,speed:1.3},
  {x:45,y:5,size:1.5,speed:1.0},{x:60,y:92,size:2,speed:1.2},
  {x:25,y:40,size:1,speed:1.8},{x:75,y:38,size:1,speed:1.6},
  {x:50,y:10,size:1.5,speed:0.7},{x:50,y:95,size:1.5,speed:1.4},
];

// HUD data points (corner accents, front layer)
const HUD_CORNERS = [
  {corner:'tl', label:'CSE'},
  {corner:'tr', label:'CY'},
  {corner:'bl', label:'WD'},
  {corner:'br', label:'ML'},
];

const CSS = [
  '@keyframes nodesPulse {',
  '  0%,100%{ opacity:0.3; }',
  '  50%    { opacity:0.7; }',
  '}',
  '@keyframes orbitSpin {',
  '  from{ transform:rotate(0deg); }',
  '  to  { transform:rotate(360deg); }',
  '}',
  '@keyframes orbitSpinRev {',
  '  from{ transform:rotate(0deg); }',
  '  to  { transform:rotate(-360deg); }',
  '}',
  '@keyframes floatParticle {',
  '  0%,100%{ transform:translateY(0); opacity:0.6; }',
  '  50%    { transform:translateY(-8px); opacity:1; }',
  '}',
  '@keyframes rimPulse {',
  '  0%,100%{ opacity:0.35; }',
  '  50%    { opacity:0.6; }',
  '}',
  '@keyframes depthPulse {',
  '  0%  { transform:scale(0.8); opacity:0.7; }',
  '  100%{ transform:scale(2.0); opacity:0; }',
  '}',
  '@keyframes trailFade {',
  '  0%  { opacity:0.6; }',
  '  100%{ opacity:0; }',
  '}',
].join('\\n');

export default function DepthPortrait3D({ photoUrl }) {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 }); // -1 to 1
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
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2; // -1..1
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    setMouse({ x, y });
  }, [isMobile]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => { setIsHovered(false); setMouse({ x:0, y:0 }); };
  const handleClick = () => {
    if (isPulsing) return;
    setIsPulsing(true);
    if (pulseTimer.current) clearTimeout(pulseTimer.current);
    pulseTimer.current = setTimeout(() => setIsPulsing(false), 950);
  };
  useEffect(() => () => clearTimeout(pulseTimer.current), []);

  // Parallax helpers — depth 0 = back (slow), 1 = front (fast)
  const px = (depth) => isMobile ? 0 : mouse.x * depth * 14;  // max ±14px * depth
  const py = (depth) => isMobile ? 0 : mouse.y * depth * 10;
  const rot = (depth) => isMobile ? 0 : mouse.x * depth * 3;  // max ±3deg

  const tilt3d = isMobile
    ? 'none'
    : 'perspective(900px) rotateY('+rot(0.6)+'deg) rotateX('+(-(mouse.y*0.6*2))+'deg) scale('+(isHovered?1.02:1)+')';

  const glowX = 50 + mouse.x * 18; // % — glow follows cursor
  const glowY = 50 + mouse.y * 14;

  return (
    <div
      ref={containerRef}
      className="relative select-none cursor-pointer"
      style={{ width:'clamp(280px,36vw,400px)', aspectRatio:'4/5' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <style>{CSS}</style>

      {/* ═══════════════════════════════════════════════════ */}
      {/* BACK LAYER — atmosphere, nodes, orbital rings       */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 overflow-hidden" style={{
        transform: 'translate('+(-px(0.25))+'px,'+(-py(0.25))+'px)',
        transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
      }}>
        {/* Dark atmospheric background */}
        <div className="absolute inset-0 rounded-3xl" style={{
          background: 'radial-gradient(ellipse 80% 70% at '+glowX+'% '+glowY+'%, rgba(255,94,14,0.12) 0%, rgba(10,10,20,0.95) 65%)',
          transition: 'background 0.4s ease',
        }} />

        {/* Network nodes SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ opacity:0.5 }}>
          {EDGES.map(([a,b],i)=>(
            <line key={i}
              x1={NODES[a].x} y1={NODES[a].y}
              x2={NODES[b].x} y2={NODES[b].y}
              stroke="#FF5E0E" strokeWidth="0.15" opacity="0.25"
            />
          ))}
          {NODES.map((n,i)=>(
            <circle key={i} cx={n.x} cy={n.y} r="0.6"
              fill="#FF7A29" style={{ animation:'nodesPulse 3s ease-in-out '+(i*0.18)+'s infinite' }} />
          ))}
        </svg>

        {/* Outer orbital ring */}
        <div className="absolute" style={{
          inset: '-8%',
          border: '1px solid rgba(255,94,14,0.12)',
          borderRadius: '50%',
          animation: 'orbitSpin 20s linear infinite',
          transform: isHovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }}>
          {/* Dashes on orbit */}
          <div style={{ position:'absolute', top:'-2px', left:'45%', width:'10%', height:'3px', background:'rgba(255,94,14,0.4)', borderRadius:'2px' }} />
          <div style={{ position:'absolute', bottom:'-2px', left:'45%', width:'10%', height:'3px', background:'rgba(255,94,14,0.4)', borderRadius:'2px' }} />
        </div>

        {/* Inner orbital ring (reverse spin) */}
        <div className="absolute" style={{
          inset: '2%',
          border: '1px dashed rgba(255,94,14,0.08)',
          borderRadius: '50%',
          animation: 'orbitSpinRev 28s linear infinite',
        }} />

        {/* Wireframe corner geometry */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ opacity:0.18 }}>
          <polyline points="0,0 12,0 12,12 0,12 0,0" fill="none" stroke="#FF5E0E" strokeWidth="0.4" />
          <polyline points="100,0 88,0 88,12 100,12 100,0" fill="none" stroke="#FF5E0E" strokeWidth="0.4" />
          <polyline points="0,100 12,100 12,88 0,88 0,100" fill="none" stroke="#FF5E0E" strokeWidth="0.4" />
          <polyline points="100,100 88,100 88,88 100,88 100,100" fill="none" stroke="#FF5E0E" strokeWidth="0.4" />
          <line x1="0" y1="50" x2="5" y2="50" stroke="#FF5E0E" strokeWidth="0.3" />
          <line x1="95" y1="50" x2="100" y2="50" stroke="#FF5E0E" strokeWidth="0.3" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* MIDDLE LAYER — portrait, rim light, depth shadow   */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 flex items-center justify-center" style={{
        transform: tilt3d,
        transition: isMobile ? 'none' : 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
        zIndex: 10,
      }}>
        {/* Click depth pulse ring — behind photo */}
        {isPulsing && (
          <div style={{
            position: 'absolute',
            inset: '10%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,94,14,0.35) 0%, transparent 70%)',
            animation: 'depthPulse 0.9s ease-out forwards',
            zIndex: 1,
          }} />
        )}

        {/* Depth blur / shadow behind portrait — makes person "pop" */}
        <div style={{
          position: 'absolute',
          inset: '5% 10%',
          background: 'radial-gradient(ellipse at 50% 85%, rgba(0,0,0,0.7) 0%, transparent 70%)',
          filter: 'blur(18px)',
          zIndex: 2,
        }} />

        {/* Orange rim light — atmospheric glow around person */}
        <div style={{
          position: 'absolute',
          inset: '-2% 5%',
          background: 'radial-gradient(ellipse at '+glowX+'% '+glowY+'%, rgba(255,94,14,'+(isHovered?0.22:0.13)+') 0%, transparent 60%)',
          filter: 'blur(22px)',
          transition: 'background 0.35s ease, opacity 0.35s ease',
          animation: 'rimPulse 4s ease-in-out infinite',
          zIndex: 2,
        }} />

        {/* Portrait — ORIGINAL photo, face completely untouched */}
        <img
          src={photoUrl}
          alt="Yogeswar S"
          draggable={false}
          style={{
            position: 'relative',
            zIndex: 3,
            width: '88%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'top center',
            // Natural drop shadow to separate from background
            filter: 'brightness(1.03) contrast(1.02) drop-shadow(0 24px 48px rgba(0,0,0,0.65)) drop-shadow(0 0 32px rgba(255,94,14,'+(isHovered?0.2:0.1)+')',
            transition: 'filter 0.4s ease',
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* FRONT LAYER — particles, data points, light trails */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" style={{
        transform: 'translate('+(px(0.45))+'px,'+(py(0.45))+'px)',
        transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
        zIndex: 20,
      }}>
        {PARTICLES.map((p,i) => (
          <div key={i} style={{
            position: 'absolute',
            left: p.x+'%',
            top: p.y+'%',
            width: p.size+'px',
            height: p.size+'px',
            borderRadius: '50%',
            background: i%3===0 ? '#FF5E0E' : i%3===1 ? '#FF7A29' : '#FFAE5E',
            opacity: isHovered ? 0.9 : 0.45,
            transition: 'opacity 0.4s ease',
            animation: 'floatParticle '+(2+p.speed)+'s ease-in-out '+(i*0.22)+'s infinite',
            boxShadow: '0 0 '+(p.size*2)+'px rgba(255,94,14,0.7)',
          }} />
        ))}

        {/* Light trails — thin diagonal lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ opacity: isHovered?0.5:0.25, transition:'opacity 0.4s ease' }}>
          <line x1="3" y1="30" x2="12" y2="35" stroke="#FF5E0E" strokeWidth="0.3" opacity="0.6" />
          <line x1="88" y1="25" x2="97" y2="30" stroke="#FF5E0E" strokeWidth="0.3" opacity="0.6" />
          <line x1="5" y1="68" x2="14" y2="73" stroke="#FF7A29" strokeWidth="0.25" opacity="0.5" />
          <line x1="86" y1="65" x2="95" y2="70" stroke="#FF7A29" strokeWidth="0.25" opacity="0.5" />
        </svg>

        {/* HUD micro-labels at corners */}
        {HUD_CORNERS.map(({corner,label}) => {
          const pos = {
            tl:{ top:'4%', left:'4%' },
            tr:{ top:'4%', right:'4%' },
            bl:{ bottom:'4%', left:'4%' },
            br:{ bottom:'4%', right:'4%' },
          }[corner];
          return (
            <div key={corner} style={{
              position: 'absolute',
              ...pos,
              fontFamily: 'monospace',
              fontSize: '8px',
              color: 'rgba(255,94,14,'+(isHovered?0.7:0.35)+')',
              letterSpacing: '1px',
              transition: 'color 0.4s ease',
              lineHeight:1,
            }}>
              {label}
            </div>
          );
        })}
      </div>

    </div>
  );
}
"""

with open(r'E:\yogesresume\src\components\DepthPortrait3D.jsx', 'w', encoding='utf-8') as f:
    f.write(jsx)
print('Done:', len(jsx), 'chars')
