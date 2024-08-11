import {
  taggedPeople,
  type Person,
  type TaggedPersonProps,
} from "../../stores/newSystem";

export function handleRemoveFromTags(
  clickedPerson: Person.PersonProps | TaggedPersonProps,
  $taggedPeople: TaggedPersonProps[]
) {
  return taggedPeople.set(
    $taggedPeople.filter((person: TaggedPersonProps) => {
      return person.id !== clickedPerson.id;
    })
  );
}
