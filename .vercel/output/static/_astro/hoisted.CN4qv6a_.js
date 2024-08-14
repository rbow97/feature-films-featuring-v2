import{c as Z}from"./taggingSystemStore.3RL0Qu7J.js";import{t as _}from"./newSystem.B5xtTJ18.js";class ee extends HTMLElement{constructor(){super();const t=this.querySelector("#container");te(t)}}customElements.define("container-element",ee);function te(e){const t=e.dataset.popularPeople;if(!t)return;const n=JSON.parse(t);Z.set(n),localStorage.setItem("popular-people",t);const o=localStorage.getItem("tagged-people");if(!o)return;const r=JSON.parse(o);_.set(r)}const v="data-astro-transition-persist";function ne(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function oe(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function re(e){for(const t of Array.from(document.head.children)){const n=ae(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function se(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${v}]`)){const o=n.getAttribute(v),r=e.querySelector(`[${v}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ce(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const ie=()=>{const e=document.activeElement;if(e?.closest(`[${v}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>R({activeElement:e,start:t,end:n})}return()=>R({activeElement:e})}else return()=>R({activeElement:null})},R=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},ae=(e,t)=>{const n=e.getAttribute(v),o=n&&t.head.querySelector(`[${v}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ce=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},le=e=>{ne(e),oe(e),re(e);const t=ie();se(e.body,document.body),t()},ue="astro:before-preparation",fe="astro:after-preparation",de="astro:before-swap",me="astro:after-swap",he=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,a,c,l,f,u){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=a,this.sourceElement=c,this.info=l,this.newDocument=f,this.signal=u,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class pe extends U{formData;loader;constructor(t,n,o,r,s,a,c,l,f,u){super(ue,{cancelable:!0},t,n,o,r,s,a,c,l),this.formData=f,this.loader=u.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ge extends U{direction;viewTransition;swap;constructor(t,n){super(de,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>le(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function we(e,t,n,o,r,s,a,c,l){const f=new pe(e,t,n,o,r,s,window.document,a,c,l);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(he(fe),f.navigationType!=="traverse"&&I({scrollX,scrollY}))),f}function ve(e,t){const n=new ge(e,t);return document.dispatchEvent(n),n.swap(),n}const be=history.pushState.bind(history),T=history.replaceState.bind(history),I=e=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...e},""))},H=!!document.startViewTransition,N=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),W=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let d,g,S;const B=e=>document.dispatchEvent(new Event(e)),V=()=>B("astro:page-load"),ye=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},O="data-astro-transition-persist",q="data-astro-transition",k="data-astro-transition-fallback";let C,b=0;history.state?(b=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):N()&&(T({index:b,scrollX,scrollY},""),history.scrollRestoration="manual");async function Te(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Ee(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(a=>{o.onload=o.onerror=a});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const K=(e,t,n,o,r)=>{const s=W(t,e),a=document.title;document.title=o;let c=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;T({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else be({...n.state,index:++b,scrollX:0,scrollY:0},"",e.href);if(document.title=a,S=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),c=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const l=history.state;location.href=e.href,history.state||(T(l,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else c||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ae(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${O}="${n.getAttribute(O)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function F(e,t,n,o,r){async function s(l){function f(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const u=document.getAnimations();document.documentElement.setAttribute(k,l);const p=document.getAnimations().filter(h=>!u.includes(h)&&!f(h));return Promise.allSettled(p.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const a=document.title,c=ve(e,n.viewTransition);K(c.to,c.from,t,a,o),B(me),r==="animate"&&(!n.transitionSkipped&&!c.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Se(){return d?.controller.abort(),d={controller:new AbortController}}async function J(e,t,n,o,r){const s=Se();if(!N()||location.origin!==n.origin){s===d&&(d=void 0),location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&I({scrollX,scrollY}),W(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){K(n,t,o,document.title,r),s===d&&(d=void 0);return}const c=await we(t,n,e,a,o.sourceElement,o.info,s.controller.signal,o.formData,l);if(c.defaultPrevented||c.signal.aborted){s===d&&(d=void 0),c.signal.aborted||(location.href=n.href);return}async function l(i){const p=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const w=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=w?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await Te(p,h);if(m===null){i.preventDefault();return}if(m.redirected){const w=new URL(m.redirected);if(w.origin!==i.to.origin){i.preventDefault();return}i.to=w}if(C??=new DOMParser,i.newDocument=C.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(w=>w.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const P=Ae(i.newDocument);P.length&&!i.signal.aborted&&await Promise.all(P)}async function f(){if(g&&g.viewTransition){try{g.viewTransition.skipTransition()}catch{}try{await g.viewTransition.updateCallbackDone}catch{}}return g={transitionSkipped:!1}}const u=await f();if(c.signal.aborted){s===d&&(d=void 0);return}if(document.documentElement.setAttribute(q,c.direction),H)u.viewTransition=document.startViewTransition(async()=>await F(c,o,u,r));else{const i=(async()=>{await Promise.resolve(),await F(c,o,u,r,j())})();u.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(p=>u.viewTransitionFinished=p),skipTransition:()=>{u.transitionSkipped=!0,document.documentElement.removeAttribute(k)}}}u.viewTransition.updateCallbackDone.finally(async()=>{await Ee(),V(),ye()}),u.viewTransition.finished.finally(()=>{u.viewTransition=void 0,u===g&&(g=void 0),s===d&&(d=void 0),document.documentElement.removeAttribute(q),document.documentElement.removeAttribute(k)});try{await u.viewTransition.updateCallbackDone}catch(i){const p=i;console.log("[astro]",p.name,p.message,p.stack)}}async function E(e,t){await J("forward",S,new URL(e,location.href),t??{})}function Le(e){if(!N()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>b?"forward":"back";b=n,J(o,S,new URL(location.href),{},t)}const $=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&I({scrollX,scrollY})};{if(H||j()!=="none")if(S=new URL(location.href),addEventListener("popstate",Le),addEventListener("load",V),"onscrollend"in window)addEventListener("scrollend",$);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,$();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}class Pe extends HTMLElement{constructor(){super();const t="#text-input",n="#search-people-link",o=this.querySelector(t),r=this.querySelector(n),s=a=>{const c={query:a},l=`/search?${new URLSearchParams([...Object.entries(c)])}`;r.href=l};r.addEventListener("click",function(a){o.value.trim()||a.preventDefault()}),o.addEventListener("input",function(a){const l=a.currentTarget.value;s(l)}),o.addEventListener("keydown",async function(a){a.key==="Enter"&&(a.preventDefault(),E(r.href))})}}customElements.define("search-wrapper",Pe);class Re extends HTMLElement{constructor(){super();const t=this.querySelector("#header-link");t?.addEventListener("click",()=>{const n=t.getAttribute("data-tab");localStorage.setItem("activeTab",n),_.set([])})}}customElements.define("header-wrapper",Re);class ke extends HTMLElement{constructor(){super();const t=document.querySelectorAll(".tab-btn"),n=document.querySelector(".animated-bg"),o=localStorage.getItem("activeTab")??!1;xe(o,t,n),De(t,n)}}customElements.define("nav-wrapper",ke);function x(e,t,n=!0){const o=e.parentElement.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-o.left,a=r.width;n?t.style.transition="width 0.3s ease, left 0.3s ease":t.style.transition="none",t.style.width=`${a}px`,t.style.left=`${s}px`,n||(t.offsetHeight,t.style.transition="")}function xe(e,t,n){if(e){const o=document.querySelector(`.tab-btn[data-tab="${e}"]`);o&&(o.classList.add("active"),x(o,n,!1),localStorage.removeItem("activeTab"))}else{const o=window.location.pathname;let r=null;t.forEach(s=>{const a=s.getAttribute("href");a&&o.includes(a)?(s.classList.add("active"),r=s):s.classList.remove("active")}),r&&x(r,n,!1)}}function De(e,t){e.forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),e.forEach(s=>s.classList.remove("active")),n.classList.add("active");const r=n.getAttribute("data-tab");localStorage.setItem("activeTab",r),x(n,t),setTimeout(()=>{const s=n.getAttribute("href");s&&E(s)},300)})})}const G=new Set,A=new WeakSet;let D,z,X=!1;function Ie(e){X||(X=!0,D??=e?.prefetchAll??!1,z??=e?.defaultStrategy??"hover",He(),Ne(),Me(),qe())}function He(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{y(t.target,"tap")&&L(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Ne(){let e;document.body.addEventListener("focusin",o=>{y(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),M(()=>{for(const o of document.getElementsByTagName("a"))A.has(o)||y(o,"hover")&&(A.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{L(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Me(){let e;M(()=>{for(const t of document.getElementsByTagName("a"))A.has(t)||y(t,"viewport")&&(A.add(t),e??=Oe(),e.observe(t))})}function Oe(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,s=e.get(r);o.isIntersecting?(s&&clearTimeout(s),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),L(r.href)},300))):s&&(clearTimeout(s),e.delete(r))}})}function qe(){M(()=>{for(const e of document.getElementsByTagName("a"))y(e,"load")&&L(e.href)})}function L(e,t){const n=t?.ignoreSlowConnection??!1;if(Ce(e,n))if(G.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function Ce(e,t){if(!navigator.onLine||!t&&Q())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!G.has(e)}catch{}return!1}function y(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||D)&&Q()?!0:n==null&&D||n===""?t===z:n===t}function Q(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function M(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Fe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Y(e){return e.dataset.astroReload!==void 0}(H||Fe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;Y(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),E(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||Y(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),a=typeof n.method=="string"?n.method:n.getAttribute("method");let c=o?.getAttribute("formaction")??s??location.pathname;const l=o?.getAttribute("formmethod")??a??"get";if(l==="dialog"||location.origin!==new URL(c,location.href).origin)return;const f={sourceElement:o??n};if(l==="get"){const u=new URLSearchParams(r),i=new URL(c);i.search=u.toString(),c=i.toString()}else f.formData=r;e.preventDefault(),E(c,f)}),Ie({prefetchAll:!0}));
