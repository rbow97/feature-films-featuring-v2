import { useStore } from "@nanostores/preact";
import { resultsUrlWithParams } from "@stores/newSystem";
import cx from "classnames";
import type { JSX } from "preact/jsx-runtime";

export default function SearchButton({ children }: { children: JSX.Element }) {
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);

  return (
    <button
      class={cx(
        "rounded-full bg-primary-grey h-fit shadow-[0_0_1px_.4px_rgba(12,41,126,.03),0_1px_3px_rgba(12,41,126,.09)] ml-auto text-[14px] md:text-[16px] "
      )}
    >
      <a
        class="px-3 py-2 md:px-4 md:py-3 flex gap-3 items-center group/search-button relative"
        href={$resultsUrlWithParams}
      >
        <span class="block md:group-hover/search-button:translate-x-5  md:group-hover/search-button:opacity-0 transition-all duration-500 ease-secondary">
          Search
        </span>
        <span class="absolute hidden md:block -translate-x-5 md:group-hover/search-button:translate-x-0 transition-all duration-500 ease-secondary md:opacity-0 md:group-hover/search-button:opacity-100 ">
          Search
        </span>
        {children}
      </a>
    </button>
  );
}
