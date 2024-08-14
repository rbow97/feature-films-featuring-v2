import { taggedPeople, type Person } from "@stores/newSystem";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import InfoCard from "./InfoCard";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";

interface Props {
  people?: Person.PersonProps[];
}

export default function DisplayPeople({ people }: Props) {
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
