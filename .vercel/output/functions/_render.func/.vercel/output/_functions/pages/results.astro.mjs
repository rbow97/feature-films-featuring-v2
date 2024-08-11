/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import { a as getCreditsPerPerson, I as InfoCard, $ as $$Layout } from '../chunks/api_qMPuu0A2.mjs';
export { renderers } from '../renderers.mjs';

function filterProjects(projects, excludedGenreIds) {
  return projects.filter((project) => !excludedGenreIds.some((id) => project.genre_ids.includes(id)));
}
function getAllCommonCredits(taggedPeople) {
  const excludedGenreIds = [10767, 10763, 27023];
  if (taggedPeople === null) return [];
  let allFilteredProjects = [];
  allFilteredProjects = taggedPeople.map((person) => {
    const {
      cast,
      crew
    } = person;
    const castProjects = filterProjects(cast || [], excludedGenreIds);
    const crewProjects = filterProjects(crew || [], excludedGenreIds);
    return [...castProjects, ...crewProjects];
  });
  if (allFilteredProjects.length === 0) return [];
  let commonProjectIds = new Set(allFilteredProjects[0].map((project) => project.id));
  for (let i = 1; i < allFilteredProjects?.length; i++) {
    const currentProjectIds = new Set(allFilteredProjects[i].map((project) => project.id));
    commonProjectIds = new Set([...commonProjectIds].filter((id) => currentProjectIds.has(id)));
  }
  const commonProjects = allFilteredProjects[0].filter((project) => commonProjectIds.has(project.id));
  return commonProjects;
}

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const creditsArr = [];
  const search = Astro2.url.searchParams;
  for (const [, value] of search) {
    const credit = await getCreditsPerPerson(value);
    creditsArr.push(credit);
  }
  const commonCredits = getAllCommonCredits(creditsArr);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Feature Films Featuring" }, { "default": ($$result2) => renderTemplate`${commonCredits.length > 0 ? commonCredits.map((credit) => renderTemplate`${renderComponent($$result2, "InfoCard", InfoCard, { "imagePath": credit.poster_path, "title": credit.title })}`) : renderTemplate`${maybeRenderHead()}<p>Nothing here!</p>`}` })}`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/pages/results/index.astro", void 0);

const $$file = "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/pages/results/index.astro";
const $$url = "/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
