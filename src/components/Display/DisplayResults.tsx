import { useStore } from "@nanostores/preact";
import { taggedPeople, type Person } from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import { useEffect } from "preact/hooks";
import InfoCard from "./InfoCard";
import { addSearchParams } from "@utils/addSearchParams";

interface Props {
  popularPeople: Person.PersonProps[];
}

export default function DisplayPeople({ popularPeople }: Props) {
  useEffect(() => {
    currentDisplayedResults.set({ type: "people", results: popularPeople });
  }, []);

  const $currentDisplayedResults = useStore(currentDisplayedResults);
  const $taggedPeople = useStore(taggedPeople);

  useEffect(() => {
    addSearchParams("/results", $taggedPeople);
  }, [$taggedPeople]);

  // filter out job 'thanks' from job
  // filter out oscars, and any credit with no title

  return (
    <>
      {$currentDisplayedResults.type === "people"
        ? $currentDisplayedResults?.results.map(
            (person: Person.PersonProps) => (
              <InfoCard
                imagePath={person.profile_path}
                title={person.name}
                handleTagButtonClick={() =>
                  handleTagButtonClick(person, $taggedPeople)
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
