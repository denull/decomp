import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,A as n,H as r,N as i,O as a,Q as o,U as s,W as c,a as l,it as u,j as d,ot as f,rt as p,st as m,t as h}from"./client-BYAvDGw8.js";import{n as g,t as _}from"./iframe-DanW8bDl.js";import{a as v,i as y,n as b,r as x,t as S}from"./create-runtime-stories-Dtkm0wpn.js";function C(e,n){t(n,!1),l();var d=M(),m=s(d);T(m,{name:`Default`,args:{variant:`default`},children:(e,t)=>{p(),a(e,i(`Button`))},$$slots:{default:!0},parameters:{docs:{description:{story:`Single-button stories: children snippet becomes Button's children prop`}},__svelteCsf:{rawCode:`<Button {...args}>
  Button
</Button>`}}});var h=c(m,2);T(h,{name:`Primary`,args:{variant:`primary`},children:(e,t)=>{p(),a(e,i(`Primary`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Primary
</Button>`}}});var g=c(h,2);T(g,{name:`Destructive`,args:{variant:`destructive`},children:(e,t)=>{p(),a(e,i(`Delete`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Delete
</Button>`}}});var v=c(g,2);T(v,{name:`Ghost`,args:{variant:`ghost`},children:(e,t)=>{p(),a(e,i(`Ghost`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Ghost
</Button>`}}});var y=c(v,2);T(y,{name:`Sizes`,template:(e,t=f)=>{var n=E(),o=r(n);_(o,{size:`sm`,children:(e,t)=>{p(),a(e,i(`Small`))},$$slots:{default:!0}});var s=c(o,2);_(s,{size:`md`,children:(e,t)=>{p(),a(e,i(`Medium`))},$$slots:{default:!0}}),_(c(s,2),{size:`lg`,children:(e,t)=>{p(),a(e,i(`Large`))},$$slots:{default:!0}}),u(n),a(e,n)},$$slots:{template:!0},parameters:{docs:{description:{story:`Multi-button stories: template snippet for full rendering control`}},__svelteCsf:{rawCode:`<div style="display: flex; align-items: center; gap: 12px;">\r
  <Button size="sm">Small</Button>\r
  <Button size="md">Medium</Button>\r
  <Button size="lg">Large</Button>\r
</div>`}}});var b=c(y,2);T(b,{name:`All Variants`,template:(e,t=f)=>{var n=D(),o=r(n);_(o,{variant:`default`,children:(e,t)=>{p(),a(e,i(`Default`))},$$slots:{default:!0}});var s=c(o,2);_(s,{variant:`primary`,children:(e,t)=>{p(),a(e,i(`Primary`))},$$slots:{default:!0}});var l=c(s,2);_(l,{variant:`destructive`,children:(e,t)=>{p(),a(e,i(`Destructive`))},$$slots:{default:!0}});var d=c(l,2);_(d,{variant:`ghost`,children:(e,t)=>{p(),a(e,i(`Ghost`))},$$slots:{default:!0}});var m=c(d,2);_(m,{disabled:!0,children:(e,t)=>{p(),a(e,i(`Disabled`))},$$slots:{default:!0}}),_(c(m,2),{loading:!0,children:(e,t)=>{p(),a(e,i(`Loading`))},$$slots:{default:!0}}),u(n),a(e,n)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<div style="display: flex; flex-wrap: wrap; gap: 12px;">\r
  <Button variant="default">Default</Button>\r
  <Button variant="primary">Primary</Button>\r
  <Button variant="destructive">Destructive</Button>\r
  <Button variant="ghost">Ghost</Button>\r
  <Button disabled>Disabled</Button>\r
  <Button loading>Loading</Button>\r
</div>`}}});var x=c(b,2);T(x,{name:`Grouped / Segment Control`,template:(e,t=f)=>{var n=O(),o=r(n);_(o,{grouped:!0,selected:!0,children:(e,t)=>{p(),a(e,i(`Day`))},$$slots:{default:!0}});var s=c(o,2);_(s,{grouped:!0,children:(e,t)=>{p(),a(e,i(`Week`))},$$slots:{default:!0}}),_(c(s,2),{grouped:!0,children:(e,t)=>{p(),a(e,i(`Month`))},$$slots:{default:!0}}),u(n),a(e,n)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<div style="display: flex;">\r
  <Button grouped selected>Day</Button>\r
  <Button grouped>Week</Button>\r
  <Button grouped>Month</Button>\r
</div>`}}});var S=c(x,2);T(S,{name:`Icon Button`,template:(e,t=f)=>{var n=j(),o=r(n);_(o,{variant:`ghost`,leading:e=>{a(e,k())},$$slots:{leading:!0}}),_(c(o,2),{variant:`primary`,leading:e=>{a(e,A())},children:(e,t)=>{p(),a(e,i(`Add Item`))},$$slots:{leading:!0,default:!0}}),u(n),a(e,n)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<div style="display: flex; gap: 12px;">\r
  <Button variant="ghost">\r
    {#snippet leading()}<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>{/snippet}\r
  </Button>\r
  <Button variant="primary">\r
    {#snippet leading()}<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>{/snippet}\r
    Add Item\r
  </Button>\r
</div>`}}}),a(e,d),o()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{m(),v(),y(),g(),h(),b(),w={title:`Primitives/Button`,component:_,tags:[`autodocs`],argTypes:{variant:{control:{type:`select`},options:[`default`,`primary`,`destructive`,`ghost`]},size:{control:{type:`select`},options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},loading:{control:`boolean`}}},{Story:T}=x(w),E=n(`<div style="display: flex; align-items: center; gap: 12px;"><!> <!> <!></div>`),D=n(`<div style="display: flex; flex-wrap: wrap; gap: 12px;"><!> <!> <!> <!> <!> <!></div>`),O=n(`<div style="display: flex;"><!> <!> <!></div>`),k=d(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`),A=d(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`),j=n(`<div style="display: flex; gap: 12px;"><!> <!></div>`),M=n(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),C.__docgen={data:[],name:`Button.stories.svelte`},N=S(C,w),P=[`Default`,`Primary`,`Destructive`,`Ghost`,`Sizes`,`AllVariants`,`GroupedSegmentControl`,`IconButton`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Primary,tags:[`svelte-csf-v5`]},L={...N.Destructive,tags:[`svelte-csf-v5`]},R={...N.Ghost,tags:[`svelte-csf-v5`]},z={...N.Sizes,tags:[`svelte-csf-v5`]},B={...N.AllVariants,tags:[`svelte-csf-v5`]},V={...N.GroupedSegmentControl,tags:[`svelte-csf-v5`]},H={...N.IconButton,tags:[`svelte-csf-v5`]}}))();export{B as AllVariants,F as Default,L as Destructive,R as Ghost,V as GroupedSegmentControl,H as IconButton,I as Primary,z as Sizes,P as __namedExportsOrder,w as default};