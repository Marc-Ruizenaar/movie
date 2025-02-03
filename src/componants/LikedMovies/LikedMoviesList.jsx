import React from "react";
import { useLikedMovies } from "./LikedMoviesContext";
import { Link } from "react-router-dom";
import "../../css/likedMoviePage.css";

export default function LikedMoviesList() {
  const { likedMovies, removeMovieFromLiked } = useLikedMovies();

  return (
    <div className="liked-movies-container">
      <h2>Liked Movies</h2>
      {likedMovies.length === 0 ? (
        <p>No Liked Movies Yet.</p>
      ) : (
        <ul>
          {likedMovies.map((movie) => (
            <li key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <button onClick={() => removeMovieFromLiked(movie.id)}>Remove</button>
                <Link className="link" to={{ pathname: `/movies/${movie.id}`, state: { movie } }}>View Details</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}