import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, e as renderSlot, f as renderHead } from './astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import cx from 'classnames';
import { jsx, jsxs, Fragment } from 'preact/jsx-runtime';
import 'clsx';
/* empty css                          */
import { listenKeys, atom } from 'nanostores';
import { useState, useEffect } from 'preact/hooks';
import { persistentAtom } from '@nanostores/persistent';
import axios from 'axios';

const $$Astro$3 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const { popularPeople } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "container-element", "container-element", {}, { "default": () => renderTemplate` ${maybeRenderHead()}<div id="container"${addAttribute(JSON.stringify(popularPeople), "data-popular-people")} class="mx-auto w-full max-w-screen-2xl flexCol px-md md:px-2xl"> ${renderSlot($$result, $$slots["default"])} </div> ` })} `;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/Container.astro", void 0);

function Arrow({
  className
}) {
  return jsx("span", {
    class: cx(
      "h-3 w-3 border-t-2 border-primary-black border-r-2 relative rotate-45 ",
      // pseudo-element
      "after:absolute after:w-0.5 after:h-5 after:-right-0.5 after:-top-[1px] after:rotate-45 after:bg-primary-black after:origin-top",
      className
    )
  });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full py-sm flex gap-sm md:gap-md items-center justify-between mx-auto px-md relative"> <img src="/film-camera.svg" class="h-medium w-medium md:h-md md:w-md hidden md:block" height="40"> ${renderComponent($$result, "search-wrapper", "search-wrapper", { "class": "grow max-w-screen-2xl flex items-center gap-sm md:gap-md" }, { "default": () => renderTemplate` <label for="text-input" class="sr-only">Search for someone</label> <input autocomplete="off" id="text-input" name="text-input" placeholder="Try searching &quot;Rami Malek&quot;" type="text" class="rounded-2xl bg-primary-lightGrey border border-primary-grey pl-sm h-md md:h-lg w-full"> <a class="flex items-center justify-center bg-primary-lightGrey border-2 rounded-full border-primary-grey shrink-0 h-md w-md" id="search-people-link" href="#"> ${renderComponent($$result, "Arrow", Arrow, { "className": "group-hover/search-button:translate-x-2 group-hover/search-button:after:h-7 after:transition-all after:duration-500 after:ease-secondary duration-500 ease-secondary" })} </a> ` })} </header> `;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Pill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pill;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="py-0.5 px-2 md:py-1 border-2 border-primary-black rounded-[40px] text-[14px] md:text-[14px] [&>span]:text-primary-black md:hover:border-primary-blue md:hover:bg-primary-blue md:[&>span]:hover:text-white duration-primary ease-primary overflow-hidden relative group block w-fit font-spaceGrotesk"${addAttribute(href || "/", "href")}><span class="flex duration-primary ease-primary md:group-hover:-translate-y-[calc(100%_+_10px)]">${renderSlot($$result, $$slots["default"])}</span> <span class="absolute duration-primary ease-primary translate-y-full md:group-hover:-translate-y-full flex" aria-hidden>${renderSlot($$result, $$slots["default"])}</span></a>`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/SideBar/Pill.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "header-wrapper", "header-wrapper", {}, { "default": () => renderTemplate` ${maybeRenderHead()}<a href="/" id="header-link" data-tab="popular-people" class="w-fit block mx-auto md:mx-[unset]"> <h1 class="font-semibold font-oswald text-lg md:text-xl mt-2xl md:mt-3xl text-primary-blue text-center md:text-start">
Feature Films Featuring
</h1> </a> <h2 class="text-text text-center md:text-start text-primary-black mt-xs md:max-w-[400px]">
Tag and cross reference those working in the entertainment industry
</h2> <p class="text-sm justify-center md:justify-start my-auto flex items-center gap-xs mt-sm md:mt-md text-primary-black mb-2xl md:mb-3xl">
Created by
${renderComponent($$result, "Pill", $$Pill, { "href": "https://rose-bowen-visuals.vercel.app/" }, { "default": ($$result2) => renderTemplate` Rose Bowen ` })} </p> ` })} `;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/Hero.astro", void 0);

const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "nav-wrapper", "nav-wrapper", { "data-astro-cid-jy42ldzf": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<nav class="tabs-container rounded-2xl bg-primary-lightGrey border border-primary-grey h-md md:h-lg w-full p-[4px] gap-xs flex justify-between relative text-sm md:text-md" data-astro-cid-jy42ldzf> <div class="animated-bg" data-astro-cid-jy42ldzf></div> <a href="/" class="tab-btn grow p-sm h-full rounded-xl flex items-center justify-center px-md relative transition-bg ease duration-200" data-tab="popular-people" data-astro-cid-jy42ldzf> <p data-astro-cid-jy42ldzf>Popular People</p> </a> <a href="/popular-movies" class="tab-btn grow p-sm h-full rounded-xl flex items-center justify-center px-md" data-tab="popular-movies" data-astro-cid-jy42ldzf> <p data-astro-cid-jy42ldzf>Popular Movies</p> </a> <a href="/popular-tv" class="tab-btn grow p-sm h-full rounded-xl flex items-center justify-center px-md" data-tab="popular-tv" data-astro-cid-jy42ldzf> <p data-astro-cid-jy42ldzf>Popular TV</p> </a> <a href="/now-playing" class="tab-btn grow p-sm h-full rounded-xl flex items-center justify-center px-md" data-tab="now-playing" data-astro-cid-jy42ldzf> <p data-astro-cid-jy42ldzf>Now Playing</p> </a> <a href="/top-rated" class="tab-btn grow p-sm h-full rounded-xl flex items-center justify-center px-md" data-tab="top-rated" data-astro-cid-jy42ldzf> <p data-astro-cid-jy42ldzf>Top Rated</p> </a> </nav> ` })}  `;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/components/Tabs/Tabs.astro", void 0);

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
atom("");
atom({
  popularPeople: []
});
persistentAtom("all-tagged-people", [], {
  encode: JSON.stringify,
  decode: JSON.parse
});

function addSearchParams(route, taggedPeopleArr) {
  const add_params = {};
  taggedPeopleArr.map((taggedPerson, index) => {
    add_params[`person-${index + 1}`] = taggedPerson.id.toString();
  });
  resultsUrlWithParams.set(`${route}?${new URLSearchParams([...Object.entries(add_params)])}`);
}

function handleRemoveFromTags(clickedPerson, $taggedPeople) {
  taggedPeople.set($taggedPeople.filter((person) => {
    return person.id !== clickedPerson.id;
  }));
  localStorage.setItem("tagged-people", JSON.stringify($taggedPeople.filter((person) => {
    return person.id !== clickedPerson.id;
  })));
}

function ListItem({
  taggedPerson,
  taggedPeople
}) {
  return jsx("li", {
    class: " max-w-[200px] shrink-0 snap-start first:pl-md last:pr-xs",
    children: jsxs("button", {
      onClick: () => {
        setTimeout(() => {
          handleRemoveFromTags(taggedPerson, taggedPeople);
        }, 500);
      },
      class: cx("px-sm py-xs w-full md:h-md text-sm bg-white border-2 rounded-full border-primary-grey hover:bg-primary-grey text-primary-lightBlack/70 ease group/list-item transition-all duration-500 ease-secondary flex items-center justify-center relative overflow-hidden"),
      children: [jsx("span", {
        class: "block truncate md:group-hover/list-item:-translate-x-5  md:group-hover/list-item:opacity-0 transition-all duration-500 ease-secondary",
        children: taggedPerson.name
      }), jsx("span", {
        class: "absolute hidden md:block translate-x-5 md:group-hover/list-item:translate-x-0 transition-all duration-500 ease-secondary md:opacity-0 md:group-hover/list-item:opacity-100 ",
        children: "Remove?"
      })]
    })
  });
}

function TagsSearchButton({
  resultsUrlWithParams,
  visible
}) {
  return jsx("a", {
    href: resultsUrlWithParams,
    class: cx("h-fit ", visible ? "block" : "hidden"),
    children: jsx("div", {
      class: "flex items-center rounded-full bg-primary-lightGrey border border-primary-grey px-sm py-xs md:h-md  w-fit text-sm",
      children: jsx("span", {
        children: "Search"
      })
    })
  });
}

function TagsList() {
  const taggedPeopleLocalStorage = typeof window !== "undefined" && JSON.parse(localStorage.getItem("tagged-people"));
  const $taggedPeople = useStore(taggedPeople);
  const [buttonIsVisible, setButtonIsVisible] = useState(taggedPeopleLocalStorage > 1);
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);
  useEffect(() => {
    setButtonIsVisible($taggedPeople.length > 1);
  }, [$taggedPeople]);
  useEffect(() => {
    taggedPeople.set(taggedPeopleLocalStorage);
  }, []);
  useEffect(() => {
    addSearchParams("/results", $taggedPeople);
  }, [taggedPeople]);
  return jsx(Fragment, {
    children: jsxs("div", {
      class: "flex justify-between h-fit my-sm z-10 gap-md",
      children: [jsx("ul", {
        class: cx("flex items-center md:gap-xs overflow-auto -mx-6"),
        children: $taggedPeople.map((taggedPerson) => {
          return jsx(ListItem, {
            taggedPeople: $taggedPeople,
            taggedPerson
          });
        })
      }), jsx(TagsSearchButton, {
        visible: buttonIsVisible,
        resultsUrlWithParams: $resultsUrlWithParams
      })]
    })
  });
}

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/node_modules/astro/components/ViewTransitions.astro", void 0);

const getPopularPeople = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${"35596d0ce1799b9e4c7617c1698f94dd"}&language=en-US&page=1`).catch((error) => {
    console.log(error);
  });
  return response.data.results;
};
const getSearchedPeople = async (input) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${input}&api_key=${"35596d0ce1799b9e4c7617c1698f94dd"}`).catch((error) => {
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

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const popularPeople = await getPopularPeople();
  return renderTemplate`<html lang="en" class="h-full"> <head><meta charset="UTF-8"><meta name="description" content="Feature Films Featuring is a website that allows you to cross reference cast and crew of films to see what they worked on together"><meta name="viewport" content="width=device-width"><!-- Google font --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Oswald:wght@200..700&family=Yeseva+One&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Yeseva+One&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Yeseva+One&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Yeseva+One&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="h-full bg-white text-primary-black"> <main class="h-fit pb-20 relative"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Container", $$Container, { "popularPeople": popularPeople }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Tabs", $$Tabs, {})} ${renderComponent($$result2, "TagsList", TagsList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/TagsList/TagsList", "client:component-export": "default" })} <div class="grid gap-sm sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 4xl:grid-cols-6"> ${renderSlot($$result2, $$slots["default"])} </div> ` })} </main> </body></html>`;
}, "/Users/rosebowen/workspace/dev/personal/feature-films-featuring/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getSearchedPeople as a, getCreditsPerPerson as g, handleRemoveFromTags as h, taggedPeople as t, useStore as u };
