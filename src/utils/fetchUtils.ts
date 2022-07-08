import db from "./db";

export const fetchMovies = async () => {
  const moviesCol = await db.collection("movies").get();
  const movies = moviesCol.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));
  return movies;
};
