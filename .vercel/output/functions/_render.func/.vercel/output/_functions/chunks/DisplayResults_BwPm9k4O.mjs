import { jsx, Fragment } from 'react/jsx-runtime';
import { h as handleRemoveFromTags, t as taggedPeople } from './Layout_BOEq5D8r.mjs';
import { atom } from 'nanostores';
import { I as InfoCard } from './InfoCard_BsxzJxTE.mjs';
import { useEffect } from 'react';
import { useStore } from '@nanostores/react';

const currentDisplayedResults = atom([]);

function returnDoesHaveClickedPerson(clickedPerson, $taggedPeople) {
  return Boolean(
    $taggedPeople?.find(
      (person) => person.id === clickedPerson.id
    ) !== void 0
  );
}
async function handleAddToTags(clickedPerson, $taggedPeople) {
  taggedPeople.set([
    ...$taggedPeople,
    { name: clickedPerson.name, id: clickedPerson.id }
  ]);
  localStorage.setItem(
    "tagged-people",
    JSON.stringify([
      ...$taggedPeople,
      { name: clickedPerson.name, id: clickedPerson.id }
    ])
  );
}
function handleTagButtonClick(clickedPerson, $taggedPeople) {
  const doesHaveClickedPerson = returnDoesHaveClickedPerson(
    clickedPerson,
    $taggedPeople
  );
  doesHaveClickedPerson ? handleRemoveFromTags(clickedPerson, $taggedPeople) : handleAddToTags(clickedPerson, $taggedPeople);
}

function DisplayPeople({ searchedPeople }) {
  useEffect(() => {
    if (searchedPeople) {
      currentDisplayedResults.set(searchedPeople);
    }
  }, []);
  const $currentDisplayedResults = useStore(currentDisplayedResults);
  const $taggedPeople = useStore(taggedPeople);
  return /* @__PURE__ */ jsx(Fragment, { children: $currentDisplayedResults?.map((person) => /* @__PURE__ */ jsx(
    InfoCard,
    {
      imagePath: person.profile_path,
      title: person.name,
      handleTagButtonClick: () => handleTagButtonClick(person, $taggedPeople)
    }
  )) });
}

export { DisplayPeople as D };
