import { useStore } from "@nanostores/preact";
import { ImageWithText } from "../ImageWithText";
import { getAllCommonCredits } from "../../../utils/getAllCommonCredits";
import { currentTaggedAndCredits } from "../../../stores/newSystem";

export default function DisplayMedia() {
  const $currentTaggedAndCredits = useStore(currentTaggedAndCredits);
  const credits = getAllCommonCredits($currentTaggedAndCredits);

  return (
    <>
      {credits.map((credit) => (
        <div class="col-span-1 prSmall pbSmall relative group">
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
