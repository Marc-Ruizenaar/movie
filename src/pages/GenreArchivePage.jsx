import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchGenres from "../api/TMDB/fetchGenres";
import MovieList from "../componants/ArchivePage/MovieList";
import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import "../css/Genres.css";

export default function GenreArchivePage() {
  const [genreId, setGenreId] = useState(null);
  const { genreName } = useParams();

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const genreData = await fetchGenres();

        // Find the corresponding genre ID
        const genre = genreData.find(
          (g) => g.name.toLowerCase() === genreName?.toLowerCase()
        );
        if (genre) {
          setGenreId(genre.id);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    loadGenres();
  }, [genreName]);

  return (
    <main>
      <Header />

      <div className="container genres">
        <h1>Browse Genres {genreName ? ` ${genreName}` : ""}</h1>

        {genreId && <MovieList category={genreId} />}
      </div>
      <Footer />
    </main>
  );
}
