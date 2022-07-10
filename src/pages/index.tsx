import { Layout } from "@components/elements/Layout";
import { MovieCardList } from "@components/specs/MovieCardList";
import { FirestoreContext } from "@providers/FirestoreContext";
import { fetchMovies } from "@utils/serverFetchUtils";
import { Movie } from "@utils/types";
import type { NextPage } from "next";

import { useContext, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

type HomePageProps = {
  movies: Movie[];
};
const Home: NextPage<HomePageProps> = ({ movies }) => {
  const { state: firestoreState } = useContext(FirestoreContext);
  console.log("firestorestate", firestoreState);
  useEffect(() => {}, [firestoreState]);

  return (
    <Layout>
      <ScrollContainer
        className="scrollbar-width-override w-3/4 cursor-ew-resize justify-center"
        hideScrollbars={false}
      >
        <MovieCardList movies={movies} lastAdded={firestoreState.lastAddedId} />
      </ScrollContainer>
    </Layout>
  );
};

export async function getServerSideProps() {
  const movies = await fetchMovies();
  if (!movies) {
    return {
      notFound: true,
    };
  }
  return {
    props: { movies },
  };
}

export default Home;
