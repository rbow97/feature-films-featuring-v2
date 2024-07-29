import { taggedPeople } from "../stores/taggedPeopleStore";

export function handleRemoveFromTags(clickedPerson: any, $taggedPeople: any) {
  taggedPeople.set(
    $taggedPeople.filter((person: any) => person.id !== clickedPerson.id)
  );
}
