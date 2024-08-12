import { useStore } from "@nanostores/preact";
import { taggedPeople, type TaggedPersonProps } from "@stores/newSystem";
import { handleRemoveFromTags } from "@utils/taggingSystem/handleRemoveFromTags";
import cx from "classnames";

export default function TaggedRow() {
  const $taggedPeople = useStore(taggedPeople);

  return (
    <ul>
      {$taggedPeople.length > 0 &&
        $taggedPeople.map((taggedPerson: TaggedPersonProps) => {
          return (
            <li
              class={cx(
                "last:mr-md bg-primary-red",
                $taggedPeople.length > 0 ? "animate-riseUp" : "animate-dropOut"
              )}
            >
              <button
                onClick={() =>
                  handleRemoveFromTags(taggedPerson, $taggedPeople)
                }
                class="px-3 py-2 md:px-4 md:py-3 text-[14px] md:text-[16px] text-primary-darkWhite bg-primary-lightBlack rounded-full relative overflow-hidden group hover:bg-primary-red transition-all duration-500 ease-secondary flex items-center justify-center"
              >
                <span class="block truncate md:group-hover:-translate-x-5  md:group-hover:opacity-0 transition-all duration-500 ease-secondary">
                  {taggedPerson.name}
                </span>
                <span class="absolute hidden md:block translate-x-5 md:group-hover:translate-x-0 transition-all duration-500 ease-secondary md:opacity-0 md:group-hover:opacity-100 ">
                  Remove?
                </span>
              </button>
            </li>
          );
        })}
    </ul>
  );
}
