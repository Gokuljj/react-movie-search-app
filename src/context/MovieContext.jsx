import React, { createContext, useContext, useState } from "react";

// Create MovieContext
const MovieContext = createContext();

// Context provider component
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]); // Movie list
  const [query, setQuery] = useState(""); // Search query
  const [type, setType] = useState(""); // Movie type
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total pages

  return (
    <MovieContext.Provider
      value={{
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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook to use MovieContext
export const useMovieContext = () => useContext(MovieContext);
