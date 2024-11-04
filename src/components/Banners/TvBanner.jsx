import React from "react";
import tvImage from '../../assets/tv.png';
import tvVideo from '../../assets/Avathar.mp4';

const TvBanner = () => {
  return (
    <section className="bg-black text-white overflow-hidden py-10 px-5 md:py-24 md:px-20 lg:px-44 mt-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="section2_desc w-full lg:w-3/5 text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold">
            Enjoy on your TV
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium mt-4">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
        <div className="section2_img relative w-full lg:w-1/2">
          <img src={tvImage} alt="tv" className="object-contain w-full relative z-10" />
          <video
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[90%] lg:w-[82%] h-auto"
            src={tvVideo}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </section>
  );
};

export default TvBanner;
