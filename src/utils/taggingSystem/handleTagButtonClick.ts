import { getAllCommonCredits } from "@utils/getAllCommonCredits";
import { getCreditsPerPerson } from "../../api";
import {
  currentTaggedAndCredits,
  Person,
  type CurrentTaggedAndCredits,
  type CurrentTaggedAndCreditsType,
} from "../../stores/newSystem";
import { handleRemoveFromTags } from "./handleRemoveFromTags";

function returnDoesHaveClickedPerson(
  clickedPerson: Person.PersonProps,
  $currentTaggedAndCredits: CurrentTaggedAndCreditsType
): boolean {
  return Boolean(
    $currentTaggedAndCredits?.find(
      (person: CurrentTaggedAndCredits) => person.person.id === clickedPerson.id
    ) !== undefined
  );
}

async function handleAddToTags(
  clickedPerson: Person.PersonProps,
  $currentTaggedAndCredits: CurrentTaggedAndCreditsType
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
  $currentTaggedAndCredits: CurrentTaggedAndCreditsType
) {
  const doesHaveClickedPerson = returnDoesHaveClickedPerson(
    clickedPerson,
    $currentTaggedAndCredits
  );

  doesHaveClickedPerson
    ? handleRemoveFromTags(clickedPerson, $currentTaggedAndCredits!)
    : handleAddToTags(clickedPerson, $currentTaggedAndCredits);
}
