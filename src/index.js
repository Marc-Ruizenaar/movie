import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import App from './App';
import { APIProvider } from './api/TMDB/fetchAPIMovies';
import { LikedMoviesProvider } from './componants/LikedMovies/LikedMoviesContext';
import SingleMoviePage from './pages/SingleMoviesPage';
import ArchiveMoviePage from './pages/ArchiveMoviePage';
import GenreArchivePage from './pages/GenreArchivePage';
import LikedMoviePage from './pages/LikedMoviePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LikedMoviesProvider>
    <APIProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/movies' element={<ArchiveMoviePage />} />
          <Route path='/movies/:slug' element={<SingleMoviePage />} />
          <Route path='/genre/:genreName' element={<GenreArchivePage />} />
          <Route path='/liked' element={<LikedMoviePage />} /> 
        </Routes>
      </BrowserRouter>
    </APIProvider>
    </LikedMoviesProvider>
  </React.StrictMode>
);