import React, { useEffect } from "react";

import backgroundVideo from "../assets/Avathar.mp4";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userInfoNet");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={backgroundVideo}
      autoPlay
      loop
      controls={true}
      muted={true}
    ></video>
  );
};

export default Player;
