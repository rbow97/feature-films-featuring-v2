import { getSearchedPeople } from "../api";
import { inputSearchResult } from "../stores/inputSearchResultStore";
import { currentDisplayedResults } from "../stores/taggingSystemStore";

export async function handleInputSearch(e) {
  const response = await getSearchedPeople(e.target.value);
  inputSearchResult.set(response);
  currentDisplayedResults.set(response);
}
