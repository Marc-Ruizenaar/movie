import React from "react";
import LikedMoviesList from "./LikedMoviesList";
import Header from "../UIComponant/Header/Header";
import Footer from "../UIComponant/Footer/Footer";
import Community from "../HomePage/Community/Community";
import "../../css/likedMoviePage.css";




export default function LikedMoviesContaner() {
  return (
    <main>
      <div className="liked-movies-page container">
        <Header />
        <LikedMoviesList />

      </div>
      <div className="footer-sec">
        <div className="container">
          <Community />
        </div>
        <Footer />
      </div>
    </main>
  );
}