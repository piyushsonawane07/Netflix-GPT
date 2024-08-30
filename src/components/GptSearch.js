import React, { useState } from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import openai from './../utils/openai';
import { TMDB_API_OPTIONS } from "../utils/constants";
import { json } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addGptSuggestions } from "../utils/gptSlice";

const GptSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const searchMovie = async (movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, TMDB_API_OPTIONS)
    const json = await data.json();
    return json.results;
  }

  const handleSearch = async () => {
    // console.log("Search query:", query);
    const prompt = "Act as a movie recommendation system and suggest some movies for the query: " + query +". only give me comma seperated names of five movies dont give numbers return in single line.  e.g movie1, movie2, movie3..."
    const results = await openai.chat.completions.create({
      messages: [{role: 'user', content: prompt}],
      model: 'gpt-3.5-turbo',
    });

    console.log(results.choices[0]?.message?.content);

    if(!results.choices) return;
    const movies = results.choices[0]?.message?.content.split(',');

    const data = movies.map(movie => searchMovie(movie))
    const tmdbResults = await Promise.all(data);

    const filteredResults = tmdbResults.map((result, index) => {
      return result.filter(movie => 
        movie.title.toLowerCase() === movies[index].trim().toLowerCase() && 
        movie.original_language === 'hi'
      );
    });
    
    dispatch(addGptSuggestions(filteredResults));
    
  };

  return (
    <div className="p-4 h-screen w-screen pt-32 px-52 bg-black">
      <div className="flex gap-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="border rounded px-2 py-1 w-full"
      />
      <button
        onClick={handleSearch}
        className="text-white text-sm font-semibold rounded-md bg-[#C31119] px-4 py-2 flex-shrink-0"
      >
        Search
      </button>
      </div>
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
