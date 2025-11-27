import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import FeatureHighlight from "./components/FeatureHighlight";
import SkinProfileCard from "./components/SkinProfileCard";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

/**
 * Main App Component
 * Renders all sections of the AI Skincare Assistant application
 */
function App() {
  return (
    <div className="min-h-screen bg-avocado-50">
      {/* Header */}
      <Header />

      {/* Hero Section - Top of the page */}
      <Hero />

      {/* Why This App Section - 4 cards explaining benefits */}
      <WhySection />

      {/* Features Highlight Section - 2-column layout with main features */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <FeatureHighlight />
          <SkinProfileCard />
        </div>
      </div>

      {/* Disclaimer Banner */}
      <Disclaimer />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
