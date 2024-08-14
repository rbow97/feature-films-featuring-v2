/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro } from '../chunks/astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import { D as DisplayPeople } from '../chunks/DisplayResults_BwPm9k4O.mjs';
import { a as getSearchedPeople, $ as $$Layout } from '../chunks/Layout_BOEq5D8r.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const search = Astro2.url.searchParams;
  let extractedQuery = search.toString().split("=")[1];
  let formattedQuery = extractedQuery.replace(/\+/g, " ");
  const searchedPeopleArr = await getSearchedPeople(formattedQuery);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Feature Films Featuring" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DisplayPeople", DisplayPeople, { "client:load": true, "searchedPeople": searchedPeopleArr, "client:component-hydration": "load", "client:component-path": "@components/Display/DisplayResults", "client:component-export": "default" })} ` })}`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/pages/search/index.astro", void 0);

const $$file = "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/pages/search/index.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
