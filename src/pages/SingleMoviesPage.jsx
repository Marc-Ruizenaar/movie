import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import JumboHeader from "../componants/UIComponant/JumboHeader";
import MovieOverview from "../componants/SinglePage/MovieOverview";
import MovieCast from "../componants/SinglePage/MovieCast";
import MovieTrailer from "../componants/SinglePage/MovieTrailer";
import Modal from "../componants/SinglePage/Modal";
import MovieOther from "../componants/SinglePage/MovieOther";
import MovieReviews from "../componants/SinglePage/MovieReviews";

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
      <JumboHeader 
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
        popularity={movie.popularity}
        voteCount={movie.vote_count}
        genreIds={movie.genre_ids || []}
      />
      <MovieReviews movieId={movie.id} /> {/* Use the MovieReviews component */}

      
      <Modal show={showTrailer} onClose={handleCloseModal}>
        <MovieTrailer trailerKey={movie.trailer} title={movie.title} />
      </Modal>
    </div>
  );
}