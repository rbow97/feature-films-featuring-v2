import { searchedCreditsTotalStore } from "../stores/creditsStore";
import { currentDisplayedResults } from "../stores/taggingSystemStore";

// Function to filter out projects with specified genre_ids
function filterProjects(projects: Array<any>, excludedGenreIds: Array<number>) {
  return projects.filter(
    (project) => !excludedGenreIds.some((id) => project.genre_ids.includes(id))
  );
}

// TODO:
// We have to pass in tagged people and do a new credits search every time

// Function to find projects that all people have in common
export async function getAllCommonCredits(people: Array<any>) {
  const excludedGenreIds = [10767, 10763];

  // Step 1: Filter projects for each person
  const filteredProjects = people.map((person) =>
    filterProjects([...person.cast, ...person.crew], excludedGenreIds)
  );

  // Step 2: Find common projects using intersection
  if (filteredProjects.length === 0) return [];

  // Start with projects from the first person
  let commonProjects = new Set(
    filteredProjects[0].map((project) => project.id)
  );

  // Intersect with projects from other people
  filteredProjects.slice(1).forEach((personProjects) => {
    const personProjectIds = new Set(
      personProjects.map((project) => project.id)
    );
    commonProjects = new Set(
      [...commonProjects].filter((id) => personProjectIds.has(id))
    );
  });

  // Convert the set of common project IDs back to project objects
  const result = filteredProjects[0].filter((project) =>
    commonProjects.has(project.id)
  );

  // return result;
  searchedCreditsTotalStore.set(result);
}
