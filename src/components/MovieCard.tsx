export type Movie = {
  title: string;
  id: string;
};

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <article className="h-64 w-64 mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      {/* <Image
          src={movie.img}
          loading="lazy"
          alt={movie.title}
          className="w-full h-48 rounded-t-md"
        /> */}
      <div className="flex items-center justify-center h-full">
        <span className="block text-gray-900">{movie.title}</span>
      </div>
    </article>
  );
};
