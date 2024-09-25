import { atom } from "nanostores";

export namespace Person {
  export interface PersonProps {
    id: number;
    name: string;
    profile_path: string;
    known_for_department: string;
    known_for: Array<KnownForProps>;
  }

  export interface CastAndCrewProps {
    title?: string;
    original_name?: string;
    poster_path: string;
    vote_average: string;
    genre_ids: Array<number>;
    id: string;
  }

  export interface CreditProps {
    cast: CastAndCrewProps[];
    crew: CastAndCrewProps[];
  }

  export interface KnownForProps {
    title?: string;
    name?: string;
  }
}

export interface TaggedPersonProps {
  name: string;
  id: number;
}

export interface CurrentTaggedAndCredits {
  person: Person.PersonProps;
  credits: Person.CreditProps;
  theme: {
    backgroundColour: string;
    textColour: string;
  };
}

export const resultsType = atom<"person" | "media">("person");

export const currentTaggedAndCredits = atom<CurrentTaggedAndCredits[]>([]);
export const taggedPeople = atom<TaggedPersonProps[]>([]);
export const creditsTotalStore = atom<any>([]);
export const resultsUrlWithParams = atom<string>("");
export const searchUrlWithParams = atom<string>("");

export function initializeTaggedPeople() {
  if (typeof window !== "undefined") {
    const storedTags = localStorage.getItem("tagged-people");
    if (storedTags) {
      try {
        const parsedTags = JSON.parse(storedTags);
        taggedPeople.set(parsedTags);
      } catch (error) {
        console.error("Failed to parse tags from localStorage:", error);
      }
    }
  }
}

export function updateTaggedPeople(newTags: TaggedPersonProps[]) {
  taggedPeople.set(newTags);
  if (typeof window !== "undefined") {
    localStorage.setItem("tagged-people", JSON.stringify(newTags));
  }
}

export const allTabResults = atom<{ popularPeople: Person.PersonProps[] }>({
  popularPeople: [],
});
