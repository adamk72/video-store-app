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
    <h1 className="text-3xl font-bold underline bg-black text-emerald-600">
      Hello world!
    </h1>
  );
};

export default Home;
