import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,A as n,B as r,E as i,F as a,G as o,H as s,J as c,K as l,L as u,M as d,N as f,O as p,P as m,Q as h,S as g,U as _,W as v,_ as y,b,c as x,d as S,f as C,it as w,k as T,l as E,m as D,n as O,o as k,ot as A,p as j,q as M,r as N,rt as P,s as F,st as I,t as L,u as R,v as z,w as B,x as V,z as H}from"./client-BYAvDGw8.js";import{n as U,t as W}from"./iframe-e20OM7IZ.js";import{i as ee,n as te,r as ne,t as re}from"./create-runtime-stories-DATh2M70.js";import{a as G,c as ie,i as ae,l as K,n as oe,o as se,r as ce,s as le,t as ue}from"./List-7Enlu9FH.js";import{i as de,n as fe,r as q,t as J}from"./Input-BBnGvw_C.js";function pe(e){let t=e-1;return t*t*t+1}function me(e,t){for(let n in t)e[n]=t[n];return e}function he({fallback:e,...t}){let n=new Map,r=new Map;function i(e,n,r){let{delay:i=0,duration:a=e=>Math.sqrt(e)*30,easing:o=pe}=me(me({},t),r),s=e.getBoundingClientRect(),c=n.getBoundingClientRect(),l=s.left-c.left,u=s.top-c.top,d=s.width/c.width,f=s.height/c.height,p=Math.sqrt(l*l+u*u),m=getComputedStyle(n),h=m.transform===`none`?``:m.transform,g=+m.opacity;return{delay:i,duration:typeof a==`function`?a(p):a,easing:o,css:(e,t)=>`
			   opacity: ${e*g};
			   transform-origin: top left;
			   transform: ${h} translate(${t*l}px,${t*u}px) scale(${e+(1-e)*d}, ${e+(1-e)*f});
		   `}}function a(t,n,r){return(a,o)=>(t.set(o.key,a),()=>{if(n.has(o.key)){let e=n.get(o.key);return n.delete(o.key),i(e,a,o)}return t.delete(o.key),e&&e(a,o,r)})}return[a(r,n,!1),a(n,r,!0)]}var ge=e((()=>{}));function _e(e,t){let n=O(t,`class`,3,null);var r=T(),i=_(r),a=e=>{var r=ve();H(()=>j(r,1,D([`selection-indicator`,n()]))),y(1,r,()=>t.receive,()=>({key:t.key})),y(2,r,()=>t.send,()=>({key:t.key})),p(e,r)};g(i,e=>{t.visible&&e(a)}),p(e,r)}var ve,ye=e((()=>{I(),L(),ve=n(`<div></div>`),_e.__docgen={data:[{name:`visible`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1},{name:`send`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1},{name:`receive`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1},{name:`key`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1}],name:`SelectionIndicator.svelte`}}));function be(e,n){let r=d();t(n,!0);let o=O(n,`value`,15,null),l=O(n,`tabs`,19,()=>[]),f=O(n,`children`,3,null),m=N(n,[`$$slots`,`$$events`,`$$legacy`,`value`,`tabs`,`children`]),y=c(()=>o()!==null&&l().find(e=>o()===K(e))||null),[x,C]=he({duration:e=>Math.sqrt(e*200)});var E=Se();j(E,1,D([`tabs`]));var k=s(E);b(k,21,l,V,(e,t)=>{let n=c(()=>o()===K(u(t)));var l=xe(),d=s(l);{let e=c(()=>`selection-${r}`);_e(d,{class:`tabs__indicator`,get key(){return u(e)},get send(){return x},get receive(){return C},get visible(){return u(n)}})}var f=v(d);w(l),H(e=>{j(l,1,D([`tabs__tab`,u(n)&&`is-selected`])),S(l,`tabindex`,u(n)?0:-1),S(l,`aria-selected`,u(n)),i(f,` ${e??``}`)},[()=>ie(u(t))]),a(`click`,l,()=>o(K(u(t)))),p(e,l)}),w(k);var M=v(k,2),P=s(M),F=e=>{let t=c(()=>u(y).component);var n=T();z(_(n),()=>u(t),(e,t)=>{t(e,{})}),p(e,n)},I=e=>{var t=T();B(_(t),()=>m[u(y).snippet],()=>u(y)),p(e,t)};g(P,e=>{u(y)?.component?e(F):u(y)?.snippet&&e(I,1)}),B(v(P,2),()=>f()??A),w(M),w(E),p(e,E),h()}var xe,Se,Ce=e((()=>{I(),L(),ge(),le(),ye(),xe=n(`<div role="tab"><!> </div>`),Se=n(`<div><div class="tabs__head" role="tablist"></div> <div class="tabs__body" role="tabpanel"><!> <!></div></div>`),m([`click`]),be.__docgen={data:[{name:`value`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`...`},{name:`tabs`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`array`,text:`any[]`},static:!1,readonly:!1,defaultValue:`[]`},{name:`children`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`}],name:`Tabs.svelte`}}));function we(e,n){t(n,!0);let r=O(n,`interactive`,3,!1),l=O(n,`columns`,19,()=>[]),d=O(n,`rows`,19,()=>[]),f=O(n,`rowKey`,3,`id`),m=O(n,`selected`,15,null),y=O(n,`sortedBy`,31,()=>o([])),x=N(n,[`$$slots`,`$$events`,`$$legacy`,`interactive`,`columns`,`rows`,`rowKey`,`selected`,`sortedBy`]);function S(e,t){return typeof t.value==`string`?e[t.value]:t.value(e)}let C=c(()=>d().slice().sort((e,t)=>{for(let n of y()){let r=S(e,l()[n.index]),i=S(t,l()[n.index]);if(r!=i)return typeof r==`number`&&typeof i==`number`?(r-i)*n.order:(r+``).localeCompare(i+``)*n.order}return 0}));var E=Oe(),k=s(E),A=s(k),M=s(A);b(M,21,l,V,(e,t,n)=>{var r=Te(),o=s(r,!0);w(r),H(()=>i(o,u(t).title)),a(`click`,r,()=>y(y().length==1&&y()[0].index==n?[{index:n,order:-y()[0].order}]:[{index:n,order:1}])),p(e,r)}),w(M),w(A);var P=v(A);b(P,21,()=>u(C),V,(e,t,n)=>{var r=De();b(r,21,l,V,(e,r,a)=>{var o=T(),c=_(o),l=e=>{var i=T();B(_(i),()=>x[u(r).snippet],()=>u(t),()=>u(r),()=>n,()=>a,d),p(e,i)},f=e=>{var n=Ee(),a=s(n,!0);w(n),H(e=>i(a,e),[()=>S(u(t),u(r))]),p(e,n)};g(c,e=>{u(r).snippet?e(l):e(f,-1)}),p(e,o)}),w(r),H(()=>j(r,1,D([m()===u(t)[f()]&&`is-selected`]))),a(`click`,r,()=>m(u(t)[f()])),p(e,r)}),w(P),w(k),w(E),H(()=>j(E,1,D([`table`,r()&&`is-interactive`]))),p(e,E),h()}var Te,Ee,De,Oe,ke=e((()=>{I(),L(),Te=n(`<th> </th>`),Ee=n(`<td> </td>`),De=n(`<tr></tr>`),Oe=n(`<div><table><thead><tr></tr></thead><tbody></tbody></table></div>`),m([`click`]),we.__docgen={data:[{name:`interactive`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`columns`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`array`,text:`any[]`},static:!1,readonly:!1,defaultValue:`[]`},{name:`rows`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`array`,text:`any[]`},static:!1,readonly:!1,defaultValue:`[]`},{name:`rowKey`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"id"`},{name:`selected`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`...`},{name:`sortedBy`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`array`,text:`any[]`},static:!1,readonly:!1,defaultValue:`...`}],name:`Table.svelte`}}));function Y(e,n){t(n,!0);let r=[],a=O(n,`variant`,3,null),o=O(n,`checked`,15,null),c=O(n,`group`,15,null),l=O(n,`value`,3,null),u=O(n,`disabled`,3,!1),d=O(n,`label`,3,``),f=O(n,`children`,3,null);var m=Me(),_=s(m),y=e=>{var t=Ae();R(t);var n;H(()=>{t.disabled=u(),n!==(n=l())&&(t.value=(t.__value=l())??``)}),x(r,[],t,()=>(l(),c()),c),p(e,t)},b=e=>{var t=je();R(t);var n;H(()=>{t.disabled=u(),n!==(n=l())&&(t.value=(t.__value=l())??``)}),x(r,[],t,()=>(l(),c()),c),F(t,o),p(e,t)};g(_,e=>{a()==`radio`?e(y):e(b,-1)});var S=v(_,4),C=s(S,!0);w(S),B(v(S,2),()=>f()??A),w(m),H(()=>{j(m,1,D([`checkbox`,a()&&`is-${a()}`,o()&&`is-checked`,u()&&`is-disabled`])),i(C,d())}),p(e,m),h()}var Ae,je,Me,Ne=e((()=>{I(),L(),Ae=n(`<input type="radio"/>`),je=n(`<input type="checkbox"/>`),Me=n(`<label><!> <span class="checkbox__box"></span> <span class="checkbox__label"> </span> <!></label>`),Y.__docgen={data:[{name:`variant`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`checked`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`...`},{name:`group`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`...`},{name:`value`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`disabled`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`label`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`""`},{name:`children`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`}],name:`Checkbox.svelte`}}));function Pe(e,t){let n=O(t,`variant`,3,null),r=O(t,`size`,3,`md`),i=O(t,`children`,3,null),a=O(t,`label`,3,null),o=O(t,`inline`,3,!1),c=O(t,`value`,3,0),l=O(t,`min`,3,0),u=O(t,`max`,3,100);q(e,{get label(){return a()},get inline(){return o()},children:(e,t)=>{var a=Ie(),o=v(s(a),2),d=e=>{var t=Fe();B(s(t),()=>i()??A),w(t),p(e,t)};g(o,e=>{i()&&e(d)}),w(a),H(e=>{j(a,1,e),C(a,`--_progress: ${100*(c()-l())/(u()-l())}`),S(a,`aria-valuenow`,c()),S(a,`aria-valuemin`,l()),S(a,`aria-valuemax`,u())},[()=>D([`progress`,n()&&`is-${n()}`,typeof c()!=`number`||isNaN(c())&&`is-indeterminate`,r()!=`md`&&`is-${r()}`])]),p(e,a)},$$slots:{default:!0}})}var Fe,Ie,Le=e((()=>{I(),L(),de(),Fe=n(`<div class="progress__value"><!></div>`),Ie=n(`<div role="progressbar"><div class="progress__bar"></div> <!></div>`),Pe.__docgen={data:[{name:`variant`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`size`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"md"`},{name:`children`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`label`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`inline`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`value`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`number`,text:`number`},static:!1,readonly:!1,defaultValue:`0`},{name:`min`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`number`,text:`number`},static:!1,readonly:!1,defaultValue:`0`},{name:`max`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`number`,text:`number`},static:!1,readonly:!1,defaultValue:`100`}],name:`Progress.svelte`}}));function Re(e,n){let r=d();t(n,!0);let o=O(n,`size`,3,`md`),l=O(n,`options`,19,()=>[]),f=O(n,`value`,15,null),[m,g]=he({duration:e=>Math.sqrt(e*200)});var _=Be();b(_,21,l,e=>K(e),(e,t)=>{let n=c(()=>f()===K(u(t)));var o=ze(),l=s(o);{let e=c(()=>`selection-${r}`);_e(l,{class:`toggle-group__indicator`,get key(){return u(e)},get send(){return m},get receive(){return g},get visible(){return u(n)}})}var d=v(l);w(o),H((e,t)=>{j(o,1,e),S(o,`tabindex`,u(n)?0:-1),S(o,`aria-checked`,u(n)),i(d,` ${t??``}`)},[()=>D([`toggle-group__option`,f()===K(u(t))&&`is-selected`]),()=>ie(u(t))]),a(`click`,o,()=>f(K(u(t)))),p(e,o)}),w(_),H(()=>j(_,1,D([`toggle-group`,o()!=`md`&&`is-${o()}`]))),p(e,_),h()}var ze,Be,Ve=e((()=>{I(),L(),ge(),le(),ye(),ze=n(`<div role="radio"><!> </div>`),Be=n(`<div role="radiogroup"></div>`),m([`click`]),Re.__docgen={data:[{name:`size`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"md"`},{name:`options`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`array`,text:`any[]`},static:!1,readonly:!1,defaultValue:`[]`},{name:`value`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`...`}],name:`ToggleGroup.svelte`}}));function X(e,n){t(n,!0);let r=O(n,`checked`,15,!1),i=O(n,`label`,3,null);q(e,{get label(){return i()},inline:!0,children:(e,t)=>{var n=He();H(()=>{j(n,1,D([`switch`,r()&&`is-checked`])),S(n,`aria-checked`,r())}),a(`click`,n,()=>r(!r())),p(e,n)},$$slots:{default:!0}}),h()}var He,Ue=e((()=>{I(),L(),de(),He=n(`<div role="switch" tabindex="0"><div class="switch__thumb"></div></div>`),m([`click`]),X.__docgen={data:[{name:`checked`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`...`},{name:`label`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`}],name:`Switch.svelte`}}));function We(e,n){t(n,!0);let r=O(n,`variant`,3,null),i=O(n,`size`,3,`md`),a=O(n,`children`,3,null),o=O(n,`value`,15,0),c=O(n,`min`,3,0),l=O(n,`max`,3,100),u=O(n,`label`,3,null),d=O(n,`inline`,3,!1);q(e,{get label(){return u()},get inline(){return d()},children:(e,t)=>{var n=Ge(),u=v(s(n),2);R(u),B(v(u,2),()=>a()??A),w(n),H(()=>{j(n,1,D([`slider`,r()&&`is-${r()}`,i()!=`md`&&`is-${i()}`])),C(n,`--_progress: ${100*o()/l()}`),S(u,`min`,c()),S(u,`max`,l())}),E(u,o),p(e,n)},$$slots:{default:!0}}),h()}var Ge,Ke=e((()=>{I(),L(),de(),Ge=n(`<div><div class="slider__bar"></div> <input type="range"/> <!></div>`),We.__docgen={data:[{name:`variant`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`size`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"md"`},{name:`children`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`value`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`number`,text:`number`},static:!1,readonly:!1,defaultValue:`...`},{name:`min`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`number`,text:`number`},static:!1,readonly:!1,defaultValue:`0`},{name:`max`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`number`,text:`number`},static:!1,readonly:!1,defaultValue:`100`},{name:`label`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`inline`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`}],name:`Slider.svelte`}}));function qe(e,t){let n=O(t,`variant`,3,null),r=O(t,`size`,3,`md`),a=O(t,`label`,3,null);var o=Ye(),c=s(o),l=e=>{var t=Je(),n=s(t),r=e=>{var t=T();B(_(t),a),p(e,t)},o=e=>{var t=f();H(()=>i(t,a())),p(e,t)};g(n,e=>{typeof a()==`function`?e(r):e(o,-1)}),w(t),p(e,t)};g(c,e=>{a()&&e(l)}),w(o),H(()=>j(o,1,D([`spinner`,n()&&`is-${n()}`,r()!=`md`&&`is-${r()}`]))),p(e,o)}var Je,Ye,Xe=e((()=>{I(),L(),Je=n(`<div class="spinner__label"><!></div>`),Ye=n(`<div><!></div>`),qe.__docgen={data:[{name:`variant`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`size`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"md"`},{name:`label`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`}],name:`Spinner.svelte`}}));function Ze(e,n){t(n,!0);let a=O(n,`variant`,3,null),o=O(n,`title`,3,null),c=O(n,`draggable`,3,!1),d=O(n,`children`,3,null),f=O(n,`header`,3,null),m=O(n,`footer`,3,null),_=O(n,`open`,15,!1),y=M(null);function b(){_(!0),u(y).showModal()}function x(){_(!1),u(y).close()}r(()=>{u(y)&&(_()?u(y).showModal():u(y).close())});var S={show:b,hide:x},C=$e(),T=s(C),E=s(T),N=s(E,!0);w(E);var P=v(E,2);B(P,()=>f()??A);var F=v(P,2);W(s(F),{size:`sm`,icon:`css:close`,onclick:x}),w(F),w(T);var I=v(T,2);B(s(I),()=>d()??A),w(I);var L=v(I,2),R=e=>{var t=Qe();B(s(t),m),w(t),p(e,t)};return g(L,e=>{m()&&e(R)}),w(C),k(C,e=>l(y,e),()=>u(y)),H(()=>{j(C,1,D([`dialog`,a()&&`is-${a()}`,c()&&`is-draggable`])),i(N,o())}),p(e,C),h(S)}var Qe,$e,et=e((()=>{I(),L(),U(),Qe=n(`<div class="dialog__footer"><!></div>`),$e=n(`<dialog><div class="dialog__header"><div class="dialog__title"> </div> <!> <div class="dialog__header-buttons"><!></div></div> <div class="dialog__body"><!></div> <!></dialog>`),Ze.__docgen={data:[{name:`variant`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`title`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`draggable`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`children`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`header`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`footer`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`any`,text:`any`},static:!1,readonly:!1,defaultValue:`null`},{name:`open`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`...`}],name:`Dialog.svelte`}})),tt=e((()=>{}));function nt(e,n){t(n,!0),it(e,{name:`Dashboard`,children:(e,t)=>{var n=Ct(),r=v(_(n),2),a=s(r),o=v(s(a),2),c=s(o);W(c,{children:(e,t)=>{P(),p(e,f(`Default`))},$$slots:{default:!0}});var d=v(c,2);W(d,{variant:`primary`,children:(e,t)=>{P(),p(e,f(`Primary`))},$$slots:{default:!0}});var m=v(d,2);W(m,{variant:`destructive`,children:(e,t)=>{P(),p(e,f(`Destructive`))},$$slots:{default:!0}}),W(v(m,2),{variant:`ghost`,children:(e,t)=>{P(),p(e,f(`Ghost`))},$$slots:{default:!0}}),w(o);var h=v(o,2),g=s(h);W(g,{disabled:!0,children:(e,t)=>{P(),p(e,f(`Disabled`))},$$slots:{default:!0}}),W(v(g,2),{variant:`primary`,disabled:!0,children:(e,t)=>{P(),p(e,f(`Disabled`))},$$slots:{default:!0}}),w(h);var y=v(h,2),b=s(y);W(b,{size:`sm`,children:(e,t)=>{P(),p(e,f(`Default`))},$$slots:{default:!0}});var x=v(b,2);W(x,{variant:`primary`,size:`sm`,children:(e,t)=>{P(),p(e,f(`Primary`))},$$slots:{default:!0}});var S=v(x,2);W(S,{variant:`destructive`,size:`sm`,children:(e,t)=>{P(),p(e,f(`Destructive`))},$$slots:{default:!0}}),W(v(S,2),{variant:`ghost`,size:`sm`,children:(e,t)=>{P(),p(e,f(`Ghost`))},$$slots:{default:!0}}),w(y),Re(v(y,6),{options:[`Day`,`Week`,`Month`],value:`Day`}),w(a);var C=v(a,2),T=v(s(C),2),E=s(T),O=s(E);J(O,{label:`Full Name`,placeholder:`Jane Doe`}),J(v(O,2),{variant:`email`,label:`Email`,placeholder:`jane@example.com`}),w(E);var M=v(E,2);J(M,{variant:`multiline`,label:`Message`,placeholder:`Write something...`});var N=v(M,2);J(N,{variant:`select`,label:`Department`,placeholder:`Select department…`,options:[`Engineering`,`Design`,`Marketing`,`Product`,`Operations`]});var F=v(N,2);We(F,{min:0,max:15,get value(){return u(Q)},set value(e){l(Q,e,!0)},label:e=>{P();var t=at(),n=v(_(t)),r=s(n),a=s(r,!0);w(r),P(),w(n),H(()=>i(a,u(Q))),p(e,t)},$$slots:{label:!0}});var I=v(F,2);q(I,{children:(e,t)=>{var n=ot(),r=s(n);Y(r,{label:`Email notifications`,checked:!0,disabled:!0}),Y(v(r,2),{label:`SMS notifications`}),w(n),p(e,n)},$$slots:{default:!0}});var L=v(I,2);q(L,{label:`Priority`,children:(e,t)=>{var n=st(),r=s(n);Y(r,{variant:`radio`,label:`Low`,value:0,disabled:!0,get group(){return u(Z)},set group(e){l(Z,e,!0)}});var i=v(r,2);Y(i,{variant:`radio`,label:`Medium`,value:1,get group(){return u(Z)},set group(e){l(Z,e,!0)}}),Y(v(i,2),{variant:`radio`,label:`High`,value:2,get group(){return u(Z)},set group(e){l(Z,e,!0)}}),w(n),p(e,n)},$$slots:{default:!0}});var R=v(L,2);X(R,{label:`Active status`}),W(v(R,2),{variant:`primary`,children:(e,t)=>{P(),p(e,f(`Submit`))},$$slots:{default:!0}}),w(T),w(C);var z=v(C,2);be(v(s(z),2),{tabs:[{title:`Overview`,value:`overview`,snippet:`overview`},{title:`Activity`,value:`activity`,snippet:`activity`},{title:`Settings`,value:`settings`,snippet:`settings`},{title:`Inline controls`,value:`inline`,snippet:`inline`}],value:`overview`,overview:e=>{p(e,ct())},activity:e=>{p(e,lt())},settings:e=>{var t=ut(),n=_(t);X(n,{label:`Compact view`}),X(v(n,2),{label:`Show archived`}),p(e,t)},inline:e=>{var t=mt(),n=_(t),r=s(n);J(r,{label:`Full Name`,placeholder:`Jane Doe`,inline:!0}),J(v(r,2),{variant:`email`,label:`Email`,placeholder:`jane@example.com`,inline:!0}),w(n);var a=v(n,2);J(a,{variant:`multiline`,label:`Message`,placeholder:`Write something...`,inline:!0});var o=v(a,2);J(o,{variant:`select`,label:`Department`,placeholder:`Select department…`,options:[`Engineering`,`Design`,`Marketing`,`Product`,`Operations`],inline:!0});var c=v(o,2);We(c,{min:0,max:15,inline:!0,get value(){return u(Q)},set value(e){l(Q,e,!0)},label:e=>{P();var t=dt(),n=v(_(t)),r=s(n),a=s(r,!0);w(r),P(),w(n),H(()=>i(a,u(Q))),p(e,t)},$$slots:{label:!0}});var d=v(c,2);q(d,{inline:!0,children:(e,t)=>{var n=ft(),r=s(n);Y(r,{label:`Email notifications`,checked:!0,disabled:!0}),Y(v(r,2),{label:`SMS notifications`}),w(n),p(e,n)},$$slots:{default:!0}});var m=v(d,2);q(m,{label:`Priority`,inline:!0,children:(e,t)=>{var n=pt(),r=s(n);Y(r,{variant:`radio`,label:`Low`,value:0,disabled:!0,get group(){return u(Z)},set group(e){l(Z,e,!0)}});var i=v(r,2);Y(i,{variant:`radio`,label:`Medium`,value:1,get group(){return u(Z)},set group(e){l(Z,e,!0)}}),Y(v(i,2),{variant:`radio`,label:`High`,value:2,get group(){return u(Z)},set group(e){l(Z,e,!0)}}),w(n),p(e,n)},$$slots:{default:!0}});var h=v(m,2);X(h,{label:`Active status`}),W(v(h,2),{variant:`primary`,children:(e,t)=>{P(),p(e,f(`Submit`))},$$slots:{default:!0}}),p(e,t)},$$slots:{overview:!0,activity:!0,settings:!0,inline:!0}}),w(z);var B=v(z,2),V=v(s(B),2);Pe(V,{label:`Project Alpha`,value:67,inline:!0,children:(e,t)=>{P(),p(e,f(`67%`))},$$slots:{default:!0}});var U=v(V,2);Pe(U,{label:`Storage Used`,variant:`segmented`,value:35,inline:!0,children:(e,t)=>{P(),p(e,f(`35%`))},$$slots:{default:!0}});var ee=v(U,2);Pe(ee,{label:`Upload`,value:89,inline:!0,children:(e,t)=>{P(),p(e,f(`89%`))},$$slots:{default:!0}}),qe(v(ee,2),{size:`lg`,label:`Loading data…`}),w(B);var te=v(B,2);we(v(s(te),2),{columns:[{title:`Name`,snippet:`name`},{title:`Role`,value:`role`},{title:`Department`,value:`department`},{title:`Status`,snippet:`status`},{title:``,snippet:`actions`}],rows:[{name:`Alice Chen`,role:`Frontend Developer`,department:`Engineering`,status:`Active`},{name:`Bob Park`,role:`Backend Developer`,department:`Engineering`,status:`Away`},{name:`Charlie Kim`,role:`DevOps Engineer`,department:`Operations`,status:`Active`},{name:`Diana Lee`,role:`UI Designer`,department:`Design`,status:`Offline`},{name:`Eve Wang`,role:`Product Manager`,department:`Product`,status:`Active`}],rowKey:`name`,name:(e,t=A)=>{var n=ht(),r=s(n,!0);w(n),H(()=>i(r,t().name)),p(e,n)},status:(e,t=A)=>{var n=gt(),r=s(n),a=s(r,!0);w(r),w(n),H(()=>{j(r,1,D([`badge`,{Active:`is-success`,Away:`is-warning`,Offline:`is-neutral`}[t().status]]),`svelte-8pf2k`),i(a,t().status)}),p(e,n)},actions:(e,t=A)=>{var n=_t();W(s(n),{size:`sm`,children:(e,t)=>{P(),p(e,f(`Edit`))},$$slots:{default:!0}}),w(n),p(e,n)},$$slots:{name:!0,status:!0,actions:!0}}),w(te);var ne=v(te,2),re=v(s(ne),2),ie=s(re);W(ie,{onclick:()=>u($).show(),children:(e,t)=>{P(),p(e,f(`Open Dialog`))},$$slots:{default:!0}});var ae=v(ie,2);W(s(ae),{dropdown:[{label:`Edit`},{label:`Duplicate`},{label:`Archive`},{separator:!0},{label:`Delete`,variant:`destructive`}],children:(e,t)=>{P(),p(e,f(`Actions`))},$$slots:{default:!0}}),w(ae),w(re),w(ne);var K=v(ne,2);ue(v(s(K),2),{children:(e,t)=>{var n=bt(),r=_(n);ce(r,{header:`Active`,children:(e,t)=>{var n=vt(),r=_(n);G(r,{accessory:`chevron`,description:e=>{P(),p(e,f(`Frontend team · Due Mar 15`))},children:(e,t)=>{P(),p(e,f(`Dashboard Redesign`))},$$slots:{description:!0,default:!0}});var i=v(r,2);G(i,{accessory:`chevron`,description:e=>{P(),p(e,f(`Backend team · Due Apr 1`))},children:(e,t)=>{P(),p(e,f(`API Migration`))},$$slots:{description:!0,default:!0}}),G(v(i,2),{accessory:`chevron`,description:e=>{P(),p(e,f(`Mobile team · Due Apr 20`))},children:(e,t)=>{P(),p(e,f(`Mobile App v2`))},$$slots:{description:!0,default:!0}}),p(e,n)},$$slots:{default:!0}}),ce(v(r,2),{header:`Completed`,children:(e,t)=>{var n=yt(),r=_(n);G(r,{accessory:`chevron`,description:e=>{P(),p(e,f(`Design team · Feb 28`))},children:(e,t)=>{P(),p(e,f(`Brand Guidelines`))},$$slots:{description:!0,default:!0}}),G(v(r,2),{accessory:`chevron`,description:e=>{P(),p(e,f(`DevOps team · Mar 1`))},children:(e,t)=>{P(),p(e,f(`Security Audit`))},$$slots:{description:!0,default:!0}}),p(e,n)},$$slots:{default:!0}}),p(e,n)},$$slots:{default:!0}}),w(K),P(2),w(r),k(Ze(v(r,2),{variant:`alert`,title:`Confirm Action`,draggable:!0,footer:e=>{var t=xt(),n=_(t);W(n,{onclick:()=>u($).hide(),children:(e,t)=>{P(),p(e,f(`Cancel`))},$$slots:{default:!0}}),W(v(n,2),{variant:`primary`,onclick:()=>u($).hide(),children:(e,t)=>{P(),p(e,f(`Confirm`))},$$slots:{default:!0}}),p(e,t)},children:(e,t)=>{p(e,St())},$$slots:{footer:!0,default:!0}}),e=>l($,e,!0),()=>u($)),p(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
  <!-- ======== Header ======== -->\r
<header class="header">\r
<div>\r
  <h1>UI Components</h1>\r
  <p>Dashboard Showcase</p>\r
</div>\r
</header>\r
\r
<!-- ======== Dashboard ======== -->\r
<main class="dashboard">\r
\r
<!-- ---- Buttons ---- -->\r
<section class="card">\r
  <div class="card__title">Buttons</div>\r
  <div class="row">\r
    <Button>Default</Button>\r
    <Button variant="primary">Primary</Button>\r
    <Button variant="destructive">Destructive</Button>\r
    <Button variant="ghost">Ghost</Button>\r
  </div>\r
  <div class="row">\r
    <Button disabled>Disabled</Button>\r
    <Button variant="primary" disabled>Disabled</Button>\r
  </div>\r
  <div class="row">\r
    <Button size="sm">Default</Button>\r
    <Button variant="primary" size="sm">Primary</Button>\r
    <Button variant="destructive" size="sm">Destructive</Button>\r
    <Button variant="ghost" size="sm">Ghost</Button>\r
  </div>\r
  <hr class="separator">\r
  <div class="card__title">Toggle Group</div>\r
  <ToggleGroup options={['Day', 'Week', 'Month']} value="Day"/>\r
</section>\r
\r
<!-- ---- Form Controls ---- -->\r
<section class="card">\r
  <div class="card__title">Form Controls</div>\r
  <form>\r
    <div class="row">\r
      <Input label="Full Name" placeholder="Jane Doe"/>\r
      <Input variant="email" label="Email" placeholder="jane@example.com"/>\r
    </div>\r
    <Input variant="multiline" label="Message" placeholder="Write something..."/>\r
    <Input variant="select" label="Department" placeholder="Select department…" options={['Engineering', 'Design', 'Marketing', 'Product', 'Operations']}/>\r
    <Slider min={0} max={15} bind:value={expirience}>\r
      {#snippet label()}\r
        Experience <span class="label-value"><span id="slider-val">{expirience}</span> years</span>\r
      {/snippet}\r
    </Slider>\r
    <Field>\r
      <div class="row">\r
        <Checkbox label="Email notifications" checked disabled/>\r
        <Checkbox label="SMS notifications"/>\r
      </div>\r
    </Field>\r
    <Field label="Priority">\r
      <div class="row">\r
        <Checkbox variant="radio" label="Low" bind:group={radioGroup} value={0} disabled/>\r
        <Checkbox variant="radio" label="Medium" bind:group={radioGroup} value={1}/>\r
        <Checkbox variant="radio" label="High" bind:group={radioGroup} value={2}/>\r
      </div>\r
    </Field>\r
    <Switch label="Active status"/>\r
    <Button variant="primary">Submit</Button>\r
  </form>\r
</section>\r
\r
<!-- ---- Tabs ---- -->\r
<section class="card tabs">\r
  <div class="card__title">Tabs</div>\r
  <Tabs tabs={[\r
    { title: 'Overview', value: 'overview', snippet: 'overview' },\r
    { title: 'Activity', value: 'activity', snippet: 'activity' },\r
    { title: 'Settings', value: 'settings', snippet: 'settings' },\r
    { title: 'Inline controls', value: 'inline', snippet: 'inline' },\r
  ]} value="overview">\r
    {#snippet overview()}\r
      <p>The project is currently on track. Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule. Team capacity remains stable at 85%.</p>\r
    {/snippet}\r
    {#snippet activity()}\r
      <p><strong>Today</strong> &mdash; Alice pushed 3 commits to <code>feature/dashboard</code><br>\r
      <strong>Yesterday</strong> &mdash; Bob merged PR #142 into main<br>\r
      <strong>Mar 8</strong> &mdash; Eve updated the project roadmap</p>\r
    {/snippet}\r
    {#snippet settings()}\r
      <Switch label="Compact view"/>\r
      <Switch label="Show archived"/>\r
    {/snippet}\r
    {#snippet inline()}\r
      <div class="row">\r
        <Input label="Full Name" placeholder="Jane Doe" inline/>\r
        <Input variant="email" label="Email" placeholder="jane@example.com" inline/>\r
      </div>\r
      <Input variant="multiline" label="Message" placeholder="Write something..." inline/>\r
      <Input variant="select" label="Department" placeholder="Select department…" options={['Engineering', 'Design', 'Marketing', 'Product', 'Operations']} inline/>\r
      <Slider min={0} max={15} bind:value={expirience} inline>\r
        {#snippet label()}\r
          Experience <span class="label-value"><span id="slider-val">{expirience}</span> years</span>\r
        {/snippet}\r
      </Slider>\r
      <Field inline>\r
        <div class="row">\r
          <Checkbox label="Email notifications" checked disabled/>\r
          <Checkbox label="SMS notifications"/>\r
        </div>\r
      </Field>\r
      <Field label="Priority" inline>\r
        <div class="row">\r
          <Checkbox variant="radio" label="Low" bind:group={radioGroup} value={0} disabled/>\r
          <Checkbox variant="radio" label="Medium" bind:group={radioGroup} value={1}/>\r
          <Checkbox variant="radio" label="High" bind:group={radioGroup} value={2}/>\r
        </div>\r
      </Field>\r
      <Switch label="Active status"/>\r
      <Button variant="primary">Submit</Button>\r
    {/snippet}\r
  </Tabs>\r
</section>\r
\r
<!-- ---- Progress & Loading ---- -->\r
<section class="card">\r
  <div class="card__title">Progress &amp; Loading</div>\r
  <Progress label="Project Alpha" value={67} inline>67%</Progress>\r
  <Progress label="Storage Used" variant="segmented" value={35} inline>35%</Progress>\r
  <Progress label="Upload" value={89} inline>89%</Progress>\r
  <Spinner size="lg" label="Loading data…"/>\r
</section>\r
\r
<!-- ---- Table ---- -->\r
<section class="card span-2">\r
  <div class="card__title">Team Members</div>\r
  <Table columns={[\r
    { title: 'Name', snippet: 'name' },\r
    { title: 'Role', value: 'role' },\r
    { title: 'Department', value: 'department' },\r
    { title: 'Status', snippet: 'status' },\r
    { title: '', snippet: 'actions' },\r
  ]} rows={[{\r
    name: 'Alice Chen',\r
    role: 'Frontend Developer',\r
    department: 'Engineering',\r
    status: 'Active',\r
  }, {\r
    name: 'Bob Park',\r
    role: 'Backend Developer',\r
    department: 'Engineering',\r
    status: 'Away',\r
  }, {\r
    name: 'Charlie Kim',\r
    role: 'DevOps Engineer',\r
    department: 'Operations',\r
    status: 'Active',\r
  }, {\r
    name: 'Diana Lee',\r
    role: 'UI Designer',\r
    department: 'Design',\r
    status: 'Offline',\r
  }, {\r
    name: 'Eve Wang',\r
    role: 'Product Manager',\r
    department: 'Product',\r
    status: 'Active',\r
  }]} rowKey="name">\r
    {#snippet name(row)}\r
      <td class="cell-name">{row.name}</td>\r
    {/snippet}\r
    {#snippet status(row)}\r
      <td><span class={[\r
        'badge',\r
        { Active: 'is-success', Away: 'is-warning', Offline: 'is-neutral' }[row.status],\r
      ]}>{row.status}</span></td>\r
    {/snippet}\r
    {#snippet actions(row)}\r
      <td><Button size="sm">Edit</Button></td>\r
    {/snippet}\r
  </Table>\r
</section>\r
\r
<!-- ---- Overlays & Menus ---- -->\r
<section class="card span-2">\r
  <div class="card__title">Overlays &amp; Menus</div>\r
  <div class="row">\r
    <Button onclick={() => dialog.show()}>Open Dialog</Button>\r
\r
    <!--div class="popover-anchor">\r
      <Button>\r
        Show Popover\r
        {#snippet popover()}\r
          <strong>Popover Title</strong>\r
          This is a contextual popover with additional information. It appears relative to the trigger element and closes on outside click.\r
        {/snippet}\r
      </Button>\r
    </div-->\r
\r
    <div class="dropdown">\r
      <Button dropdown={[\r
        { label: 'Edit' },\r
        { label: 'Duplicate' },\r
        { label: 'Archive' },\r
        { separator: true },\r
        { label: 'Delete', variant: 'destructive' },\r
      ]}>Actions</Button>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ---- List View ---- -->\r
<section class="card">\r
  <div class="card__title">Projects</div>\r
\r
  <List>\r
    <ListSection header="Active">\r
      <ListItem accessory="chevron">\r
        Dashboard Redesign\r
        {#snippet description()}\r
          Frontend team &middot; Due Mar 15\r
        {/snippet}\r
      </ListItem>\r
      <ListItem accessory="chevron">\r
        API Migration\r
        {#snippet description()}\r
          Backend team &middot; Due Apr 1\r
        {/snippet}\r
      </ListItem>\r
      <ListItem accessory="chevron">\r
        Mobile App v2\r
        {#snippet description()}\r
          Mobile team &middot; Due Apr 20\r
        {/snippet}\r
      </ListItem>\r
    </ListSection>\r
\r
    <ListSection header="Completed">\r
      <ListItem accessory="chevron">\r
        Brand Guidelines\r
        {#snippet description()}\r
          Design team &middot; Feb 28\r
        {/snippet}\r
      </ListItem>\r
      <ListItem accessory="chevron">\r
        Security Audit\r
        {#snippet description()}\r
          DevOps team &middot; Mar 1\r
        {/snippet}\r
      </ListItem>\r
    </ListSection>\r
  </List>\r
</section>\r
\r
<!-- ---- Dashboard Cards ---- -->\r
<section class="card">\r
  <div class="card__title">Dashboard Cards</div>\r
  <div class="row">\r
    <div class="metric-card">\r
      <span class="metric-label">Revenue</span>\r
      <span class="metric-value">$24,500</span>\r
      <span class="metric-trend is-up">&uarr; 12.3%</span>\r
    </div>\r
    <div class="metric-card">\r
      <span class="metric-label">Users</span>\r
      <span class="metric-value">1,234</span>\r
      <span class="metric-trend is-up">&uarr; 8.1%</span>\r
    </div>\r
    <div class="metric-card">\r
      <span class="metric-label">Conversion</span>\r
      <span class="metric-value">3.2%</span>\r
      <span class="metric-trend is-down">&darr; 0.5%</span>\r
    </div>\r
  </div>\r
</section>\r
</main>\r
\r
<!-- ======== Dialog ======== -->\r
<Dialog bind:this={dialog} variant="alert" title="Confirm Action" draggable>\r
<p>Are you sure you want to proceed with this action? This operation cannot be undone and will permanently affect the selected items.</p>\r
\r
{#snippet footer()}\r
  <Button onclick={() => dialog.hide()}>Cancel</Button>\r
  <Button variant="primary" onclick={() => dialog.hide()}>Confirm</Button>\r
{/snippet}\r
</Dialog>
</undefined>`}}}),h()}var rt,it,Z,Q,$,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et;e((()=>{I(),ee(),oe(),se(),ae(),U(),fe(),Ce(),ke(),Ne(),Le(),Ve(),Ue(),Ke(),Xe(),et(),de(),L(),tt(),te(),rt={title:`Dashboard`,tags:[],parameters:{layout:`fullscreen`}},{Story:it}=ne(rt),Z=M(0),Q=M(5),$=M(null),at=n(`Experience <span class="label-value svelte-8pf2k"><span id="slider-val"> </span> years</span>`,1),ot=n(`<div class="row"><!> <!></div>`),st=n(`<div class="row"><!> <!> <!></div>`),ct=n(`<p>The project is currently on track. Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule. Team capacity remains stable at 85%.</p>`),lt=n(`<p><strong>Today</strong> &mdash; Alice pushed 3 commits to <code>feature/dashboard</code><br/> <strong>Yesterday</strong> &mdash; Bob merged PR #142 into main<br/> <strong>Mar 8</strong> &mdash; Eve updated the project roadmap</p>`),ut=n(`<!> <!>`,1),dt=n(`Experience <span class="label-value svelte-8pf2k"><span id="slider-val"> </span> years</span>`,1),ft=n(`<div class="row"><!> <!></div>`),pt=n(`<div class="row"><!> <!> <!></div>`),mt=n(`<div class="row"><!> <!></div> <!> <!> <!> <!> <!> <!> <!>`,1),ht=n(`<td class="cell-name svelte-8pf2k"> </td>`),gt=n(`<td><span> </span></td>`),_t=n(`<td><!></td>`),vt=n(`<!> <!> <!>`,1),yt=n(`<!> <!>`,1),bt=n(`<!> <!>`,1),xt=n(`<!> <!>`,1),St=n(`<p>Are you sure you want to proceed with this action? This operation cannot be undone and will permanently affect the selected items.</p>`),Ct=n(`<header class="header svelte-8pf2k"><div><h1>UI Components</h1> <p class="svelte-8pf2k">Dashboard Showcase</p></div></header> <main class="dashboard svelte-8pf2k"><section class="card"><div class="card__title">Buttons</div> <div class="row"><!> <!> <!> <!></div> <div class="row"><!> <!></div> <div class="row"><!> <!> <!> <!></div> <hr class="separator"/> <div class="card__title">Toggle Group</div> <!></section> <section class="card"><div class="card__title">Form Controls</div> <form><div class="row"><!> <!></div> <!> <!> <!> <!> <!> <!> <!></form></section> <section class="card tabs"><div class="card__title">Tabs</div> <!></section> <section class="card"><div class="card__title">Progress &amp; Loading</div> <!> <!> <!> <!></section> <section class="card span-2 svelte-8pf2k"><div class="card__title">Team Members</div> <!></section> <section class="card span-2 svelte-8pf2k"><div class="card__title">Overlays &amp; Menus</div> <div class="row"><!> <div class="dropdown"><!></div></div></section> <section class="card"><div class="card__title">Projects</div> <!></section> <section class="card"><div class="card__title">Dashboard Cards</div> <div class="row"><div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Revenue</span> <span class="metric-value svelte-8pf2k">$24,500</span> <span class="metric-trend is-up svelte-8pf2k">&uarr; 12.3%</span></div> <div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Users</span> <span class="metric-value svelte-8pf2k">1,234</span> <span class="metric-trend is-up svelte-8pf2k">&uarr; 8.1%</span></div> <div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Conversion</span> <span class="metric-value svelte-8pf2k">3.2%</span> <span class="metric-trend is-down svelte-8pf2k">&darr; 0.5%</span></div></div></section></main> <!>`,1),nt.__docgen={data:[],name:`Dashboard.stories.svelte`},wt=re(nt,rt),Tt=[`Dashboard`],Et={...wt.Dashboard,tags:[`svelte-csf-v5`]}}))();export{Et as Dashboard,Tt as __namedExportsOrder,rt as default};