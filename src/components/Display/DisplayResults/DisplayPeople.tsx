import { useStore } from "@nanostores/preact";
import { currentTaggedAndCredits } from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import { useEffect, useState } from "preact/hooks";
import { ImageWithText } from "../ImageWithText";

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
              <ImageWithText imagePath={currentPerson.profile_path}>
                <div class="flexCol grow">
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
                  <div class="flex gapxXS overflow-x-auto w-full mtSmall">
                    {currentPerson.known_for.map((item: any, i: number) => {
                      // TODO: figure out why this doesnt work with 3
                      if (i < 2) {
                        return (
                          <div class="py-0.5 pxXS border shrink-0 border-primary-black rounded-full">
                            <p class="text-[10px] uppercase">
                              {item.title || item.name}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </ImageWithText>
            </div>
          );
      })}
    </>
  );
}
