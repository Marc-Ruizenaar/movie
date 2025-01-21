import React from "react";
import { useAPI } from "../api/TMDB/fetchAPI";

export default function MovieList() {
  const { movies, loading, error } = useAPI();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}
