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
                class="px-3 py-2 md:px-4 md:py-3 text-[14px] md:text-[16px] border-2 border-primary-grey rounded-full relative overflow-hidden group md:hover:bg-primary-red md:hover:border-primary-red transition-all duration-200"
              >
                <span class="block truncate md:group-hover:opacity-0 transition- duration-200">
                  {taggedPerson.name}
                </span>
                <div class="absolute hidden md:flex items-center justify-center -top-2 -bottom-2 -right-2 -left-2 translate-x-full rounded-full md:group-hover:translate-x-0 transition-all duration-300 ease-primary">
                  <span class="text-white text-[14px] md:text-[16px]">
                    Remove?
                  </span>
                </div>
              </button>
            </li>
          );
        })}
    </>
  );
}
