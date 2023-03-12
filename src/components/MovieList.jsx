import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
