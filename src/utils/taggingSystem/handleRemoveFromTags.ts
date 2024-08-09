import {
  currentTaggedAndCredits,
  type CurrentTaggedAndCredits,
  type Person,
} from "../../stores/newSystem";

export function handleRemoveFromTags(
  clickedPerson: Person.PersonProps,
  $currentTaggedAndCredits: CurrentTaggedAndCredits[]
) {
  return currentTaggedAndCredits.set(
    $currentTaggedAndCredits.filter((person: CurrentTaggedAndCredits) => {
      return person.person.id !== clickedPerson.id;
    })
  );
}
