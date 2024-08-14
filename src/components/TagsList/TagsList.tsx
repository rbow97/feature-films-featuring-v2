import { useStore } from "@nanostores/preact";
import {
  resultsUrlWithParams,
  taggedPeople,
  type TaggedPersonProps,
} from "@stores/newSystem";
import { addSearchParams } from "@utils/addSearchParams";
import cx from "classnames";
import { useEffect, useState } from "preact/hooks";
import ListItem from "./ListItem";
import TagsSearchButton from "./TagsSearchButton";

export default function TagsList() {
  const taggedPeopleLocalStorage =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("tagged-people")!);

  const $taggedPeople = useStore(taggedPeople);
  const [buttonIsVisible, setButtonIsVisible] = useState(
    taggedPeopleLocalStorage > 1
  );

  const $resultsUrlWithParams = useStore(resultsUrlWithParams);

  useEffect(() => {
    setButtonIsVisible($taggedPeople.length > 1);
  }, [$taggedPeople]);

  useEffect(() => {
    taggedPeople.set(taggedPeopleLocalStorage);
  }, []);

  useEffect(() => {
    addSearchParams("/results", $taggedPeople);
  }, [taggedPeople]);

  return (
    <>
      <div class="flex justify-between h-fit my-sm z-10 gap-md">
        <ul class={cx("flex items-center md:gap-xs overflow-auto -mx-6")}>
          {$taggedPeople.map((taggedPerson: TaggedPersonProps) => {
            return (
              <ListItem
                taggedPeople={$taggedPeople}
                taggedPerson={taggedPerson}
              />
            );
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
