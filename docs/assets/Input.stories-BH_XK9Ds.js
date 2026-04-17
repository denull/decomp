import{n as e}from"./chunk-BneVvdWh.js";import{A as t,J as n,K as r,O as i,a,bt as o,ct as s,gt as c,j as l,q as u,st as d,t as f,vt as p}from"./client-DVBkriut.js";import{a as m,i as h,n as g,r as _,t as v}from"./create-runtime-stories-LfQYHLx5.js";import{n as y,t as b}from"./Input-BZkU0DSO.js";function x(e,t){s(t,!1),a();var o=D(),l=u(o);C(l,{name:`Text Input`,args:{label:`Name`,placeholder:`Enter your name`},parameters:{__svelteCsf:{rawCode:`<Input {...args}>
  
</Input>`}}});var f=n(l,2);C(f,{name:`With Error`,args:{label:`Email`,type:`email`,placeholder:`user@example.com`,error:`Please enter a valid email address`},parameters:{__svelteCsf:{rawCode:`<Input {...args}>
  
</Input>`}}});var m=n(f,2);C(m,{name:`With Hint`,args:{label:`Username`,placeholder:`Choose a username`,hint:`Must be 3-20 characters, letters and numbers only`},parameters:{__svelteCsf:{rawCode:`<Input {...args}>
  
</Input>`}}});var h=n(m,2);C(h,{name:`Sizes`,template:(e,t=p)=>{var a=w(),o=r(a);b(o,{size:`sm`,placeholder:`Small input`});var s=n(o,2);b(s,{size:`md`,placeholder:`Medium input`}),b(n(s,2),{size:`lg`,placeholder:`Large input`}),c(a),i(e,a)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">\r
  <Input size="sm" placeholder="Small input" />\r
  <Input size="md" placeholder="Medium input" />\r
  <Input size="lg" placeholder="Large input" />\r
</div>`}}});var g=n(h,2);C(g,{name:`Multiline / Textarea`,args:{multiline:!0,label:`Description`,placeholder:`Tell us about yourself...`},parameters:{__svelteCsf:{rawCode:`<Input {...args}>
  
</Input>`}}});var _=n(g,2);C(_,{name:`Search`,args:{type:`search`,placeholder:`Search...`},leading:e=>{i(e,T())},$$slots:{leading:!0},parameters:{__svelteCsf:{rawCode:`<Input {...args}>
  {#snippet leading()}\r
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">\r
  <circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5"/>\r
  <path d="M11 11l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>\r
</svg>\r
{/snippet}
</Input>`}}});var v=n(_,2);C(v,{name:`Select (Dropdown)`,args:{label:`Country`,placeholder:`Choose a country...`,options:[{label:`United States`,value:`us`},{label:`United Kingdom`,value:`uk`},{label:`Canada`,value:`ca`},{label:`Germany`,value:`de`},{label:`France`,value:`fr`},{label:`Japan`,value:`jp`},{label:`Australia`,value:`au`}]},parameters:{__svelteCsf:{rawCode:`<Input {...args}>
  
</Input>`}}});var y=n(v,2);C(y,{name:`Combobox (Autocomplete)`,children:(e,t=p)=>{var n=E();b(r(n),{label:`Language`,placeholder:`Type to search...`,autocomplete:!0,options:[{label:`JavaScript`,value:`js`},{label:`TypeScript`,value:`ts`},{label:`Python`,value:`py`},{label:`Rust`,value:`rs`},{label:`Go`,value:`go`},{label:`Swift`,value:`swift`},{label:`Kotlin`,value:`kt`},{label:`C++`,value:`cpp`}]}),c(n),i(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Input {...args}>
  {#snippet children(args)}\r
<div style="width: 300px;">\r
  <Input\r
    label="Language"\r
    placeholder="Type to search..."\r
    autocomplete\r
    options={[\r
      { label: 'JavaScript', value: 'js' },\r
      { label: 'TypeScript', value: 'ts' },\r
      { label: 'Python', value: 'py' },\r
      { label: 'Rust', value: 'rs' },\r
      { label: 'Go', value: 'go' },\r
      { label: 'Swift', value: 'swift' },\r
      { label: 'Kotlin', value: 'kt' },\r
      { label: 'C++', value: 'cpp' },\r
    ]}\r
  />\r
</div>\r
{/snippet}
</Input>`}}}),C(n(y,2),{name:`Tag Input`,args:{label:`Technologies`,placeholder:`Add a tag...`,tags:[`Svelte`,`React`,`Vue`]},parameters:{__svelteCsf:{rawCode:`<Input {...args}>
  
</Input>`}}}),i(e,o),d()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{o(),m(),h(),y(),f(),g(),S={title:`Primitives/Input`,component:b,tags:[`autodocs`],argTypes:{type:{control:{type:`select`},options:[`text`,`password`,`email`,`number`,`search`,`url`,`tel`]},size:{control:{type:`select`},options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},readonly:{control:`boolean`}}},{Story:C}=_(S),w=t(`<div style="display: flex; flex-direction: column; gap: 12px; width: 300px;"><!> <!> <!></div>`),T=l(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5"></circle><path d="M11 11l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>`),E=t(`<div style="width: 300px;"><!></div>`),D=t(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),x.__docgen={data:[],name:`Input.stories.svelte`},O=v(x,S),k=[`TextInput`,`WithError`,`WithHint`,`Sizes`,`MultilineTextarea`,`Search`,`SelectDropdown`,`ComboboxAutocomplete`,`TagInput`],A={...O.TextInput,tags:[`svelte-csf-v5`]},j={...O.WithError,tags:[`svelte-csf-v5`]},M={...O.WithHint,tags:[`svelte-csf-v5`]},N={...O.Sizes,tags:[`svelte-csf-v5`]},P={...O.MultilineTextarea,tags:[`svelte-csf-v5`]},F={...O.Search,tags:[`svelte-csf-v5`]},I={...O.SelectDropdown,tags:[`svelte-csf-v5`]},L={...O.ComboboxAutocomplete,tags:[`svelte-csf-v5`]},R={...O.TagInput,tags:[`svelte-csf-v5`]}}))();export{L as ComboboxAutocomplete,P as MultilineTextarea,F as Search,I as SelectDropdown,N as Sizes,R as TagInput,A as TextInput,j as WithError,M as WithHint,k as __namedExportsOrder,S as default};