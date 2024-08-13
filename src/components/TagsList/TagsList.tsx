import { useStore } from "@nanostores/preact";
import {
  resultsUrlWithParams,
  taggedPeople,
  type TaggedPersonProps,
} from "@stores/newSystem";
import { addSearchParams } from "@utils/addSearchParams";
import cx from "classnames";
import { useEffect } from "preact/hooks";
import ListItem from "./ListItem";
import TagsSearchButton from "./TagsSearchButton";

export default function FloatingTagsList() {
  const $taggedPeople = useStore(taggedPeople);
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);
  const buttonIsVisible = $taggedPeople.length > 1;

  useEffect(() => {
    addSearchParams("/results", $taggedPeople);
  }, [$taggedPeople]);

  return (
    <>
      <div class="flex justify-between h-fit my-sm z-10">
        <ul
          class={cx(
            "flex items-center gap-1 md:gap-xs justify-center rounded-full"
          )}
        >
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
