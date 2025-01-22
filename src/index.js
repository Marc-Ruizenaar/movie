import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import App from './App';
import Movies from './pages/movies';
import { APIProvider } from './api/TMDB/fetchAPIMovies';
import SingleMoviePage from './componants/MoviesPageComponants/SingleMoviesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APIProvider>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:slug' element={<SingleMoviePage />} />
        </Routes>

      </BrowserRouter>

    </APIProvider>

  </React.StrictMode>
);