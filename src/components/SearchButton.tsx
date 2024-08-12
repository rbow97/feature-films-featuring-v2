import { useStore } from "@nanostores/preact";
import { resultsUrlWithParams } from "@stores/newSystem";
import cx from "classnames";

export default function SearchButton() {
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);

  return (
    <button
      class={cx(
        "rounded-full bg-primary-grey h-fit shadow-[0_0_1px_.4px_rgba(12,41,126,.03),0_1px_3px_rgba(12,41,126,.09)] ml-auto text-[14px] md:text-[16px] "
      )}
    >
      <a
        class="px-3 py-2 md:px-4 md:py-3 flex gap-3 items-center group relative"
        href={$resultsUrlWithParams}
      >
        <span class="block md:group-hover:translate-x-5  md:group-hover:opacity-0 transition-all duration-500 ease-secondary">
          Search
        </span>
        <span class="absolute hidden md:block -translate-x-5 md:group-hover:translate-x-0 transition-all duration-500 ease-secondary md:opacity-0 md:group-hover:opacity-100 ">
          Search
        </span>
        <div class="h-3 w-3 border-t-2 border-primary-black border-r-2 relative after:absolute after:w-0.5 after:h-5 after:-right-0.5 after:-top-[1px] after:rotate-45 after:bg-primary-black after:origin-top transition-all after:transition-all after:duration-500 after:ease-secondary duration-500 ease-secondary rotate-45 group-hover:translate-x-2 group-hover:after:h-7" />
      </a>
    </button>
  );
}
