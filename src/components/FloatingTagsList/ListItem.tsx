import { type TaggedPersonProps } from "@stores/newSystem";
import { handleRemoveFromTags } from "@utils/taggingSystem/handleRemoveFromTags";

export default function ListItem({
  taggedPerson,
  taggedPeople,
}: {
  taggedPerson: TaggedPersonProps;
  taggedPeople: TaggedPersonProps[];
}) {
  return (
    <li class="animate-riseUp">
      <button
        onClick={() => handleRemoveFromTags(taggedPerson, taggedPeople)}
        class="rounded-full p-1 md:p-2 hover:bg-primary-darkGrey/30 text-primary-lightBlack text-xs md:text-sm ease group/list-item transition-all duration-500 ease-secondary flex items-center justify-center relative overflow-hidden"
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
