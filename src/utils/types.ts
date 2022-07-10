export type Movie = {
  id: string;
  slug: string;
  title: string;
  likes?: string;
};

export type FirestoreState = {
  lastAddedMovie: Partial<Movie>; // keeping this simple for now. Would otherwise be more specific with the typing.
};
