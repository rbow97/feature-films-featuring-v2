let f=[],E=(e,d)=>{let t=[],i={get(){return i.lc||i.listen(()=>{})(),i.value},l:0,lc:0,listen(n,l){return i.lc=t.push(n,l||i.l)/2,()=>{let r=t.indexOf(n);~r&&(t.splice(r,2),--i.lc||i.off())}},notify(n,l){let r=!f.length;for(let s=0;s<t.length;s+=2)f.push(t[s],t[s+1],i.value,n,l);if(r){for(let s=0;s<f.length;s+=5){let o;for(let u=s+1;!o&&(u+=5)<f.length;)f[u]<f[s+1]&&(o=f.push(f[s],f[s+1],f[s+2],f[s+3],f[s+4]));o||f[s](f[s+2],f[s+3],f[s+4])}f.length=0}},off(){},set(n){let l=i.value;l!==n&&(i.value=n,i.notify(l))},subscribe(n,l){let r=i.listen(n,l);return n(i.value),r},value:e};return i};let g=(e,d,t,i)=>(e.events=e.events||{},e.events[t+10]||(e.events[t+10]=i(n=>{e.events[t].reduceRight((l,r)=>(r(l),l),{shared:{},...n})})),e.events[t]=e.events[t]||[],e.events[t].push(d),()=>{let n=e.events[t],l=n.indexOf(d);n.splice(l,1),n.length||(delete e.events[t],e.events[t+10](),delete e.events[t+10])}),c=1e3,N=(e,d)=>g(e,i=>{let n=d(i);n&&e.events[6].push(n)},5,i=>{let n=e.listen;e.listen=(...r)=>(!e.lc&&!e.active&&(e.active=!0,i()),n(...r));let l=e.off;return e.events[6]=[],e.off=()=>{l(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let r of e.events[6])r();e.events[6]=[]}},c)},()=>{e.listen=n,e.off=l}}),T=e=>e,v={},a={addEventListener(){},removeEventListener(){}};function U(){try{return typeof localStorage<"u"}catch{return!1}}U()&&(v=localStorage);let p={addEventListener(e,d,t){window.addEventListener("storage",d),window.addEventListener("pageshow",t)},removeEventListener(e,d,t){window.removeEventListener("storage",d),window.removeEventListener("pageshow",t)}};typeof window<"u"&&(a=p);function O(e,d=void 0,t={}){let i=t.encode||T,n=t.decode||T,l=E(d),r=l.set;l.set=u=>{typeof u>"u"?delete v[e]:v[e]=i(u),r(u)};function s(u){u.key===e?u.newValue===null?r(void 0):r(n(u.newValue)):v[e]||r(void 0)}function o(){l.set(v[e]?n(v[e]):d)}return N(l,()=>{if(o(),t.listen!==!1)return a.addEventListener(e,s,o),()=>{a.removeEventListener(e,s,o)}}),l}const h=E([]),L=E("");O("all-tagged-people",[],{encode:JSON.stringify,decode:JSON.parse});export{E as a,L as r,h as t};
