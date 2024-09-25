import { useStore } from "@nanostores/react";
import { taggedPeople } from "@stores/store";

export default function NumberOfTags() {
  const $taggedPeople = useStore(taggedPeople);

  return (
    <span className="bg-primary-grey flex h-6 w-6 items-center justify-center rounded-full text-sm bg-black/5 text-primary-black/50 transition-colors duration-150 ease-in-out">
      {$taggedPeople.length > 0 ? $taggedPeople.length : 0}
    </span>
  );
}
