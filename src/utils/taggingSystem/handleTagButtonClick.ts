import {
  taggedPeople,
  updateTaggedPeople,
  type Person,
  type TaggedPersonProps,
} from "../../stores/store";

function returnDoesHaveClickedPerson(
  clickedPerson: Person.PersonProps,
  $taggedPeople: TaggedPersonProps[]
): boolean {
  return Boolean(
    $taggedPeople?.find(
      (person: TaggedPersonProps) => person.id === clickedPerson.id
    ) !== undefined
  );
}

export function handleTagButtonClick(
  clickedPerson: Person.PersonProps
) {
  const currentTaggedPeople = taggedPeople.get();
  const doesHaveClickedPerson = returnDoesHaveClickedPerson(
    clickedPerson,
    currentTaggedPeople
  );

  if (doesHaveClickedPerson) {
    const newTags = currentTaggedPeople.filter(
      (person) => person.id !== clickedPerson.id
    );
    updateTaggedPeople(newTags);
  } else {
    const newTags = [
      ...currentTaggedPeople,
      { name: clickedPerson.name, id: clickedPerson.id },
    ];
    updateTaggedPeople(newTags);
  }
}
