import{n as e}from"./chunk-BneVvdWh.js";import{A as t,E as n,J as r,K as i,N as a,O as o,Q as s,U as c,bt as l,ct as u,et as d,gt as f,ht as p,m,o as h,p as ee,q as g,st as _,t as v,vt as te,z as y}from"./client-DVBkriut.js";import{i as b,n as x,r as ne,t as S}from"./create-runtime-stories-C7ez5IF4.js";import{n as re,t as C}from"./Switch-BstOjHW9.js";import{n as w,t as T}from"./Field-CNpmKko1.js";import{a as E,i as ie,n as D,o as ae,r as oe,t as se}from"./List-CFuyTIaM.js";import{n as ce,t as O}from"./Button-GAYvjWID.js";import{n as le,t as k}from"./Input-BNXMx2SF.js";import{n as A,t as ue}from"./Tabs-CbqAvdFG.js";import{n as j,t as de}from"./Table-D5M_MN_v.js";import{n as M,t as N}from"./Checkbox-D-ta_D3K.js";import{n as P,t as F}from"./Progress-RVDiWDPZ.js";import{n as I,t as fe}from"./Selector-Bh3jTkhu.js";import{n as L,t as pe}from"./Slider-BhniuGrr.js";import{n as R,t as me}from"./Spinner-Byqakeft.js";import{n as z}from"./Dialog-DFtE_L_E.js";import{n as B,t as V}from"./AppShell-BNT-QHGR.js";var H=e((()=>{}));function U(e,t){u(t,!0),G(e,{name:`Dashboard`,children:(e,t)=>{h(V(e,{children:(e,t)=>{var l=Ne(),u=r(g(l),2),d=i(u),h=r(i(d),2),_=i(h);O(_,{children:(e,t)=>{p(),o(e,a(`Default`))},$$slots:{default:!0}});var v=r(_,2);O(v,{variant:`primary`,children:(e,t)=>{p(),o(e,a(`Primary`))},$$slots:{default:!0}});var b=r(v,2);O(b,{variant:`destructive`,children:(e,t)=>{p(),o(e,a(`Destructive`))},$$slots:{default:!0}}),O(r(b,2),{variant:`ghost`,children:(e,t)=>{p(),o(e,a(`Ghost`))},$$slots:{default:!0}}),f(h);var x=r(h,2),ne=i(x);O(ne,{disabled:!0,children:(e,t)=>{p(),o(e,a(`Disabled`))},$$slots:{default:!0}}),O(r(ne,2),{variant:`primary`,disabled:!0,children:(e,t)=>{p(),o(e,a(`Disabled`))},$$slots:{default:!0}}),f(x);var S=r(x,2),re=i(S);O(re,{size:`sm`,children:(e,t)=>{p(),o(e,a(`Default`))},$$slots:{default:!0}});var w=r(re,2);O(w,{variant:`primary`,size:`sm`,children:(e,t)=>{p(),o(e,a(`Primary`))},$$slots:{default:!0}});var ie=r(w,2);O(ie,{variant:`destructive`,size:`sm`,children:(e,t)=>{p(),o(e,a(`Destructive`))},$$slots:{default:!0}}),O(r(ie,2),{variant:`ghost`,size:`sm`,children:(e,t)=>{p(),o(e,a(`Ghost`))},$$slots:{default:!0}}),f(S);var D=r(S,2),ae=i(D);O(ae,{icon:`css:close`});var ce=r(ae,2);O(ce,{icon:`css:plus`});var le=r(ce,2);O(le,{icon:`css:minus`});var A=r(le,2);O(A,{icon:`css:sidebar`}),O(r(A,2),{icon:`css:heart`}),f(D),fe(r(D,6),{options:[`Day`,`Week`,`Month`],value:`Day`}),f(d);var j=r(d,2),M=r(i(j),2),P=i(M),I=i(P);k(I,{label:`Full Name`,placeholder:`Jane Doe`}),k(r(I,2),{variant:`email`,label:`Email`,placeholder:`jane@example.com`}),f(P);var L=r(P,2);k(L,{variant:`multiline`,label:`Message`,placeholder:`Write something...`});var R=r(L,2);k(R,{variant:`select`,label:`Department`,placeholder:`Select department…`,options:[`Engineering`,`Design`,`Marketing`,`Product`,`Operations`]});var z=r(R,2);pe(z,{min:0,max:15,get value(){return y(q)},set value(e){s(q,e,!0)},label:e=>{p();var t=_e(),a=r(g(t)),s=i(a),l=i(s,!0);f(s),p(),f(a),c(()=>n(l,y(q))),o(e,t)},$$slots:{label:!0}});var B=r(z,2);T(B,{children:(e,t)=>{var n=ve(),a=i(n);N(a,{label:`Email notifications`,checked:!0,disabled:!0}),N(r(a,2),{label:`SMS notifications`}),f(n),o(e,n)},$$slots:{default:!0}});var V=r(B,2);T(V,{label:`Priority`,children:(e,t)=>{var n=ye(),a=i(n);N(a,{variant:`radio`,label:`Low`,value:0,disabled:!0,get group(){return y(K)},set group(e){s(K,e,!0)}});var c=r(a,2);N(c,{variant:`radio`,label:`Medium`,value:1,get group(){return y(K)},set group(e){s(K,e,!0)}}),N(r(c,2),{variant:`radio`,label:`High`,value:2,get group(){return y(K)},set group(e){s(K,e,!0)}}),f(n),o(e,n)},$$slots:{default:!0}});var H=r(V,2);C(H,{label:`Active status`}),O(r(H,2),{variant:`primary`,children:(e,t)=>{p(),o(e,a(`Submit`))},$$slots:{default:!0}}),f(M),f(j);var U=r(j,2);ue(r(i(U),2),{tabs:[{id:`overview`,title:`Overview`,view:`overview`},{id:`activity`,title:`Activity`,view:`activity`},{id:`settings`,title:`Settings`,view:`settings`},{id:`inline`,title:`Inline controls`,view:`inline`}],selected:`overview`,overview:e=>{o(e,be())},activity:e=>{o(e,xe())},settings:e=>{var t=Se(),n=g(t);C(n,{label:`Compact view`}),C(r(n,2),{label:`Show archived`,checked:!0,disabled:!0}),o(e,t)},inline:e=>{var t=Ee(),l=g(t),u=i(l);k(u,{label:`Full Name`,placeholder:`Jane Doe`,inline:!0}),k(r(u,2),{variant:`email`,label:`Email`,placeholder:`jane@example.com`,inline:!0}),f(l);var d=r(l,2);k(d,{variant:`multiline`,label:`Message`,placeholder:`Write something...`,inline:!0});var m=r(d,2);k(m,{variant:`select`,label:`Department`,placeholder:`Select department…`,options:[`Engineering`,`Design`,`Marketing`,`Product`,`Operations`],inline:!0});var h=r(m,2);pe(h,{min:0,max:15,inline:!0,get value(){return y(q)},set value(e){s(q,e,!0)},label:e=>{p();var t=Ce(),a=r(g(t)),s=i(a),l=i(s,!0);f(s),p(),f(a),c(()=>n(l,y(q))),o(e,t)},$$slots:{label:!0}});var ee=r(h,2);T(ee,{inline:!0,children:(e,t)=>{var n=we(),a=i(n);N(a,{label:`Email notifications`,checked:!0,disabled:!0}),N(r(a,2),{label:`SMS notifications`}),f(n),o(e,n)},$$slots:{default:!0}});var _=r(ee,2);T(_,{label:`Priority`,inline:!0,children:(e,t)=>{var n=Te(),a=i(n);N(a,{variant:`radio`,label:`Low`,value:0,disabled:!0,get group(){return y(K)},set group(e){s(K,e,!0)}});var c=r(a,2);N(c,{variant:`radio`,label:`Medium`,value:1,get group(){return y(K)},set group(e){s(K,e,!0)}}),N(r(c,2),{variant:`radio`,label:`High`,value:2,get group(){return y(K)},set group(e){s(K,e,!0)}}),f(n),o(e,n)},$$slots:{default:!0}});var v=r(_,2);C(v,{label:`Active status`}),O(r(v,2),{variant:`primary`,children:(e,t)=>{p(),o(e,a(`Submit`))},$$slots:{default:!0}}),o(e,t)},$$slots:{overview:!0,activity:!0,settings:!0,inline:!0}}),f(U);var W=r(U,2),G=r(i(W),2);F(G,{label:`Project Alpha`,value:67,inline:!0,children:(e,t)=>{p(),o(e,a(`67%`))},$$slots:{default:!0}});var Y=r(G,2);F(Y,{label:`Storage Used`,variant:`segmented`,value:35,inline:!0,children:(e,t)=>{p(),o(e,a(`35%`))},$$slots:{default:!0}});var X=r(Y,2);F(X,{label:`Upload`,value:89,inline:!0,children:(e,t)=>{p(),o(e,a(`89%`))},$$slots:{default:!0}}),me(r(X,2),{size:`lg`,label:`Loading data…`}),f(W);var Z=r(W,2);de(r(i(Z),2),{columns:[{title:`Name`,value:`name`,view:`name`},{title:`Role`,value:`role`},{title:`Department`,value:`department`},{title:`Status`,value:`status`,view:`status`},{title:``,view:`actions`}],rows:[{name:`Alice Chen`,role:`Frontend Developer`,department:`Engineering`,status:`Active`},{name:`Bob Park`,role:`Backend Developer`,department:`Engineering`,status:`Away`},{name:`Charlie Kim`,role:`DevOps Engineer`,department:`Operations`,status:`Active`},{name:`Diana Lee`,role:`UI Designer`,department:`Design`,status:`Offline`},{name:`Eve Wang`,role:`Product Manager`,department:`Product`,status:`Active`}],rowKey:`name`,name:(e,t=te)=>{var r=De(),a=i(r,!0);f(r),c(()=>n(a,t().name)),o(e,r)},status:(e,t=te)=>{var r=Oe(),a=i(r),s=i(a,!0);f(a),f(r),c(()=>{ee(a,1,m([`badge`,{Active:`is-success`,Away:`is-warning`,Offline:`is-neutral`}[t().status]]),`svelte-8pf2k`),n(s,t().status)}),o(e,r)},actions:(e,t=te)=>{var n=ke();O(i(n),{size:`sm`,children:(e,t)=>{p(),o(e,a(`Edit`))},$$slots:{default:!0}}),f(n),o(e,n)},$$slots:{name:!0,status:!0,actions:!0}}),f(Z);var Q=r(Z,2),$=r(i(Q),2),Pe=i($);O(Pe,{onclick:()=>y(J).showOverlay({variant:`alert`,title:`Confirm Action`,children:he,footer:ge}),children:(e,t)=>{p(),o(e,a(`Open Dialog`))},$$slots:{default:!0}});var Fe=r(Pe,2);O(Fe,{onclick:()=>y(J).showOverlay({draggable:!0,variant:`alert`,title:`Confirm Action`,children:he},!1),children:(e,t)=>{p(),o(e,a(`Open Non-Modal Dialog`))},$$slots:{default:!0}});var Ie=r(Fe,2);O(Ie,{onclick:()=>y(J).dismissAllOverlays(),children:(e,t)=>{p(),o(e,a(`Dismiss All`))},$$slots:{default:!0}});var Le=r(Ie,2);O(Le,{onclick:()=>y(J).showToast(`Hello world!`),children:(e,t)=>{p(),o(e,a(`Show toast`))},$$slots:{default:!0}});var Re=r(Le,2);O(i(Re),{dropdown:[{label:`Edit`},{label:`Duplicate`},{label:`Archive`},{separator:!0},{label:`Delete`,variant:`destructive`}],children:(e,t)=>{p(),o(e,a(`Actions`))},$$slots:{default:!0}}),f(Re),f($),f(Q);var ze=r(Q,2);se(r(i(ze),2),{children:(e,t)=>{var n=Me(),i=g(n);oe(i,{header:`Active`,children:(e,t)=>{var n=Ae(),i=g(n);E(i,{accessory:`chevron`,description:e=>{p(),o(e,a(`Frontend team · Due Mar 15`))},children:(e,t)=>{p(),o(e,a(`Dashboard Redesign`))},$$slots:{description:!0,default:!0}});var s=r(i,2);E(s,{accessory:`chevron`,description:e=>{p(),o(e,a(`Backend team · Due Apr 1`))},children:(e,t)=>{p(),o(e,a(`API Migration`))},$$slots:{description:!0,default:!0}}),E(r(s,2),{accessory:`chevron`,description:e=>{p(),o(e,a(`Mobile team · Due Apr 20`))},children:(e,t)=>{p(),o(e,a(`Mobile App v2`))},$$slots:{description:!0,default:!0}}),o(e,n)},$$slots:{default:!0}}),oe(r(i,2),{header:`Completed`,children:(e,t)=>{var n=je(),i=g(n);E(i,{accessory:`switch`,description:e=>{p(),o(e,a(`Design team · Feb 28`))},children:(e,t)=>{p(),o(e,a(`Brand Guidelines`))},$$slots:{description:!0,default:!0}}),E(r(i,2),{accessory:`switch`,description:e=>{p(),o(e,a(`DevOps team · Mar 1`))},children:(e,t)=>{p(),o(e,a(`Security Audit`))},$$slots:{description:!0,default:!0}}),o(e,n)},$$slots:{default:!0}}),o(e,n)},$$slots:{default:!0}}),f(ze),p(2),f(u),o(e,l)},$$slots:{default:!0}}),e=>s(J,e,!0),()=>y(J))},$$slots:{default:!0},parameters:{docs:{description:{story:`todo: this seems ugly`}},__svelteCsf:{rawCode:`<undefined {...args}>
  <AppShell bind:this={shell}>\r
<!-- ======== Header ======== -->\r
<header class="header">\r
<div>\r
  <h1>UI Components</h1>\r
  <p>Dashboard Showcase Демо</p>\r
</div>\r
</header>\r
\r
<!-- ======== Dashboard ======== -->\r
<main class="dashboard">\r
\r
<!-- ---- Buttons ---- -->\r
<section class="card">\r
  <div class="card__title">Buttons</div>\r
  \r
  <div class="row">\r
    <Button>Default</Button>\r
    <Button variant="primary">Primary</Button>\r
    <Button variant="destructive">Destructive</Button>\r
    <Button variant="ghost">Ghost</Button>\r
  </div>\r
  <div class="row">\r
    <Button disabled>Disabled</Button>\r
    <Button variant="primary" disabled>Disabled</Button>\r
  </div>\r
  <div class="row">\r
    <Button size="sm">Default</Button>\r
    <Button variant="primary" size="sm">Primary</Button>\r
    <Button variant="destructive" size="sm">Destructive</Button>\r
    <Button variant="ghost" size="sm">Ghost</Button>\r
  </div>\r
  <div class="row">\r
    <Button icon="css:close"/>\r
    <Button icon="css:plus"/>\r
    <Button icon="css:minus"/>\r
    <Button icon="css:sidebar"/>\r
    <Button icon="css:heart"/>\r
  </div>\r
  <hr class="separator">\r
  <div class="card__title">Toggle Group</div>\r
  <Selector options={['Day', 'Week', 'Month']} value="Day"/>\r
</section>\r
\r
<!-- ---- Form Controls ---- -->\r
<section class="card">\r
  <div class="card__title">Form Controls</div>\r
  <form>\r
    <div class="row">\r
      <Input label="Full Name" placeholder="Jane Doe"/>\r
      <Input variant="email" label="Email" placeholder="jane@example.com"/>\r
    </div>\r
    <Input variant="multiline" label="Message" placeholder="Write something..."/>\r
    <Input variant="select" label="Department" placeholder="Select department…" options={['Engineering', 'Design', 'Marketing', 'Product', 'Operations']}/>\r
    <Slider min={0} max={15} bind:value={expirience}>\r
      {#snippet label()}\r
        Experience <span class="label-value"><span id="slider-val">{expirience}</span> years</span>\r
      {/snippet}\r
    </Slider>\r
    <Field>\r
      <div class="row">\r
        <Checkbox label="Email notifications" checked disabled/>\r
        <Checkbox label="SMS notifications"/>\r
      </div>\r
    </Field>\r
    <Field label="Priority">\r
      <div class="row">\r
        <Checkbox variant="radio" label="Low" bind:group={radioGroup} value={0} disabled/>\r
        <Checkbox variant="radio" label="Medium" bind:group={radioGroup} value={1}/>\r
        <Checkbox variant="radio" label="High" bind:group={radioGroup} value={2}/>\r
      </div>\r
    </Field>\r
    <Switch label="Active status"/>\r
    <Button variant="primary">Submit</Button>\r
  </form>\r
</section>\r
\r
<!-- ---- Tabs ---- -->\r
<section class="card tabs">\r
  <div class="card__title">Tabs</div>\r
  <Tabs tabs={[\r
    { id: 'overview', title: 'Overview', view: 'overview' },\r
    { id: 'activity', title: 'Activity', view: 'activity' },\r
    { id: 'settings', title: 'Settings', view: 'settings' },\r
    { id: 'inline', title: 'Inline controls', view: 'inline' },\r
  ]} selected="overview">\r
    {#snippet overview()}\r
      <p>The project is currently on track. Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule. Team capacity remains stable at 85%.</p>\r
    {/snippet}\r
    {#snippet activity()}\r
      <p><strong>Today</strong> &mdash; Alice pushed 3 commits to <code>feature/dashboard</code><br>\r
      <strong>Yesterday</strong> &mdash; Bob merged PR #142 into main<br>\r
      <strong>Mar 8</strong> &mdash; Eve updated the project roadmap</p>\r
    {/snippet}\r
    {#snippet settings()}\r
      <Switch label="Compact view"/>\r
      <Switch label="Show archived" checked disabled/>\r
    {/snippet}\r
    {#snippet inline()}\r
      <div class="row">\r
        <Input label="Full Name" placeholder="Jane Doe" inline/>\r
        <Input variant="email" label="Email" placeholder="jane@example.com" inline/>\r
      </div>\r
      <Input variant="multiline" label="Message" placeholder="Write something..." inline/>\r
      <Input variant="select" label="Department" placeholder="Select department…" options={['Engineering', 'Design', 'Marketing', 'Product', 'Operations']} inline/>\r
      <Slider min={0} max={15} bind:value={expirience} inline>\r
        {#snippet label()}\r
          Experience <span class="label-value"><span id="slider-val">{expirience}</span> years</span>\r
        {/snippet}\r
      </Slider>\r
      <Field inline>\r
        <div class="row">\r
          <Checkbox label="Email notifications" checked disabled/>\r
          <Checkbox label="SMS notifications"/>\r
        </div>\r
      </Field>\r
      <Field label="Priority" inline>\r
        <div class="row">\r
          <Checkbox variant="radio" label="Low" bind:group={radioGroup} value={0} disabled/>\r
          <Checkbox variant="radio" label="Medium" bind:group={radioGroup} value={1}/>\r
          <Checkbox variant="radio" label="High" bind:group={radioGroup} value={2}/>\r
        </div>\r
      </Field>\r
      <Switch label="Active status"/>\r
      <Button variant="primary">Submit</Button>\r
    {/snippet}\r
  </Tabs>\r
</section>\r
\r
<!-- ---- Progress & Loading ---- -->\r
<section class="card">\r
  <div class="card__title">Progress &amp; Loading</div>\r
  <Progress label="Project Alpha" value={67} inline>67%</Progress>\r
  <Progress label="Storage Used" variant="segmented" value={35} inline>35%</Progress>\r
  <Progress label="Upload" value={89} inline>89%</Progress>\r
  <Spinner size="lg" label="Loading data…"/>\r
</section>\r
\r
<!-- ---- Table ---- -->\r
<section class="card span-2">\r
  <div class="card__title">Team Members</div>\r
  <Table columns={[\r
    { title: 'Name', value: 'name', view: 'name' },\r
    { title: 'Role', value: 'role' },\r
    { title: 'Department', value: 'department' },\r
    { title: 'Status', value: 'status', view: 'status' },\r
    { title: '', view: 'actions' },\r
  ]} rows={[{\r
    name: 'Alice Chen',\r
    role: 'Frontend Developer',\r
    department: 'Engineering',\r
    status: 'Active',\r
  }, {\r
    name: 'Bob Park',\r
    role: 'Backend Developer',\r
    department: 'Engineering',\r
    status: 'Away',\r
  }, {\r
    name: 'Charlie Kim',\r
    role: 'DevOps Engineer',\r
    department: 'Operations',\r
    status: 'Active',\r
  }, {\r
    name: 'Diana Lee',\r
    role: 'UI Designer',\r
    department: 'Design',\r
    status: 'Offline',\r
  }, {\r
    name: 'Eve Wang',\r
    role: 'Product Manager',\r
    department: 'Product',\r
    status: 'Active',\r
  }]} rowKey="name">\r
    {#snippet name(row)}\r
      <td class="cell-name">{row.name}</td>\r
    {/snippet}\r
    {#snippet status(row)}\r
      <td><span class={[\r
        'badge',\r
        { Active: 'is-success', Away: 'is-warning', Offline: 'is-neutral' }[row.status],\r
      ]}>{row.status}</span></td>\r
    {/snippet}\r
    {#snippet actions(row)}\r
      <td><Button size="sm">Edit</Button></td>\r
    {/snippet}\r
  </Table>\r
</section>\r
\r
<!-- ---- Overlays & Menus ---- -->\r
<section class="card span-2">\r
  <div class="card__title">Overlays &amp; Menus</div>\r
  <div class="row">\r
    <Button onclick={() => shell.showOverlay({\r
      variant: 'alert',\r
      title: 'Confirm Action',\r
      children: dialogBody,\r
      footer: dialogFooter,\r
    })}>Open Dialog</Button>\r
    <Button onclick={() => shell.showOverlay({\r
      draggable: true,\r
      variant: 'alert',\r
      title: 'Confirm Action',\r
      children: dialogBody,\r
    }, false)}>Open Non-Modal Dialog</Button>\r
    <Button onclick={() => shell.dismissAllOverlays()}>Dismiss All</Button>\r
\r
    <Button onclick={() => shell.showToast('Hello world!')}>Show toast</Button>\r
\r
    <!--div class="popover-anchor">\r
      <Button>\r
        Show Popover\r
        {#snippet popover()}\r
          <strong>Popover Title</strong>\r
          This is a contextual popover with additional information. It appears relative to the trigger element and closes on outside click.\r
        {/snippet}\r
      </Button>\r
    </div-->\r
\r
    <div class="dropdown">\r
      <Button dropdown={[\r
        { label: 'Edit' },\r
        { label: 'Duplicate' },\r
        { label: 'Archive' },\r
        { separator: true },\r
        { label: 'Delete', variant: 'destructive' },\r
      ]}>Actions</Button>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ---- List View ---- -->\r
<section class="card">\r
  <div class="card__title">Projects</div>\r
\r
  <List>\r
    <ListSection header="Active">\r
      <ListItem accessory="chevron">\r
        Dashboard Redesign\r
        {#snippet description()}\r
          Frontend team · Due Mar 15\r
        {/snippet}\r
      </ListItem>\r
      <ListItem accessory="chevron">\r
        API Migration\r
        {#snippet description()}\r
          Backend team · Due Apr 1\r
        {/snippet}\r
      </ListItem>\r
      <ListItem accessory="chevron">\r
        Mobile App v2\r
        {#snippet description()}\r
          Mobile team · Due Apr 20\r
        {/snippet}\r
      </ListItem>\r
    </ListSection>\r
\r
    <ListSection header="Completed">\r
      <ListItem accessory="switch">\r
        Brand Guidelines\r
        {#snippet description()}\r
          Design team · Feb 28\r
        {/snippet}\r
      </ListItem>\r
      <ListItem accessory="switch">\r
        Security Audit\r
        {#snippet description()}\r
          DevOps team · Mar 1\r
        {/snippet}\r
      </ListItem>\r
    </ListSection>\r
  </List>\r
</section>\r
\r
<!-- ---- Dashboard Cards ---- -->\r
<section class="card">\r
  <div class="card__title">Dashboard Cards</div>\r
  <div class="row">\r
    <div class="metric-card">\r
      <span class="metric-label">Revenue</span>\r
      <span class="metric-value">$24,500</span>\r
      <span class="metric-trend is-up">&uarr; 12.3%</span>\r
    </div>\r
    <div class="metric-card">\r
      <span class="metric-label">Users</span>\r
      <span class="metric-value">1,234</span>\r
      <span class="metric-trend is-up">&uarr; 8.1%</span>\r
    </div>\r
    <div class="metric-card">\r
      <span class="metric-label">Conversion</span>\r
      <span class="metric-value">3.2%</span>\r
      <span class="metric-trend is-down">&darr; 0.5%</span>\r
    </div>\r
  </div>\r
</section>\r
</main>\r
</AppShell>
</undefined>`}}}),_()}var he,ge,W,G,K,q,J,Y,X,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Z,Q,$;e((()=>{l(),b(),D(),ae(),ie(),ce(),le(),A(),j(),M(),P(),I(),re(),L(),R(),z(),w(),B(),v(),H(),x(),he=e=>{o(e,Y())},ge=e=>{var t=X(),n=g(t);O(n,{onclick:()=>y(J).dismissOverlay(),children:(e,t)=>{p(),o(e,a(`Cancel`))},$$slots:{default:!0}}),O(r(n,2),{variant:`primary`,onclick:()=>y(J).dismissOverlay(),children:(e,t)=>{p(),o(e,a(`Confirm`))},$$slots:{default:!0}}),o(e,t)},W={title:`Dashboard`,tags:[],parameters:{layout:`fullscreen`}},{Story:G}=ne(W),K=d(0),q=d(5),J=d(null),Y=t(`<p>Are you sure you want to proceed with this action? This operation cannot be undone and will permanently affect the selected items.</p>`),X=t(`<!> <!>`,1),_e=t(`Experience <span class="label-value svelte-8pf2k"><span id="slider-val"> </span> years</span>`,1),ve=t(`<div class="row"><!> <!></div>`),ye=t(`<div class="row"><!> <!> <!></div>`),be=t(`<p>The project is currently on track. Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule. Team capacity remains stable at 85%.</p>`),xe=t(`<p><strong>Today</strong> &mdash; Alice pushed 3 commits to <code>feature/dashboard</code><br/> <strong>Yesterday</strong> &mdash; Bob merged PR #142 into main<br/> <strong>Mar 8</strong> &mdash; Eve updated the project roadmap</p>`),Se=t(`<!> <!>`,1),Ce=t(`Experience <span class="label-value svelte-8pf2k"><span id="slider-val"> </span> years</span>`,1),we=t(`<div class="row"><!> <!></div>`),Te=t(`<div class="row"><!> <!> <!></div>`),Ee=t(`<div class="row"><!> <!></div> <!> <!> <!> <!> <!> <!> <!>`,1),De=t(`<td class="cell-name svelte-8pf2k"> </td>`),Oe=t(`<td><span> </span></td>`),ke=t(`<td><!></td>`),Ae=t(`<!> <!> <!>`,1),je=t(`<!> <!>`,1),Me=t(`<!> <!>`,1),Ne=t(`<header class="header svelte-8pf2k"><div><h1>UI Components</h1> <p class="svelte-8pf2k">Dashboard Showcase Демо</p></div></header> <main class="dashboard svelte-8pf2k"><section class="card"><div class="card__title">Buttons</div> <div class="row"><!> <!> <!> <!></div> <div class="row"><!> <!></div> <div class="row"><!> <!> <!> <!></div> <div class="row"><!> <!> <!> <!> <!></div> <hr class="separator"/> <div class="card__title">Toggle Group</div> <!></section> <section class="card"><div class="card__title">Form Controls</div> <form><div class="row"><!> <!></div> <!> <!> <!> <!> <!> <!> <!></form></section> <section class="card tabs"><div class="card__title">Tabs</div> <!></section> <section class="card"><div class="card__title">Progress &amp; Loading</div> <!> <!> <!> <!></section> <section class="card span-2 svelte-8pf2k"><div class="card__title">Team Members</div> <!></section> <section class="card span-2 svelte-8pf2k"><div class="card__title">Overlays &amp; Menus</div> <div class="row"><!> <!> <!> <!> <div class="dropdown"><!></div></div></section> <section class="card"><div class="card__title">Projects</div> <!></section> <section class="card"><div class="card__title">Dashboard Cards</div> <div class="row"><div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Revenue</span> <span class="metric-value svelte-8pf2k">$24,500</span> <span class="metric-trend is-up svelte-8pf2k">&uarr; 12.3%</span></div> <div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Users</span> <span class="metric-value svelte-8pf2k">1,234</span> <span class="metric-trend is-up svelte-8pf2k">&uarr; 8.1%</span></div> <div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Conversion</span> <span class="metric-value svelte-8pf2k">3.2%</span> <span class="metric-trend is-down svelte-8pf2k">&darr; 0.5%</span></div></div></section></main>`,1),U.__docgen={data:[],name:`Dashboard.stories.svelte`},Z=S(U,W),Q=[`Dashboard`],$={...Z.Dashboard,tags:[`svelte-csf-v5`]}}))();export{$ as Dashboard,Q as __namedExportsOrder,W as default};