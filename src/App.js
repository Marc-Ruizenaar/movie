import { useAPI } from "./api/TMDB/fetchAPIMovies";
import MovieList from "./componants/MovieList";

import HomePage from "./pages/HomePage/HomePage";

export default function App() {
  const { movies, loading, error } = useAPI();

  return (
    <div className="App">
      <HomePage /> 
      <MovieList />
    </div>
  );
}
