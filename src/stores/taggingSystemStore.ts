import { atom } from "nanostores";
import type { Person } from "./newSystem";

export namespace DisplayedResults {
  export interface DisplayedResultsPeopleProps {
    type: "people";
    results: Person.PersonProps[];
  }
  export interface DisplayedResultsMediaProps {
    type: "media";
    results: Person.CastAndCrewProps[];
  }
}

export const currentDisplayedResults = atom<Person.PersonProps[]>([]);
