import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive-element') ||
        target.closest('.interactive-element')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Tiny sharp center point */}
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5E0E] transition-transform duration-75 ease-out custom-cursor"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isClicked ? '4px' : '6px',
          height: isClicked ? '4px' : '6px',
          boxShadow: '0 0 10px #FF5E0E',
        }}
      />
      {/* Outer tech ring with spring delay */}
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF5E0E]/40 transition-all duration-200 ease-out custom-cursor"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          borderColor: isHovered ? 'rgba(255, 94, 14, 0.9)' : 'rgba(255, 94, 14, 0.35)',
          backgroundColor: isHovered ? 'rgba(255, 94, 14, 0.08)' : 'transparent',
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.85 : 1})`,
        }}
      />
    </>
  );
}
