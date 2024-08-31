
export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.TMDB_AUTH,
  },
};

export const POSTER_CDN_URL = "https://image.tmdb.org/t/p/w200"

export const OPENAI_API_KEY = process.env.OPEN_AI_KEY