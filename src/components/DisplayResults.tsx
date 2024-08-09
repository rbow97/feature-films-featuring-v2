import { useStore } from "@nanostores/preact";
import { currentTaggedAndCredits, type Person } from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import InfoCard from "./Display/InfoCard";

export default function DisplayPeople() {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);
  const $currentDisplayedResults = useStore(currentDisplayedResults);

  return (
    <>
      {$currentDisplayedResults.type === "people"
        ? $currentDisplayedResults?.results.map(
            (person: Person.PersonProps, i: number) => {
              if (i < 20)
                return (
                  // TODO:
                  // On hover, image expands to take up whole space, some kind of tooltip appears with more info, can click whole image to tag
                  <InfoCard
                    tag
                    imagePath={person.profile_path}
                    title={person.name}
                    subtitle={person.known_for_department}
                    pillsArray={person.known_for}
                    handleTagButtonClick={() =>
                      handleTagButtonClick(person, $currentTaggedAndCredits)
                    }
                  />
                );
            }
          )
        : $currentDisplayedResults?.results.map(
            (media: Person.CreditProps, i: number) => {
              if (i < 20)
                return (
                  <InfoCard
                    imagePath={media.poster_path}
                    title={media.title}
                    subtitle={media.vote_average}
                  />
                );
            }
          )}
    </>
  );
}
