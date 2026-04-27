import{n as e}from"./chunk-BneVvdWh.js";import{A as t,C as n,J as r,N as i,O as a,Q as o,a as s,at as c,bt as l,ct as u,et as d,ht as f,o as p,q as m,st as h,t as g,z as _}from"./client-DVBkriut.js";import{a as v,i as y,n as b,r as x,t as S}from"./create-runtime-stories-C7ez5IF4.js";import{n as C}from"./Switch-BstOjHW9.js";import{n as w}from"./Field-CNpmKko1.js";import{a as T,i as E,n as D,o as O,r as k,t as A}from"./List-CFuyTIaM.js";import{n as j}from"./Button-GAYvjWID.js";import{n as ee}from"./Input-BNXMx2SF.js";import{n as te}from"./Tabs-CbqAvdFG.js";import{n as ne}from"./Table-D5M_MN_v.js";import{n as M}from"./Checkbox-D-ta_D3K.js";import{n as N}from"./Progress-RVDiWDPZ.js";import{n as P}from"./Selector-Bh3jTkhu.js";import{n as F}from"./Slider-BhniuGrr.js";import{n as I}from"./Spinner-Byqakeft.js";import{n as L}from"./Dialog-DFtE_L_E.js";import{n as R,t as z}from"./AppShell-BNT-QHGR.js";function B(e){f(),a(e,i(`Nested page`))}var V=e((()=>{l(),v(),g(),B.__docgen={data:[],name:`MobileChildPage2.svelte`}}));function H(e,t){u(t,!1);let n=c(`shell`);s();var o=U();A(r(m(o),2),{children:(e,t)=>{k(e,{children:(e,t)=>{T(e,{accessory:`chevron`,onclick:()=>{n.pushPage({title:`Page 2`,view:B})},children:(e,t)=>{f(),a(e,i(`Child Page 2`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),f(2),a(e,o),h()}var U,W=e((()=>{l(),v(),g(),D(),O(),E(),n(),V(),U=t(`<div style="background: #008000; width: 200px; height: 400px;"></div> <!> <div style="background: #008000; width: 200px; height: 1000px;"></div>`,1),H.__docgen={data:[],name:`MobileChildPage1.svelte`}}));function G(e){_(Y).pushPage({title:`Child at depth ${e}`,view:`tasks`,data:{depth:e}})}function K(e,t){u(t,!0),J(e,{name:`Mobile`,children:(e,t)=>{p(z(e,{sections:[{id:`tasks`,title:`Tasks`,view:`tasks`,data:{depth:0}},{id:`settings`,title:`Settings`}],section:`tasks`,withHeader:!0,tasks:(e,t)=>{let n=()=>t?.().depth;A(e,{children:(e,t)=>{k(e,{header:`Section 1`,children:(e,t)=>{var o=X(),s=m(o);T(s,{accessory:`chevron`,onclick:()=>G(n()+1),children:(e,t)=>{f(),a(e,i(`Go deeper!`))},$$slots:{default:!0}});var c=r(s,2);T(c,{accessory:`chevron`,onclick:()=>{_(Y).pushPage({title:`Child 1`,view:H})},children:(e,t)=>{f(),a(e,i(`To ChildPage1`))},$$slots:{default:!0}}),T(r(c,2),{accessory:`switch`,children:(e,t)=>{f(),a(e,i(`Toggle`))},$$slots:{default:!0}}),a(e,o)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tasks:!0}}),e=>o(Y,e,!0),()=>_(Y))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
  <AppShell bind:this={shell} sections={[{\r
id: 'tasks',\r
title: 'Tasks',\r
view: 'tasks',\r
data: { depth: 0 },\r
}, {\r
id: 'settings',\r
title: 'Settings',\r
}]} section="tasks" withHeader>\r
{#snippet tasks({ depth })}\r
  <List>\r
    <ListSection header="Section 1">\r
      <ListItem accessory="chevron" onclick={() => gotoX(depth + 1)}>Go deeper!</ListItem>\r
      <ListItem accessory="chevron" onclick={() => {\r
        shell.pushPage({\r
          title: 'Child 1',\r
          view: MobileChildPage1,\r
        });\r
      }}>To ChildPage1</ListItem>\r
      <ListItem accessory="switch">Toggle</ListItem>\r
    </ListSection>\r
  </List>\r
{/snippet}\r
</AppShell>
</undefined>`}}}),h()}var q,J,Y,X,Z,Q,$;e((()=>{l(),y(),D(),O(),E(),j(),ee(),te(),ne(),M(),N(),P(),C(),F(),I(),L(),w(),R(),W(),g(),b(),q={title:`Mobile`,tags:[],parameters:{layout:`fullscreen`}},{Story:J}=x(q),Y=d(void 0),X=t(`<!> <!> <!>`,1),K.__docgen={data:[],name:`Mobile.stories.svelte`},Z=S(K,q),Q=[`Mobile`],$={...Z.Mobile,tags:[`svelte-csf-v5`]}}))();export{$ as Mobile,Q as __namedExportsOrder,q as default};