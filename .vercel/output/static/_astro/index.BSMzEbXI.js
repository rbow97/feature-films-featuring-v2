import{r as f}from"./index.DhYZZe0J.js";import{t as p}from"./newSystem.B5xtTJ18.js";var u={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=f,_=Symbol.for("react.element"),m=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function a(r,e,n){var t,o={},s=null,i=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)d.call(e,t)&&!x.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:_,type:r,key:s,ref:i,props:o,_owner:c.current}}l.Fragment=m;l.jsx=a;l.jsxs=a;u.exports=l;var E=u.exports;function S(r,e,n){let t=new Set([...e,void 0]);return r.listen((o,s,i)=>{t.has(i)&&n(o,s,i)})}function O(r,e){p.set(e.filter(n=>n.id!==r.id)),localStorage.setItem("tagged-people",JSON.stringify(e.filter(n=>n.id!==r.id)))}function R(r,e={}){let n=f.useCallback(o=>e.keys?S(r,e.keys,o):r.listen(o),[e.keys,r]),t=r.get.bind(r);return f.useSyncExternalStore(n,t,t)}export{O as h,E as j,R as u};
