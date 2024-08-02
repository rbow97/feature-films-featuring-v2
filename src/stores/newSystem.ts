import { atom } from "nanostores";

export interface CurrentTaggedAndCredits {
  person: any;
  credits: any;
}

export type CurrentTaggedAndCreditsType =
  | {
      person: any;
      credits: any;
    }[]
  | null;

export const resultsType = atom<"person" | "media">("person");

export const currentTaggedAndCredits = atom<CurrentTaggedAndCreditsType>(null);
export const creditsTotalStore = atom<any>([]);
