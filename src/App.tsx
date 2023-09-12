import React from "react";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturiesSection } from "./components/FeaturiesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";
import { CenterAlignedCallToAction } from "./components/CenterAlignedCallToAction";
import { LeftAlignedCallToAction } from "./components/LeftAlignedCallToAction";
import { ServiceSection } from "./components/ServicesSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSection />
      <FeaturiesSection />
      <LeftAlignedCallToAction />
      <TestimonialsSection />
      <CenterAlignedCallToAction />
      <Footer />
    </>
  );
}

export default App;
