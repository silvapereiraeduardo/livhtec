import React from "react";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturiesSection } from "./components/FeaturiesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";
import { CenterAlignedCallToAction } from "./components/CenterAlignedCallToAction";
import { LeftAlignedCallToAction } from "./components/LeftAlignedCallToAction";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturiesSection />
      <LeftAlignedCallToAction />
      <TestimonialsSection />
      <CenterAlignedCallToAction />
      <Footer />
    </>
  );
}

export default App;
