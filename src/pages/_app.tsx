import { FirestoreContext } from "@providers/FirestoreContext";
import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [firestoreState, setFirestoreState] = useState({ lastAddedMovie: {} });
  const firestoreContextValue = useMemo(
    () => ({ firestoreState, setFirestoreState }),
    [firestoreState]
  );

  return (
    <FirestoreContext.Provider value={firestoreContextValue}>
      <Component {...pageProps} />
    </FirestoreContext.Provider>
  );
}

export default MyApp;
