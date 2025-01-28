import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchGenres from "../api/TMDB/fetchGenres";
import MovieList from "../componants/ArchivePage/MovieList";

export default function GenreArchivePage() {
  const [genres, setGenres] = useState([]);
  const { genreName } = useParams();

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const genreData = await fetchGenres();
        setGenres(genreData);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    loadGenres();
  }, []);

  console.log("Genres:", genres);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Browse Genres {genreName ? ` ${genreName}` : ""}
      </h1>

      <MovieList category={genreName} />
    </div>
  );
}
