import { useStore } from "@nanostores/preact";
import { taggedPeople, type Person, allTabResults } from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import { useEffect } from "preact/hooks";
import InfoCard from "./InfoCard";

interface Props {
  popularPeople: Person.PersonProps[];
}

export default function DisplayPeople({ popularPeople }: Props) {
  useEffect(() => {
    currentDisplayedResults.set(popularPeople);
  }, []);

  const $currentDisplayedResults = useStore(currentDisplayedResults);
  const $taggedPeople = useStore(taggedPeople);
  const $allTabResults = useStore(allTabResults);

  console.log($allTabResults, $currentDisplayedResults);

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
