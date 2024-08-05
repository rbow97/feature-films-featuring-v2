import { useStore } from "@nanostores/preact";
import { currentTaggedAndCredits } from "@stores/newSystem";
import { getAllCommonCredits } from "@utils/getAllCommonCredits";
import { ImageWithText } from "../ImageWithText";

export default function DisplayMedia() {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);
  const credits = getAllCommonCredits($currentTaggedAndCredits);

  return (
    <>
      {credits.map((credit) => (
        <div class="col-span-1 pr-sm pb-sm relative group">
          <ImageWithText imagePath={credit.poster_path}>
            <div class="flexCol grow">
              <p>{credit.title || credit.original_name}</p>

              <p class="text-sm text-primary-grey">{credit.vote_average}</p>
            </div>
          </ImageWithText>
        </div>
      ))}
    </>
  );
}
