import React from 'react';

const ThumbnailCard = ({ imageUrl, title }) => {
  return (
    <div className="relative w-60 h-36 overflow-hidden rounded-lg cursor-pointer group mb-10">
      {/* Thumbnail Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
        <h3 className="text-white text-sm font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default ThumbnailCard;
