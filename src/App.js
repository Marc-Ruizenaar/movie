import { useAPI } from './api/TMDB/fetchAPI';
import MovieList from './componants/MovieList';

export default function App() {
    const { movies, loading, error } = useAPI();
  
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}