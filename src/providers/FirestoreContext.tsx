import { Movie } from "@utils/types";
import { createContext, Dispatch, SetStateAction } from "react";

export const initFirestoreMovie: Movie = { title: "", id: "", slug: "" };

interface FirestoreContext {
  firestoreState: { lastAddedMovie: Movie };
  setFirestoreState: Dispatch<SetStateAction<{ lastAddedMovie: Movie }>>;
}

export const FirestoreContext = createContext<FirestoreContext>({
  firestoreState: { lastAddedMovie: initFirestoreMovie },
  setFirestoreState: () => {},
});
