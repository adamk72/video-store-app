import { Button } from "@components/elements/Button";
import { FirestoreContext } from "@providers/FirestoreContext";
import { addMovie } from "@utils/clientFetchUtils";
import { txt } from "@utils/text";
import { FormEvent, useContext, useState } from "react";

export const AddMovieModalForm = ({ close }: { close: VoidFunction }) => {
  const [title, setTitle] = useState("");
  const { setFirestoreState: setFirestoreState } = useContext(FirestoreContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = await addMovie(title);
    setFirestoreState({ lastAddedMovie: { id, title } });
    close();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="my-4 text-modal">
          <label className="mb-2 block text-sm font-bold" htmlFor="movieTitle">
            {txt.modals.addNewMovie.label}
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none"
            id="movieTitle"
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder={txt.modals.addNewMovie.placeholder}
          />
        </div>
        <Button label={txt.modals.addNewMovie.submit} type="submit" />
      </form>
    </>
  );
};
