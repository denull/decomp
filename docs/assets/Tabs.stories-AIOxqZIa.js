import{n as e}from"./chunk-BneVvdWh.js";import{A as t,E as n,J as r,K as i,O as a,Q as o,U as s,bt as c,ct as l,et as u,gt as d,q as f,st as p,t as m,z as h}from"./client-DVBkriut.js";import{i as g,n as _,r as v,t as y}from"./create-runtime-stories-LfQYHLx5.js";import{n as b,t as x}from"./Tabs-pgHSPV93.js";function S(e,t){l(t,!0);var c=A(),u=f(c);w(u,{name:`String Tabs`,template:e=>{x(e,{tabs:[`Overview`,`Activity`,`Settings`],get value(){return h(T)},set value(e){o(T,e,!0)},children:(e,t)=>{var o=E(),c=r(i(o)),l=i(c,!0);d(c),d(o),s(()=>n(l,h(T))),a(e,o)},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Tabs tabs={['Overview', 'Activity', 'Settings']} bind:value={selected}>
  <p style="padding-top: 12px;">Current tab: <strong>{selected}</strong></p>
</Tabs>`}}});var m=r(u,2);w(m,{name:`Object Tabs with Snippets`,template:e=>{x(e,{tabs:[{title:`Overview`,value:`overview`,snippet:`overview`},{title:`Activity`,value:`activity`,snippet:`activity`},{title:`Settings`,value:`settings`,snippet:`settings`}],value:`overview`,overview:e=>{a(e,D())},activity:e=>{a(e,O())},settings:e=>{a(e,k())},$$slots:{overview:!0,activity:!0,settings:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Tabs tabs={[
  { title: 'Overview', value: 'overview', snippet: 'overview' },
  { title: 'Activity', value: 'activity', snippet: 'activity' },
  { title: 'Settings', value: 'settings', snippet: 'settings' },
]} value="overview">
  {#snippet overview()}
    <p>Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule.</p>
  {/snippet}
  {#snippet activity()}
    <p><strong>Today</strong> — Alice pushed 3 commits<br>
    <strong>Yesterday</strong> — Bob merged PR #142<br>
    <strong>Mar 8</strong> — Eve updated the project roadmap</p>
  {/snippet}
  {#snippet settings()}
    <p>Settings panel content goes here.</p>
  {/snippet}
</Tabs>`}}});var g=r(m,2);w(g,{name:`Many Tabs`,template:e=>{x(e,{tabs:[`Home`,`Profile`,`Messages`,`Notifications`,`Privacy`,`Billing`,`Help`],value:`Home`})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Tabs tabs={['Home', 'Profile', 'Messages', 'Notifications', 'Privacy', 'Billing', 'Help']} value="Home" />`}}});var _=r(g,2);w(_,{name:`Two Tabs`,template:e=>{x(e,{tabs:[`Login`,`Sign Up`],value:`Login`})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Tabs tabs={['Login', 'Sign Up']} value="Login" />`}}}),a(e,c),p()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{c(),g(),b(),m(),_(),C={title:`Containers/Tabs`,component:x,tags:[`autodocs`]},{Story:w}=v(C),T=u(`Overview`),E=t(`<p style="padding-top: 12px;">Current tab: <strong> </strong></p>`),D=t(`<p>Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule.</p>`),O=t(`<p><strong>Today</strong> — Alice pushed 3 commits<br/> <strong>Yesterday</strong> — Bob merged PR #142<br/> <strong>Mar 8</strong> — Eve updated the project roadmap</p>`),k=t(`<p>Settings panel content goes here.</p>`),A=t(`<!> <!> <!> <!>`,1),S.__docgen={data:[],name:`Tabs.stories.svelte`},j=y(S,C),M=[`StringTabs`,`ObjectTabsWithSnippets`,`ManyTabs`,`TwoTabs`],N={...j.StringTabs,tags:[`svelte-csf-v5`]},P={...j.ObjectTabsWithSnippets,tags:[`svelte-csf-v5`]},F={...j.ManyTabs,tags:[`svelte-csf-v5`]},I={...j.TwoTabs,tags:[`svelte-csf-v5`]}}))();export{F as ManyTabs,P as ObjectTabsWithSnippets,N as StringTabs,I as TwoTabs,M as __namedExportsOrder,C as default};