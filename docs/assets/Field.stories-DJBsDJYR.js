import{n as e}from"./chunk-BneVvdWh.js";import{A as t,G as n,J as r,K as i,O as a,W as o,Y as s,nt as c,ot as l,st as u,t as d,tt as f,ut as p,z as m}from"./client-kmAv9JMI.js";import{i as h,n as g,r as _,t as v}from"./create-runtime-stories-x5tpYKlc.js";import{n as y,t as b}from"./Input-CDPTS0BG.js";import{n as x,t as S}from"./Field-j1_jNJaB.js";import{n as C,t as w}from"./Checkbox-KRuyJmp-.js";function T(e,t){c(t,!0);var s=j(),d=n(s);D(d,{name:`Basic`,template:e=>{S(e,{label:`Full Name`,children:(e,t)=>{b(e,{placeholder:`Jane Doe`})},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field label="Full Name">
  <Input placeholder="Jane Doe" />
</Field>`}}});var p=i(d,2);D(p,{name:`Inline`,template:e=>{S(e,{label:`Email`,inline:!0,children:(e,t)=>{b(e,{variant:`email`,placeholder:`jane@example.com`})},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field label="Email" inline>
  <Input variant="email" placeholder="jane@example.com" />
</Field>`}}});var h=i(p,2);D(h,{name:`With Radio Group`,template:e=>{S(e,{label:`Priority`,children:(e,t)=>{var n=k(),s=o(n);w(s,{variant:`radio`,label:`Low`,value:0,get group(){return m(O)},set group(e){r(O,e,!0)}});var c=i(s,2);w(c,{variant:`radio`,label:`Medium`,value:1,get group(){return m(O)},set group(e){r(O,e,!0)}}),w(i(c,2),{variant:`radio`,label:`High`,value:2,get group(){return m(O)},set group(e){r(O,e,!0)}}),u(n),a(e,n)},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field label="Priority">
  <div style="display: flex; gap: 12px;">
    <Checkbox variant="radio" label="Low" bind:group={priority} value={0} />
    <Checkbox variant="radio" label="Medium" bind:group={priority} value={1} />
    <Checkbox variant="radio" label="High" bind:group={priority} value={2} />
  </div>
</Field>`}}});var g=i(h,2);D(g,{name:`Snippet Label`,template:e=>{S(e,{label:e=>{var t=A();l(2),a(e,t)},children:(e,t)=>{b(e,{placeholder:`Value`})},$$slots:{label:!0,default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field>
  {#snippet label()}
    <strong>Styled</strong> <em>label</em>
  {/snippet}
  <Input placeholder="Value" />
</Field>`}}});var _=i(g,2);D(_,{name:`No Label`,template:e=>{S(e,{children:(e,t)=>{b(e,{placeholder:`Unlabeled input`})},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field>
  <Input placeholder="Unlabeled input" />
</Field>`}}}),a(e,s),f()}var E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{p(),h(),x(),y(),C(),d(),g(),E={title:`Primitives/Field`,component:S,tags:[`autodocs`],argTypes:{inline:{control:`boolean`}}},{Story:D}=_(E),O=s(1),k=t(`<div style="display: flex; gap: 12px;"><!> <!> <!></div>`),A=t(`<strong>Styled</strong> <em>label</em>`,1),j=t(`<!> <!> <!> <!> <!>`,1),T.__docgen={data:[],name:`Field.stories.svelte`},M=v(T,E),N=[`Basic`,`Inline`,`WithRadioGroup`,`SnippetLabel`,`NoLabel`],P={...M.Basic,tags:[`svelte-csf-v5`]},F={...M.Inline,tags:[`svelte-csf-v5`]},I={...M.WithRadioGroup,tags:[`svelte-csf-v5`]},L={...M.SnippetLabel,tags:[`svelte-csf-v5`]},R={...M.NoLabel,tags:[`svelte-csf-v5`]}}))();export{P as Basic,F as Inline,R as NoLabel,L as SnippetLabel,I as WithRadioGroup,N as __namedExportsOrder,E as default};