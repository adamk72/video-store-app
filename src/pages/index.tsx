import { Layout } from "@components/elements/Layout";
import { MovieCardList } from "@components/specs/MovieCardList";
import { FirestoreContext } from "@providers/FirestoreContext";
import { serverSideFetchMovies } from "@utils/serverFetchUtils";
import { Movie } from "@utils/types";
import type { NextPage } from "next";
import Router from "next/router";

import { useContext, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

type HomePageProps = {
  movies: Movie[];
};
const Home: NextPage<HomePageProps> = ({ movies }) => {
  const { firestoreState: firestoreState } = useContext(FirestoreContext);
  useEffect(() => {
    const lastAdded = firestoreState.lastAddedMovie;
    if (lastAdded) Router.push("/");
  }, [firestoreState]);

  return (
    <Layout>
      <ScrollContainer
        className="scrollbar-width-override w-3/4 cursor-ew-resize justify-center"
        hideScrollbars={false}
      >
        <MovieCardList movies={movies} />
      </ScrollContainer>
    </Layout>
  );
};

export async function getServerSideProps() {
  const movies = await serverSideFetchMovies();
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
