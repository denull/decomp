import{n as e}from"./chunk-BneVvdWh.js";import{A as t,G as n,J as r,K as i,N as a,O as o,S as s,W as c,Y as l,nt as u,o as d,ot as f,st as ee,t as p,tt as te,ut as m,z as h}from"./client-kmAv9JMI.js";import{n as g,t as _}from"./iframe-C-yPui6G.js";import{i as v,n as y,r as b,t as x}from"./create-runtime-stories-q1XJjIxV.js";import{n as S,t as C}from"./Input-CQRYEUXq.js";import{n as w,t as T}from"./Dialog-Cd5zlSaX.js";function E(e,t){u(t,!0);var l=K(),p=n(l);O(p,{name:`Basic`,template:e=>{var t=F(),s=n(t);_(s,{onclick:()=>h(k).show(),children:(e,t)=>{f(),o(e,a(`Open Dialog`))},$$slots:{default:!0}}),d(T(i(s,2),{title:`Welcome`,children:(e,t)=>{o(e,P())},$$slots:{default:!0}}),e=>r(k,e,!0),()=>h(k)),o(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => basicDialog.show()}>Open Dialog</Button>
<Dialog bind:this={basicDialog} title="Welcome">
  <p>This is a basic dialog. Click the close button to dismiss.</p>
</Dialog>`}}});var m=i(p,2);O(m,{name:`Alert with Footer`,template:e=>{var t=R(),s=n(t);_(s,{variant:`destructive`,onclick:()=>h(A).show(),children:(e,t)=>{f(),o(e,a(`Delete Account`))},$$slots:{default:!0}}),d(T(i(s,2),{variant:`alert`,title:`Confirm Action`,footer:e=>{var t=I(),r=n(t);_(r,{onclick:()=>h(A).hide(),children:(e,t)=>{f(),o(e,a(`Cancel`))},$$slots:{default:!0}}),_(i(r,2),{variant:`destructive`,onclick:()=>h(A).hide(),children:(e,t)=>{f(),o(e,a(`Delete`))},$$slots:{default:!0}}),o(e,t)},children:(e,t)=>{o(e,L())},$$slots:{footer:!0,default:!0}}),e=>r(A,e,!0),()=>h(A)),o(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Button variant="destructive" onclick={() => alertDialog.show()}>Delete Account</Button>
<Dialog bind:this={alertDialog} variant="alert" title="Confirm Action">
  <p>Are you sure you want to proceed? This operation cannot be undone.</p>
  {#snippet footer()}
    <Button onclick={() => alertDialog.hide()}>Cancel</Button>
    <Button variant="destructive" onclick={() => alertDialog.hide()}>Delete</Button>
  {/snippet}
</Dialog>`}}});var g=i(m,2);O(g,{name:`Draggable`,template:e=>{var t=B(),s=n(t);_(s,{onclick:()=>h(j).show(),children:(e,t)=>{f(),o(e,a(`Open Draggable`))},$$slots:{default:!0}}),d(T(i(s,2),{title:`Draggable Dialog`,draggable:!0,children:(e,t)=>{o(e,z())},$$slots:{default:!0}}),e=>r(j,e,!0),()=>h(j)),o(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => draggableDialog.show()}>Open Draggable</Button>
<Dialog bind:this={draggableDialog} title="Draggable Dialog" draggable>
  <p>Grab the title bar and drag this dialog around.</p>
</Dialog>`}}});var v=i(g,2);O(v,{name:`With Form`,template:e=>{var t=U(),s=n(t);_(s,{variant:`primary`,onclick:()=>h(M).show(),children:(e,t)=>{f(),o(e,a(`New Project`))},$$slots:{default:!0}}),d(T(i(s,2),{title:`Create Project`,footer:e=>{var t=V(),r=n(t);_(r,{onclick:()=>h(M).hide(),children:(e,t)=>{f(),o(e,a(`Cancel`))},$$slots:{default:!0}}),_(i(r,2),{variant:`primary`,onclick:()=>h(M).hide(),children:(e,t)=>{f(),o(e,a(`Create`))},$$slots:{default:!0}}),o(e,t)},children:(e,t)=>{var n=H(),r=c(n);C(r,{label:`Project Name`,placeholder:`My Project`});var a=i(r,2);C(a,{variant:`multiline`,label:`Description`,placeholder:`What is this project about?`}),C(i(a,2),{variant:`select`,label:`Visibility`,options:[`Public`,`Private`,`Internal`],placeholder:`Choose...`}),ee(n),o(e,n)},$$slots:{footer:!0,default:!0}}),e=>r(M,e,!0),()=>h(M)),o(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Button variant="primary" onclick={() => formDialog.show()}>New Project</Button>
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
</Dialog>`}}});var y=i(v,2);O(y,{name:`Bound Open State`,template:e=>{var t=G(),c=n(t);T(c,{title:`Bound Open`,get open(){return h(N)},set open(e){r(N,e,!0)},footer:e=>{_(e,{onclick:()=>r(N,!1),children:(e,t)=>{f(),o(e,a(`Close`))},$$slots:{default:!0}})},children:(e,t)=>{o(e,W())},$$slots:{footer:!0,default:!0}});var l=i(c,2),u=e=>{_(e,{onclick:()=>r(N,!0),children:(e,t)=>{f(),o(e,a(`Reopen`))},$$slots:{default:!0}})};s(l,e=>{h(N)||e(u)}),o(e,t)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Dialog bind:open={openState} title="Bound Open">
  <p>This dialog uses the bindable <code>open</code> prop instead of imperative show/hide.</p>
  {#snippet footer()}
    <Button onclick={() => openState = false}>Close</Button>
  {/snippet}
</Dialog>
{#if !openState}
  <Button onclick={() => openState = true}>Reopen</Button>
{/if}`}}}),o(e,l),te()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),v(),w(),g(),S(),p(),y(),D={title:`Containers/Dialog`,component:T,tags:[`autodocs`],argTypes:{variant:{control:{type:`select`},options:[null,`alert`]},draggable:{control:`boolean`}}},{Story:O}=b(D),k=l(null),A=l(null),j=l(null),M=l(null),N=l(!0),P=t(`<p>This is a basic dialog. Click the close button to dismiss.</p>`),F=t(`<!> <!>`,1),I=t(`<!> <!>`,1),L=t(`<p>Are you sure you want to proceed? This operation cannot be undone.</p>`),R=t(`<!> <!>`,1),z=t(`<p>Grab the title bar and drag this dialog around.</p>`),B=t(`<!> <!>`,1),V=t(`<!> <!>`,1),H=t(`<div style="display: flex; flex-direction: column; gap: 12px; min-width: 320px;"><!> <!> <!></div>`),U=t(`<!> <!>`,1),W=t(`<p>This dialog uses the bindable <code>open</code> prop instead of imperative show/hide.</p>`),G=t(`<!> <!>`,1),K=t(`<!> <!> <!> <!> <!>`,1),E.__docgen={data:[],name:`Dialog.stories.svelte`},q=x(E,D),J=[`Basic`,`AlertWithFooter`,`Draggable`,`WithForm`,`BoundOpenState`],Y={...q.Basic,tags:[`svelte-csf-v5`]},X={...q.AlertWithFooter,tags:[`svelte-csf-v5`]},Z={...q.Draggable,tags:[`svelte-csf-v5`]},Q={...q.WithForm,tags:[`svelte-csf-v5`]},$={...q.BoundOpenState,tags:[`svelte-csf-v5`]}}))();export{X as AlertWithFooter,Y as Basic,$ as BoundOpenState,Z as Draggable,Q as WithForm,J as __namedExportsOrder,D as default};