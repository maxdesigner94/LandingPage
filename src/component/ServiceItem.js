import React from "react";

export default function ServiceItem({ service, index }){
  const isReverse = index % 2 === 1;
  return (
    <article className={`service ${isReverse ? "reverse" : ""}`} aria-labelledby={`s-${service.id}`}>
      <div className="media" aria-hidden>
        <svg className="icon-svg" viewBox="0 0 120 120" role="img" aria-label={service.title}>
          <defs>
            <linearGradient id={`g-${service.id}`} x1="0" x2="1">
              <stop offset="0" stopColor="#00AEEF"/>
              <stop offset="1" stopColor="#7BE0FF"/>
            </linearGradient>
          </defs>

          <circle cx="60" cy="60" r="44" fill={`url(#g-${service.id})`} opacity="0.95" />
          <path d="M45 30 L70 30 L55 65 L80 65 L40 110" stroke="#FFD400" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
        </svg>
      </div>

      <div className="content">
        <h3 id={`s-${service.id}`}>{service.title}</h3>
        <p>{service.text}</p>
        <a className="cta" href="#contatti" aria-label={`Contatta per ${service.title}`}>Richiedi informazioni</a>
      </div>
    </article>
  );
}
