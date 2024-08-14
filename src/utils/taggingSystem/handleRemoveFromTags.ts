import {
  taggedPeople,
  type Person,
  type TaggedPersonProps,
} from "../../stores/newSystem";

export function handleRemoveFromTags(
  clickedPerson: Person.PersonProps | TaggedPersonProps,
  $taggedPeople: TaggedPersonProps[]
) {
  taggedPeople.set(
    $taggedPeople.filter((person: TaggedPersonProps) => {
      return person.id !== clickedPerson.id;
    })
  );

  localStorage.setItem(
    "tagged-people",
    JSON.stringify(
      $taggedPeople.filter((person: TaggedPersonProps) => {
        return person.id !== clickedPerson.id;
      })
    )
  );
}
