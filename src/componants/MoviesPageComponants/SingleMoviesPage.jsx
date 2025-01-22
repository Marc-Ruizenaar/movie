import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MoviesJumboHeader from "../MoviesJumboHeader";

export default function SingleMoviePage() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state || !location.state.movie) {
    navigate('/movies');
    return null;
  }
  const { movie } = location.state;

  return (
    <div className="container">
      <MoviesJumboHeader 
        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
        title={movie.title} 
        description={movie.overview} 
      />
     {movie.trailer && (
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.trailer}`}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}