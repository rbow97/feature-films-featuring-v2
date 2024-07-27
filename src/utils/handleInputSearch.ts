import { getSearchedPeople } from "../api";
import { inputSearchResult } from "../stores/inputSearchResultStore";

export async function handleInputSearch(e) {
  const response = await getSearchedPeople(e.target.value);
  inputSearchResult.set(response);
}
