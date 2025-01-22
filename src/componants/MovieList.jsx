import React from "react";
import { useAPI } from "../api/TMDB/fetchAPIMovies";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const { movies, loading, error } = useAPI();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => navigate(`/movies/${generateSlug(movie.title)}`, { state: { movie } })}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}
