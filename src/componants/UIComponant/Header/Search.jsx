import React, { useState } from "react";
import "../../../css/searchBar.css";
import fetchSearchResults from "../../../api/TMDB/fetchSearchResults";
import { useNavigate } from "react-router-dom";

export default function Search({ isOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const results = await fetchSearchResults(searchQuery);

      navigate("/search-results", {
        state: {
          results: results,
          query: searchQuery,
        },
      });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="searchBar">
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
            className="search-input"
            autoFocus
          />

          <button type="submit">Search movies</button>
        </form>
      </div>
    </div>
  );
}
