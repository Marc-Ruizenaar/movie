import { useAPI } from "../api/TMDB/fetchAPI";

export default function Movies() {
  const { movies, loading, error } = useAPI();

  return (
    <div>
      <h1>Movies</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}
