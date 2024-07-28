import { useStore } from "@nanostores/preact";
import { inputSearchResult } from "../../stores/inputSearchResultStore";
import { taggedPeople } from "../../stores/taggedPeopleStore";
import { useState } from "preact/hooks";

interface Props {
  people: any;
}

export default function DisplayPeople({ people }: Props) {
  const [currentTaggedPeople, setCurrentTaggedPeople] = useState<Array<{}>>([]);

  const $searchedResult = useStore(inputSearchResult);

  // TODO: Improve this
  function handleButtonClick(clickedPerson: any) {
    const doesHaveClickedPerson =
      currentTaggedPeople.find((person) => person.id === clickedPerson.id) !==
      undefined
        ? true
        : false;

    doesHaveClickedPerson
      ? setCurrentTaggedPeople(
          currentTaggedPeople.filter((person) => person.id !== clickedPerson.id)
        )
      : setCurrentTaggedPeople([...currentTaggedPeople, clickedPerson]);
  }

  taggedPeople.set(currentTaggedPeople);

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
                  <button
                    onClick={() => handleButtonClick(person)}
                    class="w-fit text-sm text-primary-darkGrey"
                  >
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
