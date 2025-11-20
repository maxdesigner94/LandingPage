import React from "react";
import Header from "./component/Header";
import Services from "./component/Services";
import ElectricFish from "./component/ElectricFish";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Services />
      </main>
      <ElectricFish />
      <Footer />
    </div>
  );
}


