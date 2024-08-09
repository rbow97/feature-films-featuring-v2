import type { Person } from "@stores/newSystem";
import { ImageWithText } from "./ImageWithText";

interface Props {
  imagePath: string;
  title: string;
  subtitle: string;
  pillsArray?: Person.KnownForProps[];
  tag?: boolean;
  handleTagButtonClick?: () => void;
}

export default function InfoCard(props: Props) {
  const { imagePath, title, subtitle, tag, pillsArray, handleTagButtonClick } =
    props;

  return (
    <div class="col-span-1 relative group">
      <ImageWithText imagePath={imagePath}>
        <div class="flexCol grow">
          <div class="flex justify-between">
            <p>{title}</p>
            {tag && (
              <button class="w-fit" onClick={handleTagButtonClick}>
                <span class="block h-3 w-3 relative after:absolute after:-translate-x-1/2 before:-translate-y-1/2 before:absolute after:top-0 after:left-1/2 before:top-1/2 before:left-0 after:h-3 after:w-0.5 after:bg-primary-black before:w-3 before:h-0.5 before:bg-primary-black" />
              </button>
            )}
          </div>
          <p class="text-sm text-primary-grey">{subtitle}</p>
          {pillsArray && (
            <div class="flex gap-x-xs overflow-x-auto w-full mt-sm">
              {pillsArray.map((item: Person.KnownForProps, i: number) => {
                // TODO: figure out why this doesnt work with 3
                if (i < 2) {
                  return (
                    <div class="py-0.5 px-xs border shrink-0 border-primary-black rounded-full">
                      <p class="text-[10px] uppercase">
                        {item.title || item.name}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </ImageWithText>
    </div>
  );
}
