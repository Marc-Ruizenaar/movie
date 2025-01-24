import React from "react";
import "../../css/singleMoviePage.css";

export default function MovieOverview({ title, description, children }) {
  return (
    <div className="movieOverview">
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
}