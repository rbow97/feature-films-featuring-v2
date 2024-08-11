import { useStore } from "@nanostores/preact";
import { resultsUrlWithParams } from "@stores/newSystem";

export default function SearchButton() {
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);

  return (
    <button class="bg-primary-lightGrey text-primary-black p-xs rounded-md ">
      <a href="/results">Search</a>
    </button>
  );
}cj
