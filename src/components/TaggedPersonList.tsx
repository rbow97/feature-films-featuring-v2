import { type TaggedPersonProps } from "@stores/store";
import { handleRemoveFromTags } from "@utils/taggingSystem/handleRemoveFromTags";
import cx from "classnames";
import { useEffect, useState } from "react";

export function TaggedPersonList({
  taggedPeople,
}: {
  taggedPeople: TaggedPersonProps[];
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {taggedPeople.map((taggedPerson) => (
        <TaggedPersonLabel
          key={taggedPerson.id}
          taggedPerson={taggedPerson}
          taggedPeople={taggedPeople}
        />
      ))}
    </ul>
  );
}

function TaggedPersonLabel({
  taggedPerson,
  taggedPeople,
}: {
  taggedPerson: TaggedPersonProps;
  taggedPeople: TaggedPersonProps[];
}) {
  return (
    <li className={cx("max-w-[200px] shrink-0 snap-start h-fit")}>
      <button
        onClick={() => handleRemoveFromTags(taggedPerson, taggedPeople)}
        className={cx(
          "px-sm p-xs w-full md:h-[40px] text-sm bg-white border-2 rounded-full border-primary-grey hover:bg-primary-grey text-primary-lightBlack/70 ease group/list-item transition-all duration-500 ease-secondary flex items-center justify-center relative overflow-hidden"
        )}
      >
        <span className="block truncate md:group-hover/list-item:-translate-x-5  md:group-hover/list-item:opacity-0 transition-all duration-500 ease-secondary">
          {taggedPerson.name}
        </span>
        <span className="absolute hidden md:block translate-x-5 md:group-hover/list-item:translate-x-0 transition-all duration-500 ease-secondary md:opacity-0 md:group-hover/list-item:opacity-100 ">
          Remove?
        </span>
      </button>
    </li>
  );
}
