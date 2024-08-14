import { useStore } from "@nanostores/react";
import {
  resultsUrlWithParams,
  taggedPeople,
  type TaggedPersonProps,
} from "@stores/newSystem";
import { addSearchParams } from "@utils/addSearchParams";
import cx from "classnames";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import TagsSearchButton from "./TagsSearchButton";

export default function TagsList() {
  const [tags, setTags] = useState([]);
  const [buttonIsVisible, setButtonIsVisible] = useState(false);

  const $resultsUrlWithParams = useStore(resultsUrlWithParams);
  const $taggedPeople = useStore(taggedPeople);

  useEffect(() => {
    const storedTags = localStorage.getItem("tagged-people");

    if (storedTags) {
      try {
        const parsedTags = JSON.parse(storedTags);
        setTags(parsedTags);
      } catch (error) {
        console.error("Failed to parse tags from localStorage:", error);
      }
    }
  }, [$taggedPeople]);

  useEffect(() => {
    setButtonIsVisible(tags.length > 1);
    addSearchParams("/results", tags);
  }, [tags]);

  return (
    <>
      <div className="flex justify-between h-md items-center my-xs z-10 gap-md">
        <ul
          className={cx(
            "flex items-center gap-1 md:gap-xs overflow-auto -mx-6"
          )}
        >
          {tags.map((taggedPerson: TaggedPersonProps) => {
            return <ListItem taggedPeople={tags} taggedPerson={taggedPerson} />;
          })}
        </ul>
        <TagsSearchButton
          visible={buttonIsVisible}
          resultsUrlWithParams={$resultsUrlWithParams}
        />
      </div>
    </>
  );
}

// bg-primary-darkWhite/50  backdrop-blur-lg shadow-[0_0_1px_.4px_rgba(12,41,126,.03),0_1px_3px_rgba(12,41,126,.09)]
