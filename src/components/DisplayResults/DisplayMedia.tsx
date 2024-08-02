import { useStore } from "@nanostores/preact";
import { currentTaggedAndCredits } from "../../stores/newSystem";
import { getAllCommonCredits } from "../../utils/getAllCommonCredits";

export default function DisplayMedia() {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);
  const credits = getAllCommonCredits($currentTaggedAndCredits);

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
      {credits.map((credit) => (
        <div class="col-span-1 pr-4 pb-4 relative group">
          <article class="flex px-1 pt-1 pb-3 gap-2 border-b-primary-lightGrey border-b h-fit items-start">
            <img
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              class="h-[100px] shrink-0 w-[100px] rounded-full aspect-auto object-cover object-center"
              src={`https://image.tmdb.org/t/p/w185/${credit.poster_path}`}
            />
            <div class="flex grow flex-col">
              <p>{credit.title || credit.original_name}</p>

              <p class="text-sm text-primary-grey">{credit.vote_average}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
