/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import { D as DisplayPeople } from '../chunks/DisplayResults_BwPm9k4O.mjs';
import { $ as $$Layout } from '../chunks/Layout_BOEq5D8r.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Feature Films Featuring" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DisplayResults", DisplayPeople, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Display/DisplayResults", "client:component-export": "default" })} ` })}`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/pages/index.astro", void 0);

const $$file = "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
