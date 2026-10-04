var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.keys,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,c=Object.prototype,l=Array.prototype,u=Object.getPrototypeOf,d=Object.isExtensible,f=()=>{};function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var h=2,g=4,_=8,v=1<<24,y=16,ee=32,b=64,te=128,ne=256,x=512,S=1024,C=2048,w=4096,T=8192,E=16384,re=32768,ie=1<<25,ae=65536,oe=1<<17,D=1<<18,O=1<<19,se=65536,ce=1<<21,le=1<<23,ue=Symbol(`$state`),de=Symbol(`component`),fe=Symbol(`legacy props`),pe=Symbol(``),me=Symbol(`attributes`),he=Symbol(`class`),ge=Symbol(`style`),_e=Symbol(`text`),ve=Symbol(`form reset`),ye=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},be=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`),xe=3,Se=8;function Ce(e){return e===this.v}function we(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Te(e){return!we(e,this.v)}function Ee(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function De(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function Oe(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function ke(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function Ae(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function je(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function Me(){throw Error(`https://svelte.dev/e/hydration_failed`)}function Ne(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function Pe(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Fe(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Ie(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var Le=1,Re=2,ze=`[`,Be=`[!`,Ve=`[?`,He=`]`,Ue={},k=Symbol(`uninitialized`),We=`http://www.w3.org/1999/xhtml`,Ge=`http://www.w3.org/2000/svg`,Ke=`http://www.w3.org/1998/Math/MathML`,qe=`@attach`,Je=null;function Ye(e){Je=e}function Xe(e,t=!1,n){Je={p:Je,i:!1,c:null,e:null,s:e,x:null,r:W,l:null}}function Ze(e){var t=Je,n=t.e;if(n!==null){t.e=null;for(var r of n)hr(r)}return e!==void 0&&(t.x=e),t.i=!0,Je=t.p,Qe(e)}function Qe(e={}){return a(e,de,{value:!0}),e}function $e(){return!0}var et=[];function tt(){var e=et;et=[],p(e)}function nt(e){if(et.length===0&&!dn){var t=et;queueMicrotask(()=>{t===et&&tt()})}et.push(e)}function A(){for(;et.length>0;)tt()}function rt(){console.warn(`https://svelte.dev/e/derived_inert`)}function j(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function it(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function at(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var M=!1;function ot(e){M=e}var N;function P(e){if(e===null)throw j(),Ue;return N=e}function st(){return P(St(N))}function F(e){if(M){if(St(N)!==null)throw j(),Ue;N=e}}function ct(e=1){if(M){for(var t=e,n=N;t--;)n=St(n);N=n}}function lt(e=!0){for(var t=0,n=N;;){if(n.nodeType===Se){var r=n.data;if(r===He){if(t===0)return n;--t}else (r===ze||r===Be||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=St(n);e&&n.remove(),n=i}}function ut(e){if(!e||e.nodeType!==Se)throw j(),Ue;return e.data}function dt(t){if(typeof t!=`object`||!t||ue in t||de in t)return t;let n=u(t);if(n!==c&&n!==l)return t;var r=new Map,i=e(t),a=V(0),s=Yn,d=e=>{if(Yn===s)return e();var t=U,n=Yn;zn(null),Xn(s);var r=e();return zn(t),Xn(n),r};return i&&r.set(`length`,V(t.length)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Ne();var i=r.get(t);return i===void 0?d(()=>{var e=V(n.value);return r.set(t,e),e}):H(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=d(()=>V(k));r.set(t,e),Nn(a)}}else H(n,k),Nn(a);return!0},get(e,n,i){if(n===ue)return t;var a=r.get(n),s=n in e;if(a===void 0&&(!s||o(e,n)?.writable)&&(a=d(()=>V(dt(s?e[n]:k))),r.set(n,a)),a!==void 0){var c=G(a);return c===k?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=G(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==k)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===ue)return!0;var n=r.get(t),i=n!==void 0&&n.v!==k||Reflect.has(e,t);return(n!==void 0||W!==null&&(!i||o(e,t)?.writable))&&(n===void 0&&(n=d(()=>V(i?dt(e[t]):k)),r.set(t,n)),G(n)===k)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var u=n;u<c.v;u+=1){var f=r.get(u+``);f===void 0?u in e&&(f=d(()=>V(k)),r.set(u+``,f)):H(f,k)}if(c===void 0)(!l||o(e,t)?.writable)&&(c=d(()=>V(void 0)),H(c,dt(n)),r.set(t,c));else{l=c.v!==k;var p=d(()=>dt(n));H(c,p)}var m=Reflect.getOwnPropertyDescriptor(e,t);if(m?.set&&m.set.call(s,n),!l){if(i&&typeof t==`string`){var h=r.get(`length`),g=Number(t);Number.isInteger(g)&&g>=h.v&&H(h,g+1)}Nn(a)}return!0},ownKeys(e){G(a);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==k});for(var[n,i]of r)i.v!==k&&!(n in e)&&t.push(n);return t},setPrototypeOf(){Pe()}})}function ft(e){try{if(typeof e==`object`&&e&&ue in e)return e[ue]}catch{}return e}function pt(e,t){return Object.is(ft(e),ft(t))}var mt,ht,gt,_t,vt;function yt(){if(mt===void 0){mt=window,ht=document,gt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;_t=o(t,`firstChild`).get,vt=o(t,`nextSibling`).get,d(e)&&(e[he]=void 0,e[me]=null,e[ge]=void 0,e.__e=void 0),d(n)&&(n[_e]=void 0)}}function bt(e=``){return document.createTextNode(e)}function xt(e){return _t.call(e)}function St(e){return vt.call(e)}function I(e,t){if(!M)return xt(e);var n=xt(N);if(n===null)n=N.appendChild(bt());else if(t&&n.nodeType!==xe){var r=bt();return n?.before(r),P(r),r}return t&&Ot(n),P(n),n}function Ct(e,t=!1){if(!M){var n=xt(e);return n instanceof Comment&&n.data===``?St(n):n}if(t){if(N?.nodeType!==xe){var r=bt();return N?.before(r),P(r),r}Ot(N)}return N}function wt(e,t=!1){if(!M)return xt(e);var n=I(e,t);return F(e),n}function L(e,t=1,n=!1){let r=M?N:e;for(var i;t--;)i=r,r=St(r);if(!M)return r;if(n){if(r?.nodeType!==xe){var a=bt();return r===null?i?.after(a):r.before(a),P(a),a}Ot(r)}return P(r),r}function Tt(e){e.textContent=``}function Et(){return!1}function Dt(e,t,n){return t==null||t===We?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Ot(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===xe;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function kt(e){var t=W;if(t===null)return U.f|=le,e;if((t.f&re)===0&&(t.f&g)===0)throw e;At(e,t)}function At(e,t){if(!(t!==null&&(t.f&E)!==0)){for(;t!==null;){if((t.f&te)!==0&&!(t.f&33570816)){if((t.f&re)===0)throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}var jt=-7169;function R(e,t){e.f=e.f&jt|t}function Mt(e){(e.f&x)!==0||e.deps===null?R(e,S):R(e,w)}function Nt(e){if(e!==null)for(let t of e)(t.f&h)===0||(t.f&se)===0||(t.f^=se,Nt(t.deps))}function Pt(e,t,n){(e.f&C)===0?(e.f&w)!==0&&n.add(e):t.add(e),Nt(e.deps),R(e,S)}function Ft(e,t,n){if(e==null)return t(void 0),f;let r=cr(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var It=[];function Lt(e,t=f){let n=null,r=new Set;function i(t){if(we(e,t)&&(e=t,n)){let t=!It.length;for(let t of r)t[1](),It.push(t,e);if(t){for(let e=0;e<It.length;e+=2)It[e][0](It[e+1]);It.length=0}}}function a(t){i(t(e))}function o(o,s=f){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||f),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function Rt(e){let t;return Ft(e,e=>t=e)(),t}var zt=Symbol(`unmounted`);function Bt(e,t,n){let r=n[t]??={store:null,source:An(void 0),unsubscribe:f};if(r.store!==e&&!(zt in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=f;else{var i=!0;r.unsubscribe=Ft(e,e=>{i?r.source.v=e:H(r.source,e)}),i=!1}return e&&zt in n?Rt(e):G(r.source)}function Vt(){let e={};function t(){pr(()=>{for(var t in e)e[t].unsubscribe();a(e,zt,{enumerable:!1,value:!0})})}return[e,t]}function Ht(e,t){if(t){let t=document.body;e.autofocus=!0,nt(()=>{document.activeElement===t&&e.focus()})}}var Ut=!1;function Wt(){Ut||(Ut=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[ve]?.()})},{capture:!0}))}function Gt(e){var t=U,n=W;zn(null),Bn(null);try{return e()}finally{zn(t),Bn(n)}}function Kt(e,t,n,r=n){e.addEventListener(t,()=>Gt(n));let i=e[ve];i?e[ve]=()=>{i(),r(!0)}:e[ve]=()=>r(!0),Wt()}function qt(e,t,n,r){let i=Zt;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=W,c=Jt(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if((s.f&E)===0){c();try{r([...o,...e])}catch(e){At(e,s)}Yt()}}var d=Xt();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>$t(e))).then(u).catch(e=>At(e,s)).finally(d)}l?l.then(()=>{c(),f(),Yt()}):f()}function Jt(){var e=W,t=U,n=Je,r=z;return function(i=!0){Bn(e),zn(t),Ye(n),i&&(e.f&E)===0&&(r?.activate(),r?.apply())}}function Yt(e=!0){Bn(null),zn(null),Ye(null),e&&z?.deactivate()}function Xt(){var e=W,t=e.b,n=z,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function Zt(e){return W!==null&&(W.f|=O),{ctx:Je,deps:null,effects:null,equals:Ce,f:2050,fn:e,reactions:null,rv:0,v:k,wv:0,parent:W,ac:null}}var Qt=Symbol(`obsolete`);function $t(e,t,n){let r=W;r===null&&De();var i=void 0,a=kn(k),o=!U,s=new Set;return yr(()=>{var t=W,n=m();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==ye&&n.reject(e)}).finally(Yt)}catch(e){n.reject(e),Yt()}var c=z;if(o){if((t.f&re)!==0)var l=Xt();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(Qt);else for(let e of s.values())e.reject(Qt);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==Qt&&(c.activate(),t?(a.f|=le,jn(a,t)):((a.f&le)!==0&&(a.f^=le),jn(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),pr(()=>{for(let e of s)e.reject(Qt)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function en(e){let t=Zt(e);return Hn(t),t}function tn(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Or(t[n])}}function nn(e){var t,n=W,r=e.parent;if(!In&&r!==null&&e.v!==k&&r.f&24576)return rt(),e.v;Bn(r);try{e.f&=-65537,tn(e),t=er(e)}finally{Bn(n)}return t}function rn(e){var t=nn(e);if(!e.equals(t)&&(e.wv=Zn(),(!z?.is_fork||e.deps===null)&&(z===null?e.v=t:(z.capture(e,t,!0),cn?.capture(e,t,!0)),e.deps===null))){R(e,S);return}In||(ln===null?Mt(e):(fr()||z?.is_fork)&&ln.set(e,t))}function an(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&Gt(()=>{t.ac.abort(ye),t.ac=null}),t.fn!==null&&(t.teardown=f),rr(t,0),Er(t))}function on(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&ir(t)}var sn=null,z=null,cn=null,ln=null,un=null,dn=!1,fn=!1,pn=null,mn=null,hn=0,gn=1,_n=class e{id=gn++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#r=new Set;#i=new Set;#a=0;#o=new Map;#s=null;#c=[];#l=[];#u=new Set;#d=new Set;#f=new Map;#p=new Set;is_fork=!1;#m=!1;constructor(){sn===null?sn=this:(sn.#n=this,this.#t=sn),sn=this}#h(){if(this.is_fork)return!0;for(let n of this.#o.keys()){for(var e=n,t=!1;e.parent!==null;){if(this.#f.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#f.has(e)||this.#f.set(e,{d:[],m:[]}),this.#p.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#f.get(e);if(n){this.#f.delete(e);for(var r of n.d)R(r,C),t(r);for(r of n.m)R(r,w),t(r)}this.#p.add(e)}#g(){this.#e=!0,hn++>1e3&&(this.#x(),vn());for(let e of this.#u)this.#d.delete(e),R(e,C),this.schedule(e);for(let e of this.#d)R(e,w),this.schedule(e);let t=this.#c;this.#c=[],this.apply();var n=pn=[],r=[],i=mn=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw Tn(e),this.#h()||this.discard(),t}if(z=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(pn=null,mn=null,this.#h()){this.#b(r),this.#b(n);for(let[e,t]of this.#f)wn(e,t);i.length>0&&z.#g();return}let o=this.#v();if(o){this.#b(r),this.#b(n),o.#y(this);return}this.#u.clear(),this.#d.clear();for(let e of this.#r)e(this);this.#r.clear(),cn=this,bn(r),bn(n),cn=null,this.#s?.resolve();var s=z;if(this.#a===0&&(this.#c.length===0||s!==null)&&this.#x(),this.#c.length>0)if(s!==null){let e=s;e.#c.push(...this.#c.filter(t=>!e.#c.includes(t)))}else s=this;s!==null&&(Dn.clear(),s.#g())}#_(e,t,n){e.f^=S;for(var r=e.first;r!==null;){var i=r.f,a=(i&96)!=0;if(!(a&&(i&S)!==0||(i&T)!==0||this.#f.has(r))&&r.fn!==null){a?r.f^=S:(i&g)===0?Qn(r)&&((i&y)!==0&&this.#d.add(r),ir(r)):t.push(r);var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(){for(var e=this.#t;e!==null;){if(!e.is_fork){for(let[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=e.#t}return null}#y(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#u,e.#d);let t=e=>{var n=e.reactions;if(n!==null&&!((e.f&h)!==0&&!(e.f&6144)))for(let e of n){var r=e.f;if((r&h)!==0)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#d.delete(i),R(i,C),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#x(),z=this,this.#g()}#b(e){for(var t=0;t<e.length;t+=1)Pt(e[t],this.#u,this.#d)}capture(e,t,n=!1){e.v!==k&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&le)===0&&(this.current.set(e,[t,n]),ln?.set(e,t)),this.is_fork||(e.v=t)}activate(){z=this}deactivate(){z=null,ln=null}flush(){try{fn=!0,z=this,this.#g()}finally{hn=0,un=null,pn=null,mn=null,fn=!1,z=null,ln=null,Dn.clear()}}discard(){for(let e of this.#i)e(this);this.#i.clear();for(let e of this.async_deriveds.values())e.reject(Qt);this.#x(),this.#s?.resolve()}register_created_effect(e){this.#l.push(e)}increment(e,t){if(this.#a+=1,e){let e=this.#o.get(t)??0;this.#o.set(t,e+1)}}decrement(e,t){if(--this.#a,e){let e=this.#o.get(t)??0;e===1?this.#o.delete(t):this.#o.set(t,e-1)}this.#m||(this.#m=!0,nt(()=>{this.#m=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(let t of e)this.#u.add(t);for(let e of t)this.#d.add(e);e.clear(),t.clear()}oncommit(e){this.#r.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#s??=m()).promise}static ensure(){if(z===null){let t=z=new e;!fn&&!dn&&nt(()=>{t.#e||t.flush()})}return z}apply(){ln=null}schedule(e){if(un=e,e.b?.is_pending&&e.f&16777228&&(e.f&re)===0){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(pn!==null&&t===W&&(U===null||(U.f&h)===0))return;if(n&96){if((n&S)===0)return;t.f^=S}}this.#c.push(t)}#x(){if(this.linked){var e=this.#t,t=this.#n;e===null||(e.#n=t),t===null?sn=e:t.#t=e,this.linked=!1}}};function B(e){var t=dn;dn=!0;try{for(var n;;){if(A(),z===null)return n;z.flush()}}finally{dn=t}}function vn(){try{je()}catch(e){At(e,un)}}var yn=null;function bn(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Qn(r)&&(yn=new Set,ir(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Ar(r),yn?.size>0)){Dn.clear();for(let e of yn){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)yn.has(n)&&(yn.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||ir(n)}}yn.clear()}}yn=null}}function xn(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let i of e.reactions){let e=i.f;(e&h)===0?e&4194320&&(e&C)===0&&Sn(i,t,r)&&(R(i,C),Cn(i)):xn(i,t,n,r)}}function Sn(e,t,r){let i=r.get(e);if(i!==void 0)return i;if(e.deps!==null)for(let i of e.deps){if(n.call(t,i))return!0;if((i.f&h)!==0&&Sn(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function Cn(e){z.schedule(e)}function wn(e,t){if(!((e.f&ee)!==0&&(e.f&S)!==0)){(e.f&C)===0?(e.f&w)!==0&&t.m.push(e):t.d.push(e),R(e,S);for(var n=e.first;n!==null;)wn(n,t),n=n.next}}function Tn(e){R(e,S);for(var t=e.first;t!==null;)Tn(t),t=t.next}var En=new Set,Dn=new Map,On=!1;function kn(e,t){return{f:0,v:e,reactions:null,equals:Ce,rv:0,wv:0}}function V(e,t){let n=kn(e);return Hn(n),n}function An(e,t=!1,n=!0){let r=kn(e);return t||(r.equals=Te),r}function H(e,t,n=!1){return U!==null&&(!Rn||(U.f&oe)!==0)&&$e()&&U.f&4325394&&(Vn===null||!Vn.has(e))&&Fe(),jn(e,n?dt(t):t,mn)}function jn(e,t,n=null){if(!e.equals(t)){In?Dn.set(e,t):Dn.has(e)||Dn.set(e,e.v);var r=_n.ensure();if(r.capture(e,t),(e.f&h)!==0){let t=e;(e.f&C)!==0&&nn(t),ln===null&&Mt(t)}e.wv=Zn(),Pn(e,C,n),W!==null&&(W.f&S)!==0&&!(W.f&96)&&(Gn===null?Kn([e]):Gn.push(e)),!r.is_fork&&En.size>0&&!On&&Mn()}return t}function Mn(){On=!1;for(let e of En){(e.f&S)!==0&&R(e,w);let t;try{t=Qn(e)}catch{t=!0}t&&ir(e)}En.clear()}function Nn(e){H(e,e.v+1)}function Pn(e,t,n){var r=e.reactions;if(r!==null)for(var i=r.length,a=0;a<i;a++){var o=r[a],s=o.f,c=(s&C)===0;if(c&&R(o,t),(s&oe)!==0)En.add(o);else if((s&h)!==0){var l=o;ln?.delete(l),(s&se)===0&&(s&x&&(W===null||(W.f&ce)===0)&&(o.f|=se),Pn(l,w,n))}else if(c){var u=o;(s&y)!==0&&yn!==null&&yn.add(u),n===null?Cn(u):n.push(u)}}}var Fn=!1,In=!1;function Ln(e){In=e}var U=null,Rn=!1;function zn(e){U=e}var W=null;function Bn(e){W=e}var Vn=null;function Hn(e){U!==null&&(Vn??=new Set).add(e)}var Un=null,Wn=0,Gn=null;function Kn(e){Gn=e}var qn=1,Jn=0,Yn=Jn;function Xn(e){Yn=e}function Zn(){return++qn}function Qn(e){var t=e.f;if((t&C)!==0)return!0;if(t&h&&(e.f&=-65537),(t&w)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Qn(a)&&rn(a),a.wv>e.wv)return!0}(t&x)!==0&&ln===null&&R(e,S)}return!1}function $n(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Vn!==null&&Vn.has(e)))for(var i=0;i<r.length;i++){var a=r[i];(a.f&h)===0?t===a&&(n?R(a,C):(a.f&S)!==0&&R(a,w),Cn(a)):$n(a,t,!1)}}function er(e){var t=Un,n=Wn,r=Gn,i=U,a=Vn,o=Je,s=Rn,c=Yn,l=e.f;Un=null,Wn=0,Gn=null,U=l&96?null:e,Vn=null,Ye(e.ctx),Rn=!1,Yn=++Jn,e.ac!==null&&(Gt(()=>{e.ac.abort(ye)}),e.ac=null);try{e.f|=ce;var u=e.fn,d=u();e.f|=re;var f=tr(e);if($e()&&Gn!==null&&!Rn&&f!==null&&!(e.f&6146))for(var p=0;p<Gn.length;p++)$n(Gn[p],e);if(i!==null&&i!==e){if(Jn++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=Jn;if(t!==null)for(let e of t)e.rv=Jn;Gn!==null&&(r===null?r=Gn:r.push(...Gn))}return(e.f&le)!==0&&(e.f^=le),d}catch(t){return tr(e),kt(t)}finally{e.f^=ce,Un=t,Wn=n,Gn=r,U=i,Vn=a,Ye(o),Rn=s,Yn=c}}function tr(e){var t=e.deps,n=z?.is_fork;if(Un!==null){var r;if(n||rr(e,Wn),t!==null&&Wn>0)for(t.length=Wn+Un.length,r=0;r<Un.length;r++)t[Wn+r]=Un[r];else e.deps=t=Un;if(fr()&&(e.f&x)!==0)for(r=Wn;r<t.length;r++)(t[r].reactions??=[]).push(e)}else !n&&t!==null&&Wn<t.length&&(rr(e,Wn),t.length=Wn);return t}function nr(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&(r.f&h)!==0&&(Un===null||!n.call(Un,r))){var s=r;(s.f&x)!==0&&(s.f^=x,s.f&=-65537),s.v!==k&&Mt(s),s.ac!==null&&Gt(()=>{s.ac.abort(ye),s.ac=null,R(s,C)}),an(s),rr(s,0)}}function rr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)nr(e,n[r])}function ir(e){var t=e.f;if((t&E)===0){R(e,S);var n=W,r=Fn;W=e,Fn=(t&96)==0;try{t&16777232?Dr(e):Er(e),Tr(e);var i=er(e);e.teardown=typeof i==`function`?i:null,e.wv=qn}finally{Fn=r,W=n}}}async function ar(){await Promise.resolve(),B()}function G(e){var t=(e.f&h)!==0;if(U!==null&&!Rn&&!(W!==null&&(W.f&E)!==0)&&(Vn===null||!Vn.has(e))){var r=U.deps;if((U.f&ce)!==0)e.rv<Jn&&(e.rv=Jn,Un===null&&r!==null&&r[Wn]===e?Wn++:Un===null?Un=[e]:Un.push(e));else{U.deps??=[],n.call(U.deps,e)||U.deps.push(e);var i=e.reactions;i===null?e.reactions=[U]:n.call(i,U)||i.push(U)}}if(In&&Dn.has(e))return Dn.get(e);if(t){var a=e;if(In){var o=a.v;return((a.f&S)===0&&a.reactions!==null||sr(a))&&(o=nn(a)),Dn.set(a,o),o}var s=(a.f&x)===0&&!Rn&&U!==null&&(Fn||(U.f&x)!==0),c=(a.f&re)===0;Qn(a)&&(s&&(a.f|=x),rn(a)),s&&!c&&(on(a),or(a))}if(ln?.has(e))return ln.get(e);if((e.f&le)!==0)throw e.v;return e.v}function or(e){if(e.f|=x,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),(t.f&h)!==0&&(t.f&x)===0&&(on(t),or(t))}function sr(e){if(e.v===k)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(Dn.has(t)||(t.f&h)!==0&&sr(t))return!0;return!1}function cr(e){var t=Rn;try{return Rn=!0,e()}finally{Rn=t}}function lr(e){W===null&&(U===null&&Ae(),ke()),In&&Oe()}function ur(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function dr(e,t){var n=W;n!==null&&(n.f&T)!==0&&(e|=T);var r={ctx:Je,deps:null,nodes:null,f:e|2560,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};z?.register_created_effect(r);var i=r;if((e&g)!==0)pn===null?_n.ensure().schedule(r):pn.push(r);else if(t!==null){try{ir(r)}catch(e){throw Or(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&O)===0&&(i=i.first,(e&y)!==0&&(e&ae)!==0&&i!==null&&(i.f|=ae))}if(i!==null&&(i.parent=n,n!==null&&ur(i,n),U!==null&&(U.f&h)!==0&&(e&b)===0)){var a=U;(a.effects??=[]).push(i)}return r}function fr(){return U!==null&&!Rn}function pr(e){let t=dr(_,null);return R(t,S),t.teardown=e,t}function mr(e){lr();var t=W.f;if(!U&&(t&ee)!==0&&Je!==null&&!Je.i){var n=Je;(n.e??=[]).push(e)}else return hr(e)}function hr(e){return dr(1048580,e)}function gr(e){_n.ensure();let t=dr(524352,e);return()=>{Or(t)}}function _r(e){_n.ensure();let t=dr(524352,e);return(e={})=>new Promise(n=>{e.outro?jr(t,()=>{Or(t),n(void 0)}):(Or(t),n(void 0))})}function vr(e){return dr(g,e)}function yr(e){return dr(4718592,e)}function br(e,t=0){return dr(_|t,e)}function xr(e,t=[],n=[],r=[]){qt(r,t,n,t=>{dr(_,()=>{e(...t.map(G))})})}function Sr(e,t=0){return dr(y|t,e)}function Cr(e,t=0){return dr(v|t,e)}function wr(e){return dr(524320,e)}function Tr(e){var t=e.teardown;if(t!==null){let n=In,r=U;Ln(!0),zn(null);try{t.call(null)}catch(t){At(t,e.parent)}finally{Ln(n),zn(r)}}}function Er(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Gt(()=>{e.abort(ye)});var r=n.next;(n.f&b)===0?Or(n,t):n.parent=null,n=r}}function Dr(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ee)===0&&Or(t),t=n}}function Or(e,t=!0){var n=!1;(t||(e.f&D)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(kr(e.nodes.start,e.nodes.end),n=!0),e.f|=ie,Er(e,t&&!n),rr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Tr(e),e.f^=ie,e.f|=E;var i=e.parent;i!==null&&i.first!==null&&Ar(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function kr(e,t){for(;e!==null;){var n=e===t?null:St(e);e.remove(),e=n}}function Ar(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function jr(e,t,n=!0){var r=[];e.f|=ne,Mr(e,r,!0);var i=()=>{n&&Or(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Mr(e,t,n){if((e.f&T)===0){e.f^=T;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if((i.f&b)===0){var o=(i.f&ae)!==0||(i.f&ee)!==0&&(e.f&y)!==0;Mr(i,t,o?n:!1)}i=a}}}function Nr(e){e.f&=-257,Pr(e,!0)}function Pr(e,t){if((e.f&ne)===0&&(e.f&T)!==0){e.f^=T,(e.f&S)===0&&(R(e,C),_n.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&ae)!==0||(n.f&ee)!==0;Pr(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Fr(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:St(n);t.append(n),n=i}}function Ir(e){let t=0,n=kn(0),r;return()=>{fr()&&(G(n),br(()=>(t===0&&(r=cr(()=>e(()=>Nn(n)))),t+=1,()=>{nt(()=>{--t,t===0&&(r?.(),r=void 0,Nn(n))})})))}}function Lr(e){let t={get:e=>Rt(t.store)[e],set:(e,n)=>{typeof e==`string`?Object.assign(Rt(t.store),{[e]:n}):Object.assign(Rt(t.store),e),t.store.set(Rt(t.store))},store:Lt(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Lr({}),i18n:Lr({}),instances:new Set,plugins:new Set},globalThis.$altcha.i18n.set(`en`,{ariaLinkLabel:`Altcha (official website)`,cancel:`Cancel`,enterCode:`Enter code`,enterCodeAria:`Enter code you hear. Press Space to play audio.`,enterCodeFromImage:`To proceed, please enter the code from the image below.`,error:`Verification failed. Try again later.`,expired:`Verification expired. Try again.`,footer:`Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (official website)">ALTCHA</a>`,getAudioChallenge:`Get an audio challenge`,label:`I'm not a robot`,loading:`Loading...`,reload:`Reload`,verify:`Verify`,verificationRequired:`Verification required!`,verified:`Verified`,verifying:`Verifying...`,waitAlert:`Verifying... please wait.`});var Rr=`5`;typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(Rr);var zr=Symbol(`events`),Br=new Set,Vr=new Set;function Hr(e,t,n,r={}){function i(e){if(r.capture||qr.call(t,e),!e.cancelBubble)return Gt(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?nt(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function K(e,t,n,r,i){var a={capture:r,passive:i},o=Hr(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&pr(()=>{t.removeEventListener(e,o,a)})}function Ur(e,t,n){(t[zr]??={})[e]=n}function Wr(e){for(var t=0;t<e.length;t++)Br.add(e[t]);for(var n of Vr)n(e)}var Gr=null,Kr=!1;function qr(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],o=i[0]||e.target;Gr=e,Kr||(Kr=!0,setTimeout(()=>{Kr=!1,Gr=null}));var s=0,c=Gr===e&&e[zr];if(c){var l=i.indexOf(c);if(l!==-1&&(t===document||t===window)){e[zr]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=i[s]||e.target,o!==t){a(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=U,f=W;zn(null),Bn(null);try{for(var p,m=[];o!==null&&o!==t;){try{var h=o[zr]?.[r];h!=null&&(!o.disabled||e.target===o)&&h.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble)break;s++,o=s<i.length?i[s]:null}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[zr]=t,delete e.currentTarget,zn(d),Bn(f)}}}var Jr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function Yr(e){return Jr?.createHTML(e)??e}function Xr(e){var t=Dt(`template`);return t.innerHTML=Yr(e.replaceAll(`<!>`,`<!---->`)),t.content}function Zr(e,t){var n=W;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function q(e,t){var n=(t&Le)!==0,r=(t&Re)!==0,i,a=!e.startsWith(`<!>`);return()=>{if(M)return Zr(N,null),N;i===void 0&&(i=Xr(a?e:`<!>`+e),n||(i=xt(i)));var t=r||gt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=xt(t),s=t.lastChild;Zr(o,s)}else Zr(t,t);return t}}function Qr(e,t,n=`svg`){var r=`<${n}>${e.startsWith(`<!>`)?`<!>`+e:e}</${n}>`,i;return()=>{if(M)return Zr(N,null),N;i||=xt(xt(Xr(r)));var e=i.cloneNode(!0);return Zr(e,e),e}}function $r(e,t){return Qr(e,t,`svg`)}function ei(e=``){if(!M){var t=bt(e+``);return Zr(t,t),t}var n=N;return n.nodeType===xe?Ot(n):(n.before(n=bt()),P(n)),Zr(n,n),n}function ti(){if(M)return Zr(N,null),N;var e=document.createDocumentFragment(),t=document.createComment(``),n=bt();return e.append(t,n),Zr(t,n),e}function J(e,t){if(M){var n=W;((n.f&re)===0||n.nodes.end===null)&&(n.nodes.end=N),st();return}e!==null&&e.before(t)}function ni(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}var ri=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`];function ii(e){return ri.includes(e)}var ai={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`};function oi(e){return e=e.toLowerCase(),ai[e]??e}var si=[`touchstart`,`touchmove`];function ci(e){return si.includes(e)}var li=589824;function ui(e,t,n,r){new di(e,t,n,r)}var di=class{parent;is_pending=!1;transform_error;#e;#t=M?N:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=Ir(()=>(this.#m=kn(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=W;t.b=this,t.f|=te,n(e)},this.parent=W.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=Sr(()=>{if(M){let e=this.#t;st();let t=e.data===Be;if(e.data.startsWith(Ve)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#y():this.#g()}else this.#b()},li),M&&(this.#e=N)}#g(){try{this.#a=wr(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed,{reset:n,invoke_onerror:r}=this.#v(e);nt(r),t&&(this.#s=wr(()=>{t(this.#e,()=>e,()=>n)}))}#v(e){var t=!1,n=!1;let r=()=>{if(t){at();return}t=!0,n&&Ie(),this.#s!==null&&jr(this.#s,()=>{this.#s=null}),this.#S(()=>{this.#b()})};return{reset:r,invoke_onerror:()=>{try{n=!0,this.#n.onerror?.(e,r),n=!1}catch(e){At(e,this.#i&&this.#i.parent)}}}}#y(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=wr(()=>e(this.#e)),nt(()=>{var e=this.#c=document.createDocumentFragment(),t=bt(),n=!1;if(e.append(t),this.#a=this.#S(()=>{try{return wr(()=>this.#r(t))}catch(e){try{this.error(e),n=!0}catch(e){At(e,this.#i.parent)}return null}}),this.#a===null){this.#c=null,n&&this.#x(z);return}this.#u===0&&(this.#e.before(e),this.#c=null,jr(this.#o,()=>{this.#o=null}),this.#x(z))}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=wr(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Fr(this.#a,e);let t=this.#n.pending;this.#o=wr(()=>t(this.#e))}else this.#x(z)}catch(e){this.error(e)}}#x(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){Pt(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#S(e){var t=W,n=U,r=Je;Bn(this.#i),zn(this.#i),Ye(this.#i.ctx);try{return _n.ensure(),e()}finally{Bn(t),zn(n),Ye(r)}}#C(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#C(e,t);return}this.#u+=e,this.#u===0&&(this.#x(t),this.#o&&jr(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#C(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,nt(()=>{this.#d=!1,this.#m&&jn(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),G(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;z?.is_fork?(this.#a&&z.skip_effect(this.#a),this.#o&&z.skip_effect(this.#o),this.#s&&z.skip_effect(this.#s),z.oncommit(()=>{this.#w(e)})):this.#w(e)}#w(e){this.#a&&=(Or(this.#a),null),this.#o&&=(Or(this.#o),null),this.#s&&=(Or(this.#s),null),M&&(P(this.#t),ct(),P(lt()));let t=this.#n.failed,n=e=>{let{reset:n,invoke_onerror:r}=this.#v(e);r(),t&&(this.#s=this.#S(()=>{try{return wr(()=>{var r=W;r.b=this,r.f|=te,t(this.#e,()=>e,()=>n)})}catch(e){return At(e,this.#i.parent),null}}))};nt(()=>{var t;try{t=this.transform_error(e)}catch(e){At(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(n,e=>At(e,this.#i&&this.#i.parent)):n(t)})}};function fi(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[_e]??=e.nodeValue)&&(e[_e]=n,e.nodeValue=`${n}`)}function pi(e,t){return gi(e,t)}function mi(e,t){yt(),t.intro=t.intro??!1;let n=t.target,r=M,i=N;try{for(var a=xt(n);a&&(a.nodeType!==Se||a.data!==ze);)a=St(a);if(!a)throw Ue;ot(!0),P(a);let r=gi(e,{...t,anchor:a});return ot(!1),r}catch(r){if(r instanceof Error&&r.message.split(`
`).some(e=>e.startsWith(`https://svelte.dev/e/`)))throw r;return r!==Ue&&console.warn(`Failed to hydrate: `,r),t.recover===!1&&Me(),yt(),Tt(n),ot(!1),pi(e,t)}finally{ot(r),P(i)}}var hi=new Map;function gi(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){yt();var l=void 0,u=_r(()=>{var s=n??t.appendChild(bt());ui(s,{pending:()=>{}},t=>{Xe({});var n=Je;if(o&&(n.c=o),a&&(i.$$events=a),M&&Zr(t,null),l=e(t,i)||Qe(),M&&(W.nodes.end=N,N===null||N.nodeType!==Se||N.data!==He))throw j(),Ue;Ze()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=ci(r);for(let e of[t,document]){var a=hi.get(e);a===void 0&&(a=new Map,hi.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,qr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(Br)),Vr.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=hi.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,qr),r.delete(e),r.size===0&&hi.delete(n)):r.set(e,i)}Vr.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return _i.set(l,u),l}var _i=new WeakMap;function vi(e,t){let n=_i.get(e);return n?(_i.delete(e),n(t)):Promise.resolve()}var yi=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)Nr(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(Nr(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(Or(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Fr(r,t),t.append(bt()),this.#n.set(e,{effect:r,fragment:t})}else Or(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),jr(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(Or(n.effect),this.#n.delete(e))};ensure(e,t){var n=z,r=Et();if(t&&!this.#t.has(e)&&!this.#n.has(e))if(r){var i=document.createDocumentFragment(),a=bt();i.append(a),this.#n.set(e,{effect:wr(()=>t(a)),fragment:i})}else this.#t.set(e,wr(()=>t(this.anchor)));if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else M&&(this.anchor=N),this.#a(n)}};function bi(e,t,...n){var r=new yi(e);Sr(()=>{let e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},ae)}function xi(e){Je===null&&Ee(),mr(()=>{let t=cr(e);if(typeof t==`function`)return t})}function Y(e,t,n=!1){var r;M&&(r=N,st());var i=new yi(e),a=n?ae:0;function o(e,t){if(M){var n=ut(r);if(e!==parseInt(n.substring(1))){var a=lt();P(a),i.anchor=a,ot(!1),i.ensure(e,t),ot(!0);return}}i.ensure(e,t)}Sr(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}var Si=Symbol(`NaN`);function Ci(e,t,n){M&&st();var r=new yi(e);Sr(()=>{var e=t();e!==e&&(e=Si),r.ensure(e,n)})}function wi(e,t,n=!1,r=!1,i=!1,a=!1){var o=e,s=``;if(n){var c=e;M&&(o=P(xt(c)))}xr(()=>{var e=W;if(s===(s=t()??``)){M&&st();return}if(n&&!M){e.nodes=null,c.innerHTML=s,s!==``&&Zr(xt(c),c.lastChild);return}if(e.nodes!==null&&(kr(e.nodes.start,e.nodes.end),e.nodes=null),s!==``){if(M){N.data;for(var a=st(),l=a;a!==null&&(a.nodeType!==Se||a.data!==``);)l=a,a=St(a);if(a===null)throw j(),Ue;Zr(N,l),o=P(a);return}var u=Dt(r?`svg`:i?`math`:`template`,r?Ge:i?Ke:void 0);u.innerHTML=s;var d=r||i?u:u.content;if(Zr(xt(d),d.lastChild),r||i)for(;xt(d);)o.before(xt(d));else o.before(d)}})}function Ti(e,t,n){var r;M&&(r=N,st());var i=new yi(e);Sr(()=>{var e=t()??null;if(M&&ut(r)===ze!=(e!==null)){var a=lt();P(a),i.anchor=a,ot(!1),i.ensure(e,e&&(t=>n(t,e))),ot(!0);return}i.ensure(e,e&&(t=>n(t,e)))},ae)}function Ei(e,t){var n=void 0,r;Cr(()=>{n!==(n=t())&&(r&&=(Or(r),null),n&&(r=wr(()=>{vr(()=>n(e))})))})}function Di(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Di(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Oi(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Di(e))&&(r&&(r+=` `),r+=t);return r}function ki(e){return typeof e==`object`?Oi(e):e??``}var Ai=[...` 	
\r\f\xA0\v﻿`];function ji(e,t,n){var r=e==null?``:``+e;if(n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Ai.includes(r[o-1]))&&(s===r.length||Ai.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Mi(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function Ni(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function Pi(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(Ni)),i&&c.push(...Object.keys(i).map(Ni));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=Ni(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=Mi(r)),i&&(n+=Mi(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function Fi(e,t,n,r,i,a){var o=e[he];if(M||o!==n||o===void 0){var s=ji(n,r,a);(!M||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e[he]=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Ii(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Li(e,t,n,r){var i=e[ge];if(M||i!==t){var a=Pi(t,r);(!M||a!==e.getAttribute(`style`))&&(a==null?e.removeAttribute(`style`):e.style.cssText=a),e[ge]=t}else r&&(Array.isArray(r)?(Ii(e,n?.[0],r[0]),Ii(e,n?.[1],r[1],`important`)):Ii(e,n,r));return r}function Ri(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)}function zi(e,t){var n=!(`__defaultValue`in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Bi(e,!n||`__value`in e))}function Bi(t,n){var r=t.__defaultValue,i=t.multiple,a=i?r??[]:null;if(!(i&&!e(a))){var o=t.selectedIndex,s=n&&i?new Set(t.selectedOptions):null;for(var c of t.options){var l=Ui(c);Ri(c,i?a.includes(l):pt(l,r))}if(n)if(s!==null)for(c of t.options){var u=s.has(c);c.selected!==u&&(c.selected=u)}else t.selectedIndex!==o&&(t.selectedIndex=o)}}function Vi(t,n,r=!1){if(t.multiple){if(n==null)return;if(!e(n))return it();for(var i of t.options)i.selected=n.includes(Ui(i));return}for(i of t.options)if(pt(Ui(i),n)){i.selected=!0;return}(!r||n!==void 0)&&(t.selectedIndex=-1)}function Hi(e){var t=new MutationObserver(t=>{t.every(Wi)||(`__defaultValue`in e&&Bi(e,!1),`__value`in e&&Vi(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),pr(()=>{t.disconnect()})}function Ui(e){return`__value`in e?e.__value:e.value}function Wi(e){if(e.target.closest(`selectedcontent`)!==null)return!0;if(e.type===`childList`){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(e=>e.nodeName===`SELECTEDCONTENT`)}return!1}var Gi=Symbol(`class`),Ki=Symbol(`style`),qi=Symbol(`is custom element`),Ji=Symbol(`is html`),Yi=be?`link`:`LINK`,Xi=be?`input`:`INPUT`,Zi=be?`option`:`OPTION`,Qi=be?`select`:`SELECT`,$i=be?`progress`:`PROGRESS`;function ea(e){if(M){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;X(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;X(e,`checked`,null),e.checked=r}}};e[ve]=n,nt(n),Wt()}}function ta(e,t){var n=ia(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==$i)||(e.value=t??``)}function X(e,t,n,r){var i=ia(e);M&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===Yi)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[pe]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&oa(e).has(t)?e[t]=n:e.setAttribute(t,n))}function na(e,t,n,r,i=!1,a=!1){M&&i&&e.nodeName===Xi&&(`defaultValue`in n||`defaultChecked`in n||ea(e));var o=ia(e),s=o[qi],c=!o[Ji];let l=M&&s;l&&ot(!1);var u=t||{},d=e.nodeName===Zi,f=e.nodeName===Qi;for(var p in t)!(p in n)&&p[0]+p[1]!==`$$`&&(n[p]=null);n.class?n.class=ki(n.class):n[Gi]&&(n.class=null),n[Ki]&&(n.style??=null);var m=oa(e);if(e.nodeName===Xi&&`type`in n&&(`value`in n||`__value`in n)){var h=n.type;(h!==u.type||h===void 0&&e.hasAttribute(`type`))&&(u.type=h,X(e,`type`,h))}for(let i in n){let a=n[i];if(d&&i===`value`&&a==null){e.value=e.__value=``,u[i]=a;continue}if(i===`class`){Fi(e,e.namespaceURI===`http://www.w3.org/1999/xhtml`,a,r,t?.[Gi],n[Gi]),u[i]=a,u[Gi]=n[Gi];continue}if(i===`style`){Li(e,a,t?.[Ki],n[Ki]),u[i]=a,u[Ki]=n[Ki];continue}var g=u[i];if(!(a===g&&!(a===void 0&&e.hasAttribute(i)))){u[i]=a;var _=i[0]+i[1];if(_!==`$$`)if(_===`on`){let t={},n=`$$`+i,r=i.slice(2);var v=ii(r);if(ni(r)&&(r=r.slice(0,-7),t.capture=!0),!v&&g){if(a!=null)continue;e.removeEventListener(r,u[n],t),u[n]=null}v?(Ur(r,e,a),Wr([r])):a!=null&&(u[n]=Hr(r,e,function(e){u[i].call(this,e)},t))}else if(i===`style`)X(e,i,a);else if(i===`autofocus`)Ht(e,!!a);else if(!s&&(i===`__value`||i===`value`&&a!=null))e.value=e.__value=a;else if(i===`selected`&&d)Ri(e,a);else{var y=i;c||(y=oi(y));var ee=y===`defaultValue`||y===`defaultChecked`;if(f&&y===`defaultValue`)continue;if(a==null&&!s&&!ee)if(o[i]=null,y===`value`||y===`checked`){let n=e,r=t===void 0;if(y===`value`){let e=n.defaultValue;n.removeAttribute(y),n.defaultValue=e,n.value=n.__value=r?e:null}else{let e=n.defaultChecked;n.removeAttribute(y),n.defaultChecked=e,n.checked=r?e:!1}}else e.removeAttribute(i);else ee||(s||typeof a!=`string`)&&m.has(y)?(e[y]=a,y in o&&(o[y]=k)):typeof a!=`function`&&X(e,y,a)}}}return l&&ot(!0),u}function ra(e,t,n=[],r=[],i=[],a,o=!1,s=!1){qt(i,n,r,n=>{var r=void 0,i={},c=e.nodeName===Qi,l=!1;if(Cr(()=>{var u=t(...n.map(G)),d=na(e,r,u,a,o,s);if(l&&c){var f=e;`defaultValue`in u&&zi(f,u.defaultValue),`value`in u&&Vi(f,u.value)}for(let e of Object.getOwnPropertySymbols(i))u[e]||Or(i[e]);for(let t of Object.getOwnPropertySymbols(u)){var p=u[t];t.description===qe&&(!r||p!==r[t])&&(i[t]&&Or(i[t]),i[t]=wr(()=>Ei(e,()=>p))),d[t]=p}r=d}),c){var u=e;vr(()=>{var e=r;`defaultValue`in e&&zi(u,e.defaultValue),Vi(u,e.value,!0),Hi(u)})}l=!0})}function ia(e){return e[me]??={[qi]:e.nodeName.includes(`-`),[Ji]:e.namespaceURI===We}}var aa=new Map;function oa(e){var t=e.getAttribute(`is`)||e.nodeName,n=aa.get(t);if(n)return n;aa.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){for(var o in r=s(i),r)r[o].set&&o!==`innerHTML`&&o!==`textContent`&&o!==`innerText`&&n.add(o);i=u(i)}return n}function sa(e,t,n=t){var r=new WeakSet;Kt(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=ca(e)?la(a):a,n(a),z!==null&&r.add(z),await ar(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(M&&e.defaultValue!==e.value||cr(t)==null&&e.value)&&(n(ca(e)?la(e.value):e.value),z!==null&&r.add(z)),br(()=>{var n=t();if(e===document.activeElement){var i=z;if(r.has(i))return}ca(e)&&n===la(e.value)||e.type===`date`&&!n&&!e.value||n!==e.value&&(e.value=n??``)})}function ca(e){var t=e.type;return t===`number`||t===`range`}function la(e){return e===``?null:+e}function ua(e,t){return e===t||e?.[ue]===t}function da(e=Qe(),t,n,r){var i=Je.r,a=W;return vr(()=>{var r,o;return br(()=>{r=o,o=[],cr(()=>{ua(n(...o),e)||(t(e,...o),r&&ua(n(...r),e)&&t(null,...r))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&ie;)r=r.parent;let s=()=>{o&&ua(n(...o),e)&&t(null,...o)},c=r.teardown;r.teardown=()=>{s(),c?.()}}}),e}var fa={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.has(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};function pa(e,t,n){return new Proxy({props:e,exclude:t},fa)}function Z(e,t,n,r){var i=r,a=!0,o=()=>(a&&(a=!1,i=r),i),s=e[t];s===void 0&&r!==void 0&&(s=o());var c=()=>{var n=e[t];return n===void 0?o():(a=!0,n)},l=!1,u=Zt(()=>(l=!1,c())),d=W;return(function(e,t){if(arguments.length>0){let n=t?G(u):e;return H(u,n),l=!0,i!==void 0&&(i=n),e}return In&&l||(d.f&E)!==0?u.v:G(u)})}function ma(e){return new ha(e)}var ha=class{#e;#t;constructor(e){var t=new Map,n=(e,n)=>{var r=An(n,!1,!1);return t.set(e,r),r};let r=new Proxy({...e.props||{},$$events:{}},{get(e,r){return G(t.get(r)??n(r,Reflect.get(e,r)))},has(e,r){return r===fe?!0:(G(t.get(r)??n(r,Reflect.get(e,r))),Reflect.has(e,r))},set(e,r,i){return H(t.get(r)??n(r,i),i),Reflect.set(e,r,i)}});this.#t=(e.hydrate?mi:pi)(e.component,{target:e.target,anchor:e.anchor,props:r,context:e.context,intro:e.intro??!1,recover:e.recover,transformError:e.transformError}),(!e?.props?.$$host||e.sync===!1)&&B(),this.#e=r.$$events;for(let e of Object.keys(this.#t))e===`$set`||e===`$destroy`||e===`$on`||a(this,e,{get(){return this.#t[e]},set(t){this.#t[e]=t},enumerable:!0});this.#t.$set=e=>{Object.assign(r,e)},this.#t.$destroy=()=>{vi(this.#t)}}$set(e){this.#t.$set(e)}$on(e,t){this.#e[e]=this.#e[e]||[];let n=(...e)=>t.call(this,...e);return this.#e[e].push(n),()=>{this.#e[e]=this.#e[e].filter(e=>e!==n)}}$destroy(){this.#t.$destroy()}},ga=class{};typeof HTMLElement==`function`&&(ga=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let e=this.$$l_u.get(t);e&&(e(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(e){return t=>{let n=Dt(`slot`);e!=="default"&&(n.name=e),J(t,n)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let t={},n=va(this);for(let r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(let e of this.attributes){let t=this.$$g_p(e.name);t in this.$$d||(this.$$d[t]=_a(t,e.value,this.$$p_d,`toProp`))}for(let e in this.$$p_d)!(e in this.$$d)&&this[e]!==void 0&&(this.$$d[e]=this[e],delete this[e]);this.$$c=ma({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=gr(()=>{br(()=>{this.$$r=!0;for(let e of i(this.$$c)){if(!this.$$p_d[e]?.reflect)continue;this.$$d[e]=this.$$c[e];let t=_a(e,this.$$d[e],this.$$p_d,`toAttribute`);t==null?this.removeAttribute(this.$$p_d[e].attribute||e):this.setAttribute(this.$$p_d[e].attribute||e,t)}this.$$r=!1})});for(let e in this.$$l)for(let t of this.$$l[e]){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=_a(e,n,this.$$p_d,`toProp`),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return i(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function _a(e,t,n,r){let i=n[e]?.type;if(t=i===`Boolean`&&typeof t!=`boolean`?t!=null:t,!r||!n[e])return t;if(r===`toAttribute`)switch(i){case`Object`:case`Array`:return t==null?null:JSON.stringify(t);case`Boolean`:return t?``:null;case`Number`:return t??null;default:return t}else switch(i){case`Object`:case`Array`:return t&&JSON.parse(t);case`Boolean`:return t;case`Number`:return t==null?t:+t;default:return t}}function va(e){let t={};return e.childNodes.forEach(e=>{t[e.slot||`default`]=!0}),t}function ya(e,t,n,r,s,c){let l=class extends ga{constructor(){super(e,n,s),this.$$p_d=t}static get observedAttributes(){return i(t).map(e=>(t[e].attribute||e).toLowerCase())}};return i(t).forEach(e=>{a(l.prototype,e,{get(){return this.$$c&&e in this.$$c?this.$$c[e]:this.$$d[e]},set(n){n=_a(e,n,t),this.$$d[e]=n;var r=this.$$c;r&&(o(r,e)?.get?r[e]=n:r.$set({[e]:n}))}})}),r.forEach(e=>{a(l.prototype,e,{get(){return this.$$c?.[e]}})}),e.element=l,l}var ba=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),xa=q(`<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>`);function Sa(e,t){Xe(t,!0);let n=Z(t,`loading`),r=pa(t,ba),i;function a(){i?.click()}var o={get loading(){return n()},set loading(e){n(e),B()}},s=xa(),c=I(s);ra(c,()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),da(c,e=>i=e,()=>i);var l=L(c,2);return ct(2),F(s),xr(()=>X(s,`data-loading`,n())),Ur(`click`,l,a),J(e,s),Ze(o)}Wr([`click`]),ya(Sa,{loading:{}},[],[],{mode:`open`});var Ca=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),wa=q(`<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>`);function Ta(e,t){Xe(t,!0);let n=Z(t,`loading`),r=pa(t,Ca);var i={get loading(){return n()},set loading(e){n(e),B()}},a=wa();return ra(I(a),()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),ct(2),F(a),xr(()=>X(a,`data-loading`,n())),J(e,a),Ze(i)}ya(Ta,{loading:{}},[],[],{mode:`open`});var Ea=q(`<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>`);function Da(e,t){Xe(t,!0);let n=Z(t,`strings`);var r={get strings(){return n()},set strings(e){n(e),B()}},i=Ea(),a=I(i);return X(a,`href`,`https://altcha.org`),F(i),xr(()=>X(a,`aria-label`,n().ariaLinkLabel)),J(e,i),Ze(r)}ya(Da,{strings:{}},[],[],{mode:`open`});var Oa=q(`<div class="altcha-footer"><p></p> <!></div>`);function ka(e,t){Xe(t,!0);let n=Z(t,`logo`),r=Z(t,`strings`);var i={get logo(){return n()},set logo(e){n(e),B()},get strings(){return r()},set strings(e){r(e),B()}},a=Oa(),o=I(a);wi(o,()=>r().footer,!0),F(o);var s=L(o,2),c=e=>{Da(e,{get strings(){return r()}})};return Y(s,e=>{n()&&e(c)}),F(a),J(e,a),Ze(i)}ya(ka,{logo:{},strings:{}},[],[],{mode:`open`});var Aa=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),ja=q(`<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>`);function Ma(e,t){Xe(t,!0);let n=Z(t,`loading`),r=pa(t,Aa),i;function a(){i?.click()}var o={get loading(){return n()},set loading(e){n(e),B()}},s=ja(),c=I(s);ra(c,()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),da(c,e=>i=e,()=>i);var l=L(c,2);return F(s),xr(()=>X(s,`data-loading`,n())),Ur(`click`,l,a),J(e,s),Ze(o)}Wr([`click`]),ya(Ma,{loading:{}},[],[],{mode:`open`});var Q=(e=>(e.ERROR=`error`,e.LOADING=`loading`,e.PLAYING=`playing`,e.PAUSED=`paused`,e.READY=`ready`,e))(Q||{}),$=(e=>(e.CODE=`code`,e.ERROR=`error`,e.VERIFIED=`verified`,e.VERIFYING=`verifying`,e.UNVERIFIED=`unverified`,e.EXPIRED=`expired`,e))($||{}),Na=q(`<div class="altcha-code-challenge-title"> </div>`),Pa=q(`<div class="altcha-spinner"></div>`),Fa=$r(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>`),Ia=$r(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>`),La=$r(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>`),Ra=q(`<button type="button" class="altcha-button altcha-button-secondary"><!></button>`),za=q(`<audio hidden="" autoplay=""></audio>`),Ba=q(`<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>`);function Va(e,t){Xe(t,!0);let n=Z(t,`audioUrl`),r=Z(t,`codeChallenge`),i=Z(t,`config`),a=Z(t,`imageUrl`),o=Z(t,`onCancel`),s=Z(t,`onReload`),c=Z(t,`onSubmit`),l=Z(t,`strings`),u=V(void 0),d=V(void 0),f=V(void 0),p=V(!1),m=V(``),h=V(!1);xi(()=>(i().disableAutoFocus||ar().then(()=>{G(f)?.focus()}),()=>{G(d)&&(G(d).pause(),H(d,void 0))}));function g(){H(u,Q.PAUSED,!0)}function _(e){H(u,Q.ERROR,!0)}function v(){H(u,Q.READY,!0)}function y(){H(u,Q.LOADING,!0)}function ee(){H(u,Q.PLAYING,!0)}function b(){H(u,Q.PAUSED,!0)}function te(e){e.code===`Space`?(e.preventDefault(),e.stopPropagation(),S()):e.code===`Escape`&&(e.preventDefault(),e.stopPropagation(),o()?.())}function ne(e){e.preventDefault(),e.stopPropagation(),c()?.(G(m))}function x(e){e.play().catch(e=>{if(!(e instanceof DOMException&&e.name===`AbortError`))throw e})}function S(){G(d)?G(u)===Q.LOADING||(G(d).paused?(n()&&G(d).src!==n()&&(G(d).src=n()),G(d).currentTime=0,x(G(d))):G(d).pause()):(H(h,!0),requestAnimationFrame(()=>{G(d)&&n()&&(G(d).src=n(),x(G(d)))}))}var C={get audioUrl(){return n()},set audioUrl(e){n(e),B()},get codeChallenge(){return r()},set codeChallenge(e){r(e),B()},get config(){return i()},set config(e){i(e),B()},get imageUrl(){return a()},set imageUrl(e){a(e),B()},get onCancel(){return o()},set onCancel(e){o(e),B()},get onReload(){return s()},set onReload(e){s(e),B()},get onSubmit(){return c()},set onSubmit(e){c(e),B()},get strings(){return l()},set strings(e){l(e),B()}},w=Ba(),T=I(w),E=I(T),re=e=>{var t=Na(),n=wt(t,!0);xr(()=>fi(n,l().verificationRequired)),J(e,t)};Y(E,e=>{i().codeChallengeDisplay!==`standard`&&e(re)});var ie=L(E,2),ae=wt(ie,!0),oe=L(ie,2),D=L(oe,2),O=I(D);ea(O),O.disabled=G(p),da(O,e=>H(f,e),()=>G(f));var se=L(O,2),ce=e=>{var t=Ra(),n=I(t),r=e=>{J(e,Pa())},i=e=>{J(e,Fa())},a=e=>{J(e,Ia())},o=e=>{J(e,La())};Y(n,e=>{G(u)===Q.LOADING?e(r):G(u)===Q.ERROR?e(i,1):G(u)===Q.PLAYING?e(a,2):e(o,-1)}),F(t),xr(()=>{X(t,`title`,l().getAudioChallenge),t.disabled=G(u)===Q.LOADING||G(u)===Q.ERROR,X(t,`aria-label`,G(u)===Q.LOADING?l().loading:l().getAudioChallenge)}),K(`click`,t,()=>S(),!0),J(e,t)};Y(se,e=>{r().audio&&e(ce)});var le=L(se,2);F(D);var ue=L(D,2),de=I(ue),fe=wt(de,!0),pe=L(de,2),me=wt(pe,!0);F(ue),F(T);var he=L(T,2),ge=e=>{var t=za();da(t,e=>H(d,e),()=>G(d)),K(`error`,t,_),K(`loadstart`,t,y),K(`canplay`,t,v),K(`pause`,t,b),K(`playing`,t,ee),K(`ended`,t,g),J(e,t)};return Y(he,e=>{G(h)&&e(ge)}),F(w),xr(()=>{fi(ae,l().enterCodeFromImage),X(oe,`src`,a()),X(O,`minlength`,r().length||1),X(O,`maxlength`,r().length),X(O,`placeholder`,l().enterCode),X(O,`aria-label`,G(u)===Q.LOADING?l().loading:G(u)===Q.PLAYING?``:l().enterCodeAria),X(O,`aria-live`,G(u)?`assertive`:`polite`),X(O,`aria-busy`,G(u)===Q.LOADING),X(le,`title`,l().reload),X(le,`aria-label`,l().reload),X(de,`aria-label`,l().verify),fi(fe,l().verify),X(pe,`aria-label`,l().cancel),fi(me,l().cancel)}),K(`submit`,T,ne,!0),Ur(`keydown`,O,te),sa(O,()=>G(m),e=>H(m,e)),K(`click`,le,()=>s()?.(),!0),K(`click`,pe,()=>o()?.(),!0),J(e,w),Ze(C)}Wr([`keydown`]),ya(Va,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:`open`});var Ha=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`anchor`,`children`,`display`,`backdrop`,`onClickOutside`,`onClickOutsideDelay`,`onClose`,`placement`,`updateUISignal`,`variant`]),Ua=q(`<div class="altcha-popover-backdrop" data-backdrop=""></div>`),Wa=q(`<div class="altcha-popover-arrow"></div>`),Ga=q(`<div role="button" class="altcha-popover-close">&times;</div>`),Ka=q(`<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>`,1);function qa(e,t){Xe(t,!0);let n=Z(t,`anchor`),r=Z(t,`children`),i=Z(t,`display`,7,`standard`),a=Z(t,`backdrop`,7,!1),o=Z(t,`onClickOutside`),s=Z(t,`onClickOutsideDelay`,7,600),c=Z(t,`onClose`),l=Z(t,`placement`,7,`auto`),u=Z(t,`updateUISignal`),d=Z(t,`variant`,7,`neutral`),p=pa(t,Ha),m=V(void 0),h=V(void 0),g=V(!1),_=V(0);mr(()=>{l()!==`auto`&&H(g,l()===`top`)}),mr(()=>{u()&&te()}),xi(()=>{let e=i()===`bottomsheet`||i()===`overlay`;return e&&(G(h)&&document.body.append(G(h)),G(m)&&document.body.append(G(m))),te(),ar().then(()=>{H(_,Date.now(),!0)}),()=>{e&&(G(h)&&document.body.removeChild(G(h)),G(m)&&document.body.removeChild(G(m)))}});function v(){c()?.()}function y(e){let t=e.target;!G(m)?.contains(t)&&(!s()||G(_)+s()<Date.now())&&o()?.()}function ee(){te()}function b(){te()}function te(){if(n()&&l()===`auto`&&G(m)){let e=n().getBoundingClientRect(),t=document.documentElement.clientHeight-(e.top+e.height)<G(m).clientHeight;G(g)!==t&&H(g,t)}}var ne={get anchor(){return n()},set anchor(e){n(e),B()},get children(){return r()},set children(e){r(e),B()},get display(){return i()},set display(e=`standard`){i(e),B()},get backdrop(){return a()},set backdrop(e=!1){a(e),B()},get onClickOutside(){return o()},set onClickOutside(e){o(e),B()},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(e=600){s(e),B()},get onClose(){return c()},set onClose(e){c(e),B()},get placement(){return l()},set placement(e=`auto`){l(e),B()},get updateUISignal(){return u()},set updateUISignal(e){u(e),B()},get variant(){return d()},set variant(e=`neutral`){d(e),B()}},x=Ka();K(`click`,mt,y,!0),K(`resize`,mt,ee),K(`scroll`,mt,b);var S=Ct(x),C=e=>{var t=Ua();da(t,e=>H(h,e),()=>G(h)),J(e,t)};Y(S,e=>{a()&&e(C)});var w=L(S,2);ra(w,()=>({...p,class:`altcha-popover ${(t.class||``)??``}`,"data-popover":!0,"data-variant":d(),"data-top":G(g),"data-display":i()}));var T=I(w),E=e=>{J(e,Wa())};Y(T,e=>{i()===`standard`&&e(E)});var re=L(T,2),ie=e=>{var t=Ga();K(`click`,t,v,!0),J(e,t)};Y(re,e=>{i()!==`standard`&&e(ie)});var ae=L(re,2);return bi(I(ae),()=>r()??f),F(ae),F(w),da(w,e=>H(m,e),()=>G(m)),J(e,x),Ze(ne)}ya(qa,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:`open`});function Ja(e){return Array.from(new Uint8Array(e)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Ya(e,t=`altcha-css`,n){if(typeof document<`u`&&document&&!document.getElementById(t)){let n=document.createElement(`style`);n.id=t,n.textContent=e;let r=document.currentScript?.nonce??document.querySelector(`meta[name="csp-nonce"]`)?.content;r&&(n.nonce=r),document.head.appendChild(n)}}async function Xa(e){let{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:i,onOutOfMemory:a=e=>e>1?Math.floor(e/2):0,counterMode:o,timeout:s=9e4}=e,c=Math.min(16,Math.max(1,n)),l=[],u=()=>{for(let e of l)e.terminate()};for(let e=0;e<c;e++)l.push(await i(t.parameters.algorithm));let d=null;try{d=await Promise.race(l.map((e,n)=>(r.signal.addEventListener(`abort`,()=>{e.postMessage({type:`abort`})}),new Promise((r,i)=>{e.addEventListener(`error`,e=>{i(e)}),e.addEventListener(`message`,t=>{if(t.data){for(let t of l)t!==e&&t.postMessage({type:`abort`});if(t.data.error)return i(Error(t.data.error))}r(t.data)}),e.postMessage({challenge:t,counterMode:o,counterStart:n,counterStep:c,timeout:s,type:`work`})}))))}catch(n){if(n instanceof Error&&n?.message?.includes(`Out of memory`)&&a){u();let n=a(c);if(n)return Xa({...e,challenge:t,controller:r,concurrency:n,createWorker:i})}throw n}finally{u()}return r.signal.aborted?null:d||null}var Za=class{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(e={}){let{maxSamples:t=60,sampleInterval:n=50,target:r=window}=e;this.maxSamples=t,this.sampleInterval=n,this.target=r,this.attach()}destroy(){let e={capture:!0};this.target.removeEventListener(`focusin`,this.onFocus,e),this.target.removeEventListener(`keydown`,this.onInteraction,e),this.target.removeEventListener(`pointerdown`,this.onInteraction,e),this.target.removeEventListener(`pointermove`,this.onPointer,e),this.target.removeEventListener(`scroll`,this.onScroll,e),this.target.removeEventListener(`touchmove`,this.onTouchMove,e)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){let e={passive:!0,capture:!0};this.target.addEventListener(`focusin`,this.onFocus,e),this.target.addEventListener(`keydown`,this.onInteraction,e),this.target.addEventListener(`pointerdown`,this.onInteraction,e),this.target.addEventListener(`pointermove`,this.onPointer,e),this.target.addEventListener(`scroll`,this.onScroll,e),this.target.addEventListener(`touchmove`,this.onTouchMove,e)}evict(e){e.length>this.maxSamples&&e.splice(0,e.length-this.maxSamples)}onFocus=e=>{if(this.focusInteraction===2)return;let t=e.target;if(!(t instanceof Element))return;let n=performance.now();this.focusStartTime===0&&(this.focusStartTime=n),this.focus.push([Math.round(n-this.focusStartTime),t.tabIndex,this.TAG_CODES[t.tagName]??0,+!!this.focusInteraction]),this.evict(this.focus)};onInteraction=e=>{this.focusInteraction=`keyCode`in e?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)};onPointer=e=>{if(e.pointerType===`touch`)return;let t=e.timeStamp||performance.now();this.pendingPointer=[Math.round(e.clientX),Math.round(e.clientY),Math.round(t)],t-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=t,this.pendingPointer=null,this.evict(this.pointer))};onScroll=()=>{let e=performance.now();e-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(e)]),this.lastScrollSample=e,this.evict(this.scroll))};onTouchMove=e=>{let t=e.timeStamp||performance.now(),n=e.touches[0];n&&(this.pendingTouch=[Math.round(n.clientX),Math.round(n.clientY),Math.round(t),Math.round(n.force*1e3)/1e3,Math.round(n.radiusX||0),Math.round(n.radiusY||0)],t-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=t,this.pendingTouch=null,this.evict(this.touch)))}},Qa=q(`<div class="altcha-overlay-backdrop" data-backdrop=""></div>`),$a=q(`<div class="altcha-overlay-content"></div>`),eo=q(`<div role="button" class="altcha-overlay-close">&times;</div> <!>`,1),to=q(`<div class="altcha-floating-arrow"></div>`),no=q(`<input type="hidden"/>`),ro=q(`<div class="altcha-error">Secure context (HTTPS) required.</div>`),io=q(`<div class="altcha-error"> </div>`),ao=q(`<!> <!>`,1),oo=q(`<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>`,1);function so(e,t){Xe(t,!0);let n=()=>Bt(c,`$altchaDefaults`,i),r=()=>Bt(f,`$altchaI18nStore`,i),[i,a]=Vt(),o=[`ar`,`fa`,`he`,`ur`],{isSecureContext:s}=globalThis,{store:c}=globalThis.$altcha.defaults,l=navigator.hardwareConcurrency||2,u=navigator.deviceMemory||0,d=u&&u<=4?Math.min(4,l):l,f=globalThis.$altcha.i18n.store,p=t.$$host,m=(e,t)=>{ar().then(()=>{p?.dispatchEvent(new CustomEvent(e,{detail:t}))})},h=null,g=V(dt(new URL(location.origin))),_=V(!1),v=V(null),y=V(null),ee=V(null),b=V(dt($.UNVERIFIED)),te=V(void 0),ne=V(void 0),x=V(null),S=V(void 0),C=V(null),w=V(null),T=V(null),E=V(null),re=V(dt([])),ie=V(0),ae=V(dt({})),oe=V(!0),D=en(()=>({fetch:(e,t)=>fetch(e,t),audioChallengeLanguage:``,auto:`off`,barPlacement:`bottom`,challenge:``,codeChallenge:null,codeChallengeDisplay:`standard`,credentials:null,debug:!1,disableAutoFocus:!1,display:`standard`,floatingAnchor:``,floatingOffset:8,floatingPersist:!1,floatingPlacement:`auto`,hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:``,mockError:!1,minDuration:500,overlayContent:``,name:`altcha`,popoverPlacement:`auto`,retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:`checkbox`,validationMessage:``,verifyFunction:null,verifyUrl:``,workers:d,...n(),...G(ae)})),O=en(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*0xe8d4a51000).toString(16)}`),se=en(()=>De(G(D).type)),ce=en(()=>G(D).auto),le=en(()=>G(b)===$.VERIFYING),ue=en(()=>!G(D).hideFooter),de=en(()=>!G(D).hideLogo&&G(D).display!==`bar`),fe=en(()=>Oe(r(),[G(D).language,document.documentElement.lang,...navigator.languages])),pe=en(()=>o.includes(G(fe).language)?`rtl`:void 0),me=en(()=>({...G(fe).strings})),he=en(()=>G(v)?.audio?.match(/^(https?:)?\//)?Me(G(v).audio,G(g),{language:G(D).audioChallengeLanguage||G(fe).language}).toString():G(v)?.audio),ge=en(()=>G(v)?.image?.match(/^(https?:)?\//)?Me(G(v).image,G(g)):G(v)?.image);mr(()=>{$e({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),mr(()=>{t.theme?p?.setAttribute(`theme`,t.theme):p?.removeAttribute(`theme`)}),mr(()=>{if(t.configuration)try{$e(JSON.parse(t.configuration))}catch{A("unable to parse the `configuration` attribute (JSON expected)")}}),mr(()=>{G(ee)!==G(D).display&&qe(G(D).display)}),mr(()=>{G(_)&&G(b)===$.VERIFYING&&H(_,!1)}),mr(()=>{!G(_)&&G(b)===$.VERIFIED&&H(_,!0)}),mr(()=>{if(!G(_)){let e=Ee();e&&e.checked&&(e.checked=!1)}}),mr(()=>{G(b)===$.VERIFIED&&Ee()?.setCustomValidity(``)}),mr(()=>{if(G(ce)===`onload`){let e=setTimeout(()=>{M()},1);return()=>{e&&clearTimeout(e)}}}),mr(()=>{G(w)&&A(`error:`,G(w))}),mr(()=>{G(E)&&G(D).setCookie&&Ke(G(E),G(D).setCookie)}),xi(()=>(A(`mounted`,`3.2.4`),p&&globalThis.$altcha.instances.add(p),H(x,G(S)?.closest(`form`),!0),G(x)?.addEventListener(`reset`,ze),G(x)?.addEventListener(`submit`,Be,{capture:!0}),G(x)?.addEventListener(`focusin`,Re),_e(),G(D).humanInteractionSignature&&(A(`human interaction signature enabled`),h=new Za),m(`load`),s||A(`secure context (HTTPS) required`),()=>{ye(),p&&globalThis.$altcha.instances.delete(p),G(T)&&clearTimeout(G(T)),G(x)?.removeEventListener(`reset`,ze),G(x)?.removeEventListener(`submit`,Be,{capture:!0}),G(x)?.removeEventListener(`focusin`,Re),h?.destroy()}));function _e(){H(re,[...globalThis.$altcha.plugins].map(e=>new e(p)),!0),A(`activating plugins`,G(re).map(e=>e.constructor.name));for(let e of G(re))e.activate()}async function ve(e,...t){let n;for(let r of G(re))n=await r[e].call(r,...t);return n}function ye(){for(let e of G(re))e.destroy()}function be(e){let[t,n]=e.salt.split(`?`),r={};if(n)try{Object.assign(r,Object.fromEntries(new URLSearchParams(n).entries()))}catch{}let i={codeChallenge:e.codeChallenge,parameters:{algorithm:e.algorithm,cost:1,data:r,expiresAt:r?.expires?parseInt(r.expires,10):void 0,keyLength:e.algorithm===`SHA-512`?64:e.algorithm===`SHA-384`?48:32,nonce:Ja(new TextEncoder().encode(e.salt)),keyPrefix:e.challenge,salt:``},signature:e.signature};return Object.defineProperties(i,{_originalSalt:{enumerable:!1,value:e.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),i}function xe(e,t){return{algorithm:e.parameters.algorithm,challenge:e.parameters.keyPrefix,number:t.counter,salt:`_originalSalt`in e?e._originalSalt:e.parameters.nonce,signature:e.signature,took:t.time||0}}async function Se(e){await new Promise(t=>setTimeout(t,e))}async function Ce(e=G(D).challenge,t){let n=await ve(`onFetchChallenge`,e),r=null;if(n!==void 0)return n;if(typeof e==`string`)if(e.startsWith(`{`)){A(`parsing JSON challenge`);try{r=JSON.parse(e)}catch{throw Error(`Unable to parse JSON challenge.`)}}else{A(`fetching challenge from`,t?.method||`GET`,e),H(g,new URL(e,location.origin),!0);let n=await G(D).fetch(e,{credentials:G(D).credentials||void 0,...t});await Ye(n);let i=n.headers.get(`x-altcha-config`);i&&Ue(i);let a=await n.json();if(a&&`his`in a&&a.his){if(A(`requested HIS`),!h)throw Error(`Server requested HIS data but collector is disabled.`);return Ce(Me(a.his.url,G(g)),{body:JSON.stringify({his:h.export()}),headers:{"content-type":`application/json`},method:`POST`})}a&&`hisResult`in a&&a.hisResult&&A(`HIS result`,a.hisResult),r=a}else if(e&&typeof e==`object`)try{r=JSON.parse(JSON.stringify(e))}catch{throw Error(`Unable to parse JSON challenge.`)}if(we(r)&&(r=be(r)),!Te(r))throw Error(`Challenge validation failed.`);return r}function we(e){return typeof e==`object`&&`challenge`in e}function Te(e){return!!e&&typeof e==`object`&&`parameters`in e&&!!e.parameters&&typeof e.parameters==`object`&&`algorithm`in e.parameters&&`nonce`in e.parameters&&`salt`in e.parameters&&`keyPrefix`in e.parameters}function Ee(){return document.getElementById(G(O))}function De(e){switch(e){case`checkbox`:return Sa;case`switch`:return Ma;default:return Ta}}function Oe(e,t){let n=Object.keys(e).map(e=>e.toLowerCase()),r=t.reduce((t,r)=>(r=r.toLowerCase(),t||(e[r]?r:null)||n.find(e=>r.split(`-`)[0]===e.split(`-`)[0])||null),null);return e[r||``]||(r=`en`),{language:r,strings:e[r]}}function ke(e){switch(e){case`bar`:return G(D).barPlacement||`bottom`;case`floating`:return G(D).floatingPlacement||`auto`;default:return}}function Ae(e){return[...G(x)?.querySelectorAll(`input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])`)||[]].reduce((e,t)=>{let n=t.name,r=t.value;return n&&r&&(e[n]=/\n/.test(r)?r.replace(RegExp(`(?<!\\r)\\n`,`g`),`\r
`):r),e},{})}function je(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Me(e,t,n){let r=new URL(e,t);if(r.search||=t.search,n)for(let e in n)n[e]!==void 0&&n[e]!==null&&r.searchParams.set(e,n[e]);return r.toString()}function Ne(e){!G(_)&&e.currentTarget.checked?(e.preventDefault(),e.currentTarget.checked=!1,G(b)!==$.VERIFYING&&M()):e.currentTarget.checked||(e.preventDefault(),rt())}function Pe(e){G(b)===$.VERIFYING?e.currentTarget.setCustomValidity(G(me).waitAlert):G(D).validationMessage&&e.currentTarget.setCustomValidity(G(D).validationMessage)}function Fe(){qe(G(D).display),rt()}function Ie(){at()}function Le(e){let t=e.target;G(D).display===`floating`&&t&&!p?.contains(t)&&!t.hasAttribute(`data-backdrop`)&&!t.closest(`[data-popover]`)&&G(b)!==$.VERIFIED&&!G(D).floatingPersist&&nt()}function Re(e){G(ce)===`onfocus`&&G(b)===$.UNVERIFIED&&M()}function ze(){qe(G(D).display),rt()}function Be(e){e.target?.getAttribute(`data-code-challenge`)!==`true`&&G(ce)===`onsubmit`&&G(b)===$.UNVERIFIED&&(e.preventDefault(),e.stopPropagation(),H(C,e.submitter,!0),it(),M().then(e=>{e&&!G(v)&&ar().then(()=>{Ge(G(C))})}))}function Ve(e){e.persisted&&(qe(G(D).display),rt())}function He(){at()}function Ue(e){try{let t=JSON.parse(e);t&&typeof t==`object`&&$e({serverVerificationFields:t?.sentinel?.fields,serverVerificationTimeZone:t?.sentinel?.timeZone,verifyUrl:t.verifyurl,...t})}catch(e){A(`unable to configure from x-altcha-config header`,e)}}function k(e=20){if(!G(S))return;let t=G(D).floatingPlacement;if(!G(ne)&&(H(ne,(G(D).floatingAnchor instanceof HTMLElement?G(D).floatingAnchor:G(D).floatingAnchor?document.querySelector(G(D).floatingAnchor):G(x)?.querySelector(`input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])`))||G(x),!0),!G(ne))){A(`unable to find floating anchor element`);return}let n=parseInt(G(D).floatingOffset,10)||12,r=G(ne).getBoundingClientRect(),i=G(S).getBoundingClientRect(),a=document.documentElement.clientHeight,o=document.documentElement.clientWidth,s=!t||t===`auto`?r.bottom+i.height+n+e>a:t===`top`,c=Math.max(e,Math.min(o-e-i.width,r.left+r.width/2-i.width/2));if(G(S).style.setProperty(`--altcha-floating-left`,`${c}px`),G(S).style.setProperty(`--altcha-floating-top`,s?`${r.top-(i.height+n)}px`:`${r.bottom+n}px`),G(S).setAttribute(`data-floating-position`,s?`top`:`bottom`),G(te)){let e=G(te).getBoundingClientRect();G(te).style.left=r.left-c+r.width/2-e.width/2+`px`}}async function We(e,t){let n=await ve(`onRequestServerVerification`,e,t);if(n!==void 0)return n;if(A(`requesting server verification from`,G(D).verifyUrl),!G(D).verifyUrl)throw Error(`Parameter verifyUrl must be set for server verification.`);let r=await G(D).fetch(Me(G(D).verifyUrl,G(g)),{body:JSON.stringify({code:t,fields:G(D).serverVerificationFields?Ae():void 0,payload:e,timeZone:G(D).serverVerificationTimeZone?je():void 0}),credentials:G(D).credentials||void 0,headers:{"Content-Type":`application/json`},method:`POST`});await Ye(r);let i=await r.json();return i&&typeof i==`object`&&`payload`in i&&i.payload&&m(`serververification`,i),i}function Ge(e){G(x)&&`requestSubmit`in G(x)?G(x).requestSubmit(e):G(x)?.reportValidity()&&(e?e.click():G(x).submit())}function Ke(e,t={}){let{domain:n,name:r=G(D).name,maxAge:i,path:a,sameSite:o,secure:s}=t,c=`${encodeURIComponent(r)}=${encodeURIComponent(e)}`;n&&(c+=`; Domain=${n}`),i!=null&&(c+=`; Max-Age=${i}`),a&&(c+=`; Path=${a}`),o&&(c+=`; SameSite=${o}`),s&&(c+=`; Secure`),document.cookie=c}function qe(e){switch(e){case`bar`:case`floating`:case`overlay`:nt(),(!G(ce)||G(ce)===`off`)&&(G(ae).auto=`onsubmit`);break;case`standard`:it()}G(ee)!==e&&H(ee,e,!0)}function Je(e){G(T)&&clearTimeout(G(T));let t=()=>{G(b)===$.UNVERIFIED?rt():(H(_,!1),j($.EXPIRED)),m(`expired`)},n=e*1e3-Date.now();n>=1?H(T,setTimeout(t,n),!0):t()}async function Ye(e){if(e.status>=400){if(e.headers.get(`content-type`)?.includes(`/json`)){let t;try{t=await e.json()}catch{}if(t&&`error`in t)throw Error(`Server responded with ${e.status} - ${t.error}`)}throw Error(`Server responded with ${e.status}.`)}let t=e.headers.get(`content-type`);if(!t||!t.includes(`/json`))throw Error(`Server responded with invalid content-type. Expected application/json, received ${t}.`)}async function Qe(e){if(!G(E)){j($.ERROR,`Cannot verify code challenge without PoW payload.`);return}j($.VERIFYING);let t=null;if(G(D).verifyUrl)t=await We(G(E),e);else if(G(D).verifyFunction)t=await G(D).verifyFunction(G(E),e);else{j($.ERROR,`Parameter verifyUrl is required for code challenge verification.`);return}t?.payload&&(H(E,t.payload,!0),A(`server payload`,G(E))),t?.verified===!0?(A(`verified`),j($.VERIFIED),m(`verified`,{payload:G(E)}),G(ce)===`onsubmit`&&ar().then(()=>{Ge(G(C))})):j($.ERROR,t?.reason||`Verification failed.`),G(D).disableAutoFocus||Ee()?.focus()}function $e(e){Object.assign(G(ae),{...Object.fromEntries(Object.entries(e).filter(([e,t])=>t!==void 0))})}function et(){return{...G(D)}}function tt(){return G(b)}function nt(){H(oe,!1)}function A(...e){(G(D).debug||e.some(e=>e instanceof Error))&&console[e[0]instanceof Error?`error`:`log`](`ALTCHA`,`[name=${G(D).name}]`,...e)}function rt(e=$.UNVERIFIED,t=null){H(_,!1),H(w,t,!0),H(E,null),G(y)&&G(y).abort(),G(T)&&(clearTimeout(G(T)),H(T,null)),j(e)}function j(e,t=null){H(b,e,!0),H(w,t,!0),m(`statechange`,{payload:G(E),state:G(b)})}function it(){H(oe,!0),ar().then(()=>{at()})}function at(){switch(G(D).display){case`floating`:return k()}H(ie,G(ie)+1)}async function M(e={}){let{concurrency:t=Math.max(1,G(D).workers),controller:n=new AbortController,minDuration:r=G(D).minDuration}=e,i=performance.now(),a=null,o=null,c=!1,l=await ve(`onVerify`,e);if(l!==void 0)return l;rt($.VERIFYING),H(y,n,!0);try{if(!s)throw Error(`Secure context (HTTPS) required.`);if(G(D).mockError)throw Error(`Mock error.`);if(G(D).test)return A(`running test mode with null challenge`),await Se(Math.max(0,r-(performance.now()-i))),G(y)?.signal.aborted?(rt(),null):(H(E,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),A(`verified`),j($.VERIFIED),m(`verified`,{payload:G(E)}),{payload:G(E)});if(a=await Ce(),!a)throw Error(`Failed to fetch challenge.`);A(`challenge`,a),`configuration`in a&&(A(`re-configuring from challenge`,a.configuration),$e(a.configuration)),a.parameters.expiresAt&&Je(a.parameters.expiresAt),c=`_version`in a&&a._version===1;let e=globalThis.$altcha.algorithms.get(a.parameters.algorithm);if(!e)throw Error(`Unsupported algorithm ${a.parameters.algorithm}.`);if(o=await Xa({challenge:a,concurrency:t,controller:n,createWorker:e,counterMode:c?`string`:`uint32`,onOutOfMemory:e=>{if(A(`out of memory error received`),m(`outofmemory`),G(D).retryOnOutOfMemoryError&&e>1){let t=Math.floor(e/2);return A(`retrying with ${t} workers...`),t}},timeout:G(D).timeout}),G(y)?.signal.aborted)return rt(),null;if(!o)throw Error(`Failed to find solution.`);A(`solution`,o),await Se(Math.max(0,r-(performance.now()-i))),H(v,a.codeChallenge||G(D).codeChallenge||null,!0),c?H(E,btoa(JSON.stringify(xe(a,o))),!0):H(E,btoa(JSON.stringify({challenge:{parameters:a.parameters,signature:a.signature},solution:o})),!0),G(v)?(A(`requesting code verification`),j($.CODE),m(`codechallenge`,{codeChallenge:G(v)})):G(D).verifyUrl?await Qe():(A(`verified`),j($.VERIFIED),m(`verified`,{payload:G(E)}))}catch(e){return A(`verification failed`,e),j($.ERROR,String(e)),null}finally{H(y,null)}return{challenge:a,payload:G(E),solution:o}}var ot={configure:$e,getConfiguration:et,getState:tt,hide:nt,log:A,reset:rt,setState:j,show:it,updateUI:at,verify:M},N=oo();K(`scroll`,ht,Ie),K(`click`,ht,Le),K(`pageshow`,mt,Ve),K(`resize`,mt,He);var P=Ct(N),st=e=>{J(e,Qa())};Y(P,e=>{G(D).display===`overlay`&&G(oe)&&e(st)});var ct=L(P,2),lt=I(ct),ut=e=>{var t=eo(),n=Ct(t),r=L(n,2),i=e=>{var t=$a();wi(t,()=>document.querySelector(G(D).overlayContent)?.innerHTML,!0),F(t),J(e,t)};Y(r,e=>{G(D).overlayContent&&e(i)}),K(`click`,n,Fe,!0),J(e,t)};Y(lt,e=>{G(D).display===`overlay`&&G(oe)&&e(ut)});var ft=L(lt,2),pt=I(ft),gt=I(pt),_t=I(gt);{let e=en(()=>G(D).display===`standard`&&G(ce)!==`onsubmit`||G(b)===$.VERIFYING);Ti(_t,()=>G(se),(t,n)=>{n(t,{get id(){return G(O)},name:``,get required(){return G(e)},get loading(){return G(le)},get checked(){return G(_)},onchange:Ne,oninvalid:Pe})})}var vt=L(_t,2),yt=I(vt),bt=e=>{var t=ei();xr(()=>fi(t,G(me).verificationRequired)),J(e,t)},xt=e=>{var t=ei();xr(()=>fi(t,G(me).verifying)),J(e,t)},St=e=>{var t=ei();xr(()=>fi(t,G(me).verified)),J(e,t)},Tt=e=>{var t=ei();xr(()=>fi(t,G(me).label)),J(e,t)};Y(yt,e=>{G(b)===$.CODE&&G(v)?e(bt):G(b)===$.VERIFYING?e(xt,1):G(b)===$.VERIFIED?e(St,2):e(Tt,-1)}),F(vt),F(gt);var Et=L(gt,2),Dt=e=>{Da(e,{get strings(){return G(me)}})};Y(Et,e=>{G(de)&&e(Dt)}),F(pt);var Ot=L(pt,2),kt=e=>{{let t=en(()=>G(D).display===`bar`&&G(de));ka(e,{get logo(){return G(t)},get strings(){return G(me)}})}};Y(Ot,e=>{G(ue)&&e(kt)});var At=L(Ot,2),jt=e=>{var t=to();da(t,e=>H(te,e),()=>G(te)),J(e,t)};Y(At,e=>{G(D).display===`floating`&&e(jt)});var R=L(At,2),Mt=e=>{var t=no();ea(t),xr(()=>{X(t,`name`,G(D).name),ta(t,G(E))}),J(e,t)};Y(R,e=>{G(D).setCookie||e(Mt)}),F(ft);var Nt=L(ft,2),Pt=e=>{qa(e,{get anchor(){return G(S)},onClickOutside:()=>{s&&rt()},get placement(){return G(D).popoverPlacement},role:`alert`,variant:`error`,get dir(){return G(pe)},get updateUISignal(){return G(ie)},children:(e,t)=>{var n=ti(),r=Ct(n),i=e=>{J(e,ro())},a=e=>{var t=io(),n=wt(t,!0);xr(()=>fi(n,G(me).expired)),J(e,t)},o=e=>{var t=io(),n=wt(t,!0);xr(()=>{X(t,`title`,G(w)),fi(n,G(me).error)}),J(e,t)};Y(r,e=>{!G(w)&&!s?e(i):!G(w)&&G(b)===$.EXPIRED?e(a,1):e(o,-1)}),J(e,n)},$$slots:{default:!0}})},Ft=e=>{var t=ti();Ci(Ct(t),()=>G(v),e=>{{let t=en(()=>G(D).codeChallengeDisplay!==`standard`);qa(e,{get anchor(){return G(S)},get backdrop(){return G(t)},get display(){return G(D).codeChallengeDisplay},onClose:()=>{rt()},get placement(){return G(D).popoverPlacement},role:`dialog`,get"aria-label"(){return G(me).verificationRequired},get dir(){return G(pe)},get updateUISignal(){return G(ie)},children:(e,t)=>{var n=ao(),r=Ct(n);Va(r,{get audioUrl(){return G(he)},get imageUrl(){return G(ge)},onCancel:()=>rt(),onReload:()=>M(),onSubmit:e=>Qe(e),get codeChallenge(){return G(v)},get config(){return G(D)},get strings(){return G(me)}});var i=L(r,2),a=e=>{ka(e,{get logo(){return G(de)},get strings(){return G(me)}})};Y(i,e=>{G(ue)&&G(D).codeChallengeDisplay!==`standard`&&e(a)}),J(e,n)},$$slots:{default:!0}})}}),J(e,t)};Y(Nt,e=>{G(w)||G(b)===$.EXPIRED||!s?e(Pt):G(v)&&G(b)===$.CODE&&e(Ft,1)}),F(ct),da(ct,e=>H(S,e),()=>G(S)),xr(e=>{X(ct,`data-state`,G(b)),X(ct,`data-display`,G(D).display||void 0),X(ct,`data-placement`,e),X(ct,`data-visible`,G(oe)||void 0),X(ct,`dir`,G(pe)),X(vt,`for`,G(O)),ct.dir=ct.dir},[()=>ke(G(D).display)]),J(e,N);var It=Ze(ot);return a(),It}typeof window<`u`&&window.customElements&&!customElements.get(`altcha-widget`)&&customElements.define(`altcha-widget`,ya(so,{auto:{type:`String`},challenge:{type:`String`},configuration:{type:`String`},display:{type:`String`},language:{type:`String`},name:{type:`String`},theme:{type:`String`},type:{type:`String`},workers:{type:`Number`}},[],[`configure`,`getConfiguration`,`getState`,`hide`,`log`,`reset`,`setState`,`show`,`updateUI`,`verify`]));var co=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  function getDigest(algorithm) {
    switch (algorithm) {
      case "PBKDF2/SHA-512":
        return "SHA-512";
      case "PBKDF2/SHA-384":
        return "SHA-384";
      case "PBKDF2/SHA-256":
      default:
        return "SHA-256";
    }
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: getDigest(algorithm)
      },
      passwordKey,
      { name: "AES-GCM", length: keyLength * 8 },
      true,
      ["encrypt"]
    );
    return {
      derivedKey: new Uint8Array(await crypto.subtle.exportKey("raw", derivedKey))
    };
  }
  handler({
    deriveKey
  });
})();
`,lo=typeof self<`u`&&self.Blob&&new Blob([`(self.URL || self.webkitURL).revokeObjectURL(self.location.href);`,co],{type:`text/javascript;charset=utf-8`});function uo(e){let t;try{if(t=lo&&(self.URL||self.webkitURL).createObjectURL(lo),!t)throw``;let n=new Worker(t,{name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(co),{name:e?.name})}}var fo=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    const iterations = Math.max(1, parameters.cost);
    let data = void 0;
    let derivedKey = void 0;
    for (let i = 0; i < iterations; i++) {
      if (i === 0) {
        data = concatBuffers(salt, password);
      } else {
        data = derivedKey;
      }
      derivedKey = new Uint8Array(
        (await crypto.subtle.digest(algorithm, data)).slice(0, keyLength)
      );
    }
    return {
      parameters: {},
      derivedKey
    };
  }
  handler({
    deriveKey
  });
})();
`,po=typeof self<`u`&&self.Blob&&new Blob([`(self.URL || self.webkitURL).revokeObjectURL(self.location.href);`,fo],{type:`text/javascript;charset=utf-8`});function mo(e){let t;try{if(t=po&&(self.URL||self.webkitURL).createObjectURL(po),!t)throw``;let n=new Worker(t,{name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(fo),{name:e?.name})}}Ya(`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none) {
  .altcha-checkbox input {
    /* Safari-only: fixes focus outline */
  }
  .altcha-checkbox input:focus {
    outline-width: 2px;
    outline-style: solid;
  }
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`),$altcha.algorithms.set(`SHA-256`,()=>new mo),$altcha.algorithms.set(`SHA-384`,()=>new mo),$altcha.algorithms.set(`SHA-512`,()=>new mo),$altcha.algorithms.set(`PBKDF2/SHA-256`,()=>new uo),$altcha.algorithms.set(`PBKDF2/SHA-384`,()=>new uo),$altcha.algorithms.set(`PBKDF2/SHA-512`,()=>new uo);var ho=()=>{};function go(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function _o(e,t,n){if(e==null)return t(void 0),ho;let r=So(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var vo=[];function yo(e,t=ho){let n=null,r=new Set;function i(t){if(go(e,t)&&(e=t,n)){let t=!vo.length;for(let t of r)t[1](),vo.push(t,e);if(t){for(let e=0;e<vo.length;e+=2)vo[e][0](vo[e+1]);vo.length=0}}}function a(t){i(t(e))}function o(o,s=ho){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||ho),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function bo(e){let t;return _o(e,e=>t=e)(),t}var xo=!1;function So(e){var t=xo;try{return xo=!0,e()}finally{xo=t}}function Co(e){let t={get:e=>bo(t.store)[e],set:(e,n)=>{typeof e==`string`?Object.assign(bo(t.store),{[e]:n}):Object.assign(bo(t.store),e),t.store.set(bo(t.store))},store:yo(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Co({}),i18n:Co({}),instances:new Set,plugins:new Set},globalThis.$altcha.i18n.set(`de`,{ariaLinkLabel:`Altcha (offizielle Website)`,enterCode:`Code eingeben`,enterCodeAria:`Geben Sie den Code ein, den Sie hören. Drücken Sie die Leertaste, um die Audio abzuspielen.`,error:`Überprüfung fehlgeschlagen. Bitte versuchen Sie es später erneut.`,expired:`Überprüfung abgelaufen. Bitte versuchen Sie es erneut.`,footer:`Geschützt durch <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (offizielle Website)">ALTCHA</a>`,getAudioChallenge:`Audio-Herausforderung anfordern`,label:`Ich bin kein Roboter`,loading:`Lade...`,reload:`Neu laden`,verify:`Überprüfen`,verificationRequired:`Überprüfung erforderlich!`,verified:`Überprüft`,verifying:`Wird überprüft...`,waitAlert:`Überprüfung läuft... bitte warten.`,cancel:`Abbrechen`,enterCodeFromImage:`Um fortzufahren, geben Sie bitte den Code aus dem Bild unten ein.`}),$altcha.i18n.set(`de`,{...$altcha.i18n.get(`de`),error:`Überprüfung fehlgeschlagen. Bitte versucht es später erneut.`,expired:`Überprüfung abgelaufen. Bitte versucht es erneut.`});var wo=document.getElementById(`waitlist-form`),To=document.getElementById(`altcha`),Eo=null;To?.addEventListener(`statechange`,e=>{let{state:t,payload:n}=e.detail;Eo=t===`verified`&&n?n:null});var Do=document.getElementById(`form-wrapper`),Oo=document.getElementById(`form-success`),ko=document.getElementById(`form-error`),Ao=ko?.textContent?.trim()??``,jo=`Heute sind ungewöhnlich viele Anmeldungen eingegangen. Bitte versucht es morgen erneut oder kontaktiert uns telefonisch.`,Mo=document.getElementById(`submit-btn`),No=document.getElementById(`submit-label`),Po=document.getElementById(`reset-form`),Fo=new Set,Io={vornameKind:`err-vorname-kind`,nachnameKind:`err-nachname-kind`,geburtsdatum:`err-geburtsdatum`,nameEltern:`err-name-eltern`,email:`err-email`,telefon:`err-telefon`,betreuungsumfang:`err-betreuungsumfang`,betreuungsbeginn:`err-betreuungsbeginn`};function Lo(){let e=new Date;return e.setHours(0,0,0,0),e}function Ro(e){return wo?.querySelector(`[name="${e}"]`)?.value.trim()??``}function zo(e){if(!wo)return``;switch(e){case`vornameKind`:case`nachnameKind`:case`nameEltern`:return Ro(e)?``:`Dieses Feld ist erforderlich.`;case`email`:{let e=Ro(`email`);return e?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)?``:`Bitte eine gültige E-Mail-Adresse eingeben.`:`E-Mail-Adresse ist erforderlich.`}case`telefon`:{let e=Ro(`telefon`);return e&&!/^\+?[\d\s\-\/\(\)]{7,20}$/.test(e)?`Bitte eine gültige Telefonnummer eingeben.`:``}case`geburtsdatum`:{let e=Ro(`geburtsdatum`);return e?new Date(e)>Lo()?`Geburtsdatum darf nicht in der Zukunft liegen.`:``:`Geburtsdatum ist erforderlich.`}case`betreuungsbeginn`:{let e=Ro(`betreuungsbeginn`);return e?new Date(e)<=Lo()?`Betreuungsbeginn muss in der Zukunft liegen.`:``:`Betreuungsbeginn ist erforderlich.`}case`betreuungsumfang`:return wo.querySelector(`input[name="${e}"]:checked`)?``:`Bitte eine Option auswählen.`;default:return``}}function Bo(e){let t=Io[e];if(!t)return;let n=document.getElementById(t);if(!n)return;let r=zo(e);n.textContent=r,n.classList.toggle(`hidden`,!r)}function Vo(e){Fo.add(e),Bo(e),Ho()}function Ho(){Mo&&(Mo.disabled=Object.keys(Io).some(e=>zo(e)!==``))}function Uo(){Object.keys(Io).forEach(e=>{Fo.add(e),Bo(e)}),Ho()}wo&&(wo.querySelectorAll(`input[type="text"], input[type="email"], input[type="tel"], input[type="date"]`).forEach(e=>{let t=e.name;Io[t]&&(e.addEventListener(`blur`,()=>Vo(t)),e.addEventListener(`input`,()=>{Fo.has(t)&&Bo(t),Ho()}))}),wo.querySelectorAll(`input[type="radio"]`).forEach(e=>{Io[e.name]&&e.addEventListener(`change`,()=>Vo(e.name))})),Ho();var Wo=new Date().toISOString().split(`T`)[0],Go=new Date(Date.now()+864e5).toISOString().split(`T`)[0],Ko=wo?.querySelector(`[name="geburtsdatum"]`),qo=wo?.querySelector(`[name="betreuungsbeginn"]`);Ko&&(Ko.max=Wo),qo&&(qo.min=Go),wo?.addEventListener(`submit`,async e=>{if(e.preventDefault(),!(!wo||!Mo||!No)&&(Uo(),!Mo.disabled)){ko?.classList.add(`hidden`),ko&&(ko.textContent=Ao),Mo.disabled=!0,No.textContent=`Wird gesendet…`;try{if(!Eo){if(No.textContent=`Wird geprüft…`,Eo=(await To?.verify())?.payload??null,!Eo)throw Error(`altcha failed`);No.textContent=`Wird gesendet…`}let e={...Object.fromEntries(new FormData(wo)),altcha:Eo},t=await fetch(wo.action,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify(e)}),n=await t.json().catch(()=>({}));if(t.status===429)throw ko&&(ko.textContent=jo),Error(`daily limit`);if(!t.ok||!n.success)throw Error(`submit failed`);wo.reset(),Fo.clear(),Do?.classList.add(`hidden`),Oo?.classList.remove(`hidden`),Oo?.scrollIntoView({behavior:`smooth`,block:`center`})}catch{ko?.classList.remove(`hidden`)}finally{Eo=null,To?.reset(),No.textContent=`Anmeldung absenden 🚀`,Ho()}}}),Po?.addEventListener(`click`,()=>{Oo?.classList.add(`hidden`),Do?.classList.remove(`hidden`),Fo.clear(),Ho(),Do?.scrollIntoView({behavior:`smooth`,block:`center`})});