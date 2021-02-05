import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./components/MoviesData";
import Main from "./components/Main";
import Header from "./components/Header/Header";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const AddNewMovie = (x) => {
    setMovies([...movies, x]);
  };

  return (
    <div className="App">
      <Header
        setSearch={setSearch}
        searchRate={searchRate}
        setSearchRate={setSearchRate}
      />
      <Main
        movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(search.toLowerCase().trim()) &&
            el.rating >= searchRate
        )}
        AddNewMovie={AddNewMovie}
      />
    </div>
  );
}

export default App;
