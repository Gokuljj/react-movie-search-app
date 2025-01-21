import { Link } from 'react-router-dom';
import { FaAnglesRight } from "react-icons/fa6";

// Movie Card component
const MovieCard = ({ movie }) => {
    return (
    <div className="p-4 border border-gray-600 rounded-md bg-gray-800 shadow flex flex-col items-center">
      <img 
        src={movie.Poster} 
        alt={movie.Title} 
        className="w-full h-64 object-cover rounded-md" 
      />
      <h3 className="mt-2 text-lg font-semibold text-gray-200 text-center">{movie.Title}</h3>
      <p className="text-sm text-gray-400">{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} className="mt-2 text-purple-600 font-semibold hover:text-purple-700 transition duration-300 ease-in-out flex items-center">
        <FaAnglesRight className="text-lg mr-2" />
        View Details
      </Link>
    </div>
      );
};

export default MovieCard;