import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MoviesJumboHeader from "../MoviesJumboHeader";
import MovieOverview from "./MovieOverview";
import MovieCast from "./MovieCast";
import MovieTrailer from "./MovieTrailer";
import Modal from "./Modal";
import MovieOther from "./MovieOther";

export default function SingleMoviePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);

  if (!location.state || !location.state.movie) {
    navigate('/movies');
    return null;
  }
  const { movie } = location.state;

  const handlePlayButtonClick = () => 
    {setShowTrailer(true);
  };
  const handleCloseModal = () => {
    setShowTrailer(false);
  };

  return (
    <div className="container">
      <MoviesJumboHeader 
        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
        title={movie.title} 
        description={movie.overview} 
        onPlayButtonClick={handlePlayButtonClick}
      />
      
      <MovieOverview title="Overview" description={movie.overview} />
      <MovieCast cast={movie.cast || []} />
      <MovieOther
        rating={movie.vote_average}
        releaseDate={movie.release_date}
        languages={[movie.orignal_language]}
        popularity={movie.popularity}
        voteCount={movie.vote_count}
        genreIds={movie.genre_ids || []}
      />
      
      <Modal show={showTrailer} onClose={handleCloseModal}>
        <MovieTrailer trailerKey={movie.trailer} title={movie.title} />
      </Modal>
    </div>
  );
}