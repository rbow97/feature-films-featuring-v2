import { useState } from "preact/hooks";
import cx from "classnames";

export default function MobileSearch() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <label for="text-input" class="sr-only">
        Search for someone
      </label>
      <input
        autocomplete="off"
        id="text-input"
        name="text-input"
        placeholder='Try searching "Rami Malek"'
        type="text"
        class={cx(
          "rounded-2xl bg-primary-lightGrey border border-primary-grey pl-3 h-12 md:h-14 -translate-y-[calc(100%_+_20px)] absolute left-[32px] right-[90px]",
          showSearch ? "animate-dropIn" : "animate-riseOut"
        )}
      />
      <button
        onClick={() => setShowSearch((prev) => !prev)}
        class=" flex items-center justify-center bg-primary-lightGrey border-2 rounded-full border-primary-grey shrink-0 h-[48px] w-[48px]"
      >
        <img src="/magnifying-glass.svg" class="h-[12px] w-[12px]" />
      </button>
    </>
  );
}
