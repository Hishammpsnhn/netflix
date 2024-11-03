import React, { useEffect, useState } from "react";
import backgroundVideo from "../assets/Avathar.mp4";

const MovieBanner = ({ backgroundImage, title, description }) => {
  const [bannerData, setBannersData] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/117386?api_key=f2471c97322f5bfdb488b81a07327c70"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBannersData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div className="absolute inset-0 h-80 md:h-96 lg:h-[500px] w-full text-white ">
      {/* Background Image */}
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent "></div>

      {/* Content */}
      <div className="relative my-28 z-10 p-6 md:p-10 lg:p-16 max-w-lg">
        <h1 className="text-s md:text-xl lg:text-3xl font-bold mb-4">
          {bannerData?.original_title}
        </h1>
        <p className="text-sm md:text-sm lg:text-sm mb-6">
          {bannerData?.overview}
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm md:text-base font-semibold">
            Play
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-md text-sm md:text-base font-semibold">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
