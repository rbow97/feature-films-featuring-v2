import { getCreditsPerPerson } from "../../api";
import {
  currentTaggedAndCredits,
  type CurrentTaggedAndCredits,
} from "../../stores/newSystem";

export async function handleAddToTags(
  clickedPerson: any,
  $currentTaggedAndCredits: CurrentTaggedAndCredits[]
) {
  const credits = await getCreditsPerPerson(clickedPerson.id);

  currentTaggedAndCredits.set([
    ...$currentTaggedAndCredits,
    { person: clickedPerson, credits },
  ]);
}
