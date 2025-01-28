import React, { createContext, useState, useContext } from 'react';

const LikedMoviesContext = createContext();

export const LikedMoviesProvider = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState([]);

  const addMovieToLiked = (movie) => {
    setLikedMovies((prevMovies) => {
      // Check if the movie is already in the liked movies list
      if (prevMovies.some((likedMovie) => likedMovie.id === movie.id)) {
        return prevMovies; // Return the existing list if the movie is already liked
      }
      return [...prevMovies, movie]; // Add the movie to the list if it's not already liked
    });
  };

  const removeMovieFromLiked = (movieId) => {
    setLikedMovies((prevMovies) => prevMovies.filter(movie => movie.id !== movieId));
  };

  return (
    <LikedMoviesContext.Provider value={{ likedMovies, addMovieToLiked, removeMovieFromLiked }}>
      {children}
    </LikedMoviesContext.Provider>
  );
};

export const useLikedMovies = () => {
  return useContext(LikedMoviesContext);
};