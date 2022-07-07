import { MovieCardList } from "@components/MovieCardList";
import type { NextPage } from "next";

const Home: NextPage = () => {
  // axios
  //   .post("/api/movie", {
  //     title: "The movie",
  //     slug: "the_movie",
  //     body: "foobar",
  //   })
  //   .then((res) => console.log(res));
  return (
    <MovieCardList
      movies={[
        { title: "foo", id: "1234" },
        { title: "bar", id: "4321" },
      ]}
    />
  );
};

export default Home;
