import { type TaggedPersonProps } from "@stores/newSystem";
import { handleRemoveFromTags } from "@utils/taggingSystem/handleRemoveFromTags";
import { useState } from "preact/hooks";
import cx from "classnames";

export default function ListItem({
  taggedPerson,
  taggedPeople,
}: {
  taggedPerson: TaggedPersonProps;
  taggedPeople: TaggedPersonProps[];
}) {
  const [removeListItem, setRemoveListItem] = useState(false);

  return (
    <li>
      <button
        onClick={() => {
          setRemoveListItem(true);
          setTimeout(() => {
            handleRemoveFromTags(taggedPerson, taggedPeople);
          }, 500);
        }}
        class={cx(
          "p-1.5 md:p-2 text-xs bg-white border-2 rounded-full border-primary-grey hover:bg-primary-grey text-primary-lightBlack/70 md:text-[12px] ease group/list-item transition-all duration-500 ease-secondary flex items-center justify-center relative overflow-hidden"
        )}
      >
        <span class="block truncate md:group-hover/list-item:-translate-x-5  md:group-hover/list-item:opacity-0 transition-all duration-500 ease-secondary">
          {taggedPerson.name}
        </span>
        <span class="absolute hidden md:block translate-x-5 md:group-hover/list-item:translate-x-0 transition-all duration-500 ease-secondary md:opacity-0 md:group-hover/list-item:opacity-100 ">
          Remove?
        </span>
      </button>
    </li>
  );
}
