import { getCreditsPerPerson } from "../../api";
import {
  taggedPeople,
  type CurrentTaggedAndCredits,
  type Person,
  resultsUrlWithParams,
  type TaggedPersonProps,
} from "../../stores/newSystem";
import { handleRemoveFromTags } from "./handleRemoveFromTags";

const colours = [
  { background: "#FC60A8", text: "#000000" },
  { background: "#4C1A57", text: "#FFFFFF" },
  { background: "#00916E", text: "#FFFFFF" },
  { background: "#3454D1", text: "#FFFFFF" },
];

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
  index: number,
  url: any
) {
  // const credits = await getCreditsPerPerson(clickedPerson.id);

  if (url) {
    url.searchParams.set(`person-${index + 1}`, clickedPerson.id);
  }
  console.log(url);

  // const randomColour = colours[Math.floor(Math.random() * colours.length)];

  // $currentTaggedAndCredits.length > 0
  //   ? currentTaggedAndCredits.set([
  //       ...$currentTaggedAndCredits,
  //       {
  //         person: clickedPerson,
  //         credits,
  //         theme: {
  //           backgroundColour: randomColour.background,
  //           textColour: randomColour.text,
  //         },
  //       },
  //     ])
  //   : currentTaggedAndCredits.set([
  //       {
  //         person: clickedPerson,
  //         credits,
  //         theme: {
  //           backgroundColour: randomColour.background,
  //           textColour: randomColour.text,
  //         },
  //       },
  //     ]);
}

export function handleTagButtonClick(
  clickedPerson: Person.PersonProps,
  $taggedPeople: TaggedPersonProps[]
) {
  taggedPeople.set([
    ...$taggedPeople,
    { name: clickedPerson.name, id: clickedPerson.id },
  ]);

  // handleAddToTags(clickedPerson, index, url);
  // const doesHaveClickedPerson = returnDoesHaveClickedPerson(
  //   clickedPerson,
  //   $currentTaggedAndCredits
  // );

  // doesHaveClickedPerson
  //   ? handleRemoveFromTags(clickedPerson, $currentTaggedAndCredits!)
  //   : handleAddToTags(clickedPerson, index, $currentTaggedAndCredits);
}
