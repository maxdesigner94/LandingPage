import React, { useEffect, useRef } from "react";

export default function ElectricFish(){
  const wrapRef = useRef(null);

  useEffect(()=>{
    const el = wrapRef.current;
    if(!el) return;
    let rafId = null;

    function update(){
      const y = window.scrollY || window.pageYOffset;
      const top = 60 + y * 0.55;
      el.style.top = `${top}px`;
      const sway = Math.sin((y/80)) * 8;
      el.style.transform = `translateX(${sway}px)`;
      rafId = requestAnimationFrame(update);
    }
    rafId = requestAnimationFrame(update);
    return ()=> cancelAnimationFrame(rafId);
  },[]);

  return (
    <div id="electric-fish" ref={wrapRef} aria-hidden>
      <svg viewBox="0 0 220 90" width="220" height="90" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fishGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#00AEEF"/>
            <stop offset="1" stopColor="#7BE0FF"/>
          </linearGradient>
        </defs>

        <g>
          <path id="fishBody" d="M10 45 Q40 10 90 30 Q140 50 180 30 Q200 20 210 45 Q200 70 180 60 Q140 40 90 60 Q40 80 10 45 Z" fill="url(#fishGrad)" opacity="0.95"/>
          <g transform="translate(160,30)" fill="#FFD400" opacity="0.95">
            <path d="M0 0 L6 -10 L2 -6 L10 -12 L4 -2 L12 -2" stroke="#FFD400" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </g>
      </svg>
    </div>
  );
}
