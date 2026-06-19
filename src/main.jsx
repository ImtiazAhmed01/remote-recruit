import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalReach from "./components/Globalreach";
import FeeFree from "./components/Feefree";
import ShowcaseTalents from "./components/Showcasetalents";
import GetStarted from "./components/Getstarted";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scrolltotop";

function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfd]">
      <Navbar />
      <main>
        <Hero />
        <GlobalReach />
        <FeeFree />
        <ShowcaseTalents />
        <GetStarted />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);