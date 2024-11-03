import React from "react";

import backgroundVideo from "../assets/Avathar.mp4";

const Player = () => {
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
