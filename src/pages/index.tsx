import { MovieCardList } from "@components/MovieCardList";
import { fetchMovies } from "@utils/serverFetchUtils";
import { Movie } from "@utils/types";
import type { NextPage } from "next";
import ScrollContainer from "react-indiana-drag-scroll";

type HomePageProps = {
  movies: Movie[];
};
const Home: NextPage<HomePageProps> = ({ movies }) => {
  return (
    <div>
      <ScrollContainer
        className="scrollbar-width-override h-[75vh] cursor-ns-resize"
        hideScrollbars={false}
      >
        <MovieCardList movies={movies} />
      </ScrollContainer>
    </div>
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
