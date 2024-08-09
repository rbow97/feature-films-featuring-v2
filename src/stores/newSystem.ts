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
  | [];

export const resultsType = atom<"person" | "media">("person");

// TODO: remove null
export const currentTaggedAndCredits = atom<CurrentTaggedAndCreditsType>([]);
export const creditsTotalStore = atom<any>([]);

export const allCredits = atom<any>(null);
