import { MovieCardList } from "@components/MovieCardList";
import type { NextPage } from "next";
import ScrollContainer from "react-indiana-drag-scroll";

const Home: NextPage = () => {
  // axios
  //   .post("/api/movie", {
  //     title: "The movie",
  //     slug: "the_movie",
  //     body: "foobar",
  //   })
  //   .then((res) => console.log(res));
  return (
    <div>
      <ScrollContainer
        className="h-[50vh] scrollbar-width-override cursor-ns-resize"
        hideScrollbars={false}
      >
        <MovieCardList
          movies={[
            { title: "foo", id: "1234" },
            { title: "bar", id: "4321" },
            { title: "bar", id: "4322" },
            { title: "bar", id: "4323" },
            { title: "bar", id: "4324" },
            { title: "bar", id: "4325" },
            { title: "bar", id: "4326" },
            { title: "bar", id: "4327" },
            { title: "bar", id: "4328" },
          ]}
        />
      </ScrollContainer>
    </div>
  );
};

export default Home;
