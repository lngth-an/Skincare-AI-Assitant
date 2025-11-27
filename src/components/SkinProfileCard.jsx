import React from "react";

/**
 * Skin Profile Card Component
 * Displays user's skin profile with buttons (non-functional)
 */
function SkinProfileCard() {
  return (
    <>
      <div
        className="bg-white rounded-2xl p-6 md:p-8 card-shadow h-full flex flex-col"
        role="article"
        aria-labelledby="skin-profile-title"
      >
        {/* Title */}
        <h2
          id="skin-profile-title"
          className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mb-4 tracking-tight"
        >
          Your Skin Profile
        </h2>

        {/* Description */}
        <div className="text-gray-600 mb-6 flex-1 space-y-4">
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Build your skin profile and receive custom-tailored
            routines designed specifically for your unique skin:
          </p>

          <div className="text-sm md:text-base">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5 text-avocado-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-justify">
                  <strong className="text-gray-900">
                    Skin type & sensitivity:
                  </strong>{" "}
                  Understand your unique skin composition and tolerance levels
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5 text-avocado-300">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <span className="text-justify">
                  <strong className="text-gray-900">Product history:</strong>{" "}
                  Track what works and what doesn't for informed decisions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5 text-avocado-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-justify">
                  <strong className="text-gray-900">Skincare goals:</strong>{" "}
                  Define and achieve your specific skin health objectives
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5 text-avocado-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-justify">
                  <strong className="text-gray-900">
                    Environment factors:
                  </strong>{" "}
                  Account for climate, humidity, and seasonal changes
                </span>
              </li>
            </ul>
          </div>


        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <button
            onClick={() => {
              // Button placeholder - no functionality
              console.log("Update Skin Profile clicked");
            }}
            className="flex-1 bg-gradient-to-r from-mint-400 to-pink-400 hover:from-mint-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            aria-label="Update skin profile"
          >
            View & Update Profile
          </button>

          <button
            onClick={() => {
              // Button placeholder - no functionality
              console.log("Take Skin Type Quiz clicked");
            }}
            className="flex-1 bg-gradient-to-r from-mint-400 to-pink-400 hover:from-mint-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            aria-label="Take skin type quiz"
          >
            Take Skin Type Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default SkinProfileCard;
