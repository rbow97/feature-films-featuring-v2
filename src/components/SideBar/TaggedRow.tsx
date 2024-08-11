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
                "text-[16px] px-4 py-3 border-2 border-primary-grey rounded-full h-fit  last:mr-md"
              )}
            >
              <span class="block truncate mr-auto">{taggedPerson.name}</span>
            </li>
          );
        })}
    </>
  );
}
