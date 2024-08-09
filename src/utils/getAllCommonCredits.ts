import { currentDisplayedResults } from "@stores/taggingSystemStore";
import {
  allCredits,
  currentTaggedAndCredits,
  type CurrentTaggedAndCreditsType,
} from "../stores/newSystem";

// Function to filter out projects with specified genre_ids
function filterProjects(projects, excludedGenreIds) {
  return projects.filter(
    (project) => !excludedGenreIds.some((id) => project.genre_ids.includes(id))
  );
}

// Function to find projects that all people have in common
export function getAllCommonCredits(people: CurrentTaggedAndCreditsType) {
  const excludedGenreIds = [10767, 10763, 27023];

  if (people === null) return [];

  let allFilteredProjects = [];

  // Step 1: Filter and combine projects for each person
  allFilteredProjects = people.map((person) => {
    const { cast, crew } = person.credits;
    const castProjects = filterProjects(cast || [], excludedGenreIds);
    const crewProjects = filterProjects(crew || [], excludedGenreIds);
    return [...castProjects, ...crewProjects];
  });
  // Step 2: Find common projects
  if (allFilteredProjects.length === 0) return [];

  // Start with the project IDs of the first person
  let commonProjectIds = new Set(
    allFilteredProjects[0].map((project) => project.id)
  );

  // Intersect with the project IDs of other people
  for (let i = 1; i < allFilteredProjects?.length; i++) {
    const currentProjectIds = new Set(
      allFilteredProjects[i].map((project) => project.id)
    );
    commonProjectIds = new Set(
      [...commonProjectIds].filter((id) => currentProjectIds.has(id))
    );
  }

  // Convert the set of common project IDs back to project objects
  const commonProjects = allFilteredProjects[0].filter((project) =>
    commonProjectIds.has(project.id)
  );

  return commonProjects;
}
