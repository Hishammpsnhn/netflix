import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  if (!location.state) navigate("/");
  const state = location?.state;
  const email = state?.email;
  if (!email) navigate("/");

  const PassInputref = useRef();

  const [passWord, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    // const EmailError = validateEmail(email);
    e.preventDefault();
    const passError = validatePassword(passWord);
    if (passError) {
      setError(passError);
      return;
    }
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, passWord);
      const user = res.user;
      console.log(user);
      // setCurrentUser(userInfo);
      localStorage.setItem("userInfoNet", JSON.stringify(user));
      navigate("/home");
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);
  useEffect(() => {
    const user = localStorage.getItem("userInfoNet");
    if (user) {
      navigate("/home");
    }
  }, [navigate]);

  useEffect(() => {
    if (PassInputref.current) {
      PassInputref.current.focus();
    }
  }, []);
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
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* Email Input */}
          <div>
            <input
              type="email"
              defaultValue={email}
              disabled
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
              onChange={(e) => {
                setError(null);
                setPassword(e.target.value);
              }}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 mt-2 border border-black focus:border-blue-600 focus:outline-none"
              required
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
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
              "Register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
