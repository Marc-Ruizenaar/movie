import { useAPI } from "../api/TMDB/fetchAPI";
import MoviesGenres from "../componants/MoviesGenres";
import MoviesJumboHeader from "../componants/MoviesJumboHeader";

export default function Movies() {
  const { movies, loading, error } = useAPI();

  console.log(movies);

  return (
    <div className="container">
      <MoviesJumboHeader />

      <MoviesGenres />
    </div>
  );
}
