import { useStore } from "@nanostores/preact";
import { currentTaggedAndCredits, type Person } from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import InfoCard from "./InfoCard";

export default function DisplayPeople() {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);
  const $currentDisplayedResults = useStore(currentDisplayedResults);

  // filter out job 'thanks' from job
  // filter out oscars, and any credit with no title

  return (
    <>
      {$currentDisplayedResults.type === "people"
        ? $currentDisplayedResults?.results.map(
            (person: Person.PersonProps) => (
              // TODO:
              // On hover, image expands to take up whole space, some kind of tooltip appears with more info, can click whole image to tag
              <InfoCard
                imagePath={person.profile_path}
                title={person.name}
                handleTagButtonClick={() =>
                  handleTagButtonClick(person, $currentTaggedAndCredits)
                }
              />
            )
          )
        : $currentDisplayedResults?.results.map(
            (media: Person.CastAndCrewProps) => (
              <InfoCard imagePath={media.poster_path} title={media.title} />
            )
          )}
    </>
  );
}
