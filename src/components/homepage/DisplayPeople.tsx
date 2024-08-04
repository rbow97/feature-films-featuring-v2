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
            <div class="col-span-1 relative group">
              <article class="flex px-1 pt-1 pb-3 gap-2 border-b-primary-lightGrey border-b h-fit items-start">
                <img
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  class="h-[100px] shrink-0 w-[100px] rounded-full aspect-auto object-cover object-center"
                  src={
                    currentPerson.profile_path
                      ? `https://image.tmdb.org/t/p/w185/${currentPerson.profile_path}`
                      : "/film-camera.svg"
                  }
                />
                <div class="flex grow flex-col">
                  <div class="flex justify-between">
                    <p>{currentPerson.name}</p>
                    <button
                      class="w-fit"
                      onClick={() =>
                        handleTagButtonClick(
                          currentPerson,
                          $currentTaggedAndCredits
                        )
                      }
                    >
                      <span class="block h-3 w-3 relative after:absolute after:-translate-x-1/2 before:-translate-y-1/2 before:absolute after:top-0 after:left-1/2 before:top-1/2 before:left-0 after:h-3 after:w-0.5 after:bg-primary-black before:w-3 before:h-0.5 before:bg-primary-black" />
                    </button>
                  </div>
                  <p class="text-sm text-primary-grey">
                    {currentPerson.known_for_department}
                  </p>
                  <div class="flex gap-2 overflow-x-auto w-full mt-3">
                    {currentPerson.known_for.map((item: any, i: number) => {
                      if (i < 3) {
                        return (
                          <div class="py-0.5 px-2 border shrink-0 border-primary-black rounded-full">
                            <p class="text-[10px] uppercase">
                              {item.title || item.name}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </article>
            </div>
          );
      })}
    </>
  );
}
