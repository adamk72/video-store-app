import { Movie } from "@utils/types";
import { MovieCard } from "./MovieCard";

export const MovieCardList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex flex-row flex-nowrap gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
