
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Pagination from "../components/Pagination.jsx";
import { searchMovies } from "../services/omdbService.js";
import { useMovieContext } from "../context/MovieContext.jsx";

const Home = () => {
  const {
    movies,
    setMovies,
    query,
    setQuery,
    type,
    setType,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  } = useMovieContext(); // Use shared state

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");

  // Fetch movies when query or currentPage changes
  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      setLoading(true);
      setNotification("");
      try {
        const response = await searchMovies(query, type, currentPage);
        if (response.data.Response === "True") {
          setMovies(response.data.Search || []);
          setTotalPages(Math.ceil(response.data.totalResults / 10));
        } else {
          setMovies([]);
          setTotalPages(1);
          setNotification("No results found for your search. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setNotification("An error occurred while fetching movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, type, currentPage, setMovies, setTotalPages]);

  // Handle search
  const handleSearch = (searchQuery, movieType) => {
    setQuery(searchQuery); // Set query
    setType(movieType); // Set type (if provided)
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {notification && (
        <div className="bg-purple-100 text-gray-700 p-4 rounded-md mt-4 text-center">
          {notification}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {movies.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default Home;

