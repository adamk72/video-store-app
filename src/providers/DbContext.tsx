import { Movie } from "@utils/types";
import { createContext, Dispatch, SetStateAction } from "react";

export const initDbMovie: Movie = { title: "", id: "", slug: "" };

interface DbContext {
  dbState: { lastAddedMovie: Movie };
  setDbState: Dispatch<SetStateAction<{ lastAddedMovie: Movie }>>;
}

export const DbContext = createContext<DbContext>({
  dbState: { lastAddedMovie: initDbMovie },
  setDbState: () => {},
});
