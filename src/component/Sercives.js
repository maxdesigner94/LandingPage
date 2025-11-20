import React, { useEffect, useRef } from "react";
import ServiceItem from "./ServiceItem";

const SERVICES = [
  {
    id: "civili",
    title: "Impianti civili",
    text: "Progettazione e installazione per abitazioni, condomini e uffici con soluzioni efficienti e sicure."
  },
  {
    id: "industriali",
    title: "Impianti industriali",
    text: "Quadri elettrici, automazione, manutenzione programmata e adeguamenti per impianti industriali."
  },
  {
    id: "manutenzione",
    title: "Manutenzione e pronto intervento",
    text: "Contratti di manutenzione programmata e interventi rapidi 24/7 per guasti e anomalie."
  },
  {
    id: "efficienza",
    title: "Efficienza energetica",
    text: "Analisi consumi, soluzioni LED, sistemi di monitoraggio e ottimizzazione energetica."
  }
];

export default function Services(){
  const containerRef = useRef(null);

  useEffect(()=>{
    const items = containerRef.current.querySelectorAll(".service");
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add("in-view");
      });
    },{threshold:0.25});
    items.forEach(i=>obs.observe(i));
    return ()=>obs.disconnect();
  },[]);

  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{marginBottom:20}}>
          <h2 style={{margin:"0 0 .4rem",fontFamily:"Poppins"}}>I nostri servizi</h2>
          <p className="small">Scorri per scoprire le nostre competenze. Ogni servizio si presenta con una breve descrizione e una call to action.</p>
        </div>

        <div className="services" ref={containerRef}>
          {SERVICES.map((s, idx)=>(
            <ServiceItem key={s.id} service={s} index={idx} />
          ))}
        </div>

        <div id="contatti" style={{marginTop:30}}>
          <h3 style={{margin:"0 0 .6rem"}}>Contatti</h3>
          <p className="small">Email: <strong>info@flashimpianti.it</strong> • Tel: <strong>+39 080 000000</strong></p>
        </div>
      </div>
    </section>
  );
}
