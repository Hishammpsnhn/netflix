import React from "react";
import "../../App.css";
import Header from "../../components/Header";
const Login = () => {
  return (
    <div className=" items-center justify-center min-h-screen background-image ">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Header */}
      <Header btn={false}/>
      {/* Login Form */}
      <div className="relative m-auto mt-12 z-10 w-full max-w-md p-8 rounded-lg shadow-lg bg-black bg-opacity-70">
        <h2 className="text-3xl font-semibold text-white mb-6">Sign In</h2>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-4 mt-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-black bg-opacity-40 border border-slate-600"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 mt-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-black bg-opacity-50 border border-slate-600"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-sm text-white hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-red-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
