import { h as handleRemoveFromTags, t as taggedPeople, u as useStore } from './Layout_DHXFjzR5.mjs';
import { atom } from 'nanostores';
import { I as InfoCard } from './InfoCard_DD61m6-R.mjs';
import { useEffect } from 'preact/hooks';
import { jsx, Fragment } from 'preact/jsx-runtime';

const currentDisplayedResults = atom([]);

function returnDoesHaveClickedPerson(clickedPerson, $taggedPeople) {
  return Boolean($taggedPeople?.find((person) => person.id === clickedPerson.id) !== void 0);
}
async function handleAddToTags(clickedPerson, $taggedPeople) {
  taggedPeople.set([...$taggedPeople, {
    name: clickedPerson.name,
    id: clickedPerson.id
  }]);
  localStorage.setItem("tagged-people", JSON.stringify([...$taggedPeople, {
    name: clickedPerson.name,
    id: clickedPerson.id
  }]));
}
function handleTagButtonClick(clickedPerson, $taggedPeople) {
  const doesHaveClickedPerson = returnDoesHaveClickedPerson(clickedPerson, $taggedPeople);
  doesHaveClickedPerson ? handleRemoveFromTags(clickedPerson, $taggedPeople) : handleAddToTags(clickedPerson, $taggedPeople);
}

function DisplayPeople({
  searchedPeople
}) {
  useEffect(() => {
    if (searchedPeople) {
      currentDisplayedResults.set(searchedPeople);
    }
  }, []);
  const $currentDisplayedResults = useStore(currentDisplayedResults);
  const $taggedPeople = useStore(taggedPeople);
  return jsx(Fragment, {
    children: $currentDisplayedResults?.map((person) => jsx(InfoCard, {
      imagePath: person.profile_path,
      title: person.name,
      handleTagButtonClick: () => handleTagButtonClick(person, $taggedPeople)
    }))
  });
}

export { DisplayPeople as D };
