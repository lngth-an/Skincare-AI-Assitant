import React from "react";
import heroImage from "./img.jpg";

/**
 * Hero Section Component
 * Displays the main title, illustration, subtitle, and CTA button
 */
function Hero() {
  return (
    <section
      className="container mx-auto px-4 py-4 md:py-6 text-center"
      aria-label="Hero section"
    >
      {/* Main Title */}
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 mb-3 tracking-tight"
        role="heading"
        aria-level="1"
      >
        AI Skincare Assistant
      </h1>

      {/* Illustration/Image */}
      <div className="flex justify-center mb-3">
        <img
          src={heroImage}
          alt="Skincare products - AI Skincare Assistant"
          className="w-full max-w-4xl h-auto rounded-2xl shadow-lg object-contain"
          role="img"
          aria-label="Skincare products image"
        />
      </div>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Your smart skincare assistant — personalized for you.
      </p>
    </section>
  );
}

export default Hero;
