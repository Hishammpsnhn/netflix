import React from "react";
import { useNavigate } from "react-router-dom";

const ThumbnailCard = ({ imageUrl, title }) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-60 h-36 overflow-hidden rounded-lg cursor-pointer group mb-10 m-auto"
      onClick={() => navigate("/home/vedio")}
    >
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
