import { Layout } from "@components/elements/Layout";
import { MovieCardList } from "@components/specs/MovieCardList";
import { serverSideFetchMovies } from "@utils/strapi/serverFetchUtils";
import { Movie } from "@utils/types";
import type { NextPage } from "next";
import ScrollContainer from "react-indiana-drag-scroll";

type HomePageProps = {
  movies: Movie[];
};

const Home: NextPage<HomePageProps> = ({ movies }) => {
  return (
    <Layout>
      <div className="flex h-[75vh] flex-col items-center lg:h-full lg:w-[75vw]">
        <ScrollContainer
          className="scrollbar-width-override w-full cursor-ns-resize justify-center rounded-md border-4 border-card-list-edge p-6 lg:cursor-ew-resize"
          hideScrollbars={false}
        >
          <MovieCardList movies={movies} />
        </ScrollContainer>
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
