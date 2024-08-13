import { type TaggedPersonProps } from "@stores/newSystem";
import cx from "classnames";
export default function TagsSearchButton({
  resultsUrlWithParams,
  taggedPeople,
}: {
  resultsUrlWithParams: string;
  taggedPeople: TaggedPersonProps[];
}) {
  return (
    <button id="tagged-people-button ">
      <a
        class=" flex items-center justify-center bg-primary-white backdrop-blur-lg border-2 rounded-full border-primary-grey shrink-0 h-sm w-sm  group/tags-search-button"
        href={resultsUrlWithParams}
      >
        <span
          class={cx(
            "h-2.5 w-2.5 border-t-2 border-primary-darkGrey border-r-2 relative rotate-45 ",

            // pseudo-element
            "after:absolute after:w-0.5 after:h-3 group-hover/tags-search-button:after:h-5 after:-right-0.5 after:-top-[1px] after:rotate-45 after:bg-primary-darkGrey after:origin-top group-hover/tags-search-button:translate-x-1  after:transition-all after:duration-500 after:ease-secondary duration-500 ease-secondary",

            " md:after:w-0.5 md:after:h-3 md:group-hover/tags-search-button:after:h-5 "
          )}
        />
      </a>
    </button>
  );
}

// shadow-[0_0_1px_.4px_rgba(12,41,126,.03),0_1px_3px_rgba(12,41,126,.09)]
