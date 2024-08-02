import { getSearchedPeople } from "../api";
import { currentDisplayedResults } from "../stores/taggingSystemStore";

export async function handleInputSearchButton(inputValue: string) {
  const response = await getSearchedPeople(inputValue);
  currentDisplayedResults.set(response);
}
