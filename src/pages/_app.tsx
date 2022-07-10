import { FirestoreContext } from "@providers/FirestoreContext";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [fsState, setFsState] = useState({ lastAddedId: " " });
  return (
    <FirestoreContext.Provider value={{ state: fsState, setState: setFsState }}>
      <Component {...pageProps} />
    </FirestoreContext.Provider>
  );
}

export default MyApp;
