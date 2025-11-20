import React, { useEffect, useRef } from "react";

export default function Header(){
  const boltRef = useRef(null);

  useEffect(()=>{
    let t = 0;
    let mounted = true;
    const animate = ()=>{
      if(!mounted) return;
      t += 0.12;
      if(boltRef.current){
        boltRef.current.style.transform = `translateY(${Math.sin(t) * 2}px) rotate(${Math.sin(t / 2) * 2}deg)`;
      }
      requestAnimationFrame(animate);
    };
    const rafId = requestAnimationFrame(animate);

    // bagliore periodico
    const glowInterval = setInterval(()=>{
      if(boltRef.current){
        boltRef.current.classList.add("glow");
        setTimeout(()=>boltRef.current && boltRef.current.classList.remove("glow"),900);
      }
    },2200);

    return ()=>{
      mounted = false;
      cancelAnimationFrame(rafId);
      clearInterval(glowInterval);
    };
  },[]);

  return (
    <>
      <header className="header container" role="banner">
        <div className="brand">
          <div className="logo-box" aria-hidden="false">
            <svg viewBox="0 0 320 120" width="220" height="70" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="flashImpiantiTitle">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#00AEEF"/>
                  <stop offset="1" stopColor="#7BE0FF"/>
                </linearGradient>
              </defs>
              <title id="flashImpiantiTitle">FlashImpianti</title>
              <g transform="translate(10,10)">
                <path id="bolt" ref={boltRef} d="M20 10 L60 10 L40 50 L80 50 L30 110 L50 60 L10 60 Z" fill="url(#g1)"></path>
                <text x="110" y="70" fontFamily="Poppins, Inter, sans-serif" fontSize="48" fill="#F4F6F8">Impianti</text>
              </g>
            </svg>
          </div>
        </div>
      </header>

      <section className="hero container" aria-label="Introduzione ai servizi" role="region">
        <h1>Impianti elettrici civili e industriali</h1>
        <p className="lead">Progettazione, installazione e manutenzione con attenzione alla sicurezza, efficienza energetica e conformità normativa.</p>
        <div className="cta-row">
          <a className="btn primary" href="#contatti">Richiedi un preventivo</a>
          <a className="btn" href="#services">I nostri servizi</a>
        </div>
      </section>
    </>
  );
}
