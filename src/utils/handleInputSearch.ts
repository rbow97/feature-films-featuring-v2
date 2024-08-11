import { navigate } from "astro:transitions/client";
import { getSearchedPeople } from "../api";
import { currentDisplayedResults } from "../stores/taggingSystemStore";

export async function handleInputSearchButton(inputValue: string) {
  const response = await getSearchedPeople(inputValue);
  currentDisplayedResults.set({ type: "people", results: response });

  const add_params = {
    query: inputValue,
  };

  navigate(`/search?${new URLSearchParams([...Object.entries(add_params)])}`);
}
