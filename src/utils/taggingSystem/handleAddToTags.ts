import { getCreditsPerPerson } from "../../api";
import {
  currentTaggedAndCredits,
  Person,
  type CurrentTaggedAndCredits,
} from "../../stores/newSystem";

export async function handleAddToTags(
  clickedPerson: Person.PersonProps,
  $currentTaggedAndCredits: CurrentTaggedAndCredits[]
) {
  const credits = await getCreditsPerPerson(clickedPerson.id);

  currentTaggedAndCredits.set([
    ...$currentTaggedAndCredits,
    { person: clickedPerson, credits },
  ]);
}
