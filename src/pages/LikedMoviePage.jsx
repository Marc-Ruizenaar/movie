import React from "react";
import "../css/likedMoviePage.css";
import LikedMoviesList from "../componants/LikedMovies/LikedMoviesList";

export default function LikedMoviesPage() {

  return (
    <div className="liked-movies-page">
        <LikedMoviesList /> 
    </div>
  );
}