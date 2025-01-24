import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchTrailer, fetchCast } from './fetchTrailer';

const APIMoviesContext = createContext();

export const APIProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMovies = async () => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU5MTEyMjIyNTI0N2YyZTUwODBjNTViODM4ZGFkNCIsIm5iZiI6MTczNzQ2MDY0Ny4wMDcsInN1YiI6IjY3OGY4YmE2NDM3NTg5ZjM4NjViMzNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O0J1pktH5uEx92R-uEeh_9RGQ7mOiCcCh3bOcM0Ho2A'
            }
        };

        try {
            setLoading(true);
            const response = await fetch(url, options);
            const data = await response.json();
            const moviesWithTrailers = await Promise.all(
                data.results.map(async (movie) => {
                    const trailerKey = await fetchTrailer(movie.id);
                    const cast = await fetchCast(movie.id);
                    return { ...movie, trailer: trailerKey, cast };
                })
            );
            setMovies(moviesWithTrailers);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <APIMoviesContext.Provider value={{ movies, loading, error }}>
            {children}
        </APIMoviesContext.Provider>
    );
};

export const useAPI = () => {
    const context = useContext(APIMoviesContext);
    if (context === undefined) {
        throw new Error('UseAPI must be used within an APIProvider');
    }
    return context;
};