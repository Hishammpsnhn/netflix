import React from "react";
import ThumbnailCard from "../../components/ThumbnailCard";
import MovieBanner from "../../components/MovieBanner";

const HomePage = () => {
  const thumbnailData = [
    {
      imageUrl:
        "https://imgs.search.brave.com/-M_Q3vnxARIyOPunjS6BOQZTpWF5xOueLFrBkksKOuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzL3RyYWls/ZXJzL2VwaXNvZGVf/cG9zdGVyLzQ1NzQ3/X1N0cmFuZ2VyJTIw/VGhpbmdzJTIwMi5q/cGc",
      title: "Title 1",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/-M_Q3vnxARIyOPunjS6BOQZTpWF5xOueLFrBkksKOuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzL3RyYWls/ZXJzL2VwaXNvZGVf/cG9zdGVyLzQ1NzQ3/X1N0cmFuZ2VyJTIw/VGhpbmdzJTIwMi5q/cGc",
      title: "Title 2",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/-M_Q3vnxARIyOPunjS6BOQZTpWF5xOueLFrBkksKOuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzL3RyYWls/ZXJzL2VwaXNvZGVf/cG9zdGVyLzQ1NzQ3/X1N0cmFuZ2VyJTIw/VGhpbmdzJTIwMi5q/cGc",
      title: "Title 2",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/-M_Q3vnxARIyOPunjS6BOQZTpWF5xOueLFrBkksKOuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzL3RyYWls/ZXJzL2VwaXNvZGVf/cG9zdGVyLzQ1NzQ3/X1N0cmFuZ2VyJTIw/VGhpbmdzJTIwMi5q/cGc",
      title: "Title 2",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/-M_Q3vnxARIyOPunjS6BOQZTpWF5xOueLFrBkksKOuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzL3RyYWls/ZXJzL2VwaXNvZGVf/cG9zdGVyLzQ1NzQ3/X1N0cmFuZ2VyJTIw/VGhpbmdzJTIwMi5q/cGc",
      title: "Title 2",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/-M_Q3vnxARIyOPunjS6BOQZTpWF5xOueLFrBkksKOuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzL3RyYWls/ZXJzL2VwaXNvZGVf/cG9zdGVyLzQ1NzQ3/X1N0cmFuZ2VyJTIw/VGhpbmdzJTIwMi5q/cGc",
      title: "Title 2",
    },
    // Add more items here...
  ];

  return (
    <div className="bg-black text-white ">
      <header className="z-10 flex justify-between items-center px-40 py-6 text-white bg-transparent absolute w-full">
        <svg
          className="w-36 h-10 fill-current text-red-600"
          viewBox="0 0 111 30"
        >
          {/* SVG content goes here */}
        </svg>

        <div className="flex items-center space-x-4">
          {/* Language Selection */}
          <button className="flex items-center border border-gray-400 text-white text-sm px-3 py-1 rounded-md">
            <select className="bg-transparent outline-none text-white">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </button>

          {/* Sign In Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-3 py-1 rounded-md">
            Sign In
          </button>
        </div>
      </header>
      <MovieBanner
        backgroundImage={
          "https://imgs.search.brave.com/rCf92gNCbk0_2jF58FDDYNiAcXX2-cnMGZg0i27ljX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EQXhabVJq/TVdNdE5XVm1aUzAw/TW1JM0xXSmhOekl0/TnpSa1kyTXdZbVpr/WkdFeFhrRXlYa0Zx/Y0djQC5qcGc"
        }
        title={"title"}
        description={
          "lorem ipsum dolor sit amet, consectetur adip ex ea commod i minus inter "
        }
      />
      <h4>Popular</h4>
      <div className="m-20 mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {thumbnailData.map((thumbnail, index) => (
          <ThumbnailCard
            key={index}
            imageUrl={thumbnail.imageUrl}
            title={thumbnail.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
