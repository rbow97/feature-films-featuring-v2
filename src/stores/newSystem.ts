import { atom } from "nanostores";

export namespace Person {
  export interface PersonProps {
    id: string;
    name: string;
    profile_path: string;
    known_for_department: string;
    known_for: KnownForProps;
  }

  export interface KnownForProps {
    title: string;
  }
  [];
}

export interface CurrentTaggedAndCredits {
  person: Person.PersonProps;
  credits: any;
}

export type CurrentTaggedAndCreditsType =
  | {
      person: Person.PersonProps;
      credits: any;
    }[]
  | [];

export const resultsType = atom<"person" | "media">("person");

// TODO: remove null
export const currentTaggedAndCredits = atom<CurrentTaggedAndCreditsType>([]);
export const creditsTotalStore = atom<any>([]);

export const allCredits = atom<any>(null);
