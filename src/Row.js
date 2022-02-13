import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import instance from "./axios";
import "./Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      rel: 0,
      autohide: 1,
    },
  };
  const [trailerId, setTrailerId] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //
    (async function () {
      const data = await instance.get(fetchUrl);
      setMovies(data.data.results);
    })();
  }, [fetchUrl]);

  const handleMovieClick = async (movie) => {
    if (trailerId) {
      setTrailerId("");
    } else {
      const movieTrailerUrl = await movieTrailer(
        movie?.title || movie?.name || movie?.original_title
      );
      const trailerId = new URLSearchParams(new URL(movieTrailerUrl).search);
      console.log(trailerId.get("v"));
      setTrailerId(trailerId.get("v"));
    }
  };

  return (
    <div className="row">
      {/* title */}
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster  ${isLargeRow && "row__posterLarge "}`}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleMovieClick(movie)}
            />
          );
        })}
      </div>
      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </div>
  );
}

export default Row;
