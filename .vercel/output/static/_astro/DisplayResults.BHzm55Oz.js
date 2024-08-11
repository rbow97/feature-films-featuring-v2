import{u as e,a as i}from"./jsxRuntime.module.Bl9H15-G.js";import{r as c,t as p}from"./newSystem.B5xtTJ18.js";import{c as l}from"./taggingSystemStore.BiLm5u1-.js";import{y as s}from"./hooks.module.CYQm0EAo.js";import{k as d}from"./preact.module.9bA1UASV.js";function f(a){const t={};a.map((o,r)=>{t[`person-${r+1}`]=o.id.toString()}),c.set(`/results?${new URLSearchParams([...Object.entries(t)])}`)}function u(a,t){p.set([...t,{name:a.name,id:a.id}])}function n(a){const{imagePath:t,title:o,handleTagButtonClick:r}=a;return e("div",{class:"col-span-1 relative mx-auto",children:e("article",{class:"w-fit  max-h-[400px] max-w-full h-full flex flex-col ",children:[e("img",{loading:"lazy",width:"150",height:"150",decoding:"async",class:"w-full object-cover overflow-hidden grow rounded-lg border-2 border-primary-lightGrey",src:t?`https://image.tmdb.org/t/p/w500/${t}`:"/film-camera.svg"}),e("div",{class:"flex justify-between mt-xs gap-xs w-full",children:[e("p",{class:"text-md text-primary-grey truncate",children:o}),e("div",{class:"flex gap-4 items-start",children:[r&&e("button",{onClick:r,class:"group relative","aria-describedby":"tag-person",children:[e("div",{class:"h-4 w-4 relative after:absolute after:top-0 after:bottom-0 after:left-1/2 after:w-0.5 after:bg-primary-black after:opacity-50 before:opacity-50 after:rounded-md before:absolute before:left-0 before:right-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 after:-translate-x-1/2 before:bg-primary-black before:rounded-md group-hover:after:opacity-100 group-hover:before:opacity-100 after:transition-opacity before:transition-opacity after:duration-200 before:duration-200"}),e("div",{role:"tooltip",id:"tag-person",class:"absolute -top-[30px] left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-primary-black rounded-md py-1 px-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease",children:e("p",{children:"Tag this person"})})]}),e("button",{class:"group",children:e("div",{class:"h-3 w-3 border-t-2 border-primary-black opacity-50 border-r-2 relative after:absolute after:w-0.5 after:h-5 after:-right-0.5 after:-top-[1px] after:rotate-45 after:bg-primary-black after:origin-top group-hover:opacity-100 transition-all duration-200 "})})]})]})]})})}function x({popularPeople:a}){s(()=>{l.set({type:"people",results:a})},[]);const t=i(l),o=i(p);return s(()=>{f(o)},[o]),e(d,{children:typeof window<"u"&&(t.type==="people"?t?.results.map(r=>e(n,{imagePath:r.profile_path,title:r.name,handleTagButtonClick:()=>u(r,o)})):t?.results.map(r=>e(n,{imagePath:r.poster_path,title:r.title})))})}export{x as default};
