/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BOEq5D8r.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
function getStaticPaths() {
  return [
    { params: { slug: "popular-movies" } },
    { params: { slug: "popular-tv" } },
    { params: { slug: "now-playing" } },
    { params: { slug: "top-rated" } }
  ];
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Feature Films Featuring" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div>${slug}</div> ` })}`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/pages/[slug].astro", void 0);

const $$file = "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
