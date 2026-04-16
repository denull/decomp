import{n as e}from"./chunk-BneVvdWh.js";import{A as t,E as n,G as r,J as i,K as a,O as o,V as s,W as c,Y as l,nt as u,st as d,t as f,tt as p,ut as m,z as h}from"./client-kmAv9JMI.js";import{i as g,n as _,r as v,t as y}from"./create-runtime-stories-x5tpYKlc.js";import{n as b,t as x}from"./Tabs-B4zN0g69.js";function S(e,t){u(t,!0);var l=A(),f=r(l);w(f,{name:`String Tabs`,template:e=>{x(e,{tabs:[`Overview`,`Activity`,`Settings`],get value(){return h(T)},set value(e){i(T,e,!0)},children:(e,t)=>{var r=E(),i=a(c(r)),l=c(i,!0);d(i),d(r),s(()=>n(l,h(T))),o(e,r)},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Tabs tabs={['Overview', 'Activity', 'Settings']} bind:value={selected}>
  <p style="padding-top: 12px;">Current tab: <strong>{selected}</strong></p>
</Tabs>`}}});var m=a(f,2);w(m,{name:`Object Tabs with Snippets`,template:e=>{x(e,{tabs:[{title:`Overview`,value:`overview`,snippet:`overview`},{title:`Activity`,value:`activity`,snippet:`activity`},{title:`Settings`,value:`settings`,snippet:`settings`}],value:`overview`,overview:e=>{o(e,D())},activity:e=>{o(e,O())},settings:e=>{o(e,k())},$$slots:{overview:!0,activity:!0,settings:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Tabs tabs={[
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
</Tabs>`}}});var g=a(m,2);w(g,{name:`Many Tabs`,template:e=>{x(e,{tabs:[`Home`,`Profile`,`Messages`,`Notifications`,`Privacy`,`Billing`,`Help`],value:`Home`})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Tabs tabs={['Home', 'Profile', 'Messages', 'Notifications', 'Privacy', 'Billing', 'Help']} value="Home" />`}}});var _=a(g,2);w(_,{name:`Two Tabs`,template:e=>{x(e,{tabs:[`Login`,`Sign Up`],value:`Login`})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Tabs tabs={['Login', 'Sign Up']} value="Login" />`}}}),o(e,l),p()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{m(),g(),b(),f(),_(),C={title:`Containers/Tabs`,component:x,tags:[`autodocs`]},{Story:w}=v(C),T=l(`Overview`),E=t(`<p style="padding-top: 12px;">Current tab: <strong> </strong></p>`),D=t(`<p>Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule.</p>`),O=t(`<p><strong>Today</strong> — Alice pushed 3 commits<br/> <strong>Yesterday</strong> — Bob merged PR #142<br/> <strong>Mar 8</strong> — Eve updated the project roadmap</p>`),k=t(`<p>Settings panel content goes here.</p>`),A=t(`<!> <!> <!> <!>`,1),S.__docgen={data:[],name:`Tabs.stories.svelte`},j=y(S,C),M=[`StringTabs`,`ObjectTabsWithSnippets`,`ManyTabs`,`TwoTabs`],N={...j.StringTabs,tags:[`svelte-csf-v5`]},P={...j.ObjectTabsWithSnippets,tags:[`svelte-csf-v5`]},F={...j.ManyTabs,tags:[`svelte-csf-v5`]},I={...j.TwoTabs,tags:[`svelte-csf-v5`]}}))();export{F as ManyTabs,P as ObjectTabsWithSnippets,N as StringTabs,I as TwoTabs,M as __namedExportsOrder,C as default};