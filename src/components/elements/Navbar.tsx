/* eslint-disable @next/next/no-img-element */
import { txt } from "@utils/text";
import Image from "next/image";
import AddMovieModal from "../specs/AddMovieModal";

export const Navbar = () => {
  return (
    <nav className="navbar flex flex-col items-center gap-4 p-5 lg:flex-row">
      <div className="lg: w-1/2 justify-center lg:justify-start">
        <Image
          src="/images/movie-maker-alternative.jpeg"
          alt="film and clapper logo"
          layout="fixed"
          height="150px"
          width="259px"
        />
      </div>
      <h1 id="site-title" className="flex-shrink-0 justify-center font-bold">
        {txt.nav.title}
      </h1>
      <div className="w-1/2 justify-center lg:justify-end">
        <AddMovieModal />
      </div>
    </nav>
  );
};
