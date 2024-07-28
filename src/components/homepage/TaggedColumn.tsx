import { useStore } from "@nanostores/preact";
import { taggedPeople } from "../../stores/taggedPeopleStore";

export default function TaggedColumn() {
  const $taggedPeople = useStore(taggedPeople);

  return (
    <div class="w-[200px] shrink-0 h-full border-r-primary-black border-r">
      <h3>Tagged</h3>
      {$taggedPeople.length > 0 &&
        $taggedPeople.map((person) => <p>{person.name}</p>)}
    </div>
  );
}
