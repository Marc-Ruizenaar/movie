import React from "react";
import "../../../css/Community.css";
import backgroundImage from "../../../assets/images/background-videos.jpg";

export default function Community() {
  return (
    <section className="Community">
      <div>
        <h2>Start searching now!</h2>
        <p>
          Where are you waiting on? The movie business doesen't wait!
        </p>
      </div>

      <a className="freeTrailButton" href="/movies" aria-label="Search movies">Search movies</a>

      <img src={backgroundImage} alt="Background Videos" />
    </section>
  );
}
