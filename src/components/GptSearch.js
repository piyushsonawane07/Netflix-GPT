import React, { useState } from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search query:", query);
    // Add your search logic here
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
