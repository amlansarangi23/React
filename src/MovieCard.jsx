import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { imdbID, Year, Poster, Title, Type, Plot } = movie;

  return (
    <Link to={`/movie/${imdbID}`} state={{ movie }} className="movie-card">
      <div className="movie">
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
          <p>{Plot}</p> {/* Display the plot here */}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
