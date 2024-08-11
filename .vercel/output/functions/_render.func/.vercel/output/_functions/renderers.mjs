import { options, h as h$1, Fragment, Component } from 'preact';

var n=/[\s\n\\/='"\0<>]/,o=/^(xlink|xmlns|xml)([A-Z])/,i=/^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|spellC|src[A-Z]|tabI|useM|item[A-Z]/,a=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,c=/["&<]/;function s(e){if(0===e.length||!1===c.test(e))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1;}return r!==t&&(n+=e.slice(t,r)),n}var l={},u=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),f=/[A-Z]/g;function p(e){var t="";for(var r in e){var n=e[r];if(null!=n&&""!==n){var o="-"==r[0]?r:l[r]||(l[r]=r.replace(f,"-$&").toLowerCase()),i=";";"number"!=typeof n||o.startsWith("--")||u.has(o)||(i="px;"),t=t+o+":"+n+i;}}return t||void 0}function h(e,t,r){if(!e.s){if(r instanceof d){if(!r.s)return void(r.o=h.bind(null,e,t));1&t&&(t=r.s),r=r.v;}if(r&&r.then)return void r.then(h.bind(null,e,t),h.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e);}}var d=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{h(n,1,i(this.v));}catch(e){h(n,2,e);}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?h(n,1,t?t(o):o):r?h(n,1,r(o)):h(n,2,o);}catch(e){h(n,2,e);}},n},e}();function _(e){return e instanceof d&&1&e.s}function v(e,t,r){for(var n;;){var o=e();if(_(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!_(i)){n=1;break}i=i.s;}var a; }var c=new d,s=h.bind(null,c,2);return (0===n?o.then(u):1===n?i.then(l):a.then(f)).then(void 0,s),c;function l(n){i=n;do{if(!(o=e())||_(o)&&!o.v)return void h(c,1,i);if(o.then)return void o.then(u).then(void 0,s);_(i=r())&&(i=i.v);}while(!i||!i.then);i.then(l).then(void 0,s);}function u(e){e?(i=r())&&i.then?i.then(l).then(void 0,s):l(i):h(c,1,i);}function f(){(o=e())?o.then?o.then(u).then(void 0,s):u(o):h(c,1,i);}}function m(e,t){try{var r=e();}catch(e){return t(!0,e)}return r&&r.then?r.then(t.bind(null,!1),t.bind(null,!0)):t(!1,r)}var y,g,b,k,x=function(n,o){try{var i=options.__s;options.__s=!0,y=options.__b,g=options.diffed,b=options.__r,k=options.unmount;var a=h$1(Fragment,null);return a.__k=[n],Promise.resolve(m(function(){return Promise.resolve(j(n,o||E,!1,void 0,a,!0,void 0)).then(function(e){var t,r=function(){if(Array.isArray(e)){var r=function(){var e=o.join("");return t=1,e},n=0,o=e,i=v(function(){return !!o.some(function(e){return e&&"function"==typeof e.then})&&n++<25},void 0,function(){return Promise.resolve(Promise.all(o)).then(function(e){o=e.flat();})});return i&&i.then?i.then(r):r()}}();return r&&r.then?r.then(function(r){return t?r:e}):t?r:e})},function(t,r){if(options.__c&&options.__c(n,w),options.__s=i,w.length=0,t)throw r;return r}))}catch(e){return Promise.reject(e)}},w=[],A=Array.isArray,C=Object.assign;function L(){this.__d=!0;}var E={};function T(e,t){var r,n=e.type,o=!0;return e.__c?(o=!1,(r=e.__c).state=r.__s):r=new n(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=E),null==r.__s&&(r.__s=r.state),n.getDerivedStateFromProps?r.state=C({},r.state,n.getDerivedStateFromProps(r.props,r.state)):o&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!o&&r.componentWillUpdate&&r.componentWillUpdate(),b&&b(e),r.render(r.props,r.state,t)}function j(t,c,l,u,f,h,d){if(null==t||!0===t||!1===t||""===t)return "";if("object"!=typeof t)return "function"==typeof t?"":s(t+"");if(A(t)){var _,v="";f.__k=t;for(var m=0;m<t.length;m++){var x=t[m];if(null!=x&&"boolean"!=typeof x){var w,S=j(x,c,l,u,f,h,d);"string"==typeof S?v+=S:(_=_||[],v&&_.push(v),v="",Array.isArray(S)?(w=_).push.apply(w,S):_.push(S));}}return _?(v&&_.push(v),_):v}if(void 0!==t.constructor)return "";t.__=f,y&&y(t);var E,P,U,Z=t.type,F=t.props,M=c;if("function"==typeof Z){if(Z===Fragment){if(F.tpl){for(var W="",$=0;$<F.tpl.length;$++)if(W+=F.tpl[$],F.exprs&&$<F.exprs.length){var z=F.exprs[$];if(null==z)continue;"object"!=typeof z||void 0!==z.constructor&&!A(z)?W+=z:W+=j(z,c,l,u,t,h,d);}return W}if(F.UNSTABLE_comment)return "\x3c!--"+s(F.UNSTABLE_comment||"")+"--\x3e";P=F.children;}else {if(null!=(E=Z.contextType)){var H=c[E.__c];M=H?H.props.value:E.__;}if(Z.prototype&&"function"==typeof Z.prototype.render)P=T(t,M),U=t.__c;else {t.__c=U={__v:t,props:F,context:M,setState:L,forceUpdate:L,__d:!0,__h:[]};for(var q=0;U.__d&&q++<25;)U.__d=!1,b&&b(t),P=Z.call(U,F,M);U.__d=!0;}if(null!=U.getChildContext&&(c=C({},c,U.getChildContext())),(Z.getDerivedStateFromError||U.componentDidCatch)&&options.errorBoundaries){var B="";P=null!=P&&P.type===Fragment&&null==P.key?P.props.children:P;try{return B=j(P,c,l,u,t,h,d)}catch(e){return Z.getDerivedStateFromError&&(U.__s=Z.getDerivedStateFromError(e)),U.componentDidCatch&&U.componentDidCatch(e,{}),U.__d&&(P=T(t,c),null!=(U=t.__c).getChildContext&&(c=C({},c,U.getChildContext())),B=j(P=null!=P&&P.type===Fragment&&null==P.key?P.props.children:P,c,l,u,t,h,d)),B}finally{g&&g(t),t.__=null,k&&k(t);}}}P=null!=P&&P.type===Fragment&&null==P.key&&null==P.props.tpl?P.props.children:P;try{var I=j(P,c,l,u,t,h,d);return g&&g(t),t.__=null,options.unmount&&options.unmount(t),I}catch(r){if(!r||"function"!=typeof r.then)throw r;var R=function e(){try{return j(P,c,l,u,t,h,d)}catch(r){if(!r||"function"!=typeof r.then)throw r;return r.then(function(){return j(P,c,l,u,t,h,d)},function(){return e()})}};return r.then(function(){return R()})}}var V,K="<"+Z,G="";for(var J in F){var Q=F[J];switch(J){case"children":V=Q;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in F)continue;J="for";break;case"className":if("class"in F)continue;J="class";break;case"defaultChecked":J="checked";break;case"defaultSelected":J="selected";break;case"defaultValue":case"value":switch(J="value",Z){case"textarea":V=Q;continue;case"select":u=Q;continue;case"option":u!=Q||"selected"in F||(K+=" selected");}break;case"dangerouslySetInnerHTML":G=Q&&Q.__html;continue;case"style":"object"==typeof Q&&(Q=p(Q));break;case"acceptCharset":J="accept-charset";break;case"httpEquiv":J="http-equiv";break;default:if(o.test(J))J=J.replace(o,"$1:$2").toLowerCase();else {if(n.test(J))continue;"-"!==J[4]&&"draggable"!==J||null==Q?l?a.test(J)&&(J="panose1"===J?"panose-1":J.replace(/([A-Z])/g,"-$1").toLowerCase()):i.test(J)&&(J=J.toLowerCase()):Q+="";}}null!=Q&&!1!==Q&&"function"!=typeof Q&&(K=!0===Q||""===Q?K+" "+J:K+" "+J+'="'+s(Q+"")+'"');}if(n.test(Z))throw new Error(Z+" is not a valid HTML tag name in "+K+">");if(G||("string"==typeof V?G=s(V):null!=V&&!1!==V&&!0!==V&&(G=j(V,c,"svg"===Z||"foreignObject"!==Z&&l,u,t,h,d))),g&&g(t),t.__=null,k&&k(t),!G&&D.has(Z))return K+"/>";var X="</"+Z+">",Y=K+">";return Array.isArray(G)?[Y].concat(G,[X]):"string"!=typeof G?[Y,G,X]:Y+G+X}var D=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);

const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

function isSignal(x) {
  return x != null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      let id;
      if (ctx.signals.has(value)) {
        id = ctx.signals.get(value);
      } else {
        id = incrementId(ctx);
        ctx.signals.set(value, id);
      }
      signals[key] = id;
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}

const StaticHtml = ({ value, name, hydrate = true }) => {
  if (!value) return null;
  const tagName = hydrate ? "astro-slot" : "astro-static-slot";
  return h$1(tagName, { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
let originalConsoleError;
let consoleFilterRefs = 0;
async function check(Component$1, props, children) {
  if (typeof Component$1 !== "function") return false;
  if (Component$1.name === "QwikComponent") return false;
  if (Component$1.prototype != null && typeof Component$1.prototype.render === "function") {
    return Component.isPrototypeOf(Component$1);
  }
  useConsoleFilter();
  try {
    try {
      const { html } = await renderToStaticMarkup.call(this, Component$1, props, children, void 0);
      if (typeof html !== "string") {
        return false;
      }
      return html == "" ? false : !/<undefined>/.test(html);
    } catch (err) {
      return false;
    }
  } finally {
    finishUsingConsoleFilter();
  }
}
function shouldHydrate(metadata) {
  return metadata?.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = h$1(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value,
      name
    });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const vNode = h$1(
    Component,
    newProps,
    children != null ? h$1(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value: children
    }) : children
  );
  const html = await x(vNode);
  return { attrs, html };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError) return;
  }
  originalConsoleError(msg, ...rest);
}
const renderer = {
  name: "@astrojs/preact",
  check,
  renderToStaticMarkup,
  supportsAstroStaticSlot: true
};
var server_default = renderer;

const renderers = [Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js"}, { ssr: server_default }),];

export { renderers };
