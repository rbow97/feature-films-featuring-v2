import {
  taggedPeople,
  type CurrentTaggedAndCredits,
  type Person,
  type TaggedPersonProps,
} from "../../stores/newSystem";

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
  if (url) {
    url.searchParams.set(`person-${index + 1}`, clickedPerson.id);
  }

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
