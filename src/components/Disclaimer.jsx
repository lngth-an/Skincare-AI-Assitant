import React from "react";

/**
 * Disclaimer Component
 * Banner displaying medical disclaimer at the bottom of the page
 */
function Disclaimer() {
  return (
    <section
      className="bg-gray-100 border-t border-gray-200 py-8"
      role="contentinfo"
      aria-label="Important notice"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm md:text-base text-gray-700 text-center leading-relaxed font-bold">
            <span className="text-lg mr-2" role="img" aria-label="Warning">
            </span>
            AI Skincare Assistant may make errors.
            <br />
            If you have serious skin conditions, please consult a dermatologist.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;
