import { useStore } from "@nanostores/preact";
import { currentTaggedAndCredits } from "../../stores/newSystem";
import { getAllCommonCredits } from "../../utils/getAllCommonCredits";

export default function DisplayMedia() {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);

  const credits = getAllCommonCredits($currentTaggedAndCredits);

  return (
    <div>
      {credits.map((credit) => (
        <p>{credit.title}</p>
      ))}
    </div>
  );
}
