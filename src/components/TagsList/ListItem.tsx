import { type TaggedPersonProps } from "@stores/store";
import { handleRemoveFromTags } from "@utils/taggingSystem/handleRemoveFromTags";
import cx from "classnames";
import { useState, forwardRef } from "react";

const ListItem = forwardRef(function ListItem(
  {
    taggedPerson,
    taggedPeople,
    position,
  }: {
    taggedPerson: TaggedPersonProps;
    taggedPeople: TaggedPersonProps[];
    position: number;
  },
  ref: React.Ref<HTMLLIElement>
) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveClick = () => {
    setIsRemoving(true);
    setTimeout(() => {
      handleRemoveFromTags(taggedPerson, taggedPeople);
      setIsRemoving(false);
    }, 500);
  };

  return (
    <li
      ref={ref}
      style={{
        transform: `translateX(${position}px)`,
        transition: "transform 0.5s ease-in-out",
      }}
      className={cx(
        "max-w-[200px] shrink-0 snap-start first:pl-md",
        isRemoving ? "animate-slideOut" : "animate-slideIn"
      )}
    >
      <button
        onClick={handleRemoveClick}
        className={cx(
          "px-sm py-xs w-full md:h-md text-sm bg-white border-2 rounded-full border-primary-grey hover:bg-primary-grey text-primary-lightBlack/70 ease group/list-item transition-all duration-500 ease-secondary flex items-center justify-center relative overflow-hidden"
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
});

export default ListItem;
