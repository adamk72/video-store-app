export type CmsMovie = {
  id: number;
  attributes: Movie;
};
export type Movie = {
  id: string;
  slug?: string;
  title: string;
  likes?: number;
};

export type DbState = {
  lastAddedMovie: Movie; // keeping this simple for now. Would otherwise be more specific with the typing.
};

export type StrapiRestError = {
  data?: null;
  error: {
    status: string;
    name: string;
    message: string;
    details: {};
  };
};
