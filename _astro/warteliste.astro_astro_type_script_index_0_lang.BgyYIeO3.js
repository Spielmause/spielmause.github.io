var so={},lo;function bc(){if(lo)return so;lo=1;const y=!1;var x=Array.isArray,K=Array.prototype.indexOf,ae=Array.prototype.includes,nn=Array.from,Tt=Object.keys,yt=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,rn=Object.getOwnPropertyDescriptors,Ne=Object.prototype,go=Array.prototype,ga=Object.getPrototypeOf,ba=Object.isExtensible;const wt=()=>{};function bo(e){for(var t=0;t<e.length;t++)e[t]()}function ma(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const he=2,Bt=4,Mn=8,lr=1<<24,qe=16,Ge=32,Xe=64,cr=128,ur=256,Ue=512,ce=1024,ie=2048,Ye=4096,Ve=8192,Oe=16384,$t=32768,Nn=1<<25,_t=65536,Un=1<<17,mo=1<<18,At=1<<19,yo=1<<20,It=65536,Vn=1<<21,jt=1<<22,kt=1<<23,zt=Symbol("$state"),ya=Symbol("component"),wo=Symbol("legacy props"),_o=Symbol(""),wa=Symbol("attributes"),fr=Symbol("class"),dr=Symbol("style"),hr=Symbol("text"),an=Symbol("form reset"),on=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},sn=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),ln=3,cn=8;function _a(e){return e===this.v}function ka(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ko(e){return!ka(e,this.v)}function xo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Eo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function So(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Co(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function To(e){throw new Error("https://svelte.dev/e/effect_orphan")}function $o(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ao(){throw new Error("https://svelte.dev/e/hydration_failed")}function Io(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ro(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Oo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Lo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Po=!1;const Do=1,Mo=2,vr="[",xa="[!",Ea="[?",Sa="]",Rt={},oe=Symbol("uninitialized"),Ca="http://www.w3.org/1999/xhtml",No="http://www.w3.org/2000/svg",Uo="http://www.w3.org/1998/Math/MathML",Vo="@attach";let ye=null;function Ht(e){ye=e}function dt(e,t=!1,n){ye={p:ye,i:!1,c:null,e:null,s:e,x:null,r:R,l:null}}function ht(e){var t=ye,n=t.e;if(n!==null){t.e=null;for(var r of n)ci(r)}return e!==void 0&&(t.x=e),t.i=!0,ye=t.p,pr(e)}function pr(e={}){return yt(e,ya,{value:!0}),e}function Ta(){return!0}let Ot=[];function $a(){var e=Ot;Ot=[],bo(e)}function Qe(e){if(Ot.length===0&&!hn){var t=Ot;queueMicrotask(()=>{t===Ot&&$a()})}Ot.push(e)}function Fo(){for(;Ot.length>0;)$a()}function Bo(){console.warn("https://svelte.dev/e/derived_inert")}function un(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function jo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function zo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let I=!1;function et(e){I=e}let N;function xe(e){if(e===null)throw un(),Rt;return N=e}function Lt(){return xe(nt(N))}function se(e){if(I){if(nt(N)!==null)throw un(),Rt;N=e}}function gr(e=1){if(I){for(var t=e,n=N;t--;)n=nt(n);N=n}}function br(e=!0){for(var t=0,n=N;;){if(n.nodeType===cn){var r=n.data;if(r===Sa){if(t===0)return n;t-=1}else(r===vr||r===xa||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=nt(n);e&&n.remove(),n=a}}function Aa(e){if(!e||e.nodeType!==cn)throw un(),Rt;return e.data}function vt(e){if(typeof e!="object"||e===null||zt in e||ya in e)return e;const t=ga(e);if(t!==Ne&&t!==go)return e;var n=new Map,r=x(e),a=P(0),o=Mt,l=s=>{if(Mt===o)return s();var f=D,u=Mt;Fe(null),ni(o);var d=s();return Fe(f),ni(u),d};return r&&n.set("length",P(e.length)),new Proxy(e,{defineProperty(s,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Io();var d=n.get(f);return d===void 0?l(()=>{var h=P(u.value);return n.set(f,h),h}):w(d,u.value,!0),!0},deleteProperty(s,f){var u=n.get(f);if(u===void 0){if(f in s){const d=l(()=>P(oe));n.set(f,d),pn(a)}}else w(u,oe),pn(a);return!0},get(s,f,u){if(f===zt)return e;var d=n.get(f),h=f in s;if(d===void 0&&(!h||Ce(s,f)?.writable)&&(d=l(()=>{var g=vt(h?s[f]:oe),b=P(g);return b}),n.set(f,d)),d!==void 0){var v=i(d);return v===oe?void 0:v}return Reflect.get(s,f,u)},getOwnPropertyDescriptor(s,f){var u=Reflect.getOwnPropertyDescriptor(s,f);if(u&&"value"in u){var d=n.get(f);d&&(u.value=i(d))}else if(u===void 0){var h=n.get(f),v=h?.v;if(h!==void 0&&v!==oe)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return u},has(s,f){if(f===zt)return!0;var u=n.get(f),d=u!==void 0&&u.v!==oe||Reflect.has(s,f);if(u!==void 0||R!==null&&(!d||Ce(s,f)?.writable)){u===void 0&&(u=l(()=>{var v=d?vt(s[f]):oe,g=P(v);return g}),n.set(f,u));var h=i(u);if(h===oe)return!1}return d},set(s,f,u,d){var h=n.get(f),v=f in s;if(r&&f==="length")for(var g=u;g<h.v;g+=1){var b=n.get(g+"");b!==void 0?w(b,oe):g in s&&(b=l(()=>P(oe)),n.set(g+"",b))}if(h===void 0)(!v||Ce(s,f)?.writable)&&(h=l(()=>P(void 0)),w(h,vt(u)),n.set(f,h));else{v=h.v!==oe;var E=l(()=>vt(u));w(h,E)}var M=Reflect.getOwnPropertyDescriptor(s,f);if(M?.set&&M.set.call(d,u),!v){if(r&&typeof f=="string"){var q=n.get("length"),z=Number(f);Number.isInteger(z)&&z>=q.v&&w(q,z+1)}pn(a)}return!0},ownKeys(s){i(a);var f=Reflect.ownKeys(s).filter(h=>{var v=n.get(h);return v===void 0||v.v!==oe});for(var[u,d]of n)d.v!==oe&&!(u in s)&&f.push(u);return f},setPrototypeOf(){Ro()}})}function Ia(e){try{if(e!==null&&typeof e=="object"&&zt in e)return e[zt]}catch{}return e}function Ra(e,t){return Object.is(Ia(e),Ia(t))}var Pt,mr,Oa,La,Pa;function yr(){if(Pt===void 0){Pt=window,mr=document,Oa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;La=Ce(t,"firstChild").get,Pa=Ce(t,"nextSibling").get,ba(e)&&(e[fr]=void 0,e[wa]=null,e[dr]=void 0,e.__e=void 0),ba(n)&&(n[hr]=void 0)}}function tt(e=""){return document.createTextNode(e)}function Te(e){return La.call(e)}function nt(e){return Pa.call(e)}function ve(e,t){if(!I)return Te(e);var n=Te(N);if(n===null)n=N.appendChild(tt());else if(t&&n.nodeType!==ln){var r=tt();return n?.before(r),xe(r),r}return t&&Fn(n),xe(n),n}function Kt(e,t=!1){if(!I){var n=Te(e);return n instanceof Comment&&n.data===""?nt(n):n}if(t){if(N?.nodeType!==ln){var r=tt();return N?.before(r),xe(r),r}Fn(N)}return N}function qt(e,t=!1){if(!I)return Te(e);var n=ve(e,t);return se(e),n}function X(e,t=1,n=!1){let r=I?N:e;for(var a;t--;)a=r,r=nt(r);if(!I)return r;if(n){if(r?.nodeType!==ln){var o=tt();return r===null?a?.after(o):r.before(o),xe(o),o}Fn(r)}return xe(r),r}function Ho(e){e.textContent=""}function wr(e,t,n){return t==null||t===Ca?document.createElement(e):document.createElementNS(t,e)}function Fn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===ln;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Ko(e){var t=R;if(t===null)return D.f|=kt,e;if((t.f&$t)===0&&(t.f&Bt)===0)throw e;rt(e,t)}function rt(e,t){if(!(t!==null&&(t.f&Oe)!==0)){for(;t!==null;){if((t.f&cr)!==0&&(t.f&(Oe|Nn))===0){if((t.f&$t)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}const qo=-7169;function re(e,t){e.f=e.f&qo|t}function _r(e){(e.f&Ue)!==0||e.deps===null?re(e,ce):re(e,Ye)}function Da(e){if(e!==null)for(const t of e)(t.f&he)===0||(t.f&It)===0||(t.f^=It,Da(t.deps))}function Ma(e,t,n){(e.f&ie)!==0?t.add(e):(e.f&Ye)!==0&&n.add(e),Da(e.deps),re(e,ce)}function Na(e,t,n){if(e==null)return t(void 0),wt;const r=mn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const Gt=[];function Go(e,t=wt){let n=null;const r=new Set;function a(s){if(ka(e,s)&&(e=s,n)){const f=!Gt.length;for(const u of r)u[1](),Gt.push(u,e);if(f){for(let u=0;u<Gt.length;u+=2)Gt[u][0](Gt[u+1]);Gt.length=0}}}function o(s){a(s(e))}function l(s,f=wt){const u=[s,f];return r.add(u),r.size===1&&(n=t(a,o)||wt),s(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:l}}function fn(e){let t;return Na(e,n=>t=n)(),t}let kr=Symbol("unmounted");function Ua(e,t,n){const r=n[t]??={store:null,source:Ja(void 0),unsubscribe:wt};if(r.store!==e&&!(kr in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=wt;else{var a=!0;r.unsubscribe=Na(e,o=>{a?r.source.v=o:w(r.source,o)}),a=!1}return e&&kr in n?fn(e):i(r.source)}function Yo(){const e={};function t(){qn(()=>{for(var n in e)e[n].unsubscribe();yt(e,kr,{enumerable:!1,value:!0})})}return[e,t]}function Wo(e,t){if(t){const n=document.body;e.autofocus=!0,Qe(()=>{document.activeElement===n&&e.focus()})}}let Va=!1;function Fa(){Va||(Va=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t[an]?.()})},{capture:!0}))}function Yt(e){var t=D,n=R;Fe(null),it(null);try{return e()}finally{Fe(t),it(n)}}function Zo(e,t,n,r=n){e.addEventListener(t,()=>Yt(n));const a=e[an];a?e[an]=()=>{a(),r(!0)}:e[an]=()=>r(!0),Fa()}function Ba(e,t,n,r){const a=xr;var o=e.filter(g=>!g.settled),l=t.map(a);if(n.length===0&&o.length===0){r(l);return}var s=R,f=Jo(),u=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(g=>g.promise)):null;function d(g){if((s.f&Oe)===0){f();try{r([...l,...g])}catch(b){rt(b,s)}Bn()}}var h=ja();if(n.length===0){u.then(()=>d([])).finally(h);return}function v(){Promise.all(n.map(g=>Xo(g))).then(d).catch(g=>rt(g,s)).finally(h)}u?u.then(()=>{f(),v(),Bn()}):v()}function Jo(){var e=R,t=D,n=ye,r=O;return function(o=!0){it(e),Fe(t),Ht(n),o&&(e.f&Oe)===0&&(r?.activate(),r?.apply())}}function Bn(e=!0){it(null),Fe(null),Ht(null),e&&O?.deactivate()}function ja(){var e=R,t=e.b,n=O,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function xr(e){var t=he|ie;return R!==null&&(R.f|=At),{ctx:ye,deps:null,effects:null,equals:_a,f:t,fn:e,reactions:null,rv:0,v:oe,wv:0,parent:R,ac:null}}const dn=Symbol("obsolete");function Xo(e,t,n){let r=R;r===null&&Eo();var a=void 0,o=vn(oe),l=!D,s=new Set;return us(()=>{var f=R,u=ma();a=u.promise;try{Promise.resolve(e()).then(u.resolve,g=>{g!==on&&u.reject(g)}).finally(Bn)}catch(g){u.reject(g),Bn()}var d=O;if(l){if((f.f&$t)!==0)var h=ja();if(r.b?.is_rendered())d.async_deriveds.get(f)?.reject(dn);else for(const g of s.values())g.reject(dn);s.add(u),d.async_deriveds.set(f,u)}const v=(g,b=void 0)=>{h?.(),s.delete(u),b!==dn&&(d.activate(),b?(o.f|=kt,Hn(o,b)):((o.f&kt)!==0&&(o.f^=kt),Hn(o,g)),d.deactivate())};u.promise.then(v,g=>v(null,g||"unknown"))}),qn(()=>{for(const f of s)f.reject(dn)}),new Promise(f=>{function u(d){function h(){d===a?f(o):u(a)}d.then(h,h)}u(a)})}function Ee(e){const t=xr(e);return ei(t),t}function Qo(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)be(t[n])}}function Er(e){var t,n=R,r=e.parent;if(!bt&&r!==null&&e.v!==oe&&(r.f&(Oe|Ve))!==0)return Bo(),e.v;it(r);try{e.f&=~It,Qo(e),t=ii(e)}finally{it(n)}return t}function za(e){var t=Er(e);if(!e.equals(t)&&(e.wv=ri(),(!O?.is_fork||e.deps===null)&&(O!==null?(O.capture(e,t,!0),Cr?.capture(e,t,!0)):e.v=t,e.deps===null))){re(e,ce);return}bt||(We!==null?(Rr()||O?.is_fork)&&We.set(e,t):_r(e))}function es(e){if(e.effects!==null)for(const t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&Yt(()=>{t.ac.abort(on),t.ac=null}),t.fn!==null&&(t.teardown=wt),bn(t,0),Lr(t))}function Ha(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Jt(t)}let Sr=null,Wt=null,O=null,Cr=null,We=null,Tr=null,hn=!1,$r=!1,Zt=null,jn=null;var Ka=0;let ts=1;class pt{id=ts++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#l=new Set;#a=new Set;#o=0;#r=new Map;#s=null;#i=[];#p=[];#c=new Set;#u=new Set;#d=new Map;#g=new Set;is_fork=!1;#f=!1;constructor(){Wt===null?Sr=Wt=this:(Wt.#n=this,this.#t=Wt),Wt=this}#y(){if(this.is_fork)return!0;for(const r of this.#r.keys()){for(var t=r,n=!1;t.parent!==null;){if(this.#d.has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1}skip_effect(t){this.#d.has(t)||this.#d.set(t,{d:[],m:[]}),this.#g.delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=this.#d.get(t);if(r){this.#d.delete(t);for(var a of r.d)re(a,ie),n(a);for(a of r.m)re(a,Ye),n(a)}this.#g.add(t)}#b(){this.#e=!0,Ka++>1e3&&(this.#v(),ns());for(const f of this.#c)this.#u.delete(f),re(f,ie),this.schedule(f);for(const f of this.#u)re(f,Ye),this.schedule(f);const t=this.#i;this.#i=[],this.apply();var n=Zt=[],r=[],a=jn=[];for(const f of t)try{this.#w(f,n,r)}catch(u){throw Wa(f),this.#y()||this.discard(),u}if(O=null,a.length>0){var o=pt.ensure();for(const f of a)o.schedule(f)}if(Zt=null,jn=null,this.#y()){this.#h(r),this.#h(n);for(const[f,u]of this.#d)Ya(f,u);a.length>0&&O.#b();return}const l=this.#_();if(l){this.#h(r),this.#h(n),l.#k(this);return}this.#c.clear(),this.#u.clear();for(const f of this.#l)f(this);this.#l.clear(),Cr=this,qa(r),qa(n),Cr=null,this.#s?.resolve();var s=O;if(this.#o===0&&(this.#i.length===0||s!==null)&&this.#v(),this.#i.length>0)if(s!==null){const f=s;f.#i.push(...this.#i.filter(u=>!f.#i.includes(u)))}else s=this;s!==null&&(at.clear(),s.#b())}#w(t,n,r){t.f^=ce;for(var a=t.first;a!==null;){var o=a.f,l=(o&(Ge|Xe))!==0,s=l&&(o&ce)!==0,f=s||(o&Ve)!==0||this.#d.has(a);if(!f&&a.fn!==null){l?a.f^=ce:(o&Bt)!==0?n.push(a):gn(a)&&((o&qe)!==0&&this.#u.add(a),Jt(a));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}}#_(){for(var t=this.#t;t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=t.#t}return null}#k(t){for(const[r,a]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,a);for(const[r,a]of t.async_deriveds){const o=this.async_deriveds.get(r);o&&a.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(t.#c,t.#u);const n=r=>{var a=r.reactions;if(a!==null&&!((r.f&he)!==0&&(r.f&(ie|Ye))===0))for(const s of a){var o=s.f;if((o&he)!==0)n(s);else{var l=s;o&(jt|qe)&&!this.async_deriveds.has(l)&&(this.#u.delete(l),re(l,ie),this.schedule(l))}}};for(const r of this.current.keys())n(r);this.oncommit(()=>t.discard()),t.#v(),O=this,this.#b()}#h(t){for(var n=0;n<t.length;n+=1)Ma(t[n],this.#c,this.#u)}capture(t,n,r=!1){t.v!==oe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&kt)===0&&(this.current.set(t,[n,r]),We?.set(t,n)),this.is_fork||(t.v=n)}activate(){O=this}deactivate(){O=null,We=null}flush(){try{$r=!0,O=this,this.#b()}finally{Ka=0,Tr=null,Zt=null,jn=null,$r=!1,O=null,We=null,at.clear()}}discard(){for(const t of this.#a)t(this);this.#a.clear();for(const t of this.async_deriveds.values())t.reject(dn);this.#v(),this.#s?.resolve()}register_created_effect(t){this.#p.push(t)}#m(){for(let h=Sr;h!==null;h=h.#n){var t=h.id<this.id,n=[];for(const[v,[g,b]]of this.current){if(h.current.has(v)){var r=h.current.get(v)[0];if(t&&g!==r)h.current.set(v,[g,b]);else continue}n.push(v)}if(t)for(const[v,g]of this.async_deriveds){const b=h.async_deriveds.get(v);b&&g.promise.then(b.resolve).catch(b.reject)}var a=[...h.current.keys()].filter(v=>!h.current.get(v)[1]);if(!(!h.#e||a.length===0)){var o=a.filter(v=>!this.current.has(v));if(o.length===0)t&&h.discard();else if(n.length>0){if(t)for(const v of this.#g)h.unskip_effect(v,g=>{(g.f&(qe|jt))!==0?h.schedule(g):h.#h([g])});h.activate();var l=new Set,s=new Map;for(var f of n)Ga(f,o,l,s);s=new Map;var u=[...h.current].filter(([v,g])=>{const b=this.current.get(v);return b?b[0]!==g[0]||b[1]!==g[1]:!0}).map(([v])=>v);if(u.length>0)for(const v of this.#p)(v.f&(Oe|Ve|Un))===0&&Ar(v,u,s)&&((v.f&(jt|qe))!==0?(re(v,ie),h.schedule(v)):h.#c.add(v));if(h.#i.length>0&&!h.#f){h.apply();for(var d of h.#i)h.#w(d,[],[]);h.#i=[]}h.deactivate()}}}}increment(t,n){if(this.#o+=1,t){let r=this.#r.get(n)??0;this.#r.set(n,r+1)}}decrement(t,n){if(this.#o-=1,t){let r=this.#r.get(n)??0;r===1?this.#r.delete(n):this.#r.set(n,r-1)}this.#f||(this.#f=!0,Qe(()=>{this.#f=!1,this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)this.#c.add(r);for(const r of n)this.#u.add(r);t.clear(),n.clear()}oncommit(t){this.#l.add(t)}ondiscard(t){this.#a.add(t)}settled(){return(this.#s??=ma()).promise}static ensure(){if(O===null){const t=O=new pt;!$r&&!hn&&Qe(()=>{t.#e||t.flush()})}return O}apply(){{We=null;return}}schedule(t){if(Tr=t,t.b?.is_pending&&(t.f&(Bt|Mn|lr))!==0&&(t.f&$t)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Zt!==null&&n===R&&(D===null||(D.f&he)===0))return;if((r&(Xe|Ge))!==0){if((r&ce)===0)return;n.f^=ce}}this.#i.push(n)}#v(){if(this.linked){var t=this.#t,n=this.#n;t===null?Sr=n:t.#n=n,n===null?Wt=t:n.#t=t,this.linked=!1}}}function G(e){var t=hn;hn=!0;try{for(var n;;){if(Fo(),O===null)return n;O.flush()}}finally{hn=t}}function ns(){try{$o()}catch(e){rt(e,Tr)}}let gt=null;function qa(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Oe|Ve))===0&&gn(r)&&(gt=new Set,Jt(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&hi(r),gt?.size>0)){at.clear();for(const a of gt){if((a.f&(Oe|Ve))!==0)continue;const o=[a];let l=a.parent;for(;l!==null;)gt.has(l)&&(gt.delete(l),o.push(l)),l=l.parent;for(let s=o.length-1;s>=0;s--){const f=o[s];(f.f&(Oe|Ve))===0&&Jt(f)}}gt.clear()}}gt=null}}function Ga(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const o=a.f;(o&he)!==0?Ga(a,t,n,r):(o&(jt|qe))!==0&&(o&ie)===0&&Ar(a,t,r)&&(re(a,ie),Ir(a))}}function Ar(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if(ae.call(t,a))return!0;if((a.f&he)!==0&&Ar(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function Ir(e){O.schedule(e)}function Ya(e,t){if(!((e.f&Ge)!==0&&(e.f&ce)!==0)){(e.f&ie)!==0?t.d.push(e):(e.f&Ye)!==0&&t.m.push(e),re(e,ce);for(var n=e.first;n!==null;)Ya(n,t),n=n.next}}function Wa(e){re(e,ce);for(var t=e.first;t!==null;)Wa(t),t=t.next}let zn=new Set;const at=new Map;let Za=!1;function vn(e,t){var n={f:0,v:e,reactions:null,equals:_a,rv:0,wv:0};return n}function P(e,t){const n=vn(e);return ei(n),n}function Ja(e,t=!1,n=!0){const r=vn(e);return t||(r.equals=ko),r}function w(e,t,n=!1){D!==null&&(!Ze||(D.f&Un)!==0)&&Ta()&&(D.f&(he|qe|jt|Un))!==0&&(ot===null||!ot.has(e))&&Oo();let r=n?vt(t):t;return Hn(e,r,jn)}function Hn(e,t,n=null){if(!e.equals(t)){bt?at.set(e,t):at.has(e)||at.set(e,e.v);var r=pt.ensure();if(r.capture(e,t),(e.f&he)!==0){const a=e;(e.f&ie)!==0&&Er(a),We===null&&_r(a)}e.wv=ri(),Xa(e,ie,n),R!==null&&(R.f&ce)!==0&&(R.f&(Ge|Xe))===0&&(Be===null?as([e]):Be.push(e)),!r.is_fork&&zn.size>0&&!Za&&rs()}return t}function rs(){Za=!1;for(const e of zn){(e.f&ce)!==0&&re(e,Ye);let t;try{t=gn(e)}catch{t=!0}t&&Jt(e)}zn.clear()}function pn(e){w(e,e.v+1)}function Xa(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,o=0;o<a;o++){var l=r[o],s=l.f,f=(s&ie)===0;if(f&&re(l,t),(s&Un)!==0)zn.add(l);else if((s&he)!==0){var u=l;We?.delete(u),(s&It)===0&&(s&Ue&&(R===null||(R.f&Vn)===0)&&(l.f|=It),Xa(u,Ye,n))}else if(f){var d=l;(s&qe)!==0&&gt!==null&&gt.add(d),n!==null?n.push(d):Ir(d)}}}let Kn=!1,bt=!1;function Qa(e){bt=e}let D=null,Ze=!1;function Fe(e){D=e}let R=null;function it(e){R=e}let ot=null;function ei(e){D!==null&&(ot??=new Set).add(e)}let $e=null,Le=0,Be=null;function as(e){Be=e}let ti=1,Dt=0,Mt=Dt;function ni(e){Mt=e}function ri(){return++ti}function gn(e){var t=e.f;if((t&ie)!==0)return!0;if(t&he&&(e.f&=~It),(t&Ye)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var o=n[a];if(gn(o)&&za(o),o.wv>e.wv)return!0}(t&Ue)!==0&&We===null&&re(e,ce)}return!1}function ai(e,t,n=!0){var r=e.reactions;if(r!==null&&!(ot!==null&&ot.has(e)))for(var a=0;a<r.length;a++){var o=r[a];(o.f&he)!==0?ai(o,t,!1):t===o&&(n?re(o,ie):(o.f&ce)!==0&&re(o,Ye),Ir(o))}}function ii(e){var t=$e,n=Le,r=Be,a=D,o=ot,l=ye,s=Ze,f=Mt,u=e.f;$e=null,Le=0,Be=null,D=(u&(Ge|Xe))===0?e:null,ot=null,Ht(e.ctx),Ze=!1,Mt=++Dt,e.ac!==null&&(Yt(()=>{e.ac.abort(on)}),e.ac=null);try{e.f|=Vn;var d=e.fn,h=d();e.f|=$t;var v=oi(e);if(Ta()&&Be!==null&&!Ze&&v!==null&&(e.f&(he|Ye|ie))===0)for(var g=0;g<Be.length;g++)ai(Be[g],e);if(a!==null&&a!==e){if(Dt++,a.deps!==null)for(let b=0;b<n;b+=1)a.deps[b].rv=Dt;if(t!==null)for(const b of t)b.rv=Dt;Be!==null&&(r===null?r=Be:r.push(...Be))}return(e.f&kt)!==0&&(e.f^=kt),h}catch(b){return oi(e),Ko(b)}finally{e.f^=Vn,$e=t,Le=n,Be=r,D=a,ot=o,Ht(l),Ze=s,Mt=f}}function oi(e){var t=e.deps,n=O?.is_fork;if($e!==null){var r;if(n||bn(e,Le),t!==null&&Le>0)for(t.length=Le+$e.length,r=0;r<$e.length;r++)t[Le+r]=$e[r];else e.deps=t=$e;if(Rr()&&(e.f&Ue)!==0)for(r=Le;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&Le<t.length&&(bn(e,Le),t.length=Le);return t}function is(e,t){let n=t.reactions;if(n!==null){var r=K.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&he)!==0&&($e===null||!ae.call($e,t))){var o=t;(o.f&Ue)!==0&&(o.f^=Ue,o.f&=~It),o.v!==oe&&_r(o),o.ac!==null&&Yt(()=>{o.ac.abort(on),o.ac=null,re(o,ie)}),es(o),bn(o,0)}}function bn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)is(e,n[r])}function Jt(e){var t=e.f;if((t&Oe)===0){re(e,ce);var n=R,r=Kn;R=e,Kn=(t&(Ge|Xe))===0;try{(t&(qe|lr))!==0?fs(e):Lr(e),fi(e);var a=ii(e);e.teardown=typeof a=="function"?a:null,e.wv=ti;var o;y&&Po&&(e.f&ie)!==0&&e.deps}finally{Kn=r,R=n}}}async function Nt(){await Promise.resolve(),G()}function i(e){var t=e.f,n=(t&he)!==0;if(D!==null&&!Ze){var r=R!==null&&(R.f&Oe)!==0;if(!r&&(ot===null||!ot.has(e))){var a=D.deps;if((D.f&Vn)!==0)e.rv<Dt&&(e.rv=Dt,$e===null&&a!==null&&a[Le]===e?Le++:$e===null?$e=[e]:$e.push(e));else{D.deps??=[],ae.call(D.deps,e)||D.deps.push(e);var o=e.reactions;o===null?e.reactions=[D]:ae.call(o,D)||o.push(D)}}}if(bt&&at.has(e))return at.get(e);if(n){var l=e;if(bt){var s=l.v;return((l.f&ce)===0&&l.reactions!==null||li(l))&&(s=Er(l)),at.set(l,s),s}var f=(l.f&Ue)===0&&!Ze&&D!==null&&(Kn||(D.f&Ue)!==0),u=(l.f&$t)===0;gn(l)&&(f&&(l.f|=Ue),za(l)),f&&!u&&(Ha(l),si(l))}if(We?.has(e))return We.get(e);if((e.f&kt)!==0)throw e.v;return e.v}function si(e){if(e.f|=Ue,e.deps!==null)for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&he)!==0&&(t.f&Ue)===0&&(Ha(t),si(t))}function li(e){if(e.v===oe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(at.has(t)||(t.f&he)!==0&&li(t))return!0;return!1}function mn(e){var t=Ze;try{return Ze=!0,e()}finally{Ze=t}}function os(e){R===null&&(D===null&&To(),Co()),bt&&So()}function ss(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Je(e,t){var n=R;n!==null&&(n.f&Ve)!==0&&(e|=Ve);var r={ctx:ye,deps:null,nodes:null,f:e|ie|Ue,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};O?.register_created_effect(r);var a=r;if((e&Bt)!==0)Zt!==null?Zt.push(r):pt.ensure().schedule(r);else if(t!==null){try{Jt(r)}catch(l){throw be(r),l}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&At)===0&&(a=a.first,(e&qe)!==0&&(e&_t)!==0&&a!==null&&(a.f|=_t))}if(a!==null&&(a.parent=n,n!==null&&ss(a,n),D!==null&&(D.f&he)!==0&&(e&Xe)===0)){var o=D;(o.effects??=[]).push(a)}return r}function Rr(){return D!==null&&!Ze}function qn(e){const t=Je(Mn,null);return re(t,ce),t.teardown=e,t}function Ae(e){os();var t=R.f,n=!D&&(t&Ge)!==0&&ye!==null&&!ye.i;if(n){var r=ye;(r.e??=[]).push(e)}else return ci(e)}function ci(e){return Je(Bt|yo,e)}function ls(e){pt.ensure();const t=Je(Xe|At,e);return()=>{be(t)}}function cs(e){pt.ensure();const t=Je(Xe|At,e);return(n={})=>new Promise(r=>{n.outro?wn(t,()=>{be(t),r(void 0)}):(be(t),r(void 0))})}function Or(e){return Je(Bt,e)}function us(e){return Je(jt|At,e)}function Gn(e,t=0){return Je(Mn|t,e)}function we(e,t=[],n=[],r=[]){Ba(r,t,n,a=>{Je(Mn,()=>{e(...a.map(i))})})}function yn(e,t=0){var n=Je(qe|t,e);return n}function ui(e,t=0){var n=Je(lr|t,e);return n}function st(e){return Je(Ge|At,e)}function fi(e){var t=e.teardown;if(t!==null){const n=bt,r=D;Qa(!0),Fe(null);try{t.call(null)}catch(a){rt(a,e.parent)}finally{Qa(n),Fe(r)}}}function Lr(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&Yt(()=>{a.abort(on)});var r=n.next;(n.f&Xe)!==0?n.parent=null:be(n,t),n=r}}function fs(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ge)===0&&be(t),t=n}}function be(e,t=!0){var n=!1;(t||(e.f&mo)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(di(e.nodes.start,e.nodes.end),n=!0),e.f|=Nn,Lr(e,t&&!n),bn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();fi(e),e.f^=Nn,e.f|=Oe;var a=e.parent;a!==null&&a.first!==null&&hi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function di(e,t){for(;e!==null;){var n=e===t?null:nt(e);e.remove(),e=n}}function hi(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function wn(e,t,n=!0){var r=[];e.f|=ur,vi(e,r,!0);var a=()=>{n&&be(e),t&&t()},o=r.length;if(o>0){var l=()=>--o||a();for(var s of r)s.out(l)}else a()}function vi(e,t,n){if((e.f&Ve)===0){e.f^=Ve;var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)(s.is_global||n)&&t.push(s);for(var a=e.first;a!==null;){var o=a.next;if((a.f&Xe)===0){var l=(a.f&_t)!==0||(a.f&Ge)!==0&&(e.f&qe)!==0;vi(a,t,l?n:!1)}a=o}}}function pi(e){e.f&=~ur,gi(e,!0)}function gi(e,t){if((e.f&ur)===0&&(e.f&Ve)!==0){e.f^=Ve,(e.f&ce)===0&&(re(e,ie),pt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&_t)!==0||(n.f&Ge)!==0;gi(n,a?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const l of o)(l.is_global||t)&&l.in()}}function bi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:nt(n);t.append(n),n=a}}function ds(e){let t=0,n=vn(0),r;return()=>{Rr()&&(i(n),Gn(()=>(t===0&&(r=mn(()=>e(()=>pn(n)))),t+=1,()=>{Qe(()=>{t-=1,t===0&&(r?.(),r=void 0,pn(n))})})))}}function mi(e){const t={get:n=>fn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(fn(t.store),{[n]:r}):Object.assign(fn(t.store),n),t.store.set(fn(t.store))},store:Go(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:mi({}),i18n:mi({}),instances:new Set,plugins:new Set};const hs={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};globalThis.$altcha.i18n.set("en",hs);const vs="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(vs);const _n=Symbol("events"),yi=new Set,Pr=new Set;function wi(e,t,n,r={}){function a(o){if(r.capture||Nr.call(t,o),!o.cancelBubble)return Yt(()=>n?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Qe(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function ue(e,t,n,r,a){var o={capture:r,passive:a},l=wi(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&qn(()=>{t.removeEventListener(e,l,o)})}function Yn(e,t,n){(t[_n]??={})[e]=n}function Wn(e){for(var t=0;t<e.length;t++)yi.add(e[t]);for(var n of Pr)n(e)}let Dr=null,Mr=!1;function Nr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Dr=e,Mr||(Mr=!0,setTimeout(()=>{Mr=!1,Dr=null}));var l=0,s=Dr===e&&e[_n];if(s){var f=a.indexOf(s);if(f!==-1&&(t===document||t===window)){e[_n]=t;return}var u=a.indexOf(t);if(u===-1)return;f<=u&&(l=f)}if(o=a[l]||e.target,o!==t){yt(e,"currentTarget",{configurable:!0,get(){return o||n}});var d=D,h=R;Fe(null),it(null);try{for(var v,g=[];o!==null&&o!==t;){try{var b=o[_n]?.[r];b!=null&&(!o.disabled||e.target===o)&&b.call(o,e)}catch(E){v?g.push(E):v=E}if(e.cancelBubble)break;l++,o=l<a.length?a[l]:null}if(v){for(let E of g)queueMicrotask(()=>{throw E});throw v}}finally{e[_n]=t,delete e.currentTarget,Fe(d),it(h)}}}const ps=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function gs(e){return ps?.createHTML(e)??e}function _i(e){var t=wr("template");return t.innerHTML=gs(e.replaceAll("<!>","<!---->")),t.content}function Pe(e,t){var n=R;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function te(e,t){var n=(t&Do)!==0,r=(t&Mo)!==0,a,o=!e.startsWith("<!>");return()=>{if(I)return Pe(N,null),N;a===void 0&&(a=_i(o?e:"<!>"+e),n||(a=Te(a)));var l=r||Oa?document.importNode(a,!0):a.cloneNode(!0);if(n){var s=Te(l),f=l.lastChild;Pe(s,f)}else Pe(l,l);return l}}function bs(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(I)return Pe(N,null),N;if(!o){var l=_i(a),s=Te(l);o=Te(s)}var f=o.cloneNode(!0);return Pe(f,f),f}}function Ur(e,t){return bs(e,t,"svg")}function Zn(e=""){if(!I){var t=tt(e+"");return Pe(t,t),t}var n=N;return n.nodeType!==ln?(n.before(n=tt()),xe(n)):Fn(n),Pe(n,n),n}function ki(){if(I)return Pe(N,null),N;var e=document.createDocumentFragment(),t=document.createComment(""),n=tt();return e.append(t,n),Pe(t,n),e}function U(e,t){if(I){var n=R;((n.f&$t)===0||n.nodes.end===null)&&(n.nodes.end=N),Lt();return}e!==null&&e.before(t)}function ms(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ys=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ws(e){return ys.includes(e)}const _s={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ks(e){return e=e.toLowerCase(),_s[e]??e}const xs=["touchstart","touchmove"];function Es(e){return xs.includes(e)}var Ss=_t|At;function Cs(e,t,n,r){new Ts(e,t,n,r)}class Ts{parent;is_pending=!1;transform_error;#e;#t=I?N:null;#n;#l;#a;#o=null;#r=null;#s=null;#i=null;#p=0;#c=0;#u=!1;#d=new Set;#g=new Set;#f=null;#y=ds(()=>(this.#f=vn(this.#p),()=>{this.#f=null}));constructor(t,n,r,a){this.#e=t,this.#n=n,this.#l=o=>{var l=R;l.b=this,l.f|=cr,r(o)},this.parent=R.b,this.transform_error=a??this.parent?.transform_error??(o=>o),this.#a=yn(()=>{if(I){const o=this.#t;Lt();const l=o.data===xa;if(o.data.startsWith(Ea)){const f=JSON.parse(o.data.slice(Ea.length));this.#w(f)}else l?this.#k():this.#b()}else this.#h()},Ss),I&&(this.#e=N)}#b(){try{this.#o=st(()=>this.#l(this.#e))}catch(t){this.error(t)}}#w(t){const n=this.#n.failed,{reset:r,invoke_onerror:a}=this.#_(t);Qe(a),n&&(this.#s=st(()=>{n(this.#e,()=>t,()=>r)}))}#_(t){var n=!1,r=!1;const a=()=>{if(n){zo();return}n=!0,r&&Lo(),this.#s!==null&&wn(this.#s,()=>{this.#s=null}),this.#v(()=>{this.#h()})};return{reset:a,invoke_onerror:()=>{try{r=!0,this.#n.onerror?.(t,a),r=!1}catch(l){rt(l,this.#a&&this.#a.parent)}}}}#k(){const t=this.#n.pending;t&&(this.is_pending=!0,this.#r=st(()=>t(this.#e)),Qe(()=>{var n=this.#i=document.createDocumentFragment(),r=tt(),a=!1;if(n.append(r),this.#o=this.#v(()=>{try{return st(()=>this.#l(r))}catch(o){try{this.error(o),a=!0}catch(l){rt(l,this.#a.parent)}return null}}),this.#o===null){this.#i=null,a&&this.#m(O);return}this.#c===0&&(this.#e.before(n),this.#i=null,wn(this.#r,()=>{this.#r=null}),this.#m(O))}))}#h(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#p=0,this.#o=st(()=>{this.#l(this.#e)}),this.#c>0){var t=this.#i=document.createDocumentFragment();bi(this.#o,t);const n=this.#n.pending;this.#r=st(()=>n(this.#e))}else this.#m(O)}catch(n){this.error(n)}}#m(t){this.is_pending=!1,t.transfer_effects(this.#d,this.#g)}defer_effect(t){Ma(t,this.#d,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#v(t){var n=R,r=D,a=ye;it(this.#a),Fe(this.#a),Ht(this.#a.ctx);try{return pt.ensure(),t()}finally{it(n),Fe(r),Ht(a)}}#x(t,n){if(!this.has_pending_snippet()){this.parent&&this.parent.#x(t,n);return}this.#c+=t,this.#c===0&&(this.#m(n),this.#r&&wn(this.#r,()=>{this.#r=null}),this.#i&&(this.#e.before(this.#i),this.#i=null))}update_pending_count(t,n){this.#x(t,n),this.#p+=t,!(!this.#f||this.#u)&&(this.#u=!0,Qe(()=>{this.#u=!1,this.#f&&Hn(this.#f,this.#p)}))}get_effect_pending(){return this.#y(),i(this.#f)}error(t){if(!this.#n.onerror&&!this.#n.failed)throw t;O?.is_fork?(this.#o&&O.skip_effect(this.#o),this.#r&&O.skip_effect(this.#r),this.#s&&O.skip_effect(this.#s),O.oncommit(()=>{this.#E(t)})):this.#E(t)}#E(t){this.#o&&(be(this.#o),this.#o=null),this.#r&&(be(this.#r),this.#r=null),this.#s&&(be(this.#s),this.#s=null),I&&(xe(this.#t),gr(),xe(br()));let n=this.#n.failed;const r=a=>{const{reset:o,invoke_onerror:l}=this.#_(a);l(),n&&(this.#s=this.#v(()=>{try{return st(()=>{var s=R;s.b=this,s.f|=cr,n(this.#e,()=>a,()=>o)})}catch(s){return rt(s,this.#a.parent),null}}))};Qe(()=>{var a;try{a=this.transform_error(t)}catch(o){rt(o,this.#a&&this.#a.parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(r,o=>rt(o,this.#a&&this.#a.parent)):r(a)})}}function lt(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[hr]??=e.nodeValue)&&(e[hr]=n,e.nodeValue=`${n}`)}function xi(e,t){return Ei(e,t)}function $s(e,t){yr(),t.intro=t.intro??!1;const n=t.target,r=I,a=N;try{for(var o=Te(n);o&&(o.nodeType!==cn||o.data!==vr);)o=nt(o);if(!o)throw Rt;et(!0),xe(o);const l=Ei(e,{...t,anchor:o});return et(!1),l}catch(l){if(l instanceof Error&&l.message.split(`
`).some(s=>s.startsWith("https://svelte.dev/e/")))throw l;return l!==Rt&&console.warn("Failed to hydrate: ",l),t.recover===!1&&Ao(),yr(),Ho(n),et(!1),xi(e,t)}finally{et(r),xe(a)}}const Jn=new Map;function Ei(e,{target:t,anchor:n,props:r={},events:a,context:o,intro:l=!0,transformError:s}){yr();var f=void 0,u=cs(()=>{var d=n??t.appendChild(tt());Cs(d,{pending:()=>{}},g=>{dt({});var b=ye;if(o&&(b.c=o),a&&(r.$$events=a),I&&Pe(g,null),f=e(g,r)||pr(),I&&(R.nodes.end=N,N===null||N.nodeType!==cn||N.data!==Sa))throw un(),Rt;ht()},s);var h=new Set,v=g=>{for(var b=0;b<g.length;b++){var E=g[b];if(!h.has(E)){h.add(E);var M=Es(E);for(const le of[t,document]){var q=Jn.get(le);q===void 0&&(q=new Map,Jn.set(le,q));var z=q.get(E);z===void 0?(le.addEventListener(E,Nr,{passive:M}),q.set(E,1)):q.set(E,z+1)}}}};return v(nn(yi)),Pr.add(v),()=>{for(var g of h)for(const M of[t,document]){var b=Jn.get(M),E=b.get(g);--E==0?(M.removeEventListener(g,Nr),b.delete(g),b.size===0&&Jn.delete(M)):b.set(g,E)}Pr.delete(v),d!==n&&d.parentNode?.removeChild(d)}});return Vr.set(f,u),f}let Vr=new WeakMap;function As(e,t){const n=Vr.get(e);return n?(Vr.delete(e),n(t)):Promise.resolve()}class Xn{anchor;#e=new Map;#t=new Map;#n=new Map;#l=new Set;#a=!0;constructor(t,n=!0){this.anchor=t,this.#a=n}#o=t=>{if(this.#e.has(t)){var n=this.#e.get(t),r=this.#t.get(n);if(r)pi(r),this.#l.delete(n);else{var a=this.#n.get(n);a&&(pi(a.effect),this.#t.set(n,a.effect),this.#n.delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[o,l]of this.#e){if(this.#e.delete(o),o===t)break;const s=this.#n.get(l);s&&(be(s.effect),this.#n.delete(l))}for(const[o,l]of this.#t){if(o===n||this.#l.has(o))continue;const s=()=>{if(Array.from(this.#e.values()).includes(o)){var u=document.createDocumentFragment();bi(l,u),u.append(tt()),this.#n.set(o,{effect:l,fragment:u})}else be(l);this.#l.delete(o),this.#t.delete(o)};this.#a||!r?(this.#l.add(o),wn(l,s,!1)):s()}}};#r=t=>{this.#e.delete(t);const n=Array.from(this.#e.values());for(const[r,a]of this.#n)n.includes(r)||(be(a.effect),this.#n.delete(r))};ensure(t,n){var r=O;n&&!this.#t.has(t)&&!this.#n.has(t)&&this.#t.set(t,st(()=>n(this.anchor))),this.#e.set(r,t),I&&(this.anchor=N),this.#o(r)}}function Is(e,t,...n){var r=new Xn(e);yn(()=>{const a=t()??null;r.ensure(a,a&&(o=>a(o,...n)))},_t)}function Fr(e){ye===null&&xo(),Ae(()=>{const t=mn(e);if(typeof t=="function")return t})}function fe(e,t,n=!1){var r;I&&(r=N,Lt());var a=new Xn(e),o=n?_t:0;function l(s,f){if(I){var u=Aa(r);if(s!==parseInt(u.substring(1))){var d=br();xe(d),a.anchor=d,et(!1),a.ensure(s,f),et(!0);return}}a.ensure(s,f)}yn(()=>{var s=!1;t((f,u=0)=>{s=!0,l(u,f)}),s||l(-1,null)},o)}const Rs=Symbol("NaN");function Os(e,t,n){I&&Lt();var r=new Xn(e);yn(()=>{var a=t();a!==a&&(a=Rs),r.ensure(a,n)})}function Si(e,t,n=!1,r=!1,a=!1,o=!1){var l=e,s="";if(n){var f=e;I&&(l=xe(Te(f)))}we(()=>{var u=R;if(s===(s=t()??"")){I&&Lt();return}if(n&&!I){u.nodes=null,f.innerHTML=s,s!==""&&Pe(Te(f),f.lastChild);return}if(u.nodes!==null&&(di(u.nodes.start,u.nodes.end),u.nodes=null),s!==""){if(I){N.data;for(var d=Lt(),h=d;d!==null&&(d.nodeType!==cn||d.data!=="");)h=d,d=nt(d);if(d===null)throw un(),Rt;Pe(N,h),l=xe(d);return}var v=r?No:a?Uo:void 0,g=wr(r?"svg":a?"math":"template",v);g.innerHTML=s;var b=r||a?g:g.content;if(Pe(Te(b),b.lastChild),r||a)for(;Te(b);)l.before(Te(b));else l.before(b)}})}function Ls(e,t,n){var r;I&&(r=N,Lt());var a=new Xn(e);yn(()=>{var o=t()??null;if(I){var l=Aa(r),s=l===vr,f=o!==null;if(s!==f){var u=br();xe(u),a.anchor=u,et(!1),a.ensure(o,o&&(d=>n(d,o))),et(!0);return}}a.ensure(o,o&&(d=>n(d,o)))},_t)}function Ps(e,t){var n=void 0,r;ui(()=>{n!==(n=t())&&(r&&(be(r),r=null),n&&(r=st(()=>{Or(()=>n(e))})))})}function Ci(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Ci(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ds(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Ci(e))&&(r&&(r+=" "),r+=t);return r}function Ms(e){return typeof e=="object"?Ds(e):e??""}const Ti=[...` 	
\r\f \v\uFEFF`];function Ns(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var o=a.length,l=0;(l=r.indexOf(a,l))>=0;){var s=l+o;(l===0||Ti.includes(r[l-1]))&&(s===r.length||Ti.includes(r[s]))?r=(l===0?"":r.substring(0,l))+r.substring(s+1):l=s}}return r===""?null:r}function $i(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var o=e[a];o!=null&&o!==""&&(r+=" "+a+": "+o+n)}return r}function Br(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Us(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,l=0,s=!1,f=[];r&&f.push(...Object.keys(r).map(Br)),a&&f.push(...Object.keys(a).map(Br));var u=0,d=-1;const E=e.length;for(var h=0;h<E;h++){var v=e[h];if(s?v==="/"&&e[h-1]==="*"&&(s=!1):o?o===v&&(o=!1):v==="/"&&e[h+1]==="*"?s=!0:v==='"'||v==="'"?o=v:v==="("?l++:v===")"&&l--,!s&&o===!1&&l===0){if(v===":"&&d===-1)d=h;else if(v===";"||h===E-1){if(d!==-1){var g=Br(e.substring(u,d).trim());if(!f.includes(g)){v!==";"&&h++;var b=e.substring(u,h).trim();n+=" "+b+";"}}u=h+1,d=-1}}}}return r&&(n+=$i(r)),a&&(n+=$i(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Vs(e,t,n,r,a,o){var l=e[fr];if(I||l!==n||l===void 0){var s=Ns(n,r,o);(!I||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e[fr]=n}else if(o&&a!==o)for(var f in o){var u=!!o[f];(a==null||u!==!!a[f])&&e.classList.toggle(f,u)}return o}function jr(e,t={},n,r){for(var a in n){var o=n[a];t[a]!==o&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,r))}}function Fs(e,t,n,r){var a=e[dr];if(I||a!==t){var o=Us(t,r);(!I||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e[dr]=t}else r&&(Array.isArray(r)?(jr(e,n?.[0],r[0]),jr(e,n?.[1],r[1],"important")):jr(e,n,r));return r}function Ai(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ii(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Ri(e,!n||"__value"in e))}function Ri(e,t){var n=e.__defaultValue,r=e.multiple,a=r?n??[]:null;if(!(r&&!x(a))){var o=e.selectedIndex,l=t&&r?new Set(e.selectedOptions):null;for(var s of e.options){var f=Hr(s);Ai(s,r?a.includes(f):Ra(f,n))}if(t)if(l!==null)for(s of e.options){var u=l.has(s);s.selected!==u&&(s.selected=u)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function zr(e,t,n=!1){if(e.multiple){if(t==null)return;if(!x(t))return jo();for(var r of e.options)r.selected=t.includes(Hr(r));return}for(r of e.options){var a=Hr(r);if(Ra(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Bs(e){var t=new MutationObserver(n=>{n.every(js)||("__defaultValue"in e&&Ri(e,!1),"__value"in e&&zr(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),qn(()=>{t.disconnect()})}function Hr(e){return"__value"in e?e.__value:e.value}function js(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const kn=Symbol("class"),xn=Symbol("style"),Oi=Symbol("is custom element"),Li=Symbol("is html"),zs=sn?"link":"LINK",Pi=sn?"input":"INPUT",Hs=sn?"option":"OPTION",Di=sn?"select":"SELECT",Ks=sn?"progress":"PROGRESS";function Kr(e){if(I){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;B(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;B(e,"checked",null),e.checked=a}}};e[an]=n,Qe(n),Fa()}}function qs(e,t){var n=qr(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Ks)||(e.value=t??"")}function B(e,t,n,r){var a=qr(e);I&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===zs)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[_o]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ni(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Gs(e,t,n,r,a=!1,o=!1){I&&a&&e.nodeName===Pi&&("defaultValue"in n||"defaultChecked"in n||Kr(e));var l=qr(e),s=l[Oi],f=!l[Li];let u=I&&s;u&&et(!1);var d=t||{},h=e.nodeName===Hs,v=e.nodeName===Di;for(var g in t)!(g in n)&&g[0]+g[1]!=="$$"&&(n[g]=null);n.class?n.class=Ms(n.class):n[kn]&&(n.class=null),n[xn]&&(n.style??=null);var b=Ni(e);if(e.nodeName===Pi&&"type"in n&&("value"in n||"__value"in n)){var E=n.type;(E!==d.type||E===void 0&&e.hasAttribute("type"))&&(d.type=E,B(e,"type",E))}for(const F in n){let S=n[F];if(h&&F==="value"&&S==null){e.value=e.__value="",d[F]=S;continue}if(F==="class"){var M=e.namespaceURI==="http://www.w3.org/1999/xhtml";Vs(e,M,S,r,t?.[kn],n[kn]),d[F]=S,d[kn]=n[kn];continue}if(F==="style"){Fs(e,S,t?.[xn],n[xn]),d[F]=S,d[xn]=n[xn];continue}var q=d[F];if(!(S===q&&!(S===void 0&&e.hasAttribute(F)))){d[F]=S;var z=F[0]+F[1];if(z!=="$$")if(z==="on"){const W={},ke="$$"+F;let L=F.slice(2);var le=ws(L);if(ms(L)&&(L=L.slice(0,-7),W.capture=!0),!le&&q){if(S!=null)continue;e.removeEventListener(L,d[ke],W),d[ke]=null}if(le)Yn(L,e,S),Wn([L]);else if(S!=null){let de=function(je){d[F].call(this,je)};d[ke]=wi(L,e,de,W)}}else if(F==="style")B(e,F,S);else if(F==="autofocus")Wo(e,!!S);else if(!s&&(F==="__value"||F==="value"&&S!=null))e.value=e.__value=S;else if(F==="selected"&&h)Ai(e,S);else{var V=F;f||(V=ks(V));var _e=V==="defaultValue"||V==="defaultChecked";if(v&&V==="defaultValue")continue;if(S==null&&!s&&!_e)if(l[F]=null,V==="value"||V==="checked"){let W=e;const ke=t===void 0;if(V==="value"){let L=W.defaultValue;W.removeAttribute(V),W.defaultValue=L,W.value=W.__value=ke?L:null}else{let L=W.defaultChecked;W.removeAttribute(V),W.defaultChecked=L,W.checked=ke?L:!1}}else e.removeAttribute(F);else _e||(s||typeof S!="string")&&b.has(V)?(e[V]=S,V in l&&(l[V]=oe)):typeof S!="function"&&B(e,V,S)}}}return u&&et(!0),d}function Qn(e,t,n=[],r=[],a=[],o,l=!1,s=!1){Ba(a,n,r,f=>{var u=void 0,d={},h=e.nodeName===Di,v=!1;if(ui(()=>{var b=t(...f.map(i)),E=Gs(e,u,b,o,l,s);if(v&&h){var M=e;"defaultValue"in b&&Ii(M,b.defaultValue),"value"in b&&zr(M,b.value)}for(let z of Object.getOwnPropertySymbols(d))b[z]||be(d[z]);for(let z of Object.getOwnPropertySymbols(b)){var q=b[z];z.description===Vo&&(!u||q!==u[z])&&(d[z]&&be(d[z]),d[z]=st(()=>Ps(e,()=>q))),E[z]=q}u=E}),h){var g=e;Or(()=>{var b=u;"defaultValue"in b&&Ii(g,b.defaultValue),zr(g,b.value,!0),Bs(g)})}v=!0})}function qr(e){return e[wa]??={[Oi]:e.nodeName.includes("-"),[Li]:e.namespaceURI===Ca}}var Mi=new Map;function Ni(e){var t=e.getAttribute("is")||e.nodeName,n=Mi.get(t);if(n)return n;Mi.set(t,n=new Set);for(var r,a=e,o=Element.prototype;o!==a;){r=rn(a);for(var l in r)r[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&n.add(l);a=ga(a)}return n}function Ys(e,t,n=t){var r=new WeakSet;Zo(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Gr(e)?Yr(o):o,n(o),O!==null&&r.add(O),await Nt(),o!==(o=t())){var l=e.selectionStart,s=e.selectionEnd,f=e.value.length;if(e.value=o??"",s!==null){var u=e.value.length;l===s&&s===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=l,e.selectionEnd=Math.min(s,u))}}}),(I&&e.defaultValue!==e.value||mn(t)==null&&e.value)&&(n(Gr(e)?Yr(e.value):e.value),O!==null&&r.add(O)),Gn(()=>{var a=t();if(e===document.activeElement){var o=O;if(r.has(o))return}Gr(e)&&a===Yr(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Gr(e){var t=e.type;return t==="number"||t==="range"}function Yr(e){return e===""?null:+e}function Wr(e,t){return e===t||e?.[zt]===t}function xt(e=pr(),t,n,r){var a=ye.r,o=R;return Or(()=>{var l,s;return Gn(()=>{l=s,s=[],mn(()=>{Wr(n(...s),e)||(t(e,...s),l&&Wr(n(...l),e)&&t(null,...l))})}),()=>{let f=o;for(;f!==a&&f.parent!==null&&f.parent.f&Nn;)f=f.parent;const u=()=>{s&&Wr(n(...s),e)&&t(null,...s)},d=f.teardown;f.teardown=()=>{u(),d?.()}}}),e}const Ws={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.has(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};function er(e,t,n){return new Proxy({props:e,exclude:t},Ws)}function Q(e,t,n,r){var a=r,o=!0,l=()=>(o&&(o=!1,a=r),a),s;s=e[t],s===void 0&&r!==void 0&&(s=l());var f;f=()=>{var v=e[t];return v===void 0?l():(o=!0,v)};var u=!1,d=xr(()=>(u=!1,f())),h=R;return(function(v,g){if(arguments.length>0){const b=g?i(d):v;return w(d,b),u=!0,a!==void 0&&(a=b),v}return bt&&u||(h.f&Oe)!==0?d.v:i(d)})}function Zs(e){return new Js(e)}class Js{#e;#t;constructor(t){var n=new Map,r=(o,l)=>{var s=Ja(l,!1,!1);return n.set(o,s),s};const a=new Proxy({...t.props||{},$$events:{}},{get(o,l){return i(n.get(l)??r(l,Reflect.get(o,l)))},has(o,l){return l===wo?!0:(i(n.get(l)??r(l,Reflect.get(o,l))),Reflect.has(o,l))},set(o,l,s){return w(n.get(l)??r(l,s),s),Reflect.set(o,l,s)}});this.#t=(t.hydrate?$s:xi)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError}),(!t?.props?.$$host||t.sync===!1)&&G(),this.#e=a.$$events;for(const o of Object.keys(this.#t))o==="$set"||o==="$destroy"||o==="$on"||yt(this,o,{get(){return this.#t[o]},set(l){this.#t[o]=l},enumerable:!0});this.#t.$set=o=>{Object.assign(a,o)},this.#t.$destroy=()=>{As(this.#t)}}$set(t){this.#t.$set(t)}$on(t,n){this.#e[t]=this.#e[t]||[];const r=(...a)=>n.call(this,...a);return this.#e[t].push(r),()=>{this.#e[t]=this.#e[t].filter(a=>a!==r)}}$destroy(){this.#t.$destroy()}}let Ui=class{};typeof HTMLElement=="function"&&(Ui=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return a=>{const o=wr("slot");r!=="default"&&(o.name=r),U(a,o)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},n=Xs(this);for(const r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(const r of this.attributes){const a=this.$$g_p(r.name);a in this.$$d||(this.$$d[a]=tr(a,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=Zs({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=ls(()=>{Gn(()=>{this.$$r=!0;for(const r of Tt(this.$$c)){if(!this.$$p_d[r]?.reflect)continue;this.$$d[r]=this.$$c[r];const a=tr(r,this.$$d[r],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,a)}this.$$r=!1})});for(const r in this.$$l)for(const a of this.$$l[r]){const o=this.$$c.$on(r,a);this.$$l_u.set(a,o)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=tr(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Tt(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function tr(e,t,n,r){const a=n[e]?.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Xs(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function Et(e,t,n,r,a,o){let l=class extends Ui{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return Tt(t).map(s=>(t[s].attribute||s).toLowerCase())}};return Tt(t).forEach(s=>{yt(l.prototype,s,{get(){return this.$$c&&s in this.$$c?this.$$c[s]:this.$$d[s]},set(f){f=tr(s,f,t),this.$$d[s]=f;var u=this.$$c;if(u){var d=Ce(u,s)?.get;d?u[s]=f:u.$set({[s]:f})}}})}),r.forEach(s=>{yt(l.prototype,s,{get(){return this.$$c?.[s]}})}),e.element=l,l}var Qs=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),el=te('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');function Vi(e,t){dt(t,!0);let n=Q(t,"loading"),r=er(t,Qs),a;function o(){a?.click()}var l={get loading(){return n()},set loading(d){n(d),G()}},s=el(),f=ve(s);Qn(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),xt(f,d=>a=d,()=>a);var u=X(f,2);return gr(2),se(s),we(()=>B(s,"data-loading",n())),Yn("click",u,o),U(e,s),ht(l)}Wn(["click"]),Et(Vi,{loading:{}},[],[],{mode:"open"});var tl=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),nl=te('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function Fi(e,t){dt(t,!0);let n=Q(t,"loading"),r=er(t,tl);var a={get loading(){return n()},set loading(s){n(s),G()}},o=nl(),l=ve(o);return Qn(l,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),gr(2),se(o),we(()=>B(o,"data-loading",n())),U(e,o),ht(a)}Et(Fi,{loading:{}},[],[],{mode:"open"});var rl=te('<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function Zr(e,t){dt(t,!0);let n=Q(t,"strings");const r="https://altcha.org";var a={get strings(){return n()},set strings(s){n(s),G()}},o=rl(),l=ve(o);return B(l,"href",r),se(o),we(()=>B(l,"aria-label",n().ariaLinkLabel)),U(e,o),ht(a)}Et(Zr,{strings:{}},[],[],{mode:"open"});var al=te('<div class="altcha-footer"><p></p> <!></div>');function Jr(e,t){dt(t,!0);let n=Q(t,"logo"),r=Q(t,"strings");var a={get logo(){return n()},set logo(u){n(u),G()},get strings(){return r()},set strings(u){r(u),G()}},o=al(),l=ve(o);Si(l,()=>r().footer,!0),se(l);var s=X(l,2);{var f=u=>{Zr(u,{get strings(){return r()}})};fe(s,u=>{n()&&u(f)})}return se(o),U(e,o),ht(a)}Et(Jr,{logo:{},strings:{}},[],[],{mode:"open"});var il=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),ol=te('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');function Bi(e,t){dt(t,!0);let n=Q(t,"loading"),r=er(t,il),a;function o(){a?.click()}var l={get loading(){return n()},set loading(d){n(d),G()}},s=ol(),f=ve(s);Qn(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),xt(f,d=>a=d,()=>a);var u=X(f,2);return se(s),we(()=>B(s,"data-loading",n())),Yn("click",u,o),U(e,s),ht(l)}Wn(["click"]),Et(Bi,{loading:{}},[],[],{mode:"open"});var me=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(me||{}),j=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(j||{}),sl=te('<div class="altcha-code-challenge-title"> </div>'),ll=te('<div class="altcha-spinner"></div>'),cl=Ur('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),ul=Ur('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),fl=Ur('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),dl=te('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),hl=te('<audio hidden="" autoplay=""></audio>'),vl=te('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function ji(e,t){dt(t,!0);let n=Q(t,"audioUrl"),r=Q(t,"codeChallenge"),a=Q(t,"config"),o=Q(t,"imageUrl"),l=Q(t,"onCancel"),s=Q(t,"onReload"),f=Q(t,"onSubmit"),u=Q(t,"strings"),d=P(void 0),h=P(void 0),v=P(void 0),g=P(!1),b=P(""),E=P(!1);Fr(()=>(a().disableAutoFocus||Nt().then(()=>{i(v)?.focus()}),()=>{i(h)&&(i(h).pause(),w(h,void 0))}));function M(){w(d,me.PAUSED,!0)}function q(T){w(d,me.ERROR,!0)}function z(){w(d,me.READY,!0)}function le(){w(d,me.LOADING,!0)}function V(){w(d,me.PLAYING,!0)}function _e(){w(d,me.PAUSED,!0)}function F(T){T.code==="Space"?(T.preventDefault(),T.stopPropagation(),ke()):T.code==="Escape"&&(T.preventDefault(),T.stopPropagation(),l()?.())}function S(T){T.preventDefault(),T.stopPropagation(),f()?.(i(b))}function W(T){T.play().catch(Z=>{if(!(Z instanceof DOMException&&Z.name==="AbortError"))throw Z})}function ke(){i(h)?i(d)===me.LOADING||(i(h).paused?(n()&&i(h).src!==n()&&(i(h).src=n()),i(h).currentTime=0,W(i(h))):i(h).pause()):(w(E,!0),requestAnimationFrame(()=>{i(h)&&n()&&(i(h).src=n(),W(i(h)))}))}var L={get audioUrl(){return n()},set audioUrl(T){n(T),G()},get codeChallenge(){return r()},set codeChallenge(T){r(T),G()},get config(){return a()},set config(T){a(T),G()},get imageUrl(){return o()},set imageUrl(T){o(T),G()},get onCancel(){return l()},set onCancel(T){l(T),G()},get onReload(){return s()},set onReload(T){s(T),G()},get onSubmit(){return f()},set onSubmit(T){f(T),G()},get strings(){return u()},set strings(T){u(T),G()}},de=vl(),je=ve(de),Ie=ve(je);{var ze=T=>{var Z=sl(),Vt=qt(Z,!0);we(()=>lt(Vt,u().verificationRequired)),U(T,Z)};fe(Ie,T=>{a().codeChallengeDisplay!=="standard"&&T(ze)})}var ee=X(Ie,2),mt=qt(ee,!0),C=X(ee,2),pe=X(C,2),ne=ve(pe);Kr(ne),ne.disabled=i(g),xt(ne,T=>w(v,T),()=>i(v));var m=X(ne,2);{var En=T=>{var Z=dl(),Vt=ve(Z);{var An=Se=>{var ut=ll();U(Se,ut)},ta=Se=>{var ut=cl();U(Se,ut)},na=Se=>{var ut=ul();U(Se,ut)},ra=Se=>{var ut=fl();U(Se,ut)};fe(Vt,Se=>{i(d)===me.LOADING?Se(An):i(d)===me.ERROR?Se(ta,1):i(d)===me.PLAYING?Se(na,2):Se(ra,-1)})}se(Z),we(()=>{B(Z,"title",u().getAudioChallenge),Z.disabled=i(d)===me.LOADING||i(d)===me.ERROR,B(Z,"aria-label",i(d)===me.LOADING?u().loading:u().getAudioChallenge)}),ue("click",Z,()=>ke(),!0),U(T,Z)};fe(m,T=>{r().audio&&T(En)})}var Sn=X(m,2);se(pe);var ct=X(pe,2),Cn=ve(ct),nr=qt(Cn,!0),Ut=X(Cn,2),Tn=qt(Ut,!0);se(ct),se(je);var $n=X(je,2);{var Re=T=>{var Z=hl();xt(Z,Vt=>w(h,Vt),()=>i(h)),ue("error",Z,q),ue("loadstart",Z,le),ue("canplay",Z,z),ue("pause",Z,_e),ue("playing",Z,V),ue("ended",Z,M),U(T,Z)};fe($n,T=>{i(E)&&T(Re)})}return se(de),we(()=>{lt(mt,u().enterCodeFromImage),B(C,"src",o()),B(ne,"minlength",r().length||1),B(ne,"maxlength",r().length),B(ne,"placeholder",u().enterCode),B(ne,"aria-label",i(d)===me.LOADING?u().loading:i(d)===me.PLAYING?"":u().enterCodeAria),B(ne,"aria-live",i(d)?"assertive":"polite"),B(ne,"aria-busy",i(d)===me.LOADING),B(Sn,"title",u().reload),B(Sn,"aria-label",u().reload),B(Cn,"aria-label",u().verify),lt(nr,u().verify),B(Ut,"aria-label",u().cancel),lt(Tn,u().cancel)}),ue("submit",je,S,!0),Yn("keydown",ne,F),Ys(ne,()=>i(b),T=>w(b,T)),ue("click",Sn,()=>s()?.(),!0),ue("click",Ut,()=>l()?.(),!0),U(e,de),ht(L)}Wn(["keydown"]),Et(ji,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var pl=new Set(["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),gl=te('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),bl=te('<div class="altcha-popover-arrow"></div>'),ml=te('<div role="button" class="altcha-popover-close">&times;</div>'),yl=te('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function Xr(e,t){dt(t,!0);let n=Q(t,"anchor"),r=Q(t,"children"),a=Q(t,"display",7,"standard"),o=Q(t,"backdrop",7,!1),l=Q(t,"onClickOutside"),s=Q(t,"onClickOutsideDelay",7,600),f=Q(t,"onClose"),u=Q(t,"placement",7,"auto"),d=Q(t,"updateUISignal"),h=Q(t,"variant",7,"neutral"),v=er(t,pl),g=P(void 0),b=P(void 0),E=P(!1),M=P(0);Ae(()=>{u()!=="auto"&&w(E,u()==="top")}),Ae(()=>{d()&&_e()}),Fr(()=>{const C=a()==="bottomsheet"||a()==="overlay";return C&&(i(b)&&document.body.append(i(b)),i(g)&&document.body.append(i(g))),_e(),Nt().then(()=>{w(M,Date.now(),!0)}),()=>{C&&(i(b)&&document.body.removeChild(i(b)),i(g)&&document.body.removeChild(i(g)))}});function q(){f()?.()}function z(C){const pe=C.target;!i(g)?.contains(pe)&&(!s()||i(M)+s()<Date.now())&&l()?.()}function le(){_e()}function V(){_e()}function _e(){if(n()&&u()==="auto"&&i(g)){const C=n().getBoundingClientRect(),ne=document.documentElement.clientHeight-(C.top+C.height)<i(g).clientHeight;i(E)!==ne&&w(E,ne)}}var F={get anchor(){return n()},set anchor(C){n(C),G()},get children(){return r()},set children(C){r(C),G()},get display(){return a()},set display(C="standard"){a(C),G()},get backdrop(){return o()},set backdrop(C=!1){o(C),G()},get onClickOutside(){return l()},set onClickOutside(C){l(C),G()},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(C=600){s(C),G()},get onClose(){return f()},set onClose(C){f(C),G()},get placement(){return u()},set placement(C="auto"){u(C),G()},get updateUISignal(){return d()},set updateUISignal(C){d(C),G()},get variant(){return h()},set variant(C="neutral"){h(C),G()}},S=yl();ue("click",Pt,z,!0),ue("resize",Pt,le),ue("scroll",Pt,V);var W=Kt(S);{var ke=C=>{var pe=gl();xt(pe,ne=>w(b,ne),()=>i(b)),U(C,pe)};fe(W,C=>{o()&&C(ke)})}var L=X(W,2);Qn(L,()=>({...v,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":h(),"data-top":i(E),"data-display":a()}));var de=ve(L);{var je=C=>{var pe=bl();U(C,pe)};fe(de,C=>{a()==="standard"&&C(je)})}var Ie=X(de,2);{var ze=C=>{var pe=ml();ue("click",pe,q,!0),U(C,pe)};fe(Ie,C=>{a()!=="standard"&&C(ze)})}var ee=X(Ie,2),mt=ve(ee);return Is(mt,()=>r()??wt),se(ee),se(L),xt(L,C=>w(g,C),()=>i(g)),U(e,S),ht(F)}Et(Xr,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});function wl(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function _l(e,t="altcha-css",n){if(typeof document<"u"&&document&&!document.getElementById(t)){const r=document.createElement("style");r.id=t,r.textContent=e;const a=document.currentScript?.nonce??document.querySelector('meta[name="csp-nonce"]')?.content;a&&(r.nonce=a),document.head.appendChild(r)}}async function zi(e){const{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:o=v=>v>1?Math.floor(v/2):0,counterMode:l,timeout:s=9e4}=e,f=Math.min(16,Math.max(1,n)),u=[],d=()=>{for(const v of u)v.terminate()};for(let v=0;v<f;v++)u.push(await a(t.parameters.algorithm));let h=null;try{h=await Promise.race(u.map((v,g)=>(r.signal.addEventListener("abort",()=>{v.postMessage({type:"abort"})}),new Promise((b,E)=>{v.addEventListener("error",M=>{E(M)}),v.addEventListener("message",M=>{if(M.data){for(const q of u)q!==v&&q.postMessage({type:"abort"});if(M.data.error)return E(new Error(M.data.error))}b(M.data)}),v.postMessage({challenge:t,counterMode:l,counterStart:g,counterStep:f,timeout:s,type:"work"})}))))}catch(v){if(v instanceof Error&&!!v?.message?.includes("Out of memory")&&o){d();const b=o(f);if(b)return zi({...e,challenge:t,controller:r,concurrency:b,createWorker:a})}throw v}finally{d()}return r.signal.aborted?null:h||null}class kl{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(t={}){const{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}onFocus=t=>{if(this.focusInteraction===2)return;const n=t.target;if(!(n instanceof Element))return;const r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)};onInteraction=t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)};onPointer=t=>{if(t.pointerType==="touch")return;const n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))};onScroll=()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))};onTouchMove=t=>{const n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))}}var xl=te('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),El=te('<div class="altcha-overlay-content"></div>'),Sl=te('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),Cl=te('<div class="altcha-floating-arrow"></div>'),Tl=te('<input type="hidden"/>'),$l=te('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Hi=te('<div class="altcha-error"> </div>'),Al=te("<!> <!>",1),Il=te('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function Rl(e,t){dt(t,!0);const n=()=>Ua(d,"$altchaDefaults",a),r=()=>Ua(b,"$altchaI18nStore",a),[a,o]=Yo(),l='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',s='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:d}=globalThis.$altcha.defaults,h=navigator.hardwareConcurrency||2,v=navigator.deviceMemory||0,g=v&&v<=4?Math.min(4,h):h,b=globalThis.$altcha.i18n.store,E=t.$$host,M=(c,p)=>{Nt().then(()=>{E?.dispatchEvent(new CustomEvent(c,{detail:p}))})};let q=null,z=P(vt(new URL(location.origin))),le=P(!1),V=P(null),_e=P(null),F=P(null),S=P(vt(j.UNVERIFIED)),W=P(void 0),ke=P(void 0),L=P(null),de=P(void 0),je=P(null),Ie=P(null),ze=P(null),ee=P(null),mt=P(vt([])),C=P(0),pe=P(vt({})),ne=P(!0);const m=Ee(()=>({fetch:(c,p)=>fetch(c,p),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:g,...n(),...i(pe)})),En=Ee(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),Sn=Ee(()=>Pl(i(m).type)),ct=Ee(()=>i(m).auto),Cn=Ee(()=>i(S)===j.VERIFYING),nr=Ee(()=>!i(m).hideFooter),Ut=Ee(()=>!i(m).hideLogo&&i(m).display!=="bar"),Tn=Ee(()=>Dl(r(),[i(m).language,document.documentElement.lang,...navigator.languages])),$n=Ee(()=>f.includes(i(Tn).language)?"rtl":void 0),Re=Ee(()=>({...i(Tn).strings})),T=Ee(()=>i(V)?.audio?.match(/^(https?:)?\//)?rr(i(V).audio,i(z),{language:i(m).audioChallengeLanguage||i(Tn).language}).toString():i(V)?.audio),Z=Ee(()=>i(V)?.image?.match(/^(https?:)?\//)?rr(i(V).image,i(z)):i(V)?.image);Ae(()=>{In({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),Ae(()=>{t.theme?E?.setAttribute("theme",t.theme):E?.removeAttribute("theme")}),Ae(()=>{if(t.configuration)try{In(JSON.parse(t.configuration))}catch{Y("unable to parse the `configuration` attribute (JSON expected)")}}),Ae(()=>{i(F)!==i(m).display&&ar(i(m).display)}),Ae(()=>{i(le)&&i(S)===j.VERIFYING&&w(le,!1)}),Ae(()=>{!i(le)&&i(S)===j.VERIFIED&&w(le,!0)}),Ae(()=>{if(!i(le)){const c=aa();c&&c.checked&&(c.checked=!1)}}),Ae(()=>{i(S)===j.VERIFIED&&aa()?.setCustomValidity("")}),Ae(()=>{if(i(ct)==="onload"){const c=setTimeout(()=>{Xt()},1);return()=>{c&&clearTimeout(c)}}}),Ae(()=>{i(Ie)&&Y("error:",i(Ie))}),Ae(()=>{i(ee)&&i(m).setCookie&&Wl(i(ee),i(m).setCookie)}),Fr(()=>(Y("mounted","3.2.4"),E&&globalThis.$altcha.instances.add(E),w(L,i(de)?.closest("form"),!0),i(L)?.addEventListener("reset",Zi),i(L)?.addEventListener("submit",Ji,{capture:!0}),i(L)?.addEventListener("focusin",Wi),Vt(),i(m).humanInteractionSignature&&(Y("human interaction signature enabled"),q=new kl),M("load"),u||Y("secure context (HTTPS) required"),()=>{ta(),E&&globalThis.$altcha.instances.delete(E),i(ze)&&clearTimeout(i(ze)),i(L)?.removeEventListener("reset",Zi),i(L)?.removeEventListener("submit",Ji,{capture:!0}),i(L)?.removeEventListener("focusin",Wi),q?.destroy()}));function Vt(){w(mt,[...globalThis.$altcha.plugins].map(c=>new c(E)),!0),Y("activating plugins",i(mt).map(c=>c.constructor.name));for(const c of i(mt))c.activate()}async function An(c,...p){let _;for(const k of i(mt))_=await k[c].call(k,...p);return _}function ta(){for(const c of i(mt))c.destroy()}function na(c){const[p,_]=c.salt.split("?"),k={};if(_)try{Object.assign(k,Object.fromEntries(new URLSearchParams(_).entries()))}catch{}const A={codeChallenge:c.codeChallenge,parameters:{algorithm:c.algorithm,cost:1,data:k,expiresAt:k?.expires?parseInt(k.expires,10):void 0,keyLength:c.algorithm==="SHA-512"?64:c.algorithm==="SHA-384"?48:32,nonce:wl(new TextEncoder().encode(c.salt)),keyPrefix:c.challenge,salt:""},signature:c.signature};return Object.defineProperties(A,{_originalSalt:{enumerable:!1,value:c.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),A}function ra(c,p){return{algorithm:c.parameters.algorithm,challenge:c.parameters.keyPrefix,number:p.counter,salt:"_originalSalt"in c?c._originalSalt:c.parameters.nonce,signature:c.signature,took:p.time||0}}async function Se(c){await new Promise(p=>setTimeout(p,c))}async function ut(c=i(m).challenge,p){const _=await An("onFetchChallenge",c);let k=null;if(_!==void 0)return _;if(typeof c=="string")if(c.startsWith("{")){Y("parsing JSON challenge");try{k=JSON.parse(c)}catch{throw new Error("Unable to parse JSON challenge.")}}else{Y("fetching challenge from",p?.method||"GET",c),w(z,new URL(c,location.origin),!0);const A=await i(m).fetch(c,{credentials:i(m).credentials||void 0,...p});await Qi(A);const $=A.headers.get("x-altcha-config");$&&ql($);const H=await A.json();if(H&&"his"in H&&H.his){if(Y("requested HIS"),!q)throw new Error("Server requested HIS data but collector is disabled.");return ut(rr(H.his.url,i(z)),{body:JSON.stringify({his:q.export()}),headers:{"content-type":"application/json"},method:"POST"})}H&&"hisResult"in H&&H.hisResult&&Y("HIS result",H.hisResult),k=H}else if(c&&typeof c=="object")try{k=JSON.parse(JSON.stringify(c))}catch{throw new Error("Unable to parse JSON challenge.")}if(Ol(k)&&(k=na(k)),!Ll(k))throw new Error("Challenge validation failed.");return k}function Ol(c){return typeof c=="object"&&"challenge"in c}function Ll(c){return!!c&&typeof c=="object"&&"parameters"in c&&!!c.parameters&&typeof c.parameters=="object"&&"algorithm"in c.parameters&&"nonce"in c.parameters&&"salt"in c.parameters&&"keyPrefix"in c.parameters}function aa(){return document.getElementById(i(En))}function Pl(c){switch(c){case"checkbox":return Vi;case"switch":return Bi;case"native":default:return Fi}}function Dl(c,p){const _=Object.keys(c).map(A=>A.toLowerCase());let k=p.reduce((A,$)=>($=$.toLowerCase(),A||(c[$]?$:null)||_.find(H=>$.split("-")[0]===H.split("-")[0])||null),null);return c[k||""]||(k="en"),{language:k,strings:c[k]}}function Ml(c){switch(c){case"bar":return i(m).barPlacement||"bottom";case"floating":return i(m).floatingPlacement||"auto";default:return}}function Nl(c){return[...i(L)?.querySelectorAll(l)||[]].reduce((_,k)=>{const A=k.name,$=k.value;return A&&$&&(_[A]=/\n/.test($)?$.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):$),_},{})}function Ul(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function rr(c,p,_){const k=new URL(c,p);if(k.search||(k.search=p.search),_)for(const A in _)_[A]!==void 0&&_[A]!==null&&k.searchParams.set(A,_[A]);return k.toString()}function Vl(c){!i(le)&&c.currentTarget.checked?(c.preventDefault(),c.currentTarget.checked=!1,i(S)!==j.VERIFYING&&Xt()):c.currentTarget.checked||(c.preventDefault(),He())}function Fl(c){i(S)===j.VERIFYING?c.currentTarget.setCustomValidity(i(Re).waitAlert):i(m).validationMessage&&c.currentTarget.setCustomValidity(i(m).validationMessage)}function Bl(){ar(i(m).display),He()}function jl(){ir()}function zl(c){const p=c.target;i(m).display==="floating"&&p&&!E?.contains(p)&&!p.hasAttribute("data-backdrop")&&!p.closest("[data-popover]")&&i(S)!==j.VERIFIED&&!i(m).floatingPersist&&ia()}function Wi(c){i(ct)==="onfocus"&&i(S)===j.UNVERIFIED&&Xt()}function Zi(){ar(i(m).display),He()}function Ji(c){c.target?.getAttribute("data-code-challenge")!=="true"&&i(ct)==="onsubmit"&&i(S)===j.UNVERIFIED&&(c.preventDefault(),c.stopPropagation(),w(je,c.submitter,!0),oa(),Xt().then(_=>{_&&!i(V)&&Nt().then(()=>{Xi(i(je))})}))}function Hl(c){c.persisted&&(ar(i(m).display),He())}function Kl(){ir()}function ql(c){try{const p=JSON.parse(c);p&&typeof p=="object"&&In({serverVerificationFields:p?.sentinel?.fields,serverVerificationTimeZone:p?.sentinel?.timeZone,verifyUrl:p.verifyurl,...p})}catch(p){Y("unable to configure from x-altcha-config header",p)}}function Gl(c=20){if(!i(de))return;const p=i(m).floatingPlacement;if(!i(ke)&&(w(ke,(i(m).floatingAnchor instanceof HTMLElement?i(m).floatingAnchor:i(m).floatingAnchor?document.querySelector(i(m).floatingAnchor):i(L)?.querySelector(s))||i(L),!0),!i(ke))){Y("unable to find floating anchor element");return}const _=parseInt(i(m).floatingOffset,10)||12,k=i(ke).getBoundingClientRect(),A=i(de).getBoundingClientRect(),$=document.documentElement.clientHeight,H=document.documentElement.clientWidth,De=!p||p==="auto"?k.bottom+A.height+_+c>$:p==="top",J=Math.max(c,Math.min(H-c-A.width,k.left+k.width/2-A.width/2));if(i(de).style.setProperty("--altcha-floating-left",`${J}px`),i(de).style.setProperty("--altcha-floating-top",De?`${k.top-(A.height+_)}px`:`${k.bottom+_}px`),i(de).setAttribute("data-floating-position",De?"top":"bottom"),i(W)){const ge=i(W).getBoundingClientRect();i(W).style.left=k.left-J+k.width/2-ge.width/2+"px"}}async function Yl(c,p){const _=await An("onRequestServerVerification",c,p);if(_!==void 0)return _;if(Y("requesting server verification from",i(m).verifyUrl),!i(m).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const k=await i(m).fetch(rr(i(m).verifyUrl,i(z)),{body:JSON.stringify({code:p,fields:i(m).serverVerificationFields?Nl():void 0,payload:c,timeZone:i(m).serverVerificationTimeZone?Ul():void 0}),credentials:i(m).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await Qi(k);const A=await k.json();return A&&typeof A=="object"&&"payload"in A&&A.payload&&M("serververification",A),A}function Xi(c){i(L)&&"requestSubmit"in i(L)?i(L).requestSubmit(c):i(L)?.reportValidity()&&(c?c.click():i(L).submit())}function Wl(c,p={}){const{domain:_,name:k=i(m).name,maxAge:A,path:$,sameSite:H,secure:De}=p;let J=`${encodeURIComponent(k)}=${encodeURIComponent(c)}`;_&&(J+=`; Domain=${_}`),A!=null&&(J+=`; Max-Age=${A}`),$&&(J+=`; Path=${$}`),H&&(J+=`; SameSite=${H}`),De&&(J+="; Secure"),document.cookie=J}function ar(c){switch(c){case"bar":case"floating":case"overlay":ia(),(!i(ct)||i(ct)==="off")&&(i(pe).auto="onsubmit");break;case"standard":oa()}i(F)!==c&&w(F,c,!0)}function Zl(c){i(ze)&&clearTimeout(i(ze));const p=()=>{i(S)!==j.UNVERIFIED?(w(le,!1),Ke(j.EXPIRED)):He(),M("expired")},_=c*1e3-Date.now();_>=1?w(ze,setTimeout(p,_),!0):p()}async function Qi(c){if(c.status>=400){if(c.headers.get("content-type")?.includes("/json")){let _;try{_=await c.json()}catch{}if(_&&"error"in _)throw new Error(`Server responded with ${c.status} - ${_.error}`)}throw new Error(`Server responded with ${c.status}.`)}const p=c.headers.get("content-type");if(!p||!p.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${p}.`)}async function eo(c){if(!i(ee)){Ke(j.ERROR,"Cannot verify code challenge without PoW payload.");return}Ke(j.VERIFYING);let p=null;if(i(m).verifyUrl)p=await Yl(i(ee),c);else if(i(m).verifyFunction)p=await i(m).verifyFunction(i(ee),c);else{Ke(j.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}p?.payload&&(w(ee,p.payload,!0),Y("server payload",i(ee))),p?.verified===!0?(Y("verified"),Ke(j.VERIFIED),M("verified",{payload:i(ee)}),i(ct)==="onsubmit"&&Nt().then(()=>{Xi(i(je))})):Ke(j.ERROR,p?.reason||"Verification failed."),i(m).disableAutoFocus||aa()?.focus()}function In(c){Object.assign(i(pe),{...Object.fromEntries(Object.entries(c).filter(([p,_])=>_!==void 0))})}function Jl(){return{...i(m)}}function Xl(){return i(S)}function ia(){w(ne,!1)}function Y(...c){(i(m).debug||c.some(p=>p instanceof Error))&&console[c[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${i(m).name}]`,...c)}function He(c=j.UNVERIFIED,p=null){w(le,!1),w(Ie,p,!0),w(ee,null),i(_e)&&i(_e).abort(),i(ze)&&(clearTimeout(i(ze)),w(ze,null)),Ke(c)}function Ke(c,p=null){w(S,c,!0),w(Ie,p,!0),M("statechange",{payload:i(ee),state:i(S)})}function oa(){w(ne,!0),Nt().then(()=>{ir()})}function ir(){switch(i(m).display){case"floating":return Gl()}w(C,i(C)+1)}async function Xt(c={}){const{concurrency:p=Math.max(1,i(m).workers),controller:_=new AbortController,minDuration:k=i(m).minDuration}=c,A=performance.now();let $=null,H=null,De=!1;const J=await An("onVerify",c);if(J!==void 0)return J;He(j.VERIFYING),w(_e,_,!0);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(i(m).mockError)throw new Error("Mock error.");if(i(m).test)return Y("running test mode with null challenge"),await Se(Math.max(0,k-(performance.now()-A))),i(_e)?.signal.aborted?(He(),null):(w(ee,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),Y("verified"),Ke(j.VERIFIED),M("verified",{payload:i(ee)}),{payload:i(ee)});if($=await ut(),!$)throw new Error("Failed to fetch challenge.");Y("challenge",$),"configuration"in $&&(Y("re-configuring from challenge",$.configuration),In($.configuration)),$.parameters.expiresAt&&Zl($.parameters.expiresAt),De="_version"in $&&$._version===1;const ge=globalThis.$altcha.algorithms.get($.parameters.algorithm);if(!ge)throw new Error(`Unsupported algorithm ${$.parameters.algorithm}.`);if(H=await zi({challenge:$,concurrency:p,controller:_,createWorker:ge,counterMode:De?"string":"uint32",onOutOfMemory:St=>{if(Y("out of memory error received"),M("outofmemory"),i(m).retryOnOutOfMemoryError&&St>1){const Ct=Math.floor(St/2);return Y(`retrying with ${Ct} workers...`),Ct}},timeout:i(m).timeout}),i(_e)?.signal.aborted)return He(),null;if(!H)throw new Error("Failed to find solution.");Y("solution",H),await Se(Math.max(0,k-(performance.now()-A))),w(V,$.codeChallenge||i(m).codeChallenge||null,!0),De?w(ee,btoa(JSON.stringify(ra($,H))),!0):w(ee,btoa(JSON.stringify({challenge:{parameters:$.parameters,signature:$.signature},solution:H})),!0),i(V)?(Y("requesting code verification"),Ke(j.CODE),M("codechallenge",{codeChallenge:i(V)})):i(m).verifyUrl?await eo():(Y("verified"),Ke(j.VERIFIED),M("verified",{payload:i(ee)}))}catch(ge){return Y("verification failed",ge),Ke(j.ERROR,String(ge)),null}finally{w(_e,null)}return{challenge:$,payload:i(ee),solution:H}}var Ql={configure:In,getConfiguration:Jl,getState:Xl,hide:ia,log:Y,reset:He,setState:Ke,show:oa,updateUI:ir,verify:Xt},to=Il();ue("scroll",mr,jl),ue("click",mr,zl),ue("pageshow",Pt,Hl),ue("resize",Pt,Kl);var no=Kt(to);{var ec=c=>{var p=xl();U(c,p)};fe(no,c=>{i(m).display==="overlay"&&i(ne)&&c(ec)})}var ft=X(no,2),ro=ve(ft);{var tc=c=>{var p=Sl(),_=Kt(p),k=X(_,2);{var A=$=>{var H=El();Si(H,()=>document.querySelector(i(m).overlayContent)?.innerHTML,!0),se(H),U($,H)};fe(k,$=>{i(m).overlayContent&&$(A)})}ue("click",_,Bl,!0),U(c,p)};fe(ro,c=>{i(m).display==="overlay"&&i(ne)&&c(tc)})}var sa=X(ro,2),la=ve(sa),ca=ve(la),ao=ve(ca);{let c=Ee(()=>i(m).display==="standard"&&i(ct)!=="onsubmit"||i(S)===j.VERIFYING);Ls(ao,()=>i(Sn),(p,_)=>{_(p,{get id(){return i(En)},name:"",get required(){return i(c)},get loading(){return i(Cn)},get checked(){return i(le)},onchange:Vl,oninvalid:Fl})})}var ua=X(ao,2),nc=ve(ua);{var rc=c=>{var p=Zn();we(()=>lt(p,i(Re).verificationRequired)),U(c,p)},ac=c=>{var p=Zn();we(()=>lt(p,i(Re).verifying)),U(c,p)},ic=c=>{var p=Zn();we(()=>lt(p,i(Re).verified)),U(c,p)},oc=c=>{var p=Zn();we(()=>lt(p,i(Re).label)),U(c,p)};fe(nc,c=>{i(S)===j.CODE&&i(V)?c(rc):i(S)===j.VERIFYING?c(ac,1):i(S)===j.VERIFIED?c(ic,2):c(oc,-1)})}se(ua),se(ca);var sc=X(ca,2);{var lc=c=>{Zr(c,{get strings(){return i(Re)}})};fe(sc,c=>{i(Ut)&&c(lc)})}se(la);var io=X(la,2);{var cc=c=>{{let p=Ee(()=>i(m).display==="bar"&&i(Ut));Jr(c,{get logo(){return i(p)},get strings(){return i(Re)}})}};fe(io,c=>{i(nr)&&c(cc)})}var oo=X(io,2);{var uc=c=>{var p=Cl();xt(p,_=>w(W,_),()=>i(W)),U(c,p)};fe(oo,c=>{i(m).display==="floating"&&c(uc)})}var fc=X(oo,2);{var dc=c=>{var p=Tl();Kr(p),we(()=>{B(p,"name",i(m).name),qs(p,i(ee))}),U(c,p)};fe(fc,c=>{i(m).setCookie||c(dc)})}se(sa);var hc=X(sa,2);{var vc=c=>{Xr(c,{get anchor(){return i(de)},onClickOutside:()=>{u&&He()},get placement(){return i(m).popoverPlacement},role:"alert",variant:"error",get dir(){return i($n)},get updateUISignal(){return i(C)},children:(p,_)=>{var k=ki(),A=Kt(k);{var $=J=>{var ge=$l();U(J,ge)},H=J=>{var ge=Hi(),St=qt(ge,!0);we(()=>lt(St,i(Re).expired)),U(J,ge)},De=J=>{var ge=Hi(),St=qt(ge,!0);we(()=>{B(ge,"title",i(Ie)),lt(St,i(Re).error)}),U(J,ge)};fe(A,J=>{!i(Ie)&&!u?J($):!i(Ie)&&i(S)===j.EXPIRED?J(H,1):J(De,-1)})}U(p,k)},$$slots:{default:!0}})},pc=c=>{var p=ki(),_=Kt(p);Os(_,()=>i(V),k=>{{let A=Ee(()=>i(m).codeChallengeDisplay!=="standard");Xr(k,{get anchor(){return i(de)},get backdrop(){return i(A)},get display(){return i(m).codeChallengeDisplay},onClose:()=>{He()},get placement(){return i(m).popoverPlacement},role:"dialog",get"aria-label"(){return i(Re).verificationRequired},get dir(){return i($n)},get updateUISignal(){return i(C)},children:($,H)=>{var De=Al(),J=Kt(De);ji(J,{get audioUrl(){return i(T)},get imageUrl(){return i(Z)},onCancel:()=>He(),onReload:()=>Xt(),onSubmit:Ct=>eo(Ct),get codeChallenge(){return i(V)},get config(){return i(m)},get strings(){return i(Re)}});var ge=X(J,2);{var St=Ct=>{Jr(Ct,{get logo(){return i(Ut)},get strings(){return i(Re)}})};fe(ge,Ct=>{i(nr)&&i(m).codeChallengeDisplay!=="standard"&&Ct(St)})}U($,De)},$$slots:{default:!0}})}}),U(c,p)};fe(hc,c=>{i(Ie)||i(S)===j.EXPIRED||!u?c(vc):i(V)&&i(S)===j.CODE&&c(pc,1)})}se(ft),xt(ft,c=>w(de,c),()=>i(de)),we(c=>{B(ft,"data-state",i(S)),B(ft,"data-display",i(m).display||void 0),B(ft,"data-placement",c),B(ft,"data-visible",i(ne)||void 0),B(ft,"dir",i($n)),B(ua,"for",i(En)),ft.dir=ft.dir},[()=>Ml(i(m).display)]),U(e,to);var gc=ht(Ql);return o(),gc}typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",Et(Rl,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const Ki=`(function() {
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
`,qi=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",Ki],{type:"text/javascript;charset=utf-8"});function Qr(e){let t;try{if(t=qi&&(self.URL||self.webkitURL).createObjectURL(qi),!t)throw"";const n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Ki),{name:e?.name})}}const Gi=`(function() {
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
`,Yi=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",Gi],{type:"text/javascript;charset=utf-8"});function ea(e){let t;try{if(t=Yi&&(self.URL||self.webkitURL).createObjectURL(Yi),!t)throw"";const n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Gi),{name:e?.name})}}return _l(`:root {
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
}`),$altcha.algorithms.set("SHA-256",()=>new ea),$altcha.algorithms.set("SHA-384",()=>new ea),$altcha.algorithms.set("SHA-512",()=>new ea),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Qr),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Qr),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Qr),so}bc();const sr=()=>{};function mc(y,x){return y!=y?x==x:y!==x||y!==null&&typeof y=="object"||typeof y=="function"}function yc(y,x,K){if(y==null)return x(void 0),sr;const ae=_c(()=>y.subscribe(x,K));return ae.unsubscribe?()=>ae.unsubscribe():ae}const Qt=[];function wc(y,x=sr){let K=null;const ae=new Set;function nn(Ce){if(mc(y,Ce)&&(y=Ce,K)){const rn=!Qt.length;for(const Ne of ae)Ne[1](),Qt.push(Ne,y);if(rn){for(let Ne=0;Ne<Qt.length;Ne+=2)Qt[Ne][0](Qt[Ne+1]);Qt.length=0}}}function Tt(Ce){nn(Ce(y))}function yt(Ce,rn=sr){const Ne=[Ce,rn];return ae.add(Ne),ae.size===1&&(K=x(nn,Tt)||sr),Ce(y),()=>{ae.delete(Ne),ae.size===0&&K&&(K(),K=null)}}return{set:nn,update:Tt,subscribe:yt}}function or(y){let x;return yc(y,K=>x=K)(),x}let fa=!1;function _c(y){var x=fa;try{return fa=!0,y()}finally{fa=x}}function co(y){const x={get:K=>or(x.store)[K],set:(K,ae)=>{typeof K=="string"?Object.assign(or(x.store),{[K]:ae}):Object.assign(or(x.store),K),x.store.set(or(x.store))},store:wc(y)};return x}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:co({}),i18n:co({}),instances:new Set,plugins:new Set};const kc={ariaLinkLabel:"Altcha (offizielle Website)",enterCode:"Code eingeben",enterCodeAria:"Geben Sie den Code ein, den Sie hören. Drücken Sie die Leertaste, um die Audio abzuspielen.",error:"Überprüfung fehlgeschlagen. Bitte versuchen Sie es später erneut.",expired:"Überprüfung abgelaufen. Bitte versuchen Sie es erneut.",footer:'Geschützt durch <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (offizielle Website)">ALTCHA</a>',getAudioChallenge:"Audio-Herausforderung anfordern",label:"Ich bin kein Roboter",loading:"Lade...",reload:"Neu laden",verify:"Überprüfen",verificationRequired:"Überprüfung erforderlich!",verified:"Überprüft",verifying:"Wird überprüft...",waitAlert:"Überprüfung läuft... bitte warten.",cancel:"Abbrechen",enterCodeFromImage:"Um fortzufahren, geben Sie bitte den Code aus dem Bild unten ein."};globalThis.$altcha.i18n.set("de",kc);$altcha.i18n.set("de",{...$altcha.i18n.get("de"),error:"Überprüfung fehlgeschlagen. Bitte versucht es später erneut.",expired:"Überprüfung abgelaufen. Bitte versucht es erneut."});const Me=document.getElementById("waitlist-form"),da=document.getElementById("altcha");let en=null;da?.addEventListener("statechange",y=>{const{state:x,payload:K}=y.detail;en=x==="verified"&&K?K:null});const ha=document.getElementById("form-wrapper"),va=document.getElementById("form-success"),Ft=document.getElementById("form-error"),xc=Ft?.textContent?.trim()??"",Ec="Heute sind ungewöhnlich viele Anmeldungen eingegangen. Bitte versucht es morgen erneut oder kontaktiert uns telefonisch.",Ln=document.getElementById("submit-btn"),Rn=document.getElementById("submit-label"),Sc=document.getElementById("reset-form"),Dn=new Set,Pn={vornameKind:"err-vorname-kind",nachnameKind:"err-nachname-kind",geburtsdatum:"err-geburtsdatum",nameEltern:"err-name-eltern",email:"err-email",telefon:"err-telefon",betreuungsumfang:"err-betreuungsumfang",betreuungsbeginn:"err-betreuungsbeginn"};function uo(){const y=new Date;return y.setHours(0,0,0,0),y}function On(y){return Me?.querySelector(`[name="${y}"]`)?.value.trim()??""}function po(y){if(!Me)return"";switch(y){case"vornameKind":case"nachnameKind":case"nameEltern":return On(y)?"":"Dieses Feld ist erforderlich.";case"email":{const x=On("email");return x?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(x)?"":"Bitte eine gültige E-Mail-Adresse eingeben.":"E-Mail-Adresse ist erforderlich."}case"telefon":{const x=On("telefon");return x&&!/^\+?[\d\s\-\/\(\)]{7,20}$/.test(x)?"Bitte eine gültige Telefonnummer eingeben.":""}case"geburtsdatum":{const x=On("geburtsdatum");return x?new Date(x)>uo()?"Geburtsdatum darf nicht in der Zukunft liegen.":"":"Geburtsdatum ist erforderlich."}case"betreuungsbeginn":{const x=On("betreuungsbeginn");return x?new Date(x)<=uo()?"Betreuungsbeginn muss in der Zukunft liegen.":"":"Betreuungsbeginn ist erforderlich."}case"betreuungsumfang":return Me.querySelector(`input[name="${y}"]:checked`)?"":"Bitte eine Option auswählen.";default:return""}}function pa(y){const x=Pn[y];if(!x)return;const K=document.getElementById(x);if(!K)return;const ae=po(y);K.textContent=ae,K.classList.toggle("hidden",!ae)}function fo(y){Dn.add(y),pa(y),tn()}function tn(){if(!Ln)return;const y=Object.keys(Pn).some(x=>po(x)!=="");Ln.disabled=y}function Cc(){Object.keys(Pn).forEach(y=>{Dn.add(y),pa(y)}),tn()}Me&&(Me.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="date"]').forEach(y=>{const x=y.name;Pn[x]&&(y.addEventListener("blur",()=>fo(x)),y.addEventListener("input",()=>{Dn.has(x)&&pa(x),tn()}))}),Me.querySelectorAll('input[type="radio"]').forEach(y=>{Pn[y.name]&&y.addEventListener("change",()=>fo(y.name))}));tn();const Tc=new Date().toISOString().split("T")[0],$c=new Date(Date.now()+864e5).toISOString().split("T")[0],ho=Me?.querySelector('[name="geburtsdatum"]'),vo=Me?.querySelector('[name="betreuungsbeginn"]');ho&&(ho.max=Tc);vo&&(vo.min=$c);Me?.addEventListener("submit",async y=>{if(y.preventDefault(),!(!Me||!Ln||!Rn)&&(Cc(),!Ln.disabled)){Ft?.classList.add("hidden"),Ft&&(Ft.textContent=xc),Ln.disabled=!0,Rn.textContent="Wird gesendet…";try{if(!en){if(Rn.textContent="Wird geprüft…",en=(await da?.verify())?.payload??null,!en)throw new Error("altcha failed");Rn.textContent="Wird gesendet…"}const x={...Object.fromEntries(new FormData(Me)),altcha:en},K=await fetch(Me.action,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(x)}),ae=await K.json().catch(()=>({}));if(K.status===429)throw Ft&&(Ft.textContent=Ec),new Error("daily limit");if(!K.ok||!ae.success)throw new Error("submit failed");Me.reset(),Dn.clear(),ha?.classList.add("hidden"),va?.classList.remove("hidden"),va?.scrollIntoView({behavior:"smooth",block:"center"})}catch{Ft?.classList.remove("hidden")}finally{en=null,da?.reset(),Rn.textContent="Anmeldung absenden 🚀",tn()}}});Sc?.addEventListener("click",()=>{va?.classList.add("hidden"),ha?.classList.remove("hidden"),Dn.clear(),tn(),ha?.scrollIntoView({behavior:"smooth",block:"center"})});
