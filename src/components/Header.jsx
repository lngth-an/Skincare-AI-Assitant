import React from "react";

/**
 * Header Component
 * Displays user icon and name in the top right corner
 */
function Header() {
  // Mock user data - can be replaced with actual user state later
  const userName = "Thien An";

  return (
    <header
      className="w-full bg-gray-100 border-b border-gray-200 shadow-sm sticky top-0 z-40"
      role="banner"
      aria-label="Site header"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-end items-center gap-3">
          {/* User Icon */}
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-r from-mint-400 to-pink-400 flex items-center justify-center text-white font-bold shadow-md"
            role="img"
            aria-label="User avatar"
          >
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          {/* User Name */}
          <span className="text-gray-900 font-semibold text-sm md:text-base">
            {userName}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
