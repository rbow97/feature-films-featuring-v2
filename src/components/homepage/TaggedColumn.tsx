import { useStore } from "@nanostores/preact";
import { currentTaggedAndCredits } from "@stores/newSystem";
import { currentDisplayedResults } from "@stores/taggingSystemStore";
import { getAllCommonCredits } from "@utils/getAllCommonCredits";
import { handleRemoveFromTags } from "@utils/taggingSystem/handleRemoveFromTags";
import { useEffect } from "preact/hooks";
import { getPopularPeople } from "src/api";

export default function TaggedColumn() {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);

  useEffect(() => {
    if ($currentTaggedAndCredits.length > 1) {
      const credits = getAllCommonCredits($currentTaggedAndCredits);
      currentDisplayedResults.set(credits);
    } else {
      // currentDisplayedResults.set(people);
    }
  }, [$currentTaggedAndCredits]);

  return (
    <>
      {$currentTaggedAndCredits !== null &&
        $currentTaggedAndCredits.map((person: any) => (
          <li class="first:mt-4 flex gap-x-xs items-center w-full max-w-full text-tag">
            <img
              width="100"
              height="100"
              class="imageLayout h-small w-small"
              src={
                person.person.profile_path
                  ? `https://image.tmdb.org/t/p/w185/${person.person.profile_path}`
                  : "/film-camera.svg"
              }
            />
            <span class="block truncate mr-auto">{person.person.name}</span>
            <button
              type="button"
              onClick={() =>
                handleRemoveFromTags(person.person, $currentTaggedAndCredits)
              }
            >
              <svg
                fill="#b7b7b7"
                height="200px"
                width="200px"
                viewBox="0 0 460.775 460.775"
                class="h-2 w-2"
              >
                <path
                  d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                />
              </svg>
            </button>
          </li>
        ))}
    </>
  );
}
