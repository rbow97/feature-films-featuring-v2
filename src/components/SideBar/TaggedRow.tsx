import { useStore } from "@nanostores/preact";
import { taggedPeople, type TaggedPersonProps } from "@stores/newSystem";
import cx from "classnames";

export default function TaggedRow() {
  const $taggedPeople = useStore(taggedPeople);

  return (
    <>
      {$taggedPeople.length > 0 &&
        $taggedPeople.map((taggedPerson: TaggedPersonProps) => {
          return (
            <li
              class={cx(
                "text-[14px] py-1.5 px-2 md:py-2 md:px-3 border-2 border-primary-lightGrey rounded-full h-fit  last:mr-md"
              )}
            >
              <span class="block truncate mr-auto">{taggedPerson.name}</span>
            </li>
          );
        })}
    </>
  );
}
