import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchGenres from "../api/TMDB/fetchGenres";
import MovieList from "../componants/ArchivePage/MovieList";
import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import "../css/genres.css";

// refactor for readability
const useGenreId = (genreName) => {
  const [genreId, setGenreId] = useState(null);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const genreData = await fetchGenres();
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

  return genreId;
};

// refactor for readability
const MainContent = ({ genreName, genreId }) => (
  <div className="container genres">
    <h1>Browse Genres {genreName ? ` ${genreName}` : ""}</h1>
    {genreId && <MovieList category={genreId} />}
  </div>
);

export default function GenreArchivePage() {
  const { genreName } = useParams();
  const genreId = useGenreId(genreName);

  return (
    <main>
      <Header />
      <MainContent genreName={genreName} genreId={genreId} />
      <Footer />
    </main>
  );
}
