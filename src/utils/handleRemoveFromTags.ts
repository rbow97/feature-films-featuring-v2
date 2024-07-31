import { creditsPerSearchStore } from "../stores/creditsStore";
import { taggedPeople } from "../stores/taggingSystemStore";

export function handleRemoveFromTags(
  clickedPerson: any,
  $taggedPeople: any,
  $creditsPerSearchStore: any
) {
  taggedPeople.set(
    $taggedPeople.filter((person: any) => person.id !== clickedPerson.id)
  );
  creditsPerSearchStore.set(
    $creditsPerSearchStore.filter(
      (person: any) => person.id !== clickedPerson.id
    )
  );
}
