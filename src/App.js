import "./App.css";
import Moviecard from "./moviecard";
import SearchIcon from "./search.svg";
import React, { useEffect, useState } from "react";
// 63e6e1fe

const API_URL = "https://www.omdbapi.com/?&apikey=63e6e1fe";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchmovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchmovie("");
  }, []);

  return (
    <div className="app">
      <h1>CineFlix</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchmovie(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviecard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Movie not found</h2>
        </div>
      )}
    </div>
  );
};

export default App;