import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const trailerId = trailer?.key;

  return (
    <div className="absolute h-[140%] inset-0 z-0 w-screen aspect-w-16 aspect-h-9 mt-[-100px]">
      {trailerId ? (
        <iframe
          className="absolute w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&showinfo=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
