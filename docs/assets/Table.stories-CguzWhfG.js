import{n as e}from"./chunk-BneVvdWh.js";import{A as t,E as n,G as r,K as i,N as a,O as o,V as s,W as c,X as l,a as u,f as d,lt as f,nt as p,ot as m,st as h,t as g,tt as _,ut as v,z as y}from"./client-kmAv9JMI.js";import{n as b,t as x}from"./iframe-C-yPui6G.js";import{a as S,i as C,n as w,r as T,t as E}from"./create-runtime-stories-q1XJjIxV.js";import{n as D,t as O}from"./Table-B6aua-2e.js";function k(e,t){p(t,!1),u();var g=L(),v=r(g);{let e=l(()=>({columns:M,rows:N,rowKey:`name`}));j(v,{name:`Simple`,get args(){return y(e)},parameters:{__svelteCsf:{rawCode:`<Table {...args} />`}}})}var b=i(v,2);{let e=l(()=>({columns:M,rows:N,rowKey:`name`,interactive:!0}));j(b,{name:`Interactive (Selectable)`,get args(){return y(e)},parameters:{__svelteCsf:{rawCode:`<Table {...args} />`}}})}var S=i(b,2);j(S,{name:`Computed Value`,template:e=>{O(e,{columns:[{title:`Product`,value:`name`},{title:`Price`,value:e=>`$${e.price.toFixed(2)}`},{title:`Stock`,value:e=>e.stock>0?`${e.stock} left`:`Out of stock`}],rows:[{name:`Widget`,price:12.5,stock:42},{name:`Gadget`,price:29.99,stock:0},{name:`Gizmo`,price:7.25,stock:8}],rowKey:`name`})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Table
  columns={[
    { title: 'Product', value: 'name' },
    { title: 'Price', value: (row) => \`$\${row.price.toFixed(2)}\` },
    { title: 'Stock', value: (row) => row.stock > 0 ? \`\${row.stock} left\` : 'Out of stock' },
  ]}
  rows={[
    { name: 'Widget', price: 12.5, stock: 42 },
    { name: 'Gadget', price: 29.99, stock: 0 },
    { name: 'Gizmo', price: 7.25, stock: 8 },
  ]}
  rowKey="name"
/>`}}});var C=i(S,2);j(C,{name:`Custom Cell Snippets`,template:e=>{O(e,{columns:[{title:`Name`,snippet:`name`},{title:`Role`,value:`role`},{title:`Status`,snippet:`status`},{title:``,snippet:`actions`}],rows:[{name:`Alice Chen`,role:`Frontend`,status:`Active`},{name:`Bob Park`,role:`Backend`,status:`Away`},{name:`Charlie Kim`,role:`DevOps`,status:`Offline`}],rowKey:`name`,interactive:!0,name:(e,t=f)=>{var r=P(),i=c(r,!0);h(r),s(()=>n(i,t().name)),o(e,r)},status:(e,t=f)=>{var r=F(),i=c(r),a=c(i,!0);h(i),h(r),s(()=>{d(i,`font-size: 12px; padding: 2px 8px; border-radius: 10px;
            background: ${t().status===`Active`?`#d4f4dd`:t().status===`Away`?`#fff3cd`:`#e9ecef`};
            color: ${t().status===`Active`?`#1a7f37`:t().status===`Away`?`#7a5c00`:`#5f6368`};`),n(a,t().status)}),o(e,r)},actions:(e,t=f)=>{var n=I();x(c(n),{size:`sm`,children:(e,t)=>{m(),o(e,a(`Edit`))},$$slots:{default:!0}}),h(n),o(e,n)},$$slots:{name:!0,status:!0,actions:!0}})},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<Table
  columns={[
    { title: 'Name', snippet: 'name' },
    { title: 'Role', value: 'role' },
    { title: 'Status', snippet: 'status' },
    { title: '', snippet: 'actions' },
  ]}
  rows={[
    { name: 'Alice Chen', role: 'Frontend', status: 'Active' },
    { name: 'Bob Park', role: 'Backend', status: 'Away' },
    { name: 'Charlie Kim', role: 'DevOps', status: 'Offline' },
  ]}
  rowKey="name"
  interactive
>
  {#snippet name(row)}
    <td style="font-weight: 600;">{row.name}</td>
  {/snippet}
  {#snippet status(row)}
    <td>
      <span style="font-size: 12px; padding: 2px 8px; border-radius: 10px;
        background: {row.status === 'Active' ? '#d4f4dd' : row.status === 'Away' ? '#fff3cd' : '#e9ecef'};
        color: {row.status === 'Active' ? '#1a7f37' : row.status === 'Away' ? '#7a5c00' : '#5f6368'};">
        {row.status}
      </span>
    </td>
  {/snippet}
  {#snippet actions(row)}
    <td><Button size="sm">Edit</Button></td>
  {/snippet}
</Table>`}}}),j(i(C,2),{name:`Sortable (Click Headers)`,args:{columns:[{title:`Product`,value:`name`},{title:`Price`,value:`price`},{title:`Units Sold`,value:`sold`}],rows:[{name:`Apples`,price:1.2,sold:340},{name:`Bananas`,price:.5,sold:890},{name:`Cherries`,price:4.75,sold:120},{name:`Dates`,price:6.2,sold:55}],rowKey:`name`},parameters:{__svelteCsf:{rawCode:`<Table {...args} />`}}}),o(e,g),_()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{v(),S(),C(),D(),b(),g(),w(),A={title:`Containers/Table`,component:O,tags:[`autodocs`],argTypes:{interactive:{control:`boolean`}}},{Story:j}=T(A),M=[{title:`Name`,value:`name`},{title:`Role`,value:`role`},{title:`Department`,value:`department`}],N=[{name:`Alice Chen`,role:`Frontend Developer`,department:`Engineering`},{name:`Bob Park`,role:`Backend Developer`,department:`Engineering`},{name:`Charlie Kim`,role:`DevOps Engineer`,department:`Operations`},{name:`Diana Lee`,role:`UI Designer`,department:`Design`},{name:`Eve Wang`,role:`Product Manager`,department:`Product`}],P=t(`<td style="font-weight: 600;"> </td>`),F=t(`<td><span> </span></td>`),I=t(`<td><!></td>`),L=t(`<!> <!> <!> <!> <!>`,1),k.__docgen={data:[],name:`Table.stories.svelte`},R=E(k,A),z=[`Simple`,`InteractiveSelectable`,`ComputedValue`,`CustomCellSnippets`,`SortableClickHeaders`],B={...R.Simple,tags:[`svelte-csf-v5`]},V={...R.InteractiveSelectable,tags:[`svelte-csf-v5`]},H={...R.ComputedValue,tags:[`svelte-csf-v5`]},U={...R.CustomCellSnippets,tags:[`svelte-csf-v5`]},W={...R.SortableClickHeaders,tags:[`svelte-csf-v5`]}}))();export{H as ComputedValue,U as CustomCellSnippets,V as InteractiveSelectable,B as Simple,W as SortableClickHeaders,z as __namedExportsOrder,A as default};