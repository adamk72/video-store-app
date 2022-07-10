import { Button } from "@components/elements/Button";
import { FirestoreContext } from "@providers/FirestoreContext";
import { txt } from "@utils/text";
import { FormEvent, useContext, useState } from "react";

export const AddMovieModalForm = ({ close }: { close: VoidFunction }) => {
  const [title, setTitle] = useState("");
  const { setState: setFirestoreState } = useContext(FirestoreContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/movies", {
        method: "POST",
        body: JSON.stringify({ title }),
      });
      const id = await res.json();
      setFirestoreState({ lastAddedId: id });
    } catch (error) {
      console.error(error);
    }
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
