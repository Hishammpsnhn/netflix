import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

const SignupIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { email } = location.state;
  console.log(email);

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);
  return (
    <div className=" items-center justify-center min-h-screen bg-white">
      {/* Register steps  */}
      <div className="relative text-center m-auto mt-12 z-10 max-w-md p-8 text-black">
        <div className=" h-20 w-full signup-device-background my-10"></div>
        <p>
          STEP <b>1</b> OF <b>2</b>{" "}
        </p>
        <h2 className="text-3xl font-bold  mb-6">
          Finish setting up your account
        </h2>
        <p className="my-5">
          Netflix is personalised for you. Create a password to watch on any
          device at any time.
        </p>
        <button
          type="submit"
          onClick={() => navigate("/signup/regForm", { state: { email } })}
          className="w-full py-2 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SignupIn;
