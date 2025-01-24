import React from "react";
import { useAPI } from "../../api/TMDB/fetchAPIMovies";
import { useNavigate } from "react-router-dom";
import { HiCalendarDateRange } from "react-icons/hi2";
import StarSmaller from "./StarSmaller";
import "../css/StarSmaller.css";

export default function MovieList() {
  const { movies, loading, error } = useAPI();

  console.log(movies);
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };
  return (
    <div className="MovieGrid">
      {movies.map((movie) => (
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
