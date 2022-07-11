import {
  FirestoreContext,
  initFirestoreMovie,
} from "@providers/FirestoreContext";
import { Movie } from "@utils/types";
import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("**** START ****");
  const [firestoreState, setFirestoreState] = useState<{
    lastAddedMovie: Movie;
  }>({ lastAddedMovie: initFirestoreMovie });

  const firestoreContextValue = useMemo(
    () => ({ firestoreState, setFirestoreState }),
    [firestoreState]
  );

  return (
    <FirestoreContext.Provider value={{ firestoreState, setFirestoreState }}>
      <Component {...pageProps} />
    </FirestoreContext.Provider>
  );
}

export default MyApp;
