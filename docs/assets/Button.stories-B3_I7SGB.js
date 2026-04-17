import{n as e}from"./chunk-BneVvdWh.js";import{A as t,J as n,K as r,N as i,O as a,a as o,bt as s,ct as c,gt as l,ht as u,j as d,q as f,st as p,t as m,vt as h}from"./client-DVBkriut.js";import{a as g,i as _,n as v,r as y,t as b}from"./create-runtime-stories-LfQYHLx5.js";import{n as x,t as S}from"./Button-DxUEtBqm.js";function C(e,t){c(t,!1),o();var s=M(),d=f(s);T(d,{name:`Default`,args:{variant:`default`},children:(e,t)=>{u(),a(e,i(`Button`))},$$slots:{default:!0},parameters:{docs:{description:{story:`Single-button stories: children snippet becomes Button's children prop`}},__svelteCsf:{rawCode:`<Button {...args}>
  Button
</Button>`}}});var m=n(d,2);T(m,{name:`Primary`,args:{variant:`primary`},children:(e,t)=>{u(),a(e,i(`Primary`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Primary
</Button>`}}});var g=n(m,2);T(g,{name:`Destructive`,args:{variant:`destructive`},children:(e,t)=>{u(),a(e,i(`Delete`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Delete
</Button>`}}});var _=n(g,2);T(_,{name:`Ghost`,args:{variant:`ghost`},children:(e,t)=>{u(),a(e,i(`Ghost`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Ghost
</Button>`}}});var v=n(_,2);T(v,{name:`Sizes`,template:(e,t=h)=>{var o=E(),s=r(o);S(s,{size:`sm`,children:(e,t)=>{u(),a(e,i(`Small`))},$$slots:{default:!0}});var c=n(s,2);S(c,{size:`md`,children:(e,t)=>{u(),a(e,i(`Medium`))},$$slots:{default:!0}}),S(n(c,2),{size:`lg`,children:(e,t)=>{u(),a(e,i(`Large`))},$$slots:{default:!0}}),l(o),a(e,o)},$$slots:{template:!0},parameters:{docs:{description:{story:`Multi-button stories: template snippet for full rendering control`}},__svelteCsf:{rawCode:`<div style="display: flex; align-items: center; gap: 12px;">\r
  <Button size="sm">Small</Button>\r
  <Button size="md">Medium</Button>\r
  <Button size="lg">Large</Button>\r
</div>`}}});var y=n(v,2);T(y,{name:`All Variants`,template:(e,t=h)=>{var o=D(),s=r(o);S(s,{variant:`default`,children:(e,t)=>{u(),a(e,i(`Default`))},$$slots:{default:!0}});var c=n(s,2);S(c,{variant:`primary`,children:(e,t)=>{u(),a(e,i(`Primary`))},$$slots:{default:!0}});var d=n(c,2);S(d,{variant:`destructive`,children:(e,t)=>{u(),a(e,i(`Destructive`))},$$slots:{default:!0}});var f=n(d,2);S(f,{variant:`ghost`,children:(e,t)=>{u(),a(e,i(`Ghost`))},$$slots:{default:!0}});var p=n(f,2);S(p,{disabled:!0,children:(e,t)=>{u(),a(e,i(`Disabled`))},$$slots:{default:!0}}),S(n(p,2),{loading:!0,children:(e,t)=>{u(),a(e,i(`Loading`))},$$slots:{default:!0}}),l(o),a(e,o)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<div style="display: flex; flex-wrap: wrap; gap: 12px;">\r
  <Button variant="default">Default</Button>\r
  <Button variant="primary">Primary</Button>\r
  <Button variant="destructive">Destructive</Button>\r
  <Button variant="ghost">Ghost</Button>\r
  <Button disabled>Disabled</Button>\r
  <Button loading>Loading</Button>\r
</div>`}}});var b=n(y,2);T(b,{name:`Grouped / Segment Control`,template:(e,t=h)=>{var o=O(),s=r(o);S(s,{grouped:!0,selected:!0,children:(e,t)=>{u(),a(e,i(`Day`))},$$slots:{default:!0}});var c=n(s,2);S(c,{grouped:!0,children:(e,t)=>{u(),a(e,i(`Week`))},$$slots:{default:!0}}),S(n(c,2),{grouped:!0,children:(e,t)=>{u(),a(e,i(`Month`))},$$slots:{default:!0}}),l(o),a(e,o)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<div style="display: flex;">\r
  <Button grouped selected>Day</Button>\r
  <Button grouped>Week</Button>\r
  <Button grouped>Month</Button>\r
</div>`}}});var x=n(b,2);T(x,{name:`Icon Button`,template:(e,t=h)=>{var o=j(),s=r(o);S(s,{variant:`ghost`,leading:e=>{a(e,k())},$$slots:{leading:!0}}),S(n(s,2),{variant:`primary`,leading:e=>{a(e,A())},children:(e,t)=>{u(),a(e,i(`Add Item`))},$$slots:{leading:!0,default:!0}}),l(o),a(e,o)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<div style="display: flex; gap: 12px;">\r
  <Button variant="ghost">\r
    {#snippet leading()}<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>{/snippet}\r
  </Button>\r
  <Button variant="primary">\r
    {#snippet leading()}<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>{/snippet}\r
    Add Item\r
  </Button>\r
</div>`}}}),a(e,s),p()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{s(),g(),_(),x(),m(),v(),w={title:`Primitives/Button`,component:S,tags:[`autodocs`],argTypes:{variant:{control:{type:`select`},options:[`default`,`primary`,`destructive`,`ghost`]},size:{control:{type:`select`},options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},loading:{control:`boolean`}}},{Story:T}=y(w),E=t(`<div style="display: flex; align-items: center; gap: 12px;"><!> <!> <!></div>`),D=t(`<div style="display: flex; flex-wrap: wrap; gap: 12px;"><!> <!> <!> <!> <!> <!></div>`),O=t(`<div style="display: flex;"><!> <!> <!></div>`),k=d(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`),A=d(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`),j=t(`<div style="display: flex; gap: 12px;"><!> <!></div>`),M=t(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),C.__docgen={data:[],name:`Button.stories.svelte`},N=b(C,w),P=[`Default`,`Primary`,`Destructive`,`Ghost`,`Sizes`,`AllVariants`,`GroupedSegmentControl`,`IconButton`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Primary,tags:[`svelte-csf-v5`]},L={...N.Destructive,tags:[`svelte-csf-v5`]},R={...N.Ghost,tags:[`svelte-csf-v5`]},z={...N.Sizes,tags:[`svelte-csf-v5`]},B={...N.AllVariants,tags:[`svelte-csf-v5`]},V={...N.GroupedSegmentControl,tags:[`svelte-csf-v5`]},H={...N.IconButton,tags:[`svelte-csf-v5`]}}))();export{B as AllVariants,F as Default,L as Destructive,R as Ghost,V as GroupedSegmentControl,H as IconButton,I as Primary,z as Sizes,P as __namedExportsOrder,w as default};