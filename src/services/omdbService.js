import axios from "axios";

const API_KEY = "28f42b94";
const BASE_URL = "https://www.omdbapi.com";


// search movies
export const searchMovies = (query, type, page) => 
    axios.get(BASE_URL, {
        params: { s: query, type, page, apikey: API_KEY },
    });

// get movie details
export const getMovieDetails = (id) => 
    axios.get(BASE_URL, {
        params: { i: id, apikey: API_KEY },
    });
