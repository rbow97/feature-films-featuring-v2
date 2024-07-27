import { useStore } from "@nanostores/preact";
import { inputSearchResult } from "../../stores/inputSearchResultStore";

interface Props {
  people: any;
}

export default function DisplayPeople({ people }: Props) {
  // read the store value with the `useStore` hook
  const $searchedResult = useStore(inputSearchResult);

  const resultToBeMapped =
    $searchedResult?.length > 0 ? $searchedResult : people;

  return (
    <>
      {resultToBeMapped.map((person: any, i: number) => {
        if (i < 10)
          return (
            // TODO:
            // On hover, image expands to take up whole space, some kind of tooltip appears with more info, can click whole image to tag
            <div class="w-1/2 lg:w-1/3 pr-4 pb-4 relative group">
              <article class="flex p-3 gap-2 rounded-lg border-primary-black border-2 h-full items-start">
                <img
                  loading="lazy"
                  width="40"
                  decoding="async"
                  class="h-full w-16 rounded-md aspect-auto object-cover object-center"
                  src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                />
                <div class="flex flex-col">
                  <p>{person.name}</p>
                  <p class="text-sm text-primary-darkGrey">
                    {person.known_for_department}
                  </p>
                  <button class="w-fit text-sm text-primary-darkGrey">
                    Tag
                  </button>
                </div>
              </article>
            </div>
          );
      })}
    </>
  );
}
