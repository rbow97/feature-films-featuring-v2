import { getCreditsPerPerson } from "../api";

export async function getAllCredits(id: string) {
  const credits = await getCreditsPerPerson(id);
  return credits;
}
