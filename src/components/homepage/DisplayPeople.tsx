import { useStore } from "@nanostores/preact";
import { useEffect, useState } from "preact/hooks";
import { currentTaggedAndCredits, resultsType } from "../../stores/newSystem";
import { handleTagButtonClick } from "../../utils/taggingSystem/handleTagButtonClick";
import { currentDisplayedResults } from "../../stores/taggingSystemStore";

interface Props {
  people: any;
}

export default function DisplayPeople({ people }: Props) {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);
  const $currentDisplayedResults = useStore(currentDisplayedResults);
  const [resultsToBeMapped, setResultsToBeMapped] = useState(people);

  useEffect(() => {
    $currentDisplayedResults?.length === 0
      ? setResultsToBeMapped(people)
      : setResultsToBeMapped($currentDisplayedResults);
  }, [$currentDisplayedResults]);

  return (
    <>
      {resultsToBeMapped.map((currentPerson: any, i: number) => {
        if (i < 20)
          return (
            // TODO:
            // On hover, image expands to take up whole space, some kind of tooltip appears with more info, can click whole image to tag
            <div class="w-1/2 lg:w-1/3 pr-4 pb-4 relative group">
              <article class="flex px-1 pt-1 pb-3 gap-2 border-b-primary-lightGrey border-b h-fit items-start">
                <img
                  width="100"
                  height="100"
                  class="h-[100px] shrink-0 w-[100px] rounded-full aspect-auto object-cover object-center"
                  src={`https://image.tmdb.org/t/p/w185/${currentPerson.profile_path}`}
                />
                <div class="flex grow flex-col">
                  <p>{currentPerson.name}</p>
                  <p class="text-sm text-primary-grey">
                    {currentPerson.known_for_department}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleTagButtonClick(
                      currentPerson,
                      $currentTaggedAndCredits
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
