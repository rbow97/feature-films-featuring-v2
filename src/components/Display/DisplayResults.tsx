import { useStore } from "@nanostores/preact";
import { taggedPeople, type Person } from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import InfoCard from "./InfoCard";
import { useEffect } from "preact/hooks";

interface Props {
  searchedPeople?: Person.PersonProps[];
}

export default function DisplayPeople({ searchedPeople }: Props) {
  useEffect(() => {
    if (searchedPeople) {
      currentDisplayedResults.set(searchedPeople);
    }
  }, []);

  const $currentDisplayedResults = useStore(currentDisplayedResults);
  const $taggedPeople = useStore(taggedPeople);

  // filter out job 'thanks' from job
  // filter out oscars

  return (
    <>
      {$currentDisplayedResults?.map((person: Person.PersonProps) => (
        <InfoCard
          imagePath={person.profile_path}
          title={person.name}
          handleTagButtonClick={() =>
            handleTagButtonClick(person, $taggedPeople)
          }
        />
      ))}
    </>
  );
}
