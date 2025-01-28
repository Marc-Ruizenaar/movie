import React, { useEffect, useState } from "react";
import { useAPI } from "../../api/TMDB/fetchAPIMovies";
import { useNavigate } from "react-router-dom";
import { HiCalendarDateRange } from "react-icons/hi2";
import StarSmaller from "./StarSmaller";
import "../../css/StarSmaller.css";
import "../../css/MovieGrid.css";

export default function MovieList({ category }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { movies, loading, error } = useAPI();
  const navigate = useNavigate();

  // Generate slug for the URL
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  useEffect(() => {
    // If category is provided, filter movies based on category
    if (category && movies) {
      const categoryMovies = movies.filter((movie) =>
        movie.genre_ids.includes(parseInt(category))
      );
      setFilteredMovies(categoryMovies);
    } else {
      setFilteredMovies(movies);
    }
  }, [category, movies]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="MovieGrid">
      {filteredMovies.map((movie) => (
        <a
          className="inner"
          key={movie.id}
          onClick={() =>
            navigate(`/movies/${generateSlug(movie.title)}`, {
              state: { movie },
            })
          }
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="content">
            <span className="time">
              <HiCalendarDateRange size={20} fill="#999999" />
              <p>{movie.release_date}</p>
            </span>
            <StarSmaller rating={movie.vote_average} />
          </div>
        </a>
      ))}
    </div>
  );
}
