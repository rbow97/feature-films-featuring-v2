import { getCreditsPerPerson } from "../api";

export async function getAllCredits(id: string) {
  const credits = await getCreditsPerPerson(id);
  console.log(credits);
  return credits;
}
