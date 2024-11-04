import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { validateEmail } from "../../utils/validation";
const Banner = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [err, setError] = useState(null);
  const handleSubmit = () => {
    console.log(email);
    let errMsg = validateEmail(email);
    if (errMsg) {
      setError(errMsg);
      return;
    }
    navigate(`/signup/registration`, { state: { email } });
  };

  return (
    <div className="relative h-screen bg-gray-800 overflow-hidden background-image">
      {/* Gradient Overlay-black */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      {/* Header */}

      <Header btn={true} />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="px-4 py-2 md:py-3 bg-black opacity-70 text-white rounded-l-md border border-gray-600 outline-none w-64 md:w-80"
            />
            <button
              className="flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 md:py-3 px-4 rounded-r-md"
              onClick={handleSubmit}
            >
              Get Started
            </button>
          </div>
          {err && <p className="text-red-600">{err}</p>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
