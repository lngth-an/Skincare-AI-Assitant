import React from "react";

/**
 * Why Section Component
 * Displays 4 cards explaining why to use this app
 * Desktop: 4 columns, Mobile: 1 column
 */
function WhySection() {
  // Background colors for each card - different shades of green
  const cardColors = [
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "AI Chatbot with Dermatology Expertise",
      description:
        "Get consultations from AI trained with in-depth dermatology knowledge.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "AI Acne Analysis",
      description:
        "Analyze acne-prone skin images using AI technology for diagnosis and treatment suggestions.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Build Science-Based Skincare Routine",
      description:
        "Receive personalized skincare routines based on your skin type and concerns.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Track Skin Progress",
      description:
        "Record and track skin changes over time to evaluate effectiveness.",
    },
  ];

  return (
    <section
      className="container mx-auto px-4 py-6 md:py-8"
      aria-label="Why use this app"
      data-section="features"
    >
      <h2
        className="text-3xl md:text-4xl font-display font-extrabold text-center text-gray-900 mb-4 tracking-tight"
        role="heading"
        aria-level="2"
      >
        Why Use AI Skincare Assistant?
      </h2>

      {/* Grid: 4 columns on desktop, 1 column on mobile, 2x2 on tablet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${cardColors[index]} rounded-2xl p-6 card-shadow flex flex-col items-center text-center`}
            role="article"
            aria-labelledby={`feature-title-${index}`}
          >
            {/* Icon */}
            <div className="text-avocado-300 mb-4" aria-hidden="true">
              {feature.icon}
            </div>

            {/* Title */}
            <h3
              id={`feature-title-${index}`}
              className="text-xl font-bold text-gray-900 mb-3"
            >
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhySection;
