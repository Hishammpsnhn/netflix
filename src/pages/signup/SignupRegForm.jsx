import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state;
  const PassInputref = useRef();
  useEffect(() => {
    if (PassInputref.current) {
      PassInputref.current.focus();
    }
  }, []);

  const [passWord, setPassword] = useState("");
  const handleSubmit = () => {};

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);
  return (
    <div className=" items-center justify-center min-h-screen bg-white">
      {/* Login Form */}
      <div className="relative m-auto mt-12 z-10 w-full max-w-md p-8 text-black">
        <p>
          STEP <b>2</b> OF <b>2</b>{" "}
        </p>
        <h2 className="text-3xl font-semibold  mb-6">
          Create a password to start your membership
        </h2>
        <p>Just a few more steps and you're done! We hate paperwork, too.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <input
              type="email"
              value={email}
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-4 mt-2 border border-black focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              ref={PassInputref}
              value={passWord}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 mt-2 border border-black focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
