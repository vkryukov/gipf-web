const e=Symbol("solid-proxy"),t={equals:(e,t)=>e===t};let n=x;const r={},o={owned:null,cleanups:null,context:null,owner:null};var l=null;let s=null,i=null,u=null,c=null,f=0;function a(e,t){t&&(l=t);const n=s,r=l,i=0===e.length?o:{owned:null,cleanups:null,context:null,owner:r};let u;l=i,s=null;try{j((()=>u=e((()=>P(i)))),!0)}finally{s=n,l=r}return u}function d(e,n){n=n?Object.assign({},t,n):t;const o={value:e,observers:null,observerSlots:null,pending:r,comparator:n.equals||void 0};return[m.bind(o),e=>("function"==typeof e&&(e=e(o.pending!==r?o.pending:o.value)),w(o,e))]}function p(e,t,n){A(O(e,t,!1,1))}function h(e,t,r){n=k;const o=O(e,t,!1,1);o.user=!0,c&&c.push(o)}function y(e,n,o){o=o?Object.assign({},t,o):t;const l=O(e,n,!0,0);return l.pending=r,l.observers=null,l.observerSlots=null,l.comparator=o.equals||void 0,A(l),m.bind(l)}function g(e){if(i)return e();let t;const n=i=[];try{t=e()}finally{i=null}return j((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==r){const e=t.pending;t.pending=r,w(t,e)}}}),!1),t}function b(e){let t,n=s;return s=null,t=e(),s=n,t}function v(){return s}function m(){if(this.state&&this.sources){const e=u;u=null,1===this.state?A(this):C(this),u=e}if(s){const e=this.observers?this.observers.length:0;s.sources?(s.sources.push(this),s.sourceSlots.push(e)):(s.sources=[this],s.sourceSlots=[e]),this.observers?(this.observers.push(s),this.observerSlots.push(s.sources.length-1)):(this.observers=[s],this.observerSlots=[s.sources.length-1])}return this.value}function w(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(i)return e.pending===r&&i.push(e),e.pending=t,t;let o=!1;return e.value=t,e.observers&&e.observers.length&&j((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];o,n.pure?u.push(n):c.push(n),n.observers&&!n.state&&_(n),n.state=1}if(u.length>1e6)throw u=[],new Error}),!1),t}function A(e){if(!e.fn)return;P(e);const t=l,n=s,r=f;s=l=e,function(e,t,n){let r;try{r=e.fn(t)}catch(o){$(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?w(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),s=n,l=t}function O(e,t,n,r=1,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:l,context:null,pure:n};return null===l||l!==o&&(l.owned?l.owned.push(i):l.owned=[i]),i}function S(e){if(1!==e.state)return e.state=0;if(e.suspense&&b(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<f);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)A(e);else if(2===e.state){const t=u;u=null,C(e),u=t}}function j(e,t){if(u)return e();let r=!1;t||(u=[]),c?r=!0:c=[],f++;try{e()}catch(o){$(o)}finally{!function(e){u&&(x(u),u=null);if(e)return;c.length?g((()=>{n(c),c=null})):c=null}(r)}}function x(e){for(let t=0;t<e.length;t++)S(e[t])}function k(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:S(r)}const r=e.length;for(t=0;t<n;t++)S(e[t]);for(t=r;t<e.length;t++)S(e[t])}function C(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?S(n):2===n.state&&C(n))}}function _(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.pure?u.push(n):c.push(n),n.observers&&_(n))}}function P(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)P(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function $(e){throw e}const E=Symbol("fallback");function N(e){for(let t=0;t<e.length;t++)e[t]()}function L(e,t,n={}){let r=[],o=[],s=[],i=0,u=t.length>1?[]:null;var c;return c=()=>N(s),null===l||(null===l.cleanups?l.cleanups=[c]:l.cleanups.push(c)),()=>{let l,c,f=e()||[];return b((()=>{let e,t,d,h,y,g,b,v,m,w=f.length;if(0===w)0!==i&&(N(s),s=[],r=[],o=[],i=0,u&&(u=[])),n.fallback&&(r=[E],o[0]=a((e=>(s[0]=e,n.fallback()))),i=1);else if(0===i){for(o=new Array(w),c=0;c<w;c++)r[c]=f[c],o[c]=a(p);i=w}else{for(d=new Array(w),h=new Array(w),u&&(y=new Array(w)),g=0,b=Math.min(i,w);g<b&&r[g]===f[g];g++);for(b=i-1,v=w-1;b>=g&&v>=g&&r[b]===f[v];b--,v--)d[v]=o[b],h[v]=s[b],u&&(y[v]=u[b]);for(e=new Map,t=new Array(v+1),c=v;c>=g;c--)m=f[c],l=e.get(m),t[c]=void 0===l?-1:l,e.set(m,c);for(l=g;l<=b;l++)m=r[l],c=e.get(m),void 0!==c&&-1!==c?(d[c]=o[l],h[c]=s[l],u&&(y[c]=u[l]),c=t[c],e.set(m,c)):s[l]();for(c=g;c<w;c++)c in d?(o[c]=d[c],s[c]=h[c],u&&(u[c]=y[c],u[c](c))):o[c]=a(p);o=o.slice(0,i=w),r=f.slice(0)}return o}));function p(e){if(s[c]=e,u){const[e,n]=d(c);return u[c]=n,t(f[c],e)}return t(f[c])}}}function T(e,t){return b((()=>e(t)))}function D(e){const t="fallback"in e&&{fallback:()=>e.fallback};return y(L((()=>e.each),e.children,t||void 0))}function B(e){let t=!1;const n=y((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return y((()=>{const r=n();if(r){const n=e.children;return(t="function"==typeof n&&n.length>0)?b((()=>n(r))):n}return e.fallback}))}const q=new Set(["className","indeterminate","value","readOnly","allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","truespeed"]),M=new Set(["innerHTML","textContent","innerText","children"]),F={className:"class",htmlFor:"for"},I={class:"className",readonly:"readOnly"},z=new Set(["beforeinput","click","dblclick","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),X={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function G(e,t,n){let r=n.length,o=t.length,l=r,s=0,i=0,u=t[o-1].nextSibling,c=null;for(;s<o||i<l;)if(t[s]!==n[i]){for(;t[o-1]===n[l-1];)o--,l--;if(o===s){const t=l<r?i?n[i-1].nextSibling:n[l-i]:u;for(;i<l;)e.insertBefore(n[i++],t)}else if(l===i)for(;s<o;)c&&c.has(t[s])||e.removeChild(t[s]),s++;else if(t[s]===n[l-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[s++].nextSibling),e.insertBefore(n[--l],r),t[o]=n[l]}else{if(!c){c=new Map;let e=i;for(;e<l;)c.set(n[e],e++)}const r=c.get(t[s]);if(null!=r)if(i<r&&r<l){let u,f=s,a=1;for(;++f<o&&f<l&&null!=(u=c.get(t[f]))&&u===r+a;)a++;if(a>r-i){const o=t[s];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[s++])}else s++;else e.removeChild(t[s++])}}else s++,i++}function H(e,t,n){let r;return a((o=>{r=o,Z(t,e(),t.firstChild?null:void 0,n)})),()=>{r(),t.textContent=""}}function K(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function R(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,te))}}function U(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function J(e,t,n,r){null==r?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Q(e,t,n,r){r?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,(e=>n[0](n[1],e))):e.addEventListener(t,n)}function V(e,t,n={}){const r=Object.keys(t),o=Object.keys(n);let l,s;for(l=0,s=o.length;l<s;l++){const r=o[l];r&&"undefined"!==r&&!(r in t)&&(ee(e,r,!1),delete n[r])}for(l=0,s=r.length;l<s;l++){const o=r[l],s=!!t[o];o&&"undefined"!==o&&n[o]!==s&&(ee(e,o,s),n[o]=s)}return n}function W(e,t,n={}){const r=e.style;if("string"==typeof t)return r.cssText=t;let o,l;for(l in"string"==typeof n&&(n={}),n)null==t[l]&&r.removeProperty(l),delete n[l];for(l in t)o=t[l],o!==n[l]&&(r.setProperty(l,o),n[l]=o);return n}function Y(e,t,n,r){"function"==typeof t?p((o=>ne(e,t(),o,n,r))):ne(e,t,void 0,n,r)}function Z(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return re(e,t,r,n);p((r=>re(e,t(),r,n)),r)}function ee(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,l=r.length;o<l;o++)e.classList.toggle(r[o],n)}function te(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ne(e,t,n={},r,o){return!o&&"children"in t&&p((()=>n.children=re(e,t.children,n.children))),p((()=>function(e,t,n,r,o={}){let l,s,i;for(const c in t){if("children"===c){r||re(e,t.children);continue}const f=t[c];if(f!==o[c]){if("style"===c)W(e,f,o[c]);else if("classList"===c)V(e,f,o[c]);else if("ref"===c)f(e);else if("on:"===c.slice(0,3))e.addEventListener(c.slice(3),f);else if("oncapture:"===c.slice(0,10))e.addEventListener(c.slice(10),f,!0);else if("on"===c.slice(0,2)){const t=c.slice(2).toLowerCase(),n=z.has(t);Q(e,t,f,n),n&&R([t])}else if((i=M.has(c))||!n&&(I[c]||(s=q.has(c)))||(l=e.nodeName.includes("-")))!l||s||i?e[I[c]||c]=f:e[(u=c,u.toLowerCase().replace(/-([a-z])/g,((e,t)=>t.toUpperCase())))]=f;else{const t=n&&c.indexOf(":")>-1&&X[c.split(":")[0]];t?J(e,t,c,f):U(e,F[c]||c,f)}o[c]=f}}var u}(e,t,r,!0,n))),n}function re(e,t,n,r,o){for(;"function"==typeof n;)n=n();if(t===n)return n;const l=typeof t,s=void 0!==r;if(e=s&&n[0]&&n[0].parentNode||e,"string"===l||"number"===l)if("number"===l&&(t=t.toString()),s){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=se(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===l)n=se(e,n,r);else{if("function"===l)return p((()=>{let o=t();for(;"function"==typeof o;)o=o();n=re(e,o,n,r)})),()=>n;if(Array.isArray(t)){const l=[];if(oe(l,t,o))return p((()=>n=re(e,l,n,r,!0))),()=>n;if(0===l.length){if(n=se(e,n,r),s)return n}else Array.isArray(n)?0===n.length?le(e,l,r):G(e,n,l):null==n||""===n?le(e,l):G(e,s&&n||[e.firstChild],l);n=l}else if(t instanceof Node){if(Array.isArray(n)){if(s)return n=se(e,n,r,t);se(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function oe(e,t,n){let r=!1;for(let o=0,l=t.length;o<l;o++){let l,s=t[o];if(s instanceof Node)e.push(s);else if(null==s||!0===s||!1===s);else if(Array.isArray(s))r=oe(e,s)||r;else if("string"==(l=typeof s))e.push(document.createTextNode(s));else if("function"===l)if(n){for(;"function"==typeof s;)s=s();r=oe(e,Array.isArray(s)?s:[s])||r}else e.push(s),r=!0;else e.push(document.createTextNode(s.toString()))}return r}function le(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function se(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const t=s.parentNode===e;r||l?t&&e.removeChild(s):t?e.replaceChild(o,s):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);s=!0);}catch(u){i=!0,o=u}finally{try{s||null==n.return||n.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const ce=Symbol("store-raw"),fe=Symbol("store-node"),ae=Symbol("store-name");function de(t,n){let r=t[e];if(!r){Object.defineProperty(t,e,{value:r=new Proxy(t,be)});const n=Object.keys(t),o=Object.getOwnPropertyDescriptors(t);for(let e=0,l=n.length;e<l;e++){const l=n[e];if(o[l].get){const e=o[l].get.bind(r);Object.defineProperty(t,l,{get:e})}}}return r}function pe(e){return null!=e&&"object"==typeof e&&(!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function he(e,t=new Set){let n,r,o,l;if(n=null!=e&&e[ce])return n;if(!pe(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,l=e.length;n<l;n++)o=e[n],(r=he(o,t))!==o&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,u=n.length;i<u;i++)l=n[i],s[l].get||(o=e[l],(r=he(o,t))!==o&&(e[l]=r))}return e}function ye(e){let t=e[fe];return t||Object.defineProperty(e,fe,{value:t={}}),t}function ge(){const[e,t]=d(void 0,{equals:!1,internal:!0});return e.$=t,e}const be={get(t,n,r){if(n===ce)return t;if(n===e)return r;const o=t[n];if(n===fe||"__proto__"===n)return o;const l=pe(o);if(v()&&("function"!=typeof o||t.hasOwnProperty(n))){let e,r;l&&(e=ye(o))&&(r=e._||(e._=ge()),r()),e=ye(t),r=e[n]||(e[n]=ge()),r()}return l?de(o):o},set:()=>!0,deleteProperty:()=>!0,ownKeys:function(e){if(v()){const t=ye(e);(t._||(t._=ge()))()}return Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(t,n){const r=Reflect.getOwnPropertyDescriptor(t,n);return!r||r.get||n===e||n===fe||n===ae||(delete r.value,delete r.writable,r.get=()=>t[e][n]),r}};function ve(e,t,n){if(e[t]===n)return;const r=Array.isArray(e),o=e.length,l=void 0===n,s=r||l===t in e;l?delete e[t]:e[t]=n;let i,u=ye(e);(i=u[t])&&i.$(),r&&e.length!==o&&(i=u.length)&&i.$(i,void 0),s&&(i=u._)&&i.$(i,void 0)}function me(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const l=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let o=0;o<r.length;o++)me(e,[r[o]].concat(t),[r[o]].concat(n));return}if(s&&"function"===l){for(let o=0;o<e.length;o++)r(e[o],o)&&me(e,[o].concat(t),[o].concat(n));return}if(s&&"object"===l){const{from:o=0,to:l=e.length-1,by:s=1}=r;for(let r=o;r<=l;r+=s)me(e,[r].concat(t),[r].concat(n));return}if(t.length>1)return void me(e[r],t,[r].concat(n));o=e[r],n=[r].concat(n)}let l=t[0];"function"==typeof l&&(l=l(o,n),l===o)||void 0===r&&null==l||(l=he(l),void 0===r||pe(o)&&pe(l)&&!Array.isArray(l)?function(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const o=n[r];ve(e,o,t[o])}}(o,l):ve(e,r,l))}function we(e,t){const n=he(e||{});return[de(n),function(...e){g((()=>me(n,e)))}]}function Ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Se(e,t,n){return t&&Oe(e.prototype,t),n&&Oe(e,n),e}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}export{D as F,B as S,je as _,Se as a,ue as b,Ae as c,xe as d,Y as e,p as f,R as g,T as h,Z as i,Q as j,d as k,h as l,we as m,H as r,U as s,K as t};
