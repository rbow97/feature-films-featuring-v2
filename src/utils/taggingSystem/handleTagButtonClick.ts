import {
  taggedPeople,
  type Person,
  type TaggedPersonProps,
} from "../../stores/newSystem";
import { handleRemoveFromTags } from "./handleRemoveFromTags";

function returnDoesHaveClickedPerson(
  clickedPerson: Person.PersonProps,
  $taggedPeople: TaggedPersonProps[]
): boolean {
  return Boolean(
    $taggedPeople?.find(
      (person: TaggedPersonProps) => person.id === clickedPerson.id
    ) !== undefined
  );
}

async function handleAddToTags(
  clickedPerson: Person.PersonProps,
  $taggedPeople: TaggedPersonProps[]
) {
  taggedPeople.set([
    ...$taggedPeople,
    { name: clickedPerson.name, id: clickedPerson.id },
  ]);
}

export function handleTagButtonClick(
  clickedPerson: Person.PersonProps,
  $taggedPeople: TaggedPersonProps[]
) {
  const doesHaveClickedPerson = returnDoesHaveClickedPerson(
    clickedPerson,
    $taggedPeople
  );

  doesHaveClickedPerson
    ? handleRemoveFromTags(clickedPerson, $taggedPeople!)
    : handleAddToTags(clickedPerson, $taggedPeople);
}
