import {
  currentTaggedAndCredits,
  type CurrentTaggedAndCredits,
} from "../../stores/newSystem";

export function handleRemoveFromTags(
  clickedPerson: any,
  $currentTaggedAndCredits: CurrentTaggedAndCredits[]
) {
  return currentTaggedAndCredits.set(
    $currentTaggedAndCredits.filter((person: any) => {
      return person.person.id !== clickedPerson.id;
    })
  );
}
