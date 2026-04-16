import{n as e}from"./chunk-BneVvdWh.js";import{A as t,E as n,G as r,K as i,N as a,O as o,V as s,a as c,b as l,k as u,nt as d,ot as f,t as p,tt as m,ut as h,x as g}from"./client-kmAv9JMI.js";import{a as _,i as v,n as y,r as b,t as x}from"./create-runtime-stories-x5tpYKlc.js";import{a as S,i as C,n as w,o as T,r as E,t as D}from"./List-D9FpxJwl.js";function O(e,t){d(t,!1),c();var p=B(),h=r(p);A(h,{name:`Simple List`,children:(e,t)=>{E(e,{children:(e,t)=>{var n=j(),s=r(n);S(s,{children:(e,t)=>{f(),o(e,a(`Inbox`))},$$slots:{default:!0}});var c=i(s,2);S(c,{children:(e,t)=>{f(),o(e,a(`Sent`))},$$slots:{default:!0}});var l=i(c,2);S(l,{children:(e,t)=>{f(),o(e,a(`Drafts`))},$$slots:{default:!0}}),S(i(l,2),{children:(e,t)=>{f(),o(e,a(`Trash`))},$$slots:{default:!0}}),o(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
<ListItem>Inbox</ListItem>\r
<ListItem>Sent</ListItem>\r
<ListItem>Drafts</ListItem>\r
<ListItem>Trash</ListItem>\r
</ListSection>
</List>`}}});var _=i(h,2);A(_,{name:`With Descriptions`,children:(e,t)=>{E(e,{children:(e,t)=>{var n=F(),s=r(n);S(s,{leading:e=>{o(e,M())},description:e=>{f(),o(e,a(`256 GB · Space Black`))},trailing:e=>{f(),o(e,a(`$999`))},children:(e,t)=>{f(),o(e,a(`iPhone 15 Pro`))},$$slots:{leading:!0,description:!0,trailing:!0,default:!0}});var c=i(s,2);S(c,{leading:e=>{o(e,N())},description:e=>{f(),o(e,a(`M3 · 16 GB · Midnight`))},trailing:e=>{f(),o(e,a(`$1,299`))},children:(e,t)=>{f(),o(e,a(`MacBook Air`))},$$slots:{leading:!0,description:!0,trailing:!0,default:!0}}),S(i(c,2),{leading:e=>{o(e,P())},description:e=>{f(),o(e,a(`49mm · Titanium`))},trailing:e=>{f(),o(e,a(`$799`))},children:(e,t)=>{f(),o(e,a(`Apple Watch Ultra`))},$$slots:{leading:!0,description:!0,trailing:!0,default:!0}}),o(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
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
</List>`}}});var v=i(_,2);A(v,{name:`Grouped (Settings Style)`,children:(e,t)=>{var n=R(),s=r(n);E(s,{header:`General`,children:(e,t)=>{var n=I(),s=r(n);S(s,{accessory:`chevron`,trailing:e=>{f(),o(e,a(`English`))},children:(e,t)=>{f(),o(e,a(`Language`))},$$slots:{trailing:!0,default:!0}}),S(i(s,2),{trailing:e=>{f(),o(e,a(`United States`))},children:(e,t)=>{f(),o(e,a(`Region`))},$$slots:{trailing:!0,default:!0}}),o(e,n)},$$slots:{default:!0}}),E(i(s,2),{header:`Notifications`,children:(e,t)=>{var n=L(),s=r(n);S(s,{accessory:`switch`,trailing:e=>{f(),o(e,a(`On`))},children:(e,t)=>{f(),o(e,a(`Push Notifications`))},$$slots:{trailing:!0,default:!0}});var c=i(s,2);S(c,{accessory:`switch`,trailing:e=>{f(),o(e,a(`Off`))},children:(e,t)=>{f(),o(e,a(`Email Alerts`))},$$slots:{trailing:!0,default:!0}}),S(i(c,2),{accessory:`chevron`,trailing:e=>{f(),o(e,a(`Default`))},children:(e,t)=>{f(),o(e,a(`Sound`))},$$slots:{trailing:!0,default:!0}}),o(e,n)},$$slots:{default:!0}}),o(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
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
</List>`}}});var y=i(v,2);A(y,{name:`Scrollable`,args:{scrollable:!0,maxHeight:`200px`},children:(e,t)=>{E(e,{children:(e,t)=>{var i=u();l(r(i),0,()=>Array.from({length:20},(e,t)=>t+1),g,(e,t)=>{S(e,{children:(e,r)=>{f();var i=a();s(()=>n(i,`Item ${t??``}`)),o(e,i)},$$slots:{default:!0}})}),o(e,i)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
{#each Array.from({ length: 20 }, (_, i) => i + 1) as item}\r
  <ListItem>Item {item}</ListItem>\r
{/each}\r
</ListSection>
</List>`}}}),A(i(y,2),{name:`With Selection`,children:(e,t)=>{E(e,{children:(e,t)=>{var n=z(),s=r(n);S(s,{selected:!0,children:(e,t)=>{f(),o(e,a(`Selected item`))},$$slots:{default:!0}});var c=i(s,2);S(c,{children:(e,t)=>{f(),o(e,a(`Normal item`))},$$slots:{default:!0}});var l=i(c,2);S(l,{disabled:!0,children:(e,t)=>{f(),o(e,a(`Disabled item`))},$$slots:{default:!0}}),S(i(l,2),{children:(e,t)=>{f(),o(e,a(`Another item`))},$$slots:{default:!0}}),o(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<List {...args}>
  <ListSection>\r
<ListItem selected>Selected item</ListItem>\r
<ListItem>Normal item</ListItem>\r
<ListItem disabled>Disabled item</ListItem>\r
<ListItem>Another item</ListItem>\r
</ListSection>
</List>`}}}),o(e,p),m()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{h(),_(),v(),w(),T(),C(),p(),y(),k={title:`Lists/List`,component:D,tags:[`autodocs`]},{Story:A}=b(k),j=t(`<!> <!> <!> <!>`,1),M=t(`<span style="font-size: 24px;">📱</span>`),N=t(`<span style="font-size: 24px;">💻</span>`),P=t(`<span style="font-size: 24px;">⌚</span>`),F=t(`<!> <!> <!>`,1),I=t(`<!> <!>`,1),L=t(`<!> <!> <!>`,1),R=t(`<!> <!>`,1),z=t(`<!> <!> <!> <!>`,1),B=t(`<!> <!> <!> <!> <!>`,1),O.__docgen={data:[],name:`List.stories.svelte`},V=x(O,k),H=[`SimpleList`,`WithDescriptions`,`GroupedSettingsStyle`,`Scrollable`,`WithSelection`],U={...V.SimpleList,tags:[`svelte-csf-v5`]},W={...V.WithDescriptions,tags:[`svelte-csf-v5`]},G={...V.GroupedSettingsStyle,tags:[`svelte-csf-v5`]},K={...V.Scrollable,tags:[`svelte-csf-v5`]},q={...V.WithSelection,tags:[`svelte-csf-v5`]}}))();export{G as GroupedSettingsStyle,K as Scrollable,U as SimpleList,W as WithDescriptions,q as WithSelection,H as __namedExportsOrder,k as default};