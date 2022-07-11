import db from ".";

const serverCollectionFetch = async (collection: string) => {
  const entriesCol = await db.collection(collection).orderBy("title").get();
  const entries = entriesCol.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));
  return entries;
};

export const serverSideFetchMovies = async () =>
  serverCollectionFetch("movies");
