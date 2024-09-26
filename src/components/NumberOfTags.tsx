import { useStore } from "@nanostores/react";
import { taggedPeople } from "@stores/store";
import { useState, useEffect } from "react";

export default function NumberOfTags() {
  const $taggedPeople = useStore(taggedPeople);

  const [tagCount, setTagCount] = useState(0);

  useEffect(() => {
    setTagCount($taggedPeople.length);
  }, [$taggedPeople]);

  return (
    <span className="bg-primary-grey flex h-6 w-6 items-center justify-center rounded-full text-sm bg-black/5 text-primary-black/50 transition-colors duration-150 ease-in-out">
      {tagCount}
    </span>
  );
}
