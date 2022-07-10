import { Movie } from "@utils/types";
import { MovieCard } from "./MovieCard";

export const MovieCardList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex flex-col flex-nowrap gap-4 lg:flex-row">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {/* Spacer so that the last card doesn't bump-up against the border frame */}
      <div className="p-2" />
    </div>
  );
};
