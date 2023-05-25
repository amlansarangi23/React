// import React from "react";
// //eafdeb1c
// import { useEffect } from "react";
// import './App.css';
// import SearchIcon from './search.svg';
// const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=eafdeb1c';


// const movie1={
//         "Title": "Spider-Man Title Reveal",
//         "Year": "2021",
//         "imdbID": "tt14122734",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
// }

// const App=() =>{
// const searchMovies = async(title)=>{
//    const response = await fetch(`${API_URL}&s={title}`);
//    const data = await response.json();

//    console.log(data.Search);
// }
//    useEffect(()=>{
//    searchMovies('Spiderman');
// },[]);

//     return(
//         <div className="app">
//             <h1>MovieLand</h1>

//             <div className="search">
//                 <input placeholder="Search for movies" value="Superman"
//                  onChange={()=>{}} 
//                  />
//                 <img src={SearchIcon}
//                 alt="search"
//                 onClick={()=>{}}
//                 >
//                 </img>
               
//             </div>
//             <div className="container">
//                 <div className="movie">
//                     <div>
//                         <p>{movie1.Title}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     );
// }

// export default App;



import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MOVIE MAGIC</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>


      {/* Ternary Operator */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;