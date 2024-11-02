import React from 'react';

const MovieBanner = ({ backgroundImage, title, description }) => {
  return (
    <div className="relative h-80 md:h-96 lg:h-[500px] w-full text-white">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-10 lg:p-16 max-w-lg">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-sm md:text-lg lg:text-xl mb-6">{description}</p>

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
