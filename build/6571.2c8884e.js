(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6571],{77608:(e,t,r)=>{"use strict";r.d(t,{$m:()=>i,Dp:()=>s,Z$:()=>n,kJ:()=>c,s7:()=>o});const n=e=>e[e.length-1],o=(e,t)=>{for(let r=0;r<t.length;r++)e.push(t[r])},s=Array.from,i=(e,t)=>{return e.length===t.length&&(r=(e,r)=>e===t[r],e.every(r));var r},c=Array.isArray},96571:(e,t,r)=>{"use strict";r.d(t,{jS:()=>p,jU:()=>l,UG:()=>u,hH:()=>m});var n=r(31234),o=r(1011);var s=r(99622),i=r(12904),c=r(18533);const u=c.release&&/node|io\.js/.test(c.release.name),l="undefined"!=typeof window&&!u;let a;"undefined"!=typeof navigator&&/Mac/.test(navigator.platform);const f=[],h=()=>{if(void 0===a)if(u){a=n.Ue();const e=c.argv;let t=null;for(let r=0;r<e.length;r++){const n=e[r];"-"===n[0]?(null!==t&&a.set(t,""),t=n):null!==t?(a.set(t,n),t=null):f.push(n)}null!==t&&a.set(t,"")}else"object"==typeof location?(a=n.Ue(),(location.search||"?").slice(1).split("&").forEach((e=>{if(0!==e.length){const[t,r]=e.split("=");a.set(`--${o.NF(t,"-")}`,r),a.set(`-${o.NF(t,"-")}`,r)}}))):a=n.Ue();return a},d=e=>h().has(e),p=(e,t)=>h().get(e)||t,g=e=>{return void 0===(t=u?{}[e.toUpperCase()]:s.X.getItem(e))?null:t;var t};d("--"+"production")||g("production");const y=u&&i.gB({}.FORCE_COLOR,["true","1","2"]),m=!d("no-colors")&&(!u||c.stdout.isTTY||y)&&(!u||d("color")||y||null!==g("COLORTERM")||(g("TERM")||"").includes("color"))},12904:(e,t,r)=>{"use strict";r.d(t,{Hi:()=>c,PP:()=>s,UV:()=>i,gB:()=>u});var n=r(77608),o=r(41042);const s=(e,t,r=0)=>{try{for(;r<e.length;r++)e[r](...t)}finally{r<e.length&&s(e,t,r+1)}},i=(e,t)=>e===t||null!=e&&null!=t&&e.constructor===t.constructor&&(e instanceof Array&&n.$m(e,t)||"object"==typeof e&&o.$m(e,t)),c=(e,t)=>{if(null==e||null==t)return((e,t)=>e===t)(e,t);if(e.constructor!==t.constructor)return!1;if(e===t)return!0;switch(e.constructor){case ArrayBuffer:e=new Uint8Array(e),t=new Uint8Array(t);case Uint8Array:if(e.byteLength!==t.byteLength)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;break;case Set:if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;break;case Map:if(e.size!==t.size)return!1;for(const r of e.keys())if(!t.has(r)||!c(e.get(r),t.get(r)))return!1;break;case Object:if(o.kE(e)!==o.kE(t))return!1;for(const r in e)if(!o.l$(e,r)||!c(e[r],t[r]))return!1;break;case Array:if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!c(e[r],t[r]))return!1;break;default:return!1}return!0},u=(e,t)=>t.includes(e)},31234:(e,t,r)=>{"use strict";r.d(t,{JG:()=>o,UI:()=>i,Ue:()=>n,Yj:()=>c,Yu:()=>s});const n=()=>new Map,o=e=>{const t=n();return e.forEach(((e,r)=>{t.set(r,e)})),t},s=(e,t,r)=>{let n=e.get(t);return void 0===n&&e.set(t,n=r()),n},i=(e,t)=>{const r=[];for(const[n,o]of e)r.push(t(o,n));return r},c=(e,t)=>{for(const[r,n]of e)if(t(n,r))return!0;return!1}},41042:(e,t,r)=>{"use strict";r.d(t,{$m:()=>c,UI:()=>o,kE:()=>s,l$:()=>i}),Object.assign;const n=Object.keys,o=(e,t)=>{const r=[];for(const n in e)r.push(t(e[n],n));return r},s=e=>n(e).length,i=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c=(e,t)=>e===t||s(e)===s(t)&&((e,t)=>{for(const r in e)if(!t(e[r],r))return!1;return!0})(e,((e,r)=>(void 0!==e||i(t,r))&&t[r]===e))},99622:(e,t,r)=>{"use strict";r.d(t,{X:()=>s,z:()=>i});let n=new class{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}},o=!0;try{"undefined"!=typeof localStorage&&(n=localStorage,o=!1)}catch(e){}const s=n,i=e=>o||addEventListener("storage",e)},1011:(e,t,r)=>{"use strict";r.d(t,{CO:()=>l,IK:()=>n,NF:()=>i,YZ:()=>c,lz:()=>u});const n=String.fromCharCode,o=(String.fromCodePoint,/^\s*/g),s=/([A-Z])/g,i=(e,t)=>(e=>e.replace(o,""))(e.replace(s,(e=>`${t}${(e=>e.toLowerCase())(e)}`))),c="undefined"!=typeof TextEncoder?new TextEncoder:null,u=c?e=>c.encode(e):e=>{const t=unescape(encodeURIComponent(e)),r=t.length,n=new Uint8Array(r);for(let e=0;e<r;e++)n[e]=t.codePointAt(e);return n};let l="undefined"==typeof TextDecoder?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});l&&1===l.decode(new Uint8Array).length&&(l=null)},18533:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):a=-1,u.length&&h())}function h(){if(!l){var e=i(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++a<t;)c&&c[a].run();a=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||l||i(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}}]);
//# sourceMappingURL=6571.2c8884e.js.map