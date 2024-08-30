import React from "react";
import { useSelector } from "react-redux";
import { POSTER_CDN_URL } from "../utils/constants";

const GptMovieSuggestions = () => {
  const suggestedMovies = useSelector((store) => store.gpt.gptSuggestions);

  // Filter out empty arrays, keep only the first item if there are multiple, and then flatten the array
  const validMovies = suggestedMovies
    .filter(arr => arr.length > 0) // Remove empty arrays
    .map(arr => arr.slice(0, 1)) // Keep only the first item in each array
    .flat(); // Flatten the array of arrays
  console.log(validMovies);
  
  return (
    <div className="py-4 px-6 scrollbar-hide flex justify-center pt-20">
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {validMovies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 text-center">
            <img
              className="w-full h-auto rounded-lg"
              src={POSTER_CDN_URL+movie.poster_path}
              alt={movie.title}
            />
            <p className="mt-2 text-md text-white font-bold">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
