import { useStore } from "@nanostores/preact";
import {
  currentTaggedAndCredits,
  type CurrentTaggedAndCredits,
} from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { getAllCommonCredits } from "@utils/getAllCommonCredits";
import { useEffect } from "preact/hooks";
import cx from "classnames";

export default function TaggedRow() {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);

  useEffect(() => {
    if ($currentTaggedAndCredits.length > 1) {
      const credits = getAllCommonCredits($currentTaggedAndCredits);
      currentDisplayedResults.set({ type: "media", results: credits });
    } else {
      // currentDisplayedResults.set(people);
    }
  }, [$currentTaggedAndCredits]);

  return (
    <>
      {$currentTaggedAndCredits.length > 0 &&
        $currentTaggedAndCredits.map((person: CurrentTaggedAndCredits) => {
          return (
            <li
              style={{
                backgroundColor: person.theme.backgroundColour,
                color: person.theme.textColour,
              }}
              class={cx(
                "rounded-full text-[14px] py-0.5 px-1 md:py-1 md:px-2 border-black h-fit  last:mr-md"
              )}
            >
              <span class="block truncate mr-auto">{person.person.name}</span>
            </li>
          );
        })}
    </>
  );
}
