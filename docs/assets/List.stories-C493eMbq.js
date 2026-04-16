import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,A as n,E as r,N as i,O as a,Q as o,U as s,W as c,a as l,b as u,k as d,rt as f,st as p,t as m,x as h,z as g}from"./client-BYAvDGw8.js";import{a as _,i as v,n as y,r as b,t as x}from"./create-runtime-stories-DATh2M70.js";import{a as S,i as C,n as w,o as T,r as E,t as D}from"./List-7Enlu9FH.js";function O(e,n){t(n,!1),l();var p=B(),m=s(p);A(m,{name:`Simple List`,children:(e,t)=>{E(e,{children:(e,t)=>{var n=j(),r=s(n);S(r,{children:(e,t)=>{f(),a(e,i(`Inbox`))},$$slots:{default:!0}});var o=c(r,2);S(o,{children:(e,t)=>{f(),a(e,i(`Sent`))},$$slots:{default:!0}});var l=c(o,2);S(l,{children:(e,t)=>{f(),a(e,i(`Drafts`))},$$slots:{default:!0}}),S(c(l,2),{children:(e,t)=>{f(),a(e,i(`Trash`))},$$slots:{default:!0}}),a(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
<ListItem>Inbox</ListItem>\r
<ListItem>Sent</ListItem>\r
<ListItem>Drafts</ListItem>\r
<ListItem>Trash</ListItem>\r
</ListSection>
</List>`}}});var _=c(m,2);A(_,{name:`With Descriptions`,children:(e,t)=>{E(e,{children:(e,t)=>{var n=F(),r=s(n);S(r,{leading:e=>{a(e,M())},description:e=>{f(),a(e,i(`256 GB · Space Black`))},trailing:e=>{f(),a(e,i(`$999`))},children:(e,t)=>{f(),a(e,i(`iPhone 15 Pro`))},$$slots:{leading:!0,description:!0,trailing:!0,default:!0}});var o=c(r,2);S(o,{leading:e=>{a(e,N())},description:e=>{f(),a(e,i(`M3 · 16 GB · Midnight`))},trailing:e=>{f(),a(e,i(`$1,299`))},children:(e,t)=>{f(),a(e,i(`MacBook Air`))},$$slots:{leading:!0,description:!0,trailing:!0,default:!0}}),S(c(o,2),{leading:e=>{a(e,P())},description:e=>{f(),a(e,i(`49mm · Titanium`))},trailing:e=>{f(),a(e,i(`$799`))},children:(e,t)=>{f(),a(e,i(`Apple Watch Ultra`))},$$slots:{leading:!0,description:!0,trailing:!0,default:!0}}),a(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
<ListItem>\r
  {#snippet leading()}<span style="font-size: 24px;">📱</span>{/snippet}\r
  iPhone 15 Pro\r
  {#snippet description()}256 GB · Space Black{/snippet}\r
  {#snippet trailing()}$999{/snippet}\r
</ListItem>\r
<ListItem>\r
  {#snippet leading()}<span style="font-size: 24px;">💻</span>{/snippet}\r
  MacBook Air\r
  {#snippet description()}M3 · 16 GB · Midnight{/snippet}\r
  {#snippet trailing()}$1,299{/snippet}\r
</ListItem>\r
<ListItem>\r
  {#snippet leading()}<span style="font-size: 24px;">⌚</span>{/snippet}\r
  Apple Watch Ultra\r
  {#snippet description()}49mm · Titanium{/snippet}\r
  {#snippet trailing()}$799{/snippet}\r
</ListItem>\r
</ListSection>
</List>`}}});var v=c(_,2);A(v,{name:`Grouped (Settings Style)`,children:(e,t)=>{var n=R(),r=s(n);E(r,{header:`General`,children:(e,t)=>{var n=I(),r=s(n);S(r,{accessory:`chevron`,trailing:e=>{f(),a(e,i(`English`))},children:(e,t)=>{f(),a(e,i(`Language`))},$$slots:{trailing:!0,default:!0}}),S(c(r,2),{trailing:e=>{f(),a(e,i(`United States`))},children:(e,t)=>{f(),a(e,i(`Region`))},$$slots:{trailing:!0,default:!0}}),a(e,n)},$$slots:{default:!0}}),E(c(r,2),{header:`Notifications`,children:(e,t)=>{var n=L(),r=s(n);S(r,{accessory:`switch`,trailing:e=>{f(),a(e,i(`On`))},children:(e,t)=>{f(),a(e,i(`Push Notifications`))},$$slots:{trailing:!0,default:!0}});var o=c(r,2);S(o,{accessory:`switch`,trailing:e=>{f(),a(e,i(`Off`))},children:(e,t)=>{f(),a(e,i(`Email Alerts`))},$$slots:{trailing:!0,default:!0}}),S(c(o,2),{accessory:`chevron`,trailing:e=>{f(),a(e,i(`Default`))},children:(e,t)=>{f(),a(e,i(`Sound`))},$$slots:{trailing:!0,default:!0}}),a(e,n)},$$slots:{default:!0}}),a(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection header="General">\r
<ListItem accessory="chevron">\r
  Language\r
  {#snippet trailing()}English{/snippet}\r
</ListItem>\r
<ListItem>\r
  Region\r
  {#snippet trailing()}United States{/snippet}\r
</ListItem>\r
</ListSection>\r
\r
<ListSection header="Notifications">\r
<ListItem accessory="switch">\r
  Push Notifications\r
  {#snippet trailing()}On{/snippet}\r
</ListItem>\r
<ListItem accessory="switch">\r
  Email Alerts\r
  {#snippet trailing()}Off{/snippet}\r
</ListItem>\r
<ListItem accessory="chevron">\r
  Sound\r
  {#snippet trailing()}Default{/snippet}\r
</ListItem>\r
</ListSection>
</List>`}}});var y=c(v,2);A(y,{name:`Scrollable`,args:{scrollable:!0,maxHeight:`200px`},children:(e,t)=>{E(e,{children:(e,t)=>{var n=d();u(s(n),0,()=>Array.from({length:20},(e,t)=>t+1),h,(e,t)=>{S(e,{children:(e,n)=>{f();var o=i();g(()=>r(o,`Item ${t??``}`)),a(e,o)},$$slots:{default:!0}})}),a(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
{#each Array.from({ length: 20 }, (_, i) => i + 1) as item}\r
  <ListItem>Item {item}</ListItem>\r
{/each}\r
</ListSection>
</List>`}}}),A(c(y,2),{name:`With Selection`,children:(e,t)=>{E(e,{children:(e,t)=>{var n=z(),r=s(n);S(r,{selected:!0,children:(e,t)=>{f(),a(e,i(`Selected item`))},$$slots:{default:!0}});var o=c(r,2);S(o,{children:(e,t)=>{f(),a(e,i(`Normal item`))},$$slots:{default:!0}});var l=c(o,2);S(l,{disabled:!0,children:(e,t)=>{f(),a(e,i(`Disabled item`))},$$slots:{default:!0}}),S(c(l,2),{children:(e,t)=>{f(),a(e,i(`Another item`))},$$slots:{default:!0}}),a(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
<ListItem selected>Selected item</ListItem>\r
<ListItem>Normal item</ListItem>\r
<ListItem disabled>Disabled item</ListItem>\r
<ListItem>Another item</ListItem>\r
</ListSection>
</List>`}}}),a(e,p),o()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{p(),_(),v(),w(),T(),C(),m(),y(),k={title:`Lists/List`,component:D,tags:[`autodocs`]},{Story:A}=b(k),j=n(`<!> <!> <!> <!>`,1),M=n(`<span style="font-size: 24px;">📱</span>`),N=n(`<span style="font-size: 24px;">💻</span>`),P=n(`<span style="font-size: 24px;">⌚</span>`),F=n(`<!> <!> <!>`,1),I=n(`<!> <!>`,1),L=n(`<!> <!> <!>`,1),R=n(`<!> <!>`,1),z=n(`<!> <!> <!> <!>`,1),B=n(`<!> <!> <!> <!> <!>`,1),O.__docgen={data:[],name:`List.stories.svelte`},V=x(O,k),H=[`SimpleList`,`WithDescriptions`,`GroupedSettingsStyle`,`Scrollable`,`WithSelection`],U={...V.SimpleList,tags:[`svelte-csf-v5`]},W={...V.WithDescriptions,tags:[`svelte-csf-v5`]},G={...V.GroupedSettingsStyle,tags:[`svelte-csf-v5`]},K={...V.Scrollable,tags:[`svelte-csf-v5`]},q={...V.WithSelection,tags:[`svelte-csf-v5`]}}))();export{G as GroupedSettingsStyle,K as Scrollable,U as SimpleList,W as WithDescriptions,q as WithSelection,H as __namedExportsOrder,k as default};