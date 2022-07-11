import { Layout } from "@components/elements/Layout";
import { MovieCardList } from "@components/specs/MovieCardList";
import { DbContext } from "@providers/DbContext";
import { CARD_ID_PREFIX } from "@utils/constants";
import { serverSideFetchMovies } from "@utils/strapi/serverFetchUtils";
import { Movie } from "@utils/types";
import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

type HomePageProps = {
  movies: Movie[];
};

const Home: NextPage<HomePageProps> = ({ movies }) => {
  const [scrollEl, setScrollEl] = useState<Element>();
  const [errorMessage, _setErrorMessage] = useState("");
  const { dbState } = useContext(DbContext);
  useEffect(() => {
    const { lastAddedMovie, error } = dbState;
    if (lastAddedMovie) {
      const el = document.querySelector(
        `#${CARD_ID_PREFIX}${lastAddedMovie.id}`
      );
      if (el) setScrollEl(el);
    }
    if (error) {
      console.log(error);
      // @todo: a better ui.
      // setErrorMessage(txt.errors.duplicateName);
    }
  }, [dbState]);

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
      <div className="flex h-[75vh] flex-col items-center lg:h-full lg:w-[75vw]">
        <ScrollContainer
          className="scrollbar-width-override w-full cursor-ns-resize justify-center rounded-md border-4 border-card-list-edge p-6 lg:cursor-ew-resize"
          hideScrollbars={false}
        >
          <MovieCardList movies={movies} />
        </ScrollContainer>
        {/* @TODO: Full implmentation of workable error UI */}
        {errorMessage && <span>{errorMessage}</span>}
      </div>
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
