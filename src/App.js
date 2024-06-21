import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import SearchBar from './SearchBar';
import './App.css';

const API_URL = 'https://www.omdbapi.com?i=tt3896198&apikey=b6003d8a';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log("OMDB API Response:", data);

    setMovies(data.Search);
  };

  return (
    <Router>
      <div className="app">
        <h1>WAREHOUSE</h1>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchMovies={searchMovies}
        />
        <Routes>
          <Route
            path="/"
            element={
              movies?.length > 0 ? (
                <div className="container">
                  {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))}
                </div>
              ) : (
                <div className="empty">
                  <h2>No movies found</h2>
                </div>
              )
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
