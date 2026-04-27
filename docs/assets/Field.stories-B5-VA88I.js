import{n as e}from"./chunk-BneVvdWh.js";import{A as t,J as n,K as r,O as i,Q as a,bt as o,ct as s,et as c,gt as l,ht as u,q as d,st as f,t as p,z as m}from"./client-DVBkriut.js";import{i as h,n as g,r as _,t as v}from"./create-runtime-stories-C7ez5IF4.js";import{n as y,t as b}from"./Field-CNpmKko1.js";import{n as x,t as S}from"./Input-BNXMx2SF.js";import{n as C,t as w}from"./Checkbox-D-ta_D3K.js";function T(e,t){s(t,!0);var o=j(),c=d(o);D(c,{name:`Basic`,template:e=>{b(e,{label:`Full Name`,children:(e,t)=>{S(e,{placeholder:`Jane Doe`})},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field label="Full Name">
  <Input placeholder="Jane Doe" />
</Field>`}}});var p=n(c,2);D(p,{name:`Inline`,template:e=>{b(e,{label:`Email`,inline:!0,children:(e,t)=>{S(e,{variant:`email`,placeholder:`jane@example.com`})},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field label="Email" inline>
  <Input variant="email" placeholder="jane@example.com" />
</Field>`}}});var h=n(p,2);D(h,{name:`With Radio Group`,template:e=>{b(e,{label:`Priority`,children:(e,t)=>{var o=k(),s=r(o);w(s,{variant:`radio`,label:`Low`,value:0,get group(){return m(O)},set group(e){a(O,e,!0)}});var c=n(s,2);w(c,{variant:`radio`,label:`Medium`,value:1,get group(){return m(O)},set group(e){a(O,e,!0)}}),w(n(c,2),{variant:`radio`,label:`High`,value:2,get group(){return m(O)},set group(e){a(O,e,!0)}}),l(o),i(e,o)},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field label="Priority">
  <div style="display: flex; gap: 12px;">
    <Checkbox variant="radio" label="Low" bind:group={priority} value={0} />
    <Checkbox variant="radio" label="Medium" bind:group={priority} value={1} />
    <Checkbox variant="radio" label="High" bind:group={priority} value={2} />
  </div>
</Field>`}}});var g=n(h,2);D(g,{name:`Snippet Label`,template:e=>{b(e,{label:e=>{var t=A();u(2),i(e,t)},children:(e,t)=>{S(e,{placeholder:`Value`})},$$slots:{label:!0,default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field>
  {#snippet label()}
    <strong>Styled</strong> <em>label</em>
  {/snippet}
  <Input placeholder="Value" />
</Field>`}}});var _=n(g,2);D(_,{name:`No Label`,template:e=>{b(e,{children:(e,t)=>{S(e,{placeholder:`Unlabeled input`})},$$slots:{default:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Field>
  <Input placeholder="Unlabeled input" />
</Field>`}}}),i(e,o),f()}var E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{o(),h(),y(),x(),C(),p(),g(),E={title:`Primitives/Field`,component:b,tags:[`autodocs`],argTypes:{inline:{control:`boolean`}}},{Story:D}=_(E),O=c(1),k=t(`<div style="display: flex; gap: 12px;"><!> <!> <!></div>`),A=t(`<strong>Styled</strong> <em>label</em>`,1),j=t(`<!> <!> <!> <!> <!>`,1),T.__docgen={data:[],name:`Field.stories.svelte`},M=v(T,E),N=[`Basic`,`Inline`,`WithRadioGroup`,`SnippetLabel`,`NoLabel`],P={...M.Basic,tags:[`svelte-csf-v5`]},F={...M.Inline,tags:[`svelte-csf-v5`]},I={...M.WithRadioGroup,tags:[`svelte-csf-v5`]},L={...M.SnippetLabel,tags:[`svelte-csf-v5`]},R={...M.NoLabel,tags:[`svelte-csf-v5`]}}))();export{P as Basic,F as Inline,R as NoLabel,L as SnippetLabel,I as WithRadioGroup,N as __namedExportsOrder,E as default};