import { atom } from "nanostores";

const resultsType = atom<"person" | "media">("person");
export const searchBarPeopleResults = atom([]);
