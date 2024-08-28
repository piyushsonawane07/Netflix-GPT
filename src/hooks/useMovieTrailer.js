import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        TMDB_API_OPTIONS
        );
        const json = await data.json();
        const filteredTrailers = json.results.filter(
        (item) => item.type === "Trailer"
        );
        const trailer = filteredTrailers.length
        ? filteredTrailers[0]
        : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer