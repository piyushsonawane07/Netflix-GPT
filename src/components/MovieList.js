import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies available.</div>;
  }

  return (
    <div className='py-4 px-6 scrollbar-hide'>
      <h1 className='text-white text-2xl font-bold mb-4'>{title}</h1>
      <div className='flex overflow-x-scroll space-x-4 scrollbar-hide'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
