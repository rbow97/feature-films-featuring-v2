import { type Person } from "@stores/store";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import InfoCard from "./InfoCard";

interface Props {
  people?: Person.PersonProps[];
}

export default function DisplayResults({ people }: Props) {
  return (
    <>
      {people?.map((person: Person.PersonProps) => (
        <InfoCard
          key={person.id}
          imagePath={person.profile_path}
          title={person.name}
          handleTagButtonClick={() => handleTagButtonClick(person)}
        />
      ))}
    </>
  );
}
