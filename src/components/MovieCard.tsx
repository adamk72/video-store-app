import { Movie } from "@utils/types";
import { LikeButton } from "./LikeButton";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <article className="h-64 w-64 mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <div className="flex items-center justify-center h-full flex-col">
        <span className="block">{movie.title}</span>
        <LikeButton />
      </div>
    </article>
  );
};
