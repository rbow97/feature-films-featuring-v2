import { useStore } from "@nanostores/preact";
import { taggedPeople } from "../../stores/taggedPeopleStore";
import { getAllCredits } from "../../utils/getAllCredits";

export default function TaggedColumn() {
  const $taggedPeople = useStore(taggedPeople);

  return (
    <div class="w-[200px] shrink-0 h-full border-r-primary-black border-r">
      <h3>Tagged</h3>
      <button onClick={() => getAllCredits($taggedPeople)}>Search</button>
      {$taggedPeople.length > 0 &&
        $taggedPeople.map((person: any) => <p>{person.name}</p>)}
    </div>
  );
}
