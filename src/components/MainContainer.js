import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies);
    if(!movies) return;
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 19) + 1;
      }
    const mainMovie = movies[getRandomNumber()];
    // console.log(mainMovie);
    const {original_title, overview, id} = mainMovie;

  return (
    <div className="relative h-screen overflow-hidden">
        <VideoBackground movieId={id} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer;
