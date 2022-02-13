const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const baseUrl = "https://image.tmdb.org/t/p/original";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchAnimationMovies: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeMovies: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
