import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banners/Banner";
import Login from "./pages/login/Login";
import HomePage from "./pages/Home/HomePage";
import { BannerHome } from "./pages/BannerHome/BannerHome";
import { Route, Routes } from "react-router-dom";
import Player from "./components/Player";
import Signup from "./pages/signup/SignupRegForm";
import SignupIn from "./pages/signup/SignupIn";
import SignupLayout from "./Layout/SignupLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BannerHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupLayout />}>
        <Route path="registration" element={<SignupIn />} />
        <Route path="regForm" element={<Signup />} />
      </Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/vedio" element={<Player />} />
    </Routes>
    //<BannerHome />
    // <Login></Login>
    // <HomePage/>
  );
}

export default App;
