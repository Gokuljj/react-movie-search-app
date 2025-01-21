import { useState } from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('');

    const handleSearch = () => {
        onSearch(query, type);
    };

    return (
        <div className="flex flex-col justify-center sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Explore movies and TV series..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border border-gray-600 rounded-md w-full sm:w-72 bg-gray-800 text-gray-200"
          />
         <select
           value={type}
           onChange={(e) => setType(e.target.value)}
           className="px-4 py-2 border border-gray-600 rounded-md w-full sm:w-auto bg-gray-800 text-gray-200"
         >
           <option value="">All</option>
           <option value="movie">Movie</option>
           <option value="series">Tv Series</option>
           <option value="episode">Episode</option>
         </select>
          <button
            onClick={handleSearch}
            className="px-6 py-2 text-white bg-purple-600 rounded-md w-full sm:w-auto hover:bg-purple-700 transition duration-300 ease-in-out flex items-center justify-center"
          >
            <IoSearch className="text-2xl mr-2" />
            <span className="text-lg">Search</span>
          </button>
        </div>
      );  
};

export default SearchBar;