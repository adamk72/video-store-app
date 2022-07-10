import { createContext } from "react";

export const FirestoreContext = createContext({
  firestoreState: { lastAddedMovie: {} },
  setFirestoreState: ({ lastAddedMovie: {} }) => {},
});
