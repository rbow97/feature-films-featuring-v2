import { useStore } from "@nanostores/preact";
import {
  resultsUrlWithParams,
  showTaggedList,
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

  useEffect(() => {
    addSearchParams("/results", $taggedPeople);
    if ($taggedPeople.length > 0) {
      showTaggedList.set(true);
    }
  }, [$taggedPeople]);

  return (
    <>
      <div
        class={cx(
          "fixed bottom-5 md:bottom-10 flex  items-center left-1/2 -translate-x-1/2 z-10 w-fit transition-all duration-75 ease"
        )}
      >
        <ul
          class={cx(
            "flex items-center gap-1  md:gap-xs justify-center rounded-full"
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
          taggedPeople={$taggedPeople}
          resultsUrlWithParams={$resultsUrlWithParams}
        />
      </div>
    </>
  );
}

// bg-primary-darkWhite/50  backdrop-blur-lg shadow-[0_0_1px_.4px_rgba(12,41,126,.03),0_1px_3px_rgba(12,41,126,.09)]
