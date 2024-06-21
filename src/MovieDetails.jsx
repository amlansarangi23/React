import React from "react";
import { useLocation } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state || {};
  console.log("Movie JSON:", movie);

  return (
    <div className="movie-details">
      {movie ? (
        <>
          <div className="left">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
          </div>
          <div className="right">
            <h2>{movie.Title} ({movie.Year})</h2>
            <p><strong>Type:</strong> {movie.Type.toUpperCase()}</p>
            <p><strong>Plot:</strong> {movie.Plot} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Phasellus lacinia fermentum massa, ac ultrices eros viverra et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus at illum, rerum eligendi fugiat culpa! Eum sequi quas delectus vel, repellendus omnis nihil itaque consequatur error voluptas ducimus quisquam quam perferendis laborum. Quo, laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia rem omnis tempora accusamus possimus reprehenderit doloremque illo pariatur illum cum.</p>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default MovieDetails;
