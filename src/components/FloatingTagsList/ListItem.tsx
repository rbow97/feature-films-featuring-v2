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
    <li class={cx(removeListItem ? "animate-dropOut" : "animate-riseUp")}>
      <button
        onClick={() => {
          setRemoveListItem(true);
          setTimeout(() => {
            handleRemoveFromTags(taggedPerson, taggedPeople);
          }, 500);
        }}
        class={cx(
          "p-2 md:p-3 bg-primary-lightGrey/70 border-2 rounded-full border-primary-lightBlack/10 hover:bg-primary-darkGrey/30 text-primary-lightBlack text-xs md:text-sm ease group/list-item transition-all duration-500 ease-secondary flex items-center justify-center relative overflow-hidden"
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
