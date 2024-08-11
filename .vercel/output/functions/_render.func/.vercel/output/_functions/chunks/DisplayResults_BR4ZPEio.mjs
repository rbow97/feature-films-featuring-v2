import { r as resultsUrlWithParams, t as taggedPeople, u as useStore, I as InfoCard } from './api_CEOzNfqQ.mjs';
import { atom } from 'nanostores';
import { useEffect } from 'preact/hooks';
import { jsx, Fragment } from 'preact/jsx-runtime';

const currentDisplayedResults = atom({
  type: "people",
  results: []
});

function addSearchParams(taggedPeopleArr) {
  const add_params = {};
  taggedPeopleArr.map((taggedPerson, index) => {
    add_params[`person-${index + 1}`] = taggedPerson.id.toString();
  });
  resultsUrlWithParams.set(`/results?${new URLSearchParams([...Object.entries(add_params)])}`);
}

function handleTagButtonClick(clickedPerson, $taggedPeople) {
  taggedPeople.set([...$taggedPeople, {
    name: clickedPerson.name,
    id: clickedPerson.id
  }]);
}

function DisplayPeople({
  popularPeople
}) {
  useEffect(() => {
    currentDisplayedResults.set({
      type: "people",
      results: popularPeople
    });
  }, []);
  const $currentDisplayedResults = useStore(currentDisplayedResults);
  const $taggedPeople = useStore(taggedPeople);
  useEffect(() => {
    addSearchParams($taggedPeople);
  }, [$taggedPeople]);
  return jsx(Fragment, {
    children: typeof window !== "undefined" && ($currentDisplayedResults.type === "people" ? $currentDisplayedResults?.results.map((person) => jsx(InfoCard, {
      imagePath: person.profile_path,
      title: person.name,
      handleTagButtonClick: () => handleTagButtonClick(person, $taggedPeople)
    })) : $currentDisplayedResults?.results.map((media) => jsx(InfoCard, {
      imagePath: media.poster_path,
      title: media.title
    })))
  });
}

export { DisplayPeople as D };
