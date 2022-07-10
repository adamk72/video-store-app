import { FirestoreState } from "@utils/types";
import { createContext, SetStateAction } from "react";

export const FirestoreContext = createContext<{
  state: FirestoreState;
  setState: React.Dispatch<SetStateAction<FirestoreState>>;
}>({ state: { lastAddedId: " " }, setState: () => null });
