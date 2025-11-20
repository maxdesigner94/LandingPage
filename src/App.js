src/App.js

import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import ElectricFish from "./components/ElectricFish";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      {/* Header ora contiene l'intestazione e la sezione Hero */}
      <Header /> 
      <main>
        <Services />
      </main>
      <ElectricFish />
      <Footer />
    </div>
  );
}
