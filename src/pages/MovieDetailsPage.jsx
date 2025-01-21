
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../services/omdbService.js";
import MovieDetails from "../components/MovieDetails.jsx";
import { IoMdArrowRoundBack } from "react-icons/io";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await getMovieDetails(id);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)} // Navigate back
        className="mb-4 px-4 py-2 bg-purple-600 text-white rounded-md flex items-center gap-1 hover:bg-purple-700 transition duration-300 ease-in-out"
      >
        <IoMdArrowRoundBack />
        Back to Home
      </button>

      {loading && <p className="text-gray-400">Loading...</p>}
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
};

export default MovieDetailsPage;

