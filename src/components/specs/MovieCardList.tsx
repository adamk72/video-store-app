import { Movie } from "@utils/types";
import { MovieCard } from "./MovieCard";

export const MovieCardList = ({
  movies,
  lastAdded,
}: {
  movies: Movie[];
  lastAdded: string;
}) => {
  console.log("lastAdded", lastAdded);
  return (
    <div className="flex flex-row flex-nowrap gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isNew={movie.id === lastAdded ? true : false}
        />
      ))}
    </div>
  );
};
