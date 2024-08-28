import React from 'react'
import { POSTER_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  const imageUrl = posterPath ? `${POSTER_CDN_URL}${posterPath}` : '/path/to/default/image.jpg';
  
  return (
    <div className='flex-shrink-0'>
      <img className='w-full h-auto rounded-lg' src={imageUrl} alt="poster_image" />
    </div>
  )
}

export default MovieCard
