import { atom } from "nanostores";

export const resultsType = atom<"person" | "media">("person");
export const searchBarPeopleResults = atom([]);
export const allTaggedPeople = atom<any>([]);
export const creditsPerPersonSearchStore = atom<any>([]);
export const creditsTotalStore = atom<any>([]);
