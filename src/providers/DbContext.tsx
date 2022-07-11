import { Movie } from "@utils/types";
import { createContext, Dispatch, SetStateAction } from "react";

export const initDbState = { lastAddedMovie: { title: "", id: "", slug: "" } };
type DbContextState = { lastAddedMovie?: Movie; error?: string };

interface DbContext {
  dbState: DbContextState;
  setDbState: Dispatch<SetStateAction<DbContextState>>;
}

export const DbContext = createContext<DbContext>({
  dbState: initDbState,
  setDbState: () => {},
});
