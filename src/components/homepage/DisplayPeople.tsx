import { useStore } from "@nanostores/preact";
import { getCreditsPerPerson } from "../../api";
import { creditsPerSearchStore } from "../../stores/creditsStore";
import { inputSearchResult } from "../../stores/inputSearchResultStore";
import { taggedPeople } from "../../stores/taggedPeopleStore";
import { handleRemoveFromTags } from "../../utils/handleRemoveFromTags";

async function handleAddToTags(
  clickedPerson: any,
  $taggedPeople: any,
  $creditsPerSearchStore: any
) {
  taggedPeople.set([...$taggedPeople, clickedPerson]);
  const credits = await getCreditsPerPerson(clickedPerson.id);
  creditsPerSearchStore.set([...$creditsPerSearchStore, credits]);
}

function handleButtonClick(
  clickedPerson: any,
  $taggedPeople: any,
  $creditsPerSearchStore: any
) {
  const doesHaveClickedPerson = Boolean(
    $taggedPeople.find((person: any) => person.id === clickedPerson.id) !==
      undefined
  );

  doesHaveClickedPerson
    ? handleRemoveFromTags(clickedPerson, $taggedPeople, $creditsPerSearchStore)
    : handleAddToTags(clickedPerson, $taggedPeople, $creditsPerSearchStore);
}

interface Props {
  people: any;
}

export default function DisplayPeople({ people }: Props) {
  const $taggedPeople = useStore(taggedPeople);
  const $creditsPerSearchStore = useStore(creditsPerSearchStore);

  const $searchedResult = useStore(inputSearchResult);

  // doesn't have clicked person? do get all credits search
  // Add that to a new state of api calls
  // Add that to a nano store of api calls

  const resultToBeMapped =
    $searchedResult?.length > 0 ? $searchedResult : people;

  return (
    <>
      {resultToBeMapped.map((person: any, i: number) => {
        if (i < 20)
          return (
            // TODO:
            // On hover, image expands to take up whole space, some kind of tooltip appears with more info, can click whole image to tag
            <div class="w-1/2 lg:w-1/3 pr-4 pb-4 relative group">
              <article class="flex px-1 pt-1 pb-3 gap-2 border-b-primary-lightGrey border-b h-fit items-start">
                <img
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  class="h-[100px] shrink-0 w-[100px] rounded-full aspect-auto object-cover object-center"
                  src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                />
                <div class="flex grow flex-col">
                  <p>{person.name}</p>
                  <p class="text-sm text-primary-grey">
                    {person.known_for_department}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleButtonClick(
                      person,
                      $taggedPeople,
                      $creditsPerSearchStore
                    )
                  }
                >
                  Tag
                </button>
              </article>
            </div>
          );
      })}
    </>
  );
}
