import React, { useEffect, useState } from "react";
import "../../App.css";
import Header from "../../components/Header";
import { auth } from "../../config/firebase";
import { validateEmail, validatePassword } from "../../utils/validation";
import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("hishammpnsn@gamil.com");
  const [password, setPassword] = useState("9656753610");
  const [ServerErr, setServerErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const [err, SetError] = useState({ emailErr: null, passwordErr: null });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    console.log(emailErr, passwordErr);
    if (emailErr || passwordErr) {
      SetError({ emailErr, passwordErr });
      return;
    }
    console.log(auth, email, password);
    try {
      setLoading(true);
    //  await setPersistence(auth, browserLocalPersistence);
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user);
      localStorage.setItem("userInfoNet", JSON.stringify(user));
      navigate("/home");
    } catch (error) {
      console.error("Error signing in:", error);
      setServerErr("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    SetError({ emailErr: null, passwordErr: null });
    setServerErr(null);
  }, [email, password]);
  useEffect(() => {
    const user = localStorage.getItem("userInfoNet");
    if(user){
      navigate('/home')
    }
  }, [navigate]);
  return (
    <div className=" items-center justify-center min-h-screen background-image ">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Header */}
      <Header btn={false} />
      {/* Login Form */}
      <div
        className="relative m-auto mt-12 z-10 w-full max-w-md p-8 rounded-lg shadow-lg bg-black bg-opacity-70"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold text-white mb-6">Sign In</h2>
        {/* Server Error */}
        {ServerErr && (
          <div>
            <span className="text-red-600">{ServerErr}</span>
          </div>
        )}
        <form className="space-y-6" noValidate>
          {/* Email Input */}
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-4 mt-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-black bg-opacity-40 border border-slate-600"
              required
            />
          </div>
          {err.emailErr && <span className="text-red-600">{err.emailErr}</span>}
          {/* Password Input */}
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 mt-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-black bg-opacity-50 border border-slate-600"
              required
            />
          </div>
          {err.passwordErr && (
            <span className="text-red-600 m-0">{err.passwordErr}</span>
          )}

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-sm text-white hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 flex items-center justify-center"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              "Sign In"
            )}
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
