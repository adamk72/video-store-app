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
        className="scrollbar-width-override h-[75vh] cursor-ns-resize justify-center rounded-md border-4 border-card-list-edge p-6 lg:h-full lg:w-3/4 lg:cursor-ew-resize"
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
