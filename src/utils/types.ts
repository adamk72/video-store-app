export type Movie = {
  id: string;
  slug: string;
  title: string;
  likes?: string;
};

export type FirestoreState = {
  lastAddedId: string;
};
