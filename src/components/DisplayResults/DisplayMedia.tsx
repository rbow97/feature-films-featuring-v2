import { useStore } from "@nanostores/preact";
import { searchedCreditsTotalStore } from "../../stores/creditsStore";

export default function DisplayMedia() {
  const $searchedCreditsTotal = useStore(searchedCreditsTotalStore);

  return (
    <div>
      {$searchedCreditsTotal.map((credit) => (
        <p>{credit.title}</p>
      ))}
    </div>
  );
}
