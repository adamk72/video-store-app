import { DbContext, initDbMovie } from "@providers/DbContext";
import { Movie } from "@utils/types";
import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [dbState, setDbState] = useState<{
    lastAddedMovie: Movie;
  }>({ lastAddedMovie: initDbMovie });

  const dbContextValue = useMemo(() => ({ dbState, setDbState }), [dbState]);

  return (
    <DbContext.Provider value={{ dbState, setDbState }}>
      <Component {...pageProps} />
    </DbContext.Provider>
  );
}

export default MyApp;
