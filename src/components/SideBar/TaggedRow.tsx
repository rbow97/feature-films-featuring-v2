import { useStore } from "@nanostores/preact";
import { taggedPeople, type TaggedPersonProps } from "@stores/newSystem";
import { handleRemoveFromTags } from "@utils/taggingSystem/handleRemoveFromTags";

export default function TaggedRow() {
  const $taggedPeople = useStore(taggedPeople);

  return (
    <>
      {$taggedPeople.length > 0 &&
        $taggedPeople.map((taggedPerson: TaggedPersonProps) => {
          return (
            <li class="last:mr-md ">
              <button
                onClick={() =>
                  handleRemoveFromTags(taggedPerson, $taggedPeople)
                }
                class="px-4 py-3 text-[16px] border-2 border-primary-grey rounded-full relative overflow-hidden group md:hover:border-none transition-all duration-75"
              >
                <span class="block truncate ">{taggedPerson.name}</span>
                <div class="absolute hidden md:flex items-center justify-center -top-2 -bottom-2 -right-2 -left-2  bg-primary-red translate-x-full rounded-full md:group-hover:translate-x-0 transition-all duration-300 ease-primary">
                  <span class="text-white text-[16px]">Remove?</span>
                </div>
              </button>
            </li>
          );
        })}
    </>
  );
}
