import React from "react";
import "../App.css";

const Banner = () => {
  return (
    <div className="relative h-screen bg-gray-800 overflow-hidden background-image">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      {/* Header */}
      <header className="z-10 flex justify-between items-center px-40 py-6 text-white bg-transparent relative">
        <svg
          className="w-36 h-10 fill-current text-red-600"
          viewBox="0 0 111 30"
        >
          {/* SVG content goes here */}
        </svg>

        <div className="flex items-center space-x-4">
          {/* Language Selection */}
          <button className="flex items-center border border-gray-400 text-white text-sm px-3 py-1 rounded-md">
            <select className="bg-transparent outline-none text-white">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </button>

          {/* Sign In Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-3 py-1 rounded-md">
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative h-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        }}
      >
        {/* Hero Content */}
        <div className="relative text-center text-white transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-base md:text-lg mb-8">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          {/* Email Input and Get Started Button */}
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 md:py-3 text-black rounded-l-md border-none outline-none w-64 md:w-80"
            />
            <button className="flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 md:py-3 px-4 rounded-r-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
