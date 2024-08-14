import { useStore } from "@nanostores/react";
import { taggedPeople, type Person } from "@stores/store";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import InfoCard from "./InfoCard";

interface Props {
  people?: Person.PersonProps[];
}

export default function DisplayResults({ people }: Props) {
  const $taggedPeople = useStore(taggedPeople);

  // filter out job 'thanks' from job
  // filter out oscars

  return (
    <>
      {people?.map((person: Person.PersonProps) => (
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
