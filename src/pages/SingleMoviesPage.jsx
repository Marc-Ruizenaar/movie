import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLikedMovies } from "../componants/LikedMovies/LikedMoviesContext";
import JumboHeader from "../componants/UIComponant/JumboHeader";
import MovieTrailer from "../componants/SinglePage/MovieTrailer";
import Modal from "../componants/SinglePage/Modal";
import MovieDetailsContainer from "../componants/SinglePage/MovieDetailsContainer";
import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import Community from "../componants/HomePage/Community/Community";

export default function SingleMoviePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);
  const { addMovieToLiked } = useLikedMovies();


  if (!location.state || !location.state.movie) {
    navigate('/movies');
    return null;
  }
  const { movie } = location.state;

  const handlePlayButtonClick = () => {
    setShowTrailer(true);
  };
  const handleCloseModal = () => {
    setShowTrailer(false);
  };
  const handleLikeButtonClick = () => {
    addMovieToLiked(movie);
  };

  return (
    <>
      <Header />

      <div className="container">
        <JumboHeader
          image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          title={movie.title}
          description={movie.overview}
          onPlayButtonClick={handlePlayButtonClick}
          onAddToLikedMovies={handleLikeButtonClick}
        />
        <MovieDetailsContainer />
        <Modal show={showTrailer} onClose={handleCloseModal}>
          <MovieTrailer trailerKey={movie.trailer} title={movie.title} />
        </Modal>
        <Community />
      </div>
      <Footer />

    </>
  );
}