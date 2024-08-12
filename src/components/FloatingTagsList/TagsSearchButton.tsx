import { useStore } from "@nanostores/preact";
import { resultsUrlWithParams } from "@stores/newSystem";
import cx from "classnames";
export default function TagsSearchButton() {
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);

  return (
    <button id="tagged-people-button ">
      <a
        class="flex items-center justify-center bg-primary-lightGrey/50 backdrop-blur-lg border-2 rounded-full border-primary-lightBlack/10 shrink-0 h-sm w-sm md:h-md md:w-md shadow-[0_0_1px_.4px_rgba(12,41,126,.03),0_1px_3px_rgba(12,41,126,.09)] group/tags-search-button"
        href={$resultsUrlWithParams}
      >
        <span
          class={cx(
            "h-2 w-2 border-t-2 border-primary-black border-r-2 relative rotate-45 ",

            "md:h-3 md:w-3 ",

            // pseudo-element
            "after:absolute after:w-0.5 after:h-3 group-hover/tags-search-button:after:h-5 after:-right-0.5 after:-top-[1px] after:rotate-45 after:bg-primary-black after:origin-top group-hover/tags-search-button:translate-x-2  after:transition-all after:duration-500 after:ease-secondary duration-500 ease-secondary",

            " md:after:w-0.5 md:after:h-5 md:group-hover/tags-search-button:after:h-7 "
          )}
        ></span>
      </a>
    </button>
  );
}
