import { getCreditsPerPerson } from "../../api";
import {
  currentTaggedAndCredits,
  type CurrentTaggedAndCredits,
  type Person,
} from "../../stores/newSystem";
import { handleRemoveFromTags } from "./handleRemoveFromTags";

function returnDoesHaveClickedPerson(
  clickedPerson: Person.PersonProps,
  $currentTaggedAndCredits: CurrentTaggedAndCredits[]
): boolean {
  return Boolean(
    $currentTaggedAndCredits?.find(
      (person: CurrentTaggedAndCredits) => person.person.id === clickedPerson.id
    ) !== undefined
  );
}

async function handleAddToTags(
  clickedPerson: Person.PersonProps,
  $currentTaggedAndCredits: CurrentTaggedAndCredits[]
) {
  const credits = await getCreditsPerPerson(clickedPerson.id);

  $currentTaggedAndCredits.length > 0
    ? currentTaggedAndCredits.set([
        ...$currentTaggedAndCredits,
        { person: clickedPerson, credits },
      ])
    : currentTaggedAndCredits.set([{ person: clickedPerson, credits }]);
}

export function handleTagButtonClick(
  clickedPerson: Person.PersonProps,
  $currentTaggedAndCredits: CurrentTaggedAndCredits[]
) {
  const doesHaveClickedPerson = returnDoesHaveClickedPerson(
    clickedPerson,
    $currentTaggedAndCredits
  );

  doesHaveClickedPerson
    ? handleRemoveFromTags(clickedPerson, $currentTaggedAndCredits!)
    : handleAddToTags(clickedPerson, $currentTaggedAndCredits);
}
