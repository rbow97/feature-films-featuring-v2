import { jsx, jsxs, Fragment } from 'preact/jsx-runtime';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, d as renderComponent, a as addAttribute, b as createAstro, f as renderHead } from './astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import 'clsx';
import { listenKeys, atom } from 'nanostores';
import { useState, useEffect } from 'preact/hooks';
import cx from 'classnames';
/* empty css                         */
import axios from 'axios';

function useStore(store, opts = {}) {
  let [, forceRender] = useState({});
  let [valueBeforeEffect] = useState(store.get());

  useEffect(() => {
    valueBeforeEffect !== store.get() && forceRender({});
  }, []);
  
  useEffect(() => {
    let batching, timer, unlisten;
    let rerender = () => {
      if (!batching) {
        batching = 1;
        timer = setTimeout(() => {
          batching = undefined;
          forceRender({});
        });
      }
    };
    if (opts.keys) {
      unlisten = listenKeys(store, opts.keys, rerender);
    } else {
      unlisten = store.listen(rerender);
    }
    return () => {
      unlisten();
      clearTimeout(timer);
    }
  }, [store, '' + opts.keys]);

  return store.get()
}

atom("person");
atom([]);
const taggedPeople = atom([]);
atom([]);
const resultsUrlWithParams = atom("");

function InfoCard(props) {
  const {
    imagePath,
    title,
    handleTagButtonClick
  } = props;
  return jsx("div", {
    class: "col-span-1 relative mx-auto",
    children: jsxs("article", {
      class: "w-fit  max-h-[400px] max-w-full h-full flex flex-col ",
      children: [jsx("img", {
        loading: "lazy",
        width: "150",
        height: "150",
        decoding: "async",
        class: "w-full object-cover overflow-hidden grow rounded-lg border-2 border-primary-lightGrey",
        src: imagePath ? `https://image.tmdb.org/t/p/w500/${imagePath}` : "/film-camera.svg"
      }), jsxs("div", {
        class: "flex justify-between mt-xs gap-xs w-full",
        children: [jsx("p", {
          class: "text-md text-primary-grey truncate",
          children: title
        }), jsxs("div", {
          class: "flex gap-4 items-start",
          children: [handleTagButtonClick && jsxs("button", {
            onClick: handleTagButtonClick,
            class: "group relative",
            "aria-describedby": "tag-person",
            children: [jsx("div", {
              class: "h-4 w-4 relative after:absolute after:top-0 after:bottom-0 after:left-1/2 after:w-0.5 after:bg-primary-black after:opacity-50 before:opacity-50 after:rounded-md before:absolute before:left-0 before:right-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 after:-translate-x-1/2 before:bg-primary-black before:rounded-md group-hover:after:opacity-100 group-hover:before:opacity-100 after:transition-opacity before:transition-opacity after:duration-200 before:duration-200"
            }), jsx("div", {
              role: "tooltip",
              id: "tag-person",
              class: "absolute -top-[30px] left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-primary-black rounded-md py-1 px-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease",
              children: jsx("p", {
                children: "Tag this person"
              })
            })]
          }), jsx("button", {
            class: "group",
            children: jsx("div", {
              class: "h-3 w-3 border-t-2 border-primary-black opacity-50 border-r-2 relative after:absolute after:w-0.5 after:h-5 after:-right-0.5 after:-top-[1px] after:rotate-45 after:bg-primary-black after:origin-top group-hover:opacity-100 transition-all duration-200 "
            })
          })]
        })]
      })]
    })
  });
}

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto w-full max-w-screen-2xl flexCol px-[96px]"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/Container.astro", void 0);

function SearchButton() {
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);
  return jsx("button", {
    class: "bg-primary-lightGrey text-primary-black p-xs rounded-md ",
    children: jsx("a", {
      href: $resultsUrlWithParams,
      children: "Search"
    })
  });
}

function TaggedRow() {
  const $taggedPeople = useStore(taggedPeople);
  return jsx(Fragment, {
    children: $taggedPeople.length > 0 && $taggedPeople.map((taggedPerson) => {
      return jsx("li", {
        class: cx("text-[14px] py-1.5 px-2 md:py-2 md:px-3 border-2 border-primary-lightGrey rounded-full h-fit  last:mr-md"),
        children: jsx("span", {
          class: "block truncate mr-auto",
          children: taggedPerson.name
        })
      });
    })
  });
}

const $$FilterAndTags = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="py-4 h-[68px] mt-xl flex items-center gap-2 border-t border-primary-lightGrey"> <ul class="flex gap-2 items-center justify-start overflow-scroll"> ${renderComponent($$result, "TaggedRow", TaggedRow, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/SideBar/TaggedRow", "client:component-export": "default" })} </ul> ${renderComponent($$result, "SearchButton", SearchButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/SearchButton", "client:component-export": "default" })} </div>`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/FilterAndTags.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full py-4 flex gap-[24px] items-center justify-between mx-auto max-w-screen-2xl px-sm"> <img src="/film-camera.svg" class="h-[48px] w-[48px]" height="40"> ${renderComponent($$result, "search-wrapper", "search-wrapper", { "class": "grow" }, { "default": () => renderTemplate` <label for="text-input" class="sr-only">Search for someone</label> <input autocomplete="off" id="text-input" name="text-input" placeholder="Try searching &quot;Rami Malek&quot;" type="text" class="rounded-2xl bg-primary-lightGrey border border-primary-grey pl-12 h-14 w-full"> ` })}  </header>`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Pill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pill;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="py-0.5 px-1 md:py-1 md:px-2 border-2 border-primary-darkGrey rounded-[40px] text-[14px] md:text-[14px] [&>span]:text-primary-darkGrey md:hover:border-primary-blue md:hover:bg-primary-blue md:[&>span]:hover:text-white duration-primary ease-primary overflow-hidden relative group block w-fit font-spaceGrotesk"${addAttribute(href || "/", "href")}><span class="flex duration-primary ease-primary md:group-hover:-translate-y-[calc(100%_+_10px)]">${renderSlot($$result, $$slots["default"])}</span> <span class="absolute duration-primary ease-primary translate-y-full md:group-hover:-translate-y-full flex" aria-hidden>${renderSlot($$result, $$slots["default"])}</span></a>`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/SideBar/Pill.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "header-wrapper", "header-wrapper", {}, { "default": () => renderTemplate` ${maybeRenderHead()}<a href="/people" id="header-link"> <h1 class="font-semibold font-oswald text-4xl mt-16 text-primary-blue">
Feature Films Featuring
</h1> </a> <h2 class="text-text text-primary-darkGrey mt-xs max-w-[400px]">
Tag and cross reference those working in the entertainment industry
</h2> <p class="text-[14px] my-auto flex items-center gap-2 mt-md text-primary-darkGrey">
Created by
${renderComponent($$result, "Pill", $$Pill, { "href": "https://rose-bowen-visuals.vercel.app/" }, { "default": ($$result2) => renderTemplate` Rose Bowen ` })} </p> ` })} `;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full"> <head><meta charset="UTF-8"><meta name="description" content="Feature Films Featuring is a website that allows you to cross reference cast and crew of films to see what they worked on together"><meta name="viewport" content="width=device-width"><!-- Google font --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Oswald:wght@200..700&family=Yeseva+One&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Yeseva+One&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Yeseva+One&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="h-full bg-white text-primary-black"> <main class="h-fit pb-20"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "FilterAndTags", $$FilterAndTags, {})} <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 4xl:grid-cols-6"> ${renderSlot($$result2, $$slots["default"])} </div> ` })} </main> </body></html>`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/layouts/Layout.astro", void 0);

const getPopularPeople = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${"35596d0ce1799b9e4c7617c1698f94dd"}&language=en-US&page=1`).catch((error) => {
    console.log(error);
  });
  return response.data.results;
};
const getCreditsPerPerson = async (id) => {
  const response = await axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${"35596d0ce1799b9e4c7617c1698f94dd"}&language=en-US`).catch((error) => {
    console.log(error);
  });
  return response.data;
};

export { $$Layout as $, InfoCard as I, getCreditsPerPerson as a, getPopularPeople as g, resultsUrlWithParams as r, taggedPeople as t, useStore as u };
