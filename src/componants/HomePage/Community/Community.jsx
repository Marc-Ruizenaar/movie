import React from "react";
import "../../../css/Community.css";
import backgroundImage from "../../../assets/images/background-videos.jpg";

export default function Community() {
  return (
    <section className="Community">
      <div>
        <h2>Start your free trial today!</h2>
        <p>
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </p>
      </div>

      <a className="freeTrailButton" href="/movies">Start a Free Trail</a>

      <img src={backgroundImage} alt="Background Videos" />
    </section>
  );
}
