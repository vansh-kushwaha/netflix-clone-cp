import React, { useEffect, useState } from "react";
import instance from "./axios";
import requests, { baseUrl } from "./requests";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState({
    name: "",
    overview: "",
    backdrop_path: "",
  });

  useEffect(() => {
    (async function () {
      const movie = await instance.get(requests.fetchTopRated);
      console.log(
        movie.data.results[
          Math.floor(Math.random() * movie.data.results.length - 1)
        ]
      );
      setMovie(
        movie.data.results[
          Math.floor(Math.random() * movie.data.results.length - 1)
        ]
      );
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner">
      <img
        className="banner__poster"
        src={`${movie ? baseUrl + movie.backdrop_path : ""}`}
        alt={movie.name}
      />
      <div className="banner__contents">
        <h1 className="banner__contents_title">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <div className="banner__description">
          {truncate(movie.overview, 250)}
        </div>
      </div>
      <div className="banner__poster__gradient"></div>
    </header>
  );
}

export default Banner;
