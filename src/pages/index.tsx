import { Layout } from "@components/elements/Layout";
import { MovieCardList } from "@components/specs/MovieCardList";
import { FirestoreContext } from "@providers/FirestoreContext";
import { CARD_ID_PREFIX } from "@utils/constants";
import { serverSideFetchMovies } from "@utils/strapi/serverFetchUtils";
import { Movie } from "@utils/types";
import type { NextPage } from "next";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

type HomePageProps = {
  movies: Movie[];
};
const Home: NextPage<HomePageProps> = ({ movies }) => {
  const [scrollEl, setScrollEl] = useState<Element>();
  const { firestoreState } = useContext(FirestoreContext);
  useEffect(() => {
    const lastAdded = firestoreState.lastAddedMovie;
    if (lastAdded) {
      Router.push("/", "", { scroll: false });
      const el = document.querySelector(`#${CARD_ID_PREFIX}${lastAdded.id}`);
      if (el) setScrollEl(el);
    }
  }, [firestoreState]);

  useEffect(() => {
    if (scrollEl) {
      scrollEl.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [scrollEl]);

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
  const cmsMovies = await serverSideFetchMovies();
  if (!cmsMovies) {
    return {
      notFound: true,
    };
  }
  const movies = cmsMovies.map((movie) => ({
    ...movie.attributes,
    id: movie.id,
  }));
  return {
    props: { movies: movies },
  };
}

export default Home;
