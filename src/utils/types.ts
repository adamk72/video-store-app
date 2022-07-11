export type CmsMovie = {
  id: number;
  attributes: Movie;
};
export type Movie = {
  id: string;
  slug?: string;
  title: string;
  likes?: string;
};

export type FirestoreState = {
  lastAddedMovie: Movie; // keeping this simple for now. Would otherwise be more specific with the typing.
};
