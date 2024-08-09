import { useStore } from "@nanostores/preact";
import { currentTaggedAndCredits } from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import { ImageWithText } from "./Display/ImageWithText";

export default function DisplayPeople() {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);
  const $currentDisplayedResults = useStore(currentDisplayedResults);

  return (
    <>
      {$currentDisplayedResults !== undefined &&
        $currentDisplayedResults?.map((currentPerson: any, i: number) => {
          if (i < 20)
            return (
              // TODO:
              // On hover, image expands to take up whole space, some kind of tooltip appears with more info, can click whole image to tag
              <div class="col-span-1 relative group ">
                <ImageWithText
                  imagePath={
                    currentPerson.profile_path || currentPerson.poster_path
                  }
                >
                  <div class="flexCol grow">
                    <div class="flex justify-between">
                      <p>{currentPerson.name || currentPerson.title}</p>
                      {currentPerson.name && (
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
                      )}
                    </div>
                    <p class="text-sm text-primary-grey">
                      {currentPerson.known_for_department ||
                        currentPerson.vote_average}
                    </p>
                    {currentPerson.known_for && (
                      <div class="flex gap-x-xs overflow-x-auto w-full mt-sm">
                        {currentPerson.known_for.map((item: any, i: number) => {
                          // TODO: figure out why this doesnt work with 3
                          if (i < 2) {
                            return (
                              <div class="py-0.5 px-xs border shrink-0 border-primary-black rounded-full">
                                <p class="text-[10px] uppercase">
                                  {item.title || item.name}
                                </p>
                              </div>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                </ImageWithText>
              </div>
            );
        })}
    </>
  );
}
