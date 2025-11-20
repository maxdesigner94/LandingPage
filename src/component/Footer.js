import React from "react";

export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div>
          <strong>FlashImpianti</strong>
          <div className="small">Impianti elettrici civili e industriali • Progettazione e manutenzione</div>
        </div>
        <div className="small">
          Email: <a href="mailto:info@flashimpianti.it">info@flashimpianti.it</a> • Tel: <a href="tel:+39080000000">+39 080 000000</a>
        </div>
      </div>
    </footer>
  );
}
