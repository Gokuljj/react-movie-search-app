const MovieDetails = ({ movie }) => {

  if (!movie) {
    return <div>Loading Movie Details...</div>; //handle case when movie is not loaded yet
  }

    return (
<div className="flex flex-col md:flex-row gap-6 bg-gray-800 rounded-md shadow p-6">
  <img
    src={movie.Poster}
    alt={movie.Title}
    className="w-full md:w-1/3 h-auto object-cover rounded-md"
  />
  <div className="flex-1">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold text-gray-200">{movie.Title}</h2>
      <p className="text-gray-400">
        <strong className="mr-2 font-semibold">Director:</strong> {movie.Director}
      </p>
    </div>

    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      <p className="text-gray-400">
        <strong className="mr-2 font-semibold">Year:</strong> {movie.Year}
      </p>
      <p className="text-gray-400">
        <strong className="mr-2 font-semibold">Genre:</strong> {movie.Genre}
      </p>
      <p className="text-gray-400">
        <strong className="mr-2 font-semibold">Cast:</strong> {movie.Actors}
      </p>
    </div>

    {/* rating */}
    <div>
      <h4 className="mt-4 font-semibold text-xl text-gray-200">Ratings:</h4>
      {movie.Ratings && movie.Ratings.length > 0 ? (
        movie.Ratings.map((rating, index) => (
          <p key={index} className="text-gray-400">
            <strong className="mr-2 font-semibold">{rating.Source}:</strong> {rating.Value}
          </p>
        ))
      ) : (
        <p className="text-gray-400">No ratings available.</p>
      )}
    </div>

    <p className="mt-4 text-gray-400">{movie.Plot}</p>
  </div>
</div>  
    );
  };
  
  export default MovieDetails;
  