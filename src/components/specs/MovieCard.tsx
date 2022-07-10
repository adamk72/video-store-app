import { Movie } from "@utils/types";
import { Likes } from "./Likes";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <article className="mx-auto mt-4 h-64 w-64 flex-shrink-0 rounded-md border shadow-lg duration-300 hover:shadow-sm">
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <span className="text-center">{movie.title}</span>
        <Likes count={parseInt(movie.likes || "0")} id={movie.id} />
      </div>
    </article>
  );
};
