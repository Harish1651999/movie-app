import React from "react";
import classes from "./MovieList.module.css";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <>
      <ul className={classes["movies-list"]}>
        {props.movies.map((movie) => (
          <Movie
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
