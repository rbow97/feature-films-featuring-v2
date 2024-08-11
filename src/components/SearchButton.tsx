import { useStore } from "@nanostores/preact";
import { resultsUrlWithParams } from "@stores/newSystem";

export default function SearchButton() {
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);

  return (
    <button class="text-[14px] md:text-[16px] px-3 py-2 md:px-4 md:py-3 bg-primary-grey border-2 border-primary-grey rounded-[12px] h-fit  shadow-[0_0_1px_.4px_rgba(12,41,126,.03),0_1px_3px_rgba(12,41,126,.09)]">
      <a href={$resultsUrlWithParams}>Search</a>
    </button>
  );
}
