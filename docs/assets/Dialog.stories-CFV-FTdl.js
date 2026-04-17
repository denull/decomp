import{n as e}from"./chunk-BneVvdWh.js";import{A as t,J as n,K as r,N as i,O as a,Q as o,S as s,bt as c,ct as l,et as u,gt as ee,ht as d,o as f,q as p,st as m,t as h,z as g}from"./client-DVBkriut.js";import{i as _,n as v,r as y,t as b}from"./create-runtime-stories-LfQYHLx5.js";import{n as x,t as S}from"./Button-DxUEtBqm.js";import{n as te,t as C}from"./Input-BZkU0DSO.js";import{n as w,t as T}from"./Dialog-CC7eAqq3.js";function E(e,t){l(t,!0);var c=K(),u=p(c);O(u,{name:`Basic`,template:e=>{var t=F(),r=p(t);S(r,{onclick:()=>g(k).show(),children:(e,t)=>{d(),a(e,i(`Open Dialog`))},$$slots:{default:!0}}),f(T(n(r,2),{title:`Welcome`,children:(e,t)=>{a(e,P())},$$slots:{default:!0}}),e=>o(k,e,!0),()=>g(k)),a(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => basicDialog.show()}>Open Dialog</Button>
<Dialog bind:this={basicDialog} title="Welcome">
  <p>This is a basic dialog. Click the close button to dismiss.</p>
</Dialog>`}}});var h=n(u,2);O(h,{name:`Alert with Footer`,template:e=>{var t=R(),r=p(t);S(r,{variant:`destructive`,onclick:()=>g(A).show(),children:(e,t)=>{d(),a(e,i(`Delete Account`))},$$slots:{default:!0}}),f(T(n(r,2),{variant:`alert`,title:`Confirm Action`,footer:e=>{var t=I(),r=p(t);S(r,{onclick:()=>g(A).hide(),children:(e,t)=>{d(),a(e,i(`Cancel`))},$$slots:{default:!0}}),S(n(r,2),{variant:`destructive`,onclick:()=>g(A).hide(),children:(e,t)=>{d(),a(e,i(`Delete`))},$$slots:{default:!0}}),a(e,t)},children:(e,t)=>{a(e,L())},$$slots:{footer:!0,default:!0}}),e=>o(A,e,!0),()=>g(A)),a(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Button variant="destructive" onclick={() => alertDialog.show()}>Delete Account</Button>
<Dialog bind:this={alertDialog} variant="alert" title="Confirm Action">
  <p>Are you sure you want to proceed? This operation cannot be undone.</p>
  {#snippet footer()}
    <Button onclick={() => alertDialog.hide()}>Cancel</Button>
    <Button variant="destructive" onclick={() => alertDialog.hide()}>Delete</Button>
  {/snippet}
</Dialog>`}}});var _=n(h,2);O(_,{name:`Draggable`,template:e=>{var t=B(),r=p(t);S(r,{onclick:()=>g(j).show(),children:(e,t)=>{d(),a(e,i(`Open Draggable`))},$$slots:{default:!0}}),f(T(n(r,2),{title:`Draggable Dialog`,draggable:!0,children:(e,t)=>{a(e,z())},$$slots:{default:!0}}),e=>o(j,e,!0),()=>g(j)),a(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => draggableDialog.show()}>Open Draggable</Button>
<Dialog bind:this={draggableDialog} title="Draggable Dialog" draggable>
  <p>Grab the title bar and drag this dialog around.</p>
</Dialog>`}}});var v=n(_,2);O(v,{name:`With Form`,template:e=>{var t=U(),s=p(t);S(s,{variant:`primary`,onclick:()=>g(M).show(),children:(e,t)=>{d(),a(e,i(`New Project`))},$$slots:{default:!0}}),f(T(n(s,2),{title:`Create Project`,footer:e=>{var t=V(),r=p(t);S(r,{onclick:()=>g(M).hide(),children:(e,t)=>{d(),a(e,i(`Cancel`))},$$slots:{default:!0}}),S(n(r,2),{variant:`primary`,onclick:()=>g(M).hide(),children:(e,t)=>{d(),a(e,i(`Create`))},$$slots:{default:!0}}),a(e,t)},children:(e,t)=>{var i=H(),o=r(i);C(o,{label:`Project Name`,placeholder:`My Project`});var s=n(o,2);C(s,{variant:`multiline`,label:`Description`,placeholder:`What is this project about?`}),C(n(s,2),{variant:`select`,label:`Visibility`,options:[`Public`,`Private`,`Internal`],placeholder:`Choose...`}),ee(i),a(e,i)},$$slots:{footer:!0,default:!0}}),e=>o(M,e,!0),()=>g(M)),a(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Button variant="primary" onclick={() => formDialog.show()}>New Project</Button>
<Dialog bind:this={formDialog} title="Create Project">
  <div style="display: flex; flex-direction: column; gap: 12px; min-width: 320px;">
    <Input label="Project Name" placeholder="My Project" />
    <Input variant="multiline" label="Description" placeholder="What is this project about?" />
    <Input variant="select" label="Visibility" options={['Public', 'Private', 'Internal']} placeholder="Choose..." />
  </div>
  {#snippet footer()}
    <Button onclick={() => formDialog.hide()}>Cancel</Button>
    <Button variant="primary" onclick={() => formDialog.hide()}>Create</Button>
  {/snippet}
</Dialog>`}}});var y=n(v,2);O(y,{name:`Bound Open State`,template:e=>{var t=G(),r=p(t);T(r,{title:`Bound Open`,get open(){return g(N)},set open(e){o(N,e,!0)},footer:e=>{S(e,{onclick:()=>o(N,!1),children:(e,t)=>{d(),a(e,i(`Close`))},$$slots:{default:!0}})},children:(e,t)=>{a(e,W())},$$slots:{footer:!0,default:!0}});var c=n(r,2),l=e=>{S(e,{onclick:()=>o(N,!0),children:(e,t)=>{d(),a(e,i(`Reopen`))},$$slots:{default:!0}})};s(c,e=>{g(N)||e(l)}),a(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Dialog bind:open={openState} title="Bound Open">
  <p>This dialog uses the bindable <code>open</code> prop instead of imperative show/hide.</p>
  {#snippet footer()}
    <Button onclick={() => openState = false}>Close</Button>
  {/snippet}
</Dialog>
{#if !openState}
  <Button onclick={() => openState = true}>Reopen</Button>
{/if}`}}}),a(e,c),m()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),_(),w(),x(),te(),h(),v(),D={title:`Containers/Dialog`,component:T,tags:[`autodocs`],argTypes:{variant:{control:{type:`select`},options:[null,`alert`]},draggable:{control:`boolean`}}},{Story:O}=y(D),k=u(null),A=u(null),j=u(null),M=u(null),N=u(!0),P=t(`<p>This is a basic dialog. Click the close button to dismiss.</p>`),F=t(`<!> <!>`,1),I=t(`<!> <!>`,1),L=t(`<p>Are you sure you want to proceed? This operation cannot be undone.</p>`),R=t(`<!> <!>`,1),z=t(`<p>Grab the title bar and drag this dialog around.</p>`),B=t(`<!> <!>`,1),V=t(`<!> <!>`,1),H=t(`<div style="display: flex; flex-direction: column; gap: 12px; min-width: 320px;"><!> <!> <!></div>`),U=t(`<!> <!>`,1),W=t(`<p>This dialog uses the bindable <code>open</code> prop instead of imperative show/hide.</p>`),G=t(`<!> <!>`,1),K=t(`<!> <!> <!> <!> <!>`,1),E.__docgen={data:[],name:`Dialog.stories.svelte`},q=b(E,D),J=[`Basic`,`AlertWithFooter`,`Draggable`,`WithForm`,`BoundOpenState`],Y={...q.Basic,tags:[`svelte-csf-v5`]},X={...q.AlertWithFooter,tags:[`svelte-csf-v5`]},Z={...q.Draggable,tags:[`svelte-csf-v5`]},Q={...q.WithForm,tags:[`svelte-csf-v5`]},$={...q.BoundOpenState,tags:[`svelte-csf-v5`]}}))();export{X as AlertWithFooter,Y as Basic,$ as BoundOpenState,Z as Draggable,Q as WithForm,J as __namedExportsOrder,D as default};