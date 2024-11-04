import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const SignupLayout = () => {
  return (
    <div className=" items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <Header btn={false} signIn={true} />
      <hr />
      <Outlet />
    </div>
  );
};

export default SignupLayout;
