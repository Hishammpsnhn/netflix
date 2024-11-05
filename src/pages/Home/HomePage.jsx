import React, { useEffect, useState } from "react";
import ThumbnailCard from "../../components/ThumbnailCard";
import MovieBanner from "../../components/MovieBanner";
import Header from "../../components/Header";
import Img2 from "../../assets/VAL_203_Unit_00436RC.webp";
import { useNavigate } from "react-router-dom";
import {thumbnailData} from '../../utils/MockData'
const HomePage = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=f2471c97322f5bfdb488b81a07327c70&query=car"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("userInfoNet");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="bg-black text-white ">
      <Header />
      <MovieBanner
        backgroundImage={Img2}
        title={"title"}
        description={
          "lorem ipsum dolor sit amet, consectetur adip ex ea commod i minus inter "
        }
      />
      <div className="relative top-72">
        <div className=" m-20 mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {movies.map((thumbnail, index) => (
            <ThumbnailCard
              key={index}
              imageUrl={`https://image.tmdb.org/t/p/w500${thumbnail.poster_path}`}
              title={thumbnail.title}
            />
          ))}
        </div>
        <h1 className="mx-28 font-semibold text-4xl my-0">POPULAR</h1>
        <div className=" mx-20 mb-0 mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {thumbnailData.map((thumbnail, index) => (
            <ThumbnailCard
              key={index}
              imageUrl={thumbnail.imageUrl}
              title={thumbnail.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
