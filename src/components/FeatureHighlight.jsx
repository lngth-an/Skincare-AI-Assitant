import React from "react";

/**
 * Feature Highlight Component
 * Large card displaying main chatbot AI features
 * Part of 2-column layout (left side on desktop)
 */
function FeatureHighlight() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Dermatology Consultation",
      description: "Get in-depth dermatology advice from trained AI.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      title: "Acne Analysis via Image (AI Vision)",
      description:
        "Upload acne images for AI analysis and personalized treatment suggestions.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Ingredient Checker",
      description:
        "Check cosmetic ingredients to ensure compatibility with your skin type.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      title: "Review & Optimize Routine",
      description:
        "Evaluate your current routine and get improvement suggestions for best results.",
    },
  ];

  return (
    <div
      className="bg-white rounded-2xl p-6 md:p-8 card-shadow h-full"
      role="article"
      aria-labelledby="chatbot-features-title"
    >
      {/* Title */}
      <h2
        id="chatbot-features-title"
        className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mb-6 tracking-tight"
      >
        AI Chatbot
      </h2>

      {/* Features List */}
      <ul className="space-y-4 mb-6" role="list">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-4" role="listitem">
            {/* Icon */}
            <div
              className="flex-shrink-0 mt-1 text-avocado-300"
              aria-hidden="true"
            >
              {feature.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base text-justify">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Start Chat Button */}
      <button
        onClick={() => {
          // Handle start chat - can scroll to chat section or open chat modal
          console.log("Start chat clicked");
        }}
        className="w-full bg-gradient-to-r from-mint-400 to-pink-400 hover:from-mint-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Start chat with AI chatbot"
      >
        Start Consultation
      </button>
    </div>
  );
}

export default FeatureHighlight;
