import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";

const dummyMovies = [
  {
    id: 1,
    title: "Some Dummy Movie 1",
    openingText: "This is the first opening text of the movie.",
    releaseDate: "2023-05-16",
  },
  {
    id: 2,
    title: "Some Dummy Movie 2",
    openingText: "This is the second opening text of the movie.",
    releaseDate: "2023-05-19",
  },
];

function App() {
  return (
    <>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={dummyMovies} />
      </section>
    </>
  );
}

export default App;
