import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./moviecard";
import SearchIcon from "./search.svg";
//73f8b83
const API_URL = "http://www.omdbapi.com/?apikey=73f8b83";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies('');
  }, []);
  return (
    <div className="app">
      <h1>CineFlix</h1>

      <div className="search">
        <input placeholder="Search Movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Movie Not Found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
