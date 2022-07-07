import { Movie, MovieCard } from "./MovieCard";

export const MovieCardList = ({ movies }: { movies: Movie[] }) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};
