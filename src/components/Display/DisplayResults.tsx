import { useStore } from "@nanostores/preact";
import {
  taggedPeople,
  type Person,
  resultsUrlWithParams,
} from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { handleTagButtonClick } from "@utils/taggingSystem/handleTagButtonClick";
import InfoCard from "./InfoCard";
import { useEffect, useState } from "preact/hooks";
import { addSearchParams } from "@utils/buildResultsUrl";

interface Props {
  popularPeople: Person.PersonProps[];
}

export default function DisplayPeople({ popularPeople }: Props) {
  useEffect(() => {
    currentDisplayedResults.set({ type: "people", results: popularPeople });
  }, []);

  const $currentDisplayedResults = useStore(currentDisplayedResults);
  const $taggedPeople = useStore(taggedPeople);

  useEffect(() => {
    addSearchParams($taggedPeople);
  }, [$taggedPeople]);

  // filter out job 'thanks' from job
  // filter out oscars, and any credit with no title

  return (
    <>
      {typeof window !== "undefined" &&
        ($currentDisplayedResults.type === "people"
          ? $currentDisplayedResults?.results.map(
              (person: Person.PersonProps, index: number) => (
                // TODO:
                // On hover, image expands to take up whole space, some kind of tooltip appears with more info, can click whole image to tag
                <InfoCard
                  imagePath={person.profile_path}
                  title={person.name}
                  handleTagButtonClick={() =>
                    handleTagButtonClick(person, $taggedPeople)
                  }
                />
              )
            )
          : $currentDisplayedResults?.results.map(
              (media: Person.CastAndCrewProps) => (
                <InfoCard imagePath={media.poster_path} title={media.title} />
              )
            ))}
    </>
  );
}
