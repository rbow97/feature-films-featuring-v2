import { atom } from "nanostores";

export namespace Person {
  export interface PersonProps {
    id: string;
    name: string;
    profile_path: string;
    known_for_department: string;
    known_for: Array<KnownForProps>;
  }

  export interface CreditProps {
    title: string;
    poster_path: string;
    vote_average: string;
  }

  export interface KnownForProps {
    title?: string;
    name?: string;
  }
}

export interface CurrentTaggedAndCredits {
  person: Person.PersonProps;
  credits: Person.CreditProps[];
}

export const resultsType = atom<"person" | "media">("person");

export const currentTaggedAndCredits = atom<CurrentTaggedAndCredits[]>([]);
export const creditsTotalStore = atom<any>([]);
