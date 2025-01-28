import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import JumboHeader from "../componants/UIComponant/JumboHeader";
import MovieTrailer from "../componants/SinglePage/MovieTrailer";
import Modal from "../componants/SinglePage/Modal";
import MovieDetailsContainer from "../componants/SinglePage/MovieDetailsContainer";
import Header from "../pages/HomePage/Header/Header";
import Footer from "../pages/HomePage/Footer/Footer";
import StartTrail from "../pages/HomePage/StartTrail/StartTrail";

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
      <Header />
      <JumboHeader 
        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
        title={movie.title} 
        description={movie.overview} 
        onPlayButtonClick={handlePlayButtonClick}
      />
      <MovieDetailsContainer />
      <Modal show={showTrailer} onClose={handleCloseModal}>
        <MovieTrailer trailerKey={movie.trailer} title={movie.title} />
      </Modal>
      <StartTrail />
      <Footer />
    </div>
  );
}