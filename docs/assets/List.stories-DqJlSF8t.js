import{n as e}from"./chunk-BneVvdWh.js";import{A as t,E as n,J as r,N as i,O as a,U as o,a as s,b as c,bt as l,ct as u,ht as d,k as f,q as p,st as m,t as h,x as g}from"./client-DVBkriut.js";import{a as _,i as v,n as y,r as b,t as x}from"./create-runtime-stories-C7ez5IF4.js";import{a as S,i as C,n as w,o as T,r as E,t as D}from"./List-CFuyTIaM.js";function O(e,t){u(t,!1),s();var l=B(),h=p(l);A(h,{name:`Simple List`,children:(e,t)=>{E(e,{children:(e,t)=>{var n=j(),o=p(n);S(o,{children:(e,t)=>{d(),a(e,i(`Inbox`))},$$slots:{default:!0}});var s=r(o,2);S(s,{children:(e,t)=>{d(),a(e,i(`Sent`))},$$slots:{default:!0}});var c=r(s,2);S(c,{children:(e,t)=>{d(),a(e,i(`Drafts`))},$$slots:{default:!0}}),S(r(c,2),{children:(e,t)=>{d(),a(e,i(`Trash`))},$$slots:{default:!0}}),a(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
<ListItem>Inbox</ListItem>\r
<ListItem>Sent</ListItem>\r
<ListItem>Drafts</ListItem>\r
<ListItem>Trash</ListItem>\r
</ListSection>
</List>`}}});var _=r(h,2);A(_,{name:`With Descriptions`,children:(e,t)=>{E(e,{children:(e,t)=>{var n=F(),o=p(n);S(o,{leading:e=>{a(e,M())},description:e=>{d(),a(e,i(`256 GB · Space Black`))},trailing:e=>{d(),a(e,i(`$999`))},children:(e,t)=>{d(),a(e,i(`iPhone 15 Pro`))},$$slots:{leading:!0,description:!0,trailing:!0,default:!0}});var s=r(o,2);S(s,{leading:e=>{a(e,N())},description:e=>{d(),a(e,i(`M3 · 16 GB · Midnight`))},trailing:e=>{d(),a(e,i(`$1,299`))},children:(e,t)=>{d(),a(e,i(`MacBook Air`))},$$slots:{leading:!0,description:!0,trailing:!0,default:!0}}),S(r(s,2),{leading:e=>{a(e,P())},description:e=>{d(),a(e,i(`49mm · Titanium`))},trailing:e=>{d(),a(e,i(`$799`))},children:(e,t)=>{d(),a(e,i(`Apple Watch Ultra`))},$$slots:{leading:!0,description:!0,trailing:!0,default:!0}}),a(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
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
</List>`}}});var v=r(_,2);A(v,{name:`Grouped (Settings Style)`,children:(e,t)=>{var n=R(),o=p(n);E(o,{header:`General`,children:(e,t)=>{var n=I(),o=p(n);S(o,{accessory:`chevron`,trailing:e=>{d(),a(e,i(`English`))},children:(e,t)=>{d(),a(e,i(`Language`))},$$slots:{trailing:!0,default:!0}}),S(r(o,2),{trailing:e=>{d(),a(e,i(`United States`))},children:(e,t)=>{d(),a(e,i(`Region`))},$$slots:{trailing:!0,default:!0}}),a(e,n)},$$slots:{default:!0}}),E(r(o,2),{header:`Notifications`,children:(e,t)=>{var n=L(),o=p(n);S(o,{accessory:`switch`,trailing:e=>{d(),a(e,i(`On`))},children:(e,t)=>{d(),a(e,i(`Push Notifications`))},$$slots:{trailing:!0,default:!0}});var s=r(o,2);S(s,{accessory:`switch`,trailing:e=>{d(),a(e,i(`Off`))},children:(e,t)=>{d(),a(e,i(`Email Alerts`))},$$slots:{trailing:!0,default:!0}}),S(r(s,2),{accessory:`chevron`,trailing:e=>{d(),a(e,i(`Default`))},children:(e,t)=>{d(),a(e,i(`Sound`))},$$slots:{trailing:!0,default:!0}}),a(e,n)},$$slots:{default:!0}}),a(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
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
</List>`}}});var y=r(v,2);A(y,{name:`Scrollable`,args:{scrollable:!0,maxHeight:`200px`},children:(e,t)=>{E(e,{children:(e,t)=>{var r=f();c(p(r),0,()=>Array.from({length:20},(e,t)=>t+1),g,(e,t)=>{S(e,{children:(e,r)=>{d();var s=i();o(()=>n(s,`Item ${t??``}`)),a(e,s)},$$slots:{default:!0}})}),a(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
{#each Array.from({ length: 20 }, (_, i) => i + 1) as item}\r
  <ListItem>Item {item}</ListItem>\r
{/each}\r
</ListSection>
</List>`}}}),A(r(y,2),{name:`With Selection`,children:(e,t)=>{E(e,{children:(e,t)=>{var n=z(),o=p(n);S(o,{selected:!0,children:(e,t)=>{d(),a(e,i(`Selected item`))},$$slots:{default:!0}});var s=r(o,2);S(s,{children:(e,t)=>{d(),a(e,i(`Normal item`))},$$slots:{default:!0}});var c=r(s,2);S(c,{disabled:!0,children:(e,t)=>{d(),a(e,i(`Disabled item`))},$$slots:{default:!0}}),S(r(c,2),{children:(e,t)=>{d(),a(e,i(`Another item`))},$$slots:{default:!0}}),a(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
<ListItem selected>Selected item</ListItem>\r
<ListItem>Normal item</ListItem>\r
<ListItem disabled>Disabled item</ListItem>\r
<ListItem>Another item</ListItem>\r
</ListSection>
</List>`}}}),a(e,l),m()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{l(),_(),v(),w(),T(),C(),h(),y(),k={title:`Lists/List`,component:D,tags:[`autodocs`]},{Story:A}=b(k),j=t(`<!> <!> <!> <!>`,1),M=t(`<span style="font-size: 24px;">📱</span>`),N=t(`<span style="font-size: 24px;">💻</span>`),P=t(`<span style="font-size: 24px;">⌚</span>`),F=t(`<!> <!> <!>`,1),I=t(`<!> <!>`,1),L=t(`<!> <!> <!>`,1),R=t(`<!> <!>`,1),z=t(`<!> <!> <!> <!>`,1),B=t(`<!> <!> <!> <!> <!>`,1),O.__docgen={data:[],name:`List.stories.svelte`},V=x(O,k),H=[`SimpleList`,`WithDescriptions`,`GroupedSettingsStyle`,`Scrollable`,`WithSelection`],U={...V.SimpleList,tags:[`svelte-csf-v5`]},W={...V.WithDescriptions,tags:[`svelte-csf-v5`]},G={...V.GroupedSettingsStyle,tags:[`svelte-csf-v5`]},K={...V.Scrollable,tags:[`svelte-csf-v5`]},q={...V.WithSelection,tags:[`svelte-csf-v5`]}}))();export{G as GroupedSettingsStyle,K as Scrollable,U as SimpleList,W as WithDescriptions,q as WithSelection,H as __namedExportsOrder,k as default};