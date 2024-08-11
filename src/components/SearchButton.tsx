import { useStore } from "@nanostores/preact";
import { resultsUrlWithParams } from "@stores/newSystem";

export default function SearchButton() {
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);

  return (
    <button>
      <a href={$resultsUrlWithParams}>Search</a>
    </button>
  );
}
