function O(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(B)}function K(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function dt(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=n.dirty[l]|r[l];return u}return n.dirty|r}return n.dirty}function mt(t,n,e,i,r,u){if(r){const s=D(n,e,i,u);t.p(s,r)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function yt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function gt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let v=!1;function U(){v=!0}function V(){v=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const f=n[o];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=o?r+1:X(1,r,y=>n[e[y]].claim_order,o))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const u=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(s[c],f)}}function Z(t,n){if(v){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){v&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function P(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function $t(){return N(" ")}function bt(){return N("")}function vt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function q(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:q(t,i,n[i])}function Et(t,n){for(const e in n)q(t,e,n[e])}function it(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function F(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function At(t,n,e){return F(t,n,e,P)}function Tt(t,n,e){return F(t,n,e,et)}function rt(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function kt(t){return rt(t," ")}function M(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Nt(t){const n=M(t,"HTML_TAG_START",0),e=M(t,"HTML_TAG_END",n);if(n===e)return new H;G(t);const i=t.splice(n,e-n+1);b(i[0]),b(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(r)}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ct(t,n,e){t.classList[e?"add":"remove"](n)}function ct(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}function Mt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class st{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=P(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(b)}}class H extends st{constructor(n){super(),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}let m;function h(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function Ht(t){w().$$.on_mount.push(t)}function Lt(t){w().$$.after_update.push(t)}function Ot(){const t=w();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const r=ct(n,e);i.slice().forEach(u=>{u.call(t,r)})}}}function Bt(t,n){w().$$.context.set(t,n)}const d=[],L=[],x=[],A=[],I=Promise.resolve();let T=!1;function R(){T||(T=!0,I.then(W))}function Dt(){return R(),I}function k(t){x.push(t)}function Pt(t){A.push(t)}const E=new Set;let g=0;function W(){const t=m;do{for(;g<d.length;){const n=d[g];g++,h(n),lt(n.$$)}for(h(null),d.length=0,g=0;L.length;)L.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];E.has(e)||(E.add(e),e())}x.length=0}while(d.length);for(;A.length;)A.pop()();T=!1,E.clear(),h(t)}function lt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const $=new Set;let _;function qt(){_={r:0,c:[],p:_}}function Gt(){_.r||p(_.c),_=_.p}function ot(t,n){t&&t.i&&($.delete(t),t.i(n))}function zt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Ft(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=n[u];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[u]=l}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function It(t){return typeof t=="object"&&t!==null?t:{}}function Rt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Wt(t){t&&t.c()}function Jt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:l}=t.$$;r&&r.m(n,e),i||k(()=>{const c=u.map(B).filter(K);s?s.push(...c):p(c),t.$$.on_mount=[]}),l.forEach(k)}function at(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(d.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Kt(t,n,e,i,r,u,s,l=[-1]){const c=m;h(t);const o=t.$$={fragment:null,ctx:null,props:u,update:O,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=e?e(t,n.props||{},(a,y,...S)=>{const j=S.length?S[0]:y;return o.ctx&&r(o.ctx[a],o.ctx[a]=j)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](j),f&&ft(t,a)),y}):[],o.update(),f=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){U();const a=it(n.target);o.fragment&&o.fragment.l(a),a.forEach(b)}else o.fragment&&o.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),V(),W()}h(c)}class Qt{$destroy(){at(this,1),this.$destroy=O}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{p as $,Ft as A,It as B,at as C,J as D,Dt as E,dt as F,mt as G,pt as H,ht as I,Z as J,et as K,Tt as L,Et as M,Ct as N,xt as O,Pt as P,L as Q,Rt as R,Qt as S,wt as T,gt as U,Ot as V,yt as W,H as X,Mt as Y,Nt as Z,vt as _,it as a,q as b,At as c,b as d,P as e,jt as f,nt as g,rt as h,Kt as i,St as j,$t as k,bt as l,kt as m,O as n,qt as o,zt as p,Gt as q,ot as r,_t as s,N as t,Bt as u,Lt as v,Ht as w,Wt as x,Jt as y,ut as z};
