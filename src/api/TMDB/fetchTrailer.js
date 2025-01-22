const API_KEY = '5d591122225247f2e5080c55b838dad4'; 

export const fetchTrailer = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
    const data = await response.json();
    const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    return trailer ? trailer.key : null;
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return null;
  }
};