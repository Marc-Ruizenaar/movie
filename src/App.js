import { useAPI } from './api/TMDB/fetchAPIMovies';
import MovieList from './componants/MovieList';

export default function App() {
  const { movies, loading, error } = useAPI();

  return (
    <div className="App">

      <div className='container'>
        <MovieList />
      </div>
    </div>
  );
}