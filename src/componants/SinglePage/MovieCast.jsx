import React from "react";
import "../../css/singleMoviePage.css";

export default function MovieCast({ cast }) {
  if (!cast || cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <div className="movieCast">
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
              alt={actor.name} 
            />
            {/* {actor.name} as {actor.character} */}
          </li>
        ))}
      </ul>
    </div>
  );
}