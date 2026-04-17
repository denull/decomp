import{n as e}from"./chunk-BneVvdWh.js";import{A as t,E as n,J as r,K as i,N as a,O as o,Q as s,U as c,bt as l,ct as u,et as d,gt as f,ht as p,m,o as h,p as g,q as _,st as v,t as y,vt as b,z as x}from"./client-DVBkriut.js";import{i as S,n as ee,r as C,t as te}from"./create-runtime-stories-LfQYHLx5.js";import{n as w,t as T}from"./Switch-BS1ULOT9.js";import{n as ne,t as E}from"./Field-CNpmKko1.js";import{a as D,i as O,n as k,o as A,r as re,t as ie}from"./List-CrzbdvcP.js";import{n as j,t as M}from"./Button-DxUEtBqm.js";import{n as N,t as P}from"./Input-BZkU0DSO.js";import{n as F,t as ae}from"./Tabs-pgHSPV93.js";import{n as I,t as oe}from"./Table-Ck1cUNEM.js";import{n as L,t as R}from"./Checkbox-D-ta_D3K.js";import{n as z,t as B}from"./Progress-RVDiWDPZ.js";import{n as V,t as se}from"./Selector-BKG9zE-h.js";import{n as H,t as ce}from"./Slider-BhniuGrr.js";import{n as U,t as le}from"./Spinner-Byqakeft.js";import{n as W,t as ue}from"./Dialog-CC7eAqq3.js";var de=e((()=>{}));function G(e,t){u(t,!0),q(e,{name:`Dashboard`,children:(e,t)=>{var l=Ae(),u=r(_(l),2),d=i(u),v=r(i(d),2),y=i(v);M(y,{children:(e,t)=>{p(),o(e,a(`Default`))},$$slots:{default:!0}});var S=r(y,2);M(S,{variant:`primary`,children:(e,t)=>{p(),o(e,a(`Primary`))},$$slots:{default:!0}});var ee=r(S,2);M(ee,{variant:`destructive`,children:(e,t)=>{p(),o(e,a(`Destructive`))},$$slots:{default:!0}}),M(r(ee,2),{variant:`ghost`,children:(e,t)=>{p(),o(e,a(`Ghost`))},$$slots:{default:!0}}),f(v);var C=r(v,2),te=i(C);M(te,{disabled:!0,children:(e,t)=>{p(),o(e,a(`Disabled`))},$$slots:{default:!0}}),M(r(te,2),{variant:`primary`,disabled:!0,children:(e,t)=>{p(),o(e,a(`Disabled`))},$$slots:{default:!0}}),f(C);var w=r(C,2),ne=i(w);M(ne,{size:`sm`,children:(e,t)=>{p(),o(e,a(`Default`))},$$slots:{default:!0}});var O=r(ne,2);M(O,{variant:`primary`,size:`sm`,children:(e,t)=>{p(),o(e,a(`Primary`))},$$slots:{default:!0}});var k=r(O,2);M(k,{variant:`destructive`,size:`sm`,children:(e,t)=>{p(),o(e,a(`Destructive`))},$$slots:{default:!0}}),M(r(k,2),{variant:`ghost`,size:`sm`,children:(e,t)=>{p(),o(e,a(`Ghost`))},$$slots:{default:!0}}),f(w);var A=r(w,2),j=i(A);M(j,{icon:`css:close`});var N=r(j,2);M(N,{icon:`css:plus`});var F=r(N,2);M(F,{icon:`css:minus`});var I=r(F,2);M(I,{icon:`css:sidebar`}),M(r(I,2),{icon:`css:heart`}),f(A),se(r(A,6),{options:[`Day`,`Week`,`Month`],value:`Day`}),f(d);var L=r(d,2),z=r(i(L),2),V=i(z),H=i(V);P(H,{label:`Full Name`,placeholder:`Jane Doe`}),P(r(H,2),{variant:`email`,label:`Email`,placeholder:`jane@example.com`}),f(V);var U=r(V,2);P(U,{variant:`multiline`,label:`Message`,placeholder:`Write something...`});var W=r(U,2);P(W,{variant:`select`,label:`Department`,placeholder:`Select department…`,options:[`Engineering`,`Design`,`Marketing`,`Product`,`Operations`]});var de=r(W,2);ce(de,{min:0,max:15,get value(){return x(Y)},set value(e){s(Y,e,!0)},label:e=>{p();var t=fe(),a=r(_(t)),s=i(a),l=i(s,!0);f(s),p(),f(a),c(()=>n(l,x(Y))),o(e,t)},$$slots:{label:!0}});var G=r(de,2);E(G,{children:(e,t)=>{var n=pe(),a=i(n);R(a,{label:`Email notifications`,checked:!0,disabled:!0}),R(r(a,2),{label:`SMS notifications`}),f(n),o(e,n)},$$slots:{default:!0}});var K=r(G,2);E(K,{label:`Priority`,children:(e,t)=>{var n=me(),a=i(n);R(a,{variant:`radio`,label:`Low`,value:0,disabled:!0,get group(){return x(J)},set group(e){s(J,e,!0)}});var c=r(a,2);R(c,{variant:`radio`,label:`Medium`,value:1,get group(){return x(J)},set group(e){s(J,e,!0)}}),R(r(c,2),{variant:`radio`,label:`High`,value:2,get group(){return x(J)},set group(e){s(J,e,!0)}}),f(n),o(e,n)},$$slots:{default:!0}});var q=r(K,2);T(q,{label:`Active status`}),M(r(q,2),{variant:`primary`,children:(e,t)=>{p(),o(e,a(`Submit`))},$$slots:{default:!0}}),f(z),f(L);var Z=r(L,2);ae(r(i(Z),2),{tabs:[{title:`Overview`,value:`overview`,content:`overview`},{title:`Activity`,value:`activity`,content:`activity`},{title:`Settings`,value:`settings`,content:`settings`},{title:`Inline controls`,value:`inline`,content:`inline`}],value:`overview`,overview:e=>{o(e,he())},activity:e=>{o(e,ge())},settings:e=>{var t=_e(),n=_(t);T(n,{label:`Compact view`}),T(r(n,2),{label:`Show archived`,checked:!0,disabled:!0}),o(e,t)},inline:e=>{var t=xe(),l=_(t),u=i(l);P(u,{label:`Full Name`,placeholder:`Jane Doe`,inline:!0}),P(r(u,2),{variant:`email`,label:`Email`,placeholder:`jane@example.com`,inline:!0}),f(l);var d=r(l,2);P(d,{variant:`multiline`,label:`Message`,placeholder:`Write something...`,inline:!0});var m=r(d,2);P(m,{variant:`select`,label:`Department`,placeholder:`Select department…`,options:[`Engineering`,`Design`,`Marketing`,`Product`,`Operations`],inline:!0});var h=r(m,2);ce(h,{min:0,max:15,inline:!0,get value(){return x(Y)},set value(e){s(Y,e,!0)},label:e=>{p();var t=ve(),a=r(_(t)),s=i(a),l=i(s,!0);f(s),p(),f(a),c(()=>n(l,x(Y))),o(e,t)},$$slots:{label:!0}});var g=r(h,2);E(g,{inline:!0,children:(e,t)=>{var n=ye(),a=i(n);R(a,{label:`Email notifications`,checked:!0,disabled:!0}),R(r(a,2),{label:`SMS notifications`}),f(n),o(e,n)},$$slots:{default:!0}});var v=r(g,2);E(v,{label:`Priority`,inline:!0,children:(e,t)=>{var n=be(),a=i(n);R(a,{variant:`radio`,label:`Low`,value:0,disabled:!0,get group(){return x(J)},set group(e){s(J,e,!0)}});var c=r(a,2);R(c,{variant:`radio`,label:`Medium`,value:1,get group(){return x(J)},set group(e){s(J,e,!0)}}),R(r(c,2),{variant:`radio`,label:`High`,value:2,get group(){return x(J)},set group(e){s(J,e,!0)}}),f(n),o(e,n)},$$slots:{default:!0}});var y=r(v,2);T(y,{label:`Active status`}),M(r(y,2),{variant:`primary`,children:(e,t)=>{p(),o(e,a(`Submit`))},$$slots:{default:!0}}),o(e,t)},$$slots:{overview:!0,activity:!0,settings:!0,inline:!0}}),f(Z);var Q=r(Z,2),$=r(i(Q),2);B($,{label:`Project Alpha`,value:67,inline:!0,children:(e,t)=>{p(),o(e,a(`67%`))},$$slots:{default:!0}});var je=r($,2);B(je,{label:`Storage Used`,variant:`segmented`,value:35,inline:!0,children:(e,t)=>{p(),o(e,a(`35%`))},$$slots:{default:!0}});var Me=r(je,2);B(Me,{label:`Upload`,value:89,inline:!0,children:(e,t)=>{p(),o(e,a(`89%`))},$$slots:{default:!0}}),le(r(Me,2),{size:`lg`,label:`Loading data…`}),f(Q);var Ne=r(Q,2);oe(r(i(Ne),2),{columns:[{title:`Name`,snippet:`name`},{title:`Role`,value:`role`},{title:`Department`,value:`department`},{title:`Status`,snippet:`status`},{title:``,snippet:`actions`}],rows:[{name:`Alice Chen`,role:`Frontend Developer`,department:`Engineering`,status:`Active`},{name:`Bob Park`,role:`Backend Developer`,department:`Engineering`,status:`Away`},{name:`Charlie Kim`,role:`DevOps Engineer`,department:`Operations`,status:`Active`},{name:`Diana Lee`,role:`UI Designer`,department:`Design`,status:`Offline`},{name:`Eve Wang`,role:`Product Manager`,department:`Product`,status:`Active`}],rowKey:`name`,name:(e,t=b)=>{var r=Se(),a=i(r,!0);f(r),c(()=>n(a,t().name)),o(e,r)},status:(e,t=b)=>{var r=Ce(),a=i(r),s=i(a,!0);f(a),f(r),c(()=>{g(a,1,m([`badge`,{Active:`is-success`,Away:`is-warning`,Offline:`is-neutral`}[t().status]]),`svelte-8pf2k`),n(s,t().status)}),o(e,r)},actions:(e,t=b)=>{var n=we();M(i(n),{size:`sm`,children:(e,t)=>{p(),o(e,a(`Edit`))},$$slots:{default:!0}}),f(n),o(e,n)},$$slots:{name:!0,status:!0,actions:!0}}),f(Ne);var Pe=r(Ne,2),Fe=r(i(Pe),2),Ie=i(Fe);M(Ie,{onclick:()=>x(X).show(),children:(e,t)=>{p(),o(e,a(`Open Dialog`))},$$slots:{default:!0}});var Le=r(Ie,2);M(i(Le),{dropdown:[{label:`Edit`},{label:`Duplicate`},{label:`Archive`},{separator:!0},{label:`Delete`,variant:`destructive`}],children:(e,t)=>{p(),o(e,a(`Actions`))},$$slots:{default:!0}}),f(Le),f(Fe),f(Pe);var Re=r(Pe,2);ie(r(i(Re),2),{children:(e,t)=>{var n=De(),i=_(n);re(i,{header:`Active`,children:(e,t)=>{var n=Te(),i=_(n);D(i,{accessory:`chevron`,description:e=>{p(),o(e,a(`Frontend team · Due Mar 15`))},children:(e,t)=>{p(),o(e,a(`Dashboard Redesign`))},$$slots:{description:!0,default:!0}});var s=r(i,2);D(s,{accessory:`chevron`,description:e=>{p(),o(e,a(`Backend team · Due Apr 1`))},children:(e,t)=>{p(),o(e,a(`API Migration`))},$$slots:{description:!0,default:!0}}),D(r(s,2),{accessory:`chevron`,description:e=>{p(),o(e,a(`Mobile team · Due Apr 20`))},children:(e,t)=>{p(),o(e,a(`Mobile App v2`))},$$slots:{description:!0,default:!0}}),o(e,n)},$$slots:{default:!0}}),re(r(i,2),{header:`Completed`,children:(e,t)=>{var n=Ee(),i=_(n);D(i,{accessory:`switch`,description:e=>{p(),o(e,a(`Design team · Feb 28`))},children:(e,t)=>{p(),o(e,a(`Brand Guidelines`))},$$slots:{description:!0,default:!0}}),D(r(i,2),{accessory:`switch`,description:e=>{p(),o(e,a(`DevOps team · Mar 1`))},children:(e,t)=>{p(),o(e,a(`Security Audit`))},$$slots:{description:!0,default:!0}}),o(e,n)},$$slots:{default:!0}}),o(e,n)},$$slots:{default:!0}}),f(Re),p(2),f(u),h(ue(r(u,2),{variant:`alert`,title:`Confirm Action`,draggable:!0,footer:e=>{var t=Oe(),n=_(t);M(n,{onclick:()=>x(X).hide(),children:(e,t)=>{p(),o(e,a(`Cancel`))},$$slots:{default:!0}}),M(r(n,2),{variant:`primary`,onclick:()=>x(X).hide(),children:(e,t)=>{p(),o(e,a(`Confirm`))},$$slots:{default:!0}}),o(e,t)},children:(e,t)=>{o(e,ke())},$$slots:{footer:!0,default:!0}}),e=>s(X,e,!0),()=>x(X)),o(e,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
  <!-- ======== Header ======== -->\r
<header class="header">\r
<div>\r
  <h1>UI Components</h1>\r
  <p>Dashboard Showcase</p>\r
</div>\r
</header>\r
\r
<!-- ======== Dashboard ======== -->\r
<main class="dashboard">\r
\r
<!-- ---- Buttons ---- -->\r
<section class="card">\r
  <div class="card__title">Buttons</div>\r
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
    { title: 'Overview', value: 'overview', content: 'overview' },\r
    { title: 'Activity', value: 'activity', content: 'activity' },\r
    { title: 'Settings', value: 'settings', content: 'settings' },\r
    { title: 'Inline controls', value: 'inline', content: 'inline' },\r
  ]} value="overview">\r
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
    { title: 'Name', snippet: 'name' },\r
    { title: 'Role', value: 'role' },\r
    { title: 'Department', value: 'department' },\r
    { title: 'Status', snippet: 'status' },\r
    { title: '', snippet: 'actions' },\r
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
    <Button onclick={() => dialog.show()}>Open Dialog</Button>\r
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
\r
<!-- ======== Dialog ======== -->\r
<Dialog bind:this={dialog} variant="alert" title="Confirm Action" draggable>\r
<p>Are you sure you want to proceed with this action? This operation cannot be undone and will permanently affect the selected items.</p>\r
\r
{#snippet footer()}\r
  <Button onclick={() => dialog.hide()}>Cancel</Button>\r
  <Button variant="primary" onclick={() => dialog.hide()}>Confirm</Button>\r
{/snippet}\r
</Dialog>
</undefined>`}}}),v()}var K,q,J,Y,X,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,Z,Q,$;e((()=>{l(),S(),k(),A(),O(),j(),N(),F(),I(),L(),z(),V(),w(),H(),U(),W(),ne(),y(),de(),ee(),K={title:`Dashboard`,tags:[],parameters:{layout:`fullscreen`}},{Story:q}=C(K),J=d(0),Y=d(5),X=d(null),fe=t(`Experience <span class="label-value svelte-8pf2k"><span id="slider-val"> </span> years</span>`,1),pe=t(`<div class="row"><!> <!></div>`),me=t(`<div class="row"><!> <!> <!></div>`),he=t(`<p>The project is currently on track. Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule. Team capacity remains stable at 85%.</p>`),ge=t(`<p><strong>Today</strong> &mdash; Alice pushed 3 commits to <code>feature/dashboard</code><br/> <strong>Yesterday</strong> &mdash; Bob merged PR #142 into main<br/> <strong>Mar 8</strong> &mdash; Eve updated the project roadmap</p>`),_e=t(`<!> <!>`,1),ve=t(`Experience <span class="label-value svelte-8pf2k"><span id="slider-val"> </span> years</span>`,1),ye=t(`<div class="row"><!> <!></div>`),be=t(`<div class="row"><!> <!> <!></div>`),xe=t(`<div class="row"><!> <!></div> <!> <!> <!> <!> <!> <!> <!>`,1),Se=t(`<td class="cell-name svelte-8pf2k"> </td>`),Ce=t(`<td><span> </span></td>`),we=t(`<td><!></td>`),Te=t(`<!> <!> <!>`,1),Ee=t(`<!> <!>`,1),De=t(`<!> <!>`,1),Oe=t(`<!> <!>`,1),ke=t(`<p>Are you sure you want to proceed with this action? This operation cannot be undone and will permanently affect the selected items.</p>`),Ae=t(`<header class="header svelte-8pf2k"><div><h1>UI Components</h1> <p class="svelte-8pf2k">Dashboard Showcase</p></div></header> <main class="dashboard svelte-8pf2k"><section class="card"><div class="card__title">Buttons</div> <div class="row"><!> <!> <!> <!></div> <div class="row"><!> <!></div> <div class="row"><!> <!> <!> <!></div> <div class="row"><!> <!> <!> <!> <!></div> <hr class="separator"/> <div class="card__title">Toggle Group</div> <!></section> <section class="card"><div class="card__title">Form Controls</div> <form><div class="row"><!> <!></div> <!> <!> <!> <!> <!> <!> <!></form></section> <section class="card tabs"><div class="card__title">Tabs</div> <!></section> <section class="card"><div class="card__title">Progress &amp; Loading</div> <!> <!> <!> <!></section> <section class="card span-2 svelte-8pf2k"><div class="card__title">Team Members</div> <!></section> <section class="card span-2 svelte-8pf2k"><div class="card__title">Overlays &amp; Menus</div> <div class="row"><!> <div class="dropdown"><!></div></div></section> <section class="card"><div class="card__title">Projects</div> <!></section> <section class="card"><div class="card__title">Dashboard Cards</div> <div class="row"><div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Revenue</span> <span class="metric-value svelte-8pf2k">$24,500</span> <span class="metric-trend is-up svelte-8pf2k">&uarr; 12.3%</span></div> <div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Users</span> <span class="metric-value svelte-8pf2k">1,234</span> <span class="metric-trend is-up svelte-8pf2k">&uarr; 8.1%</span></div> <div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Conversion</span> <span class="metric-value svelte-8pf2k">3.2%</span> <span class="metric-trend is-down svelte-8pf2k">&darr; 0.5%</span></div></div></section></main> <!>`,1),G.__docgen={data:[],name:`Dashboard.stories.svelte`},Z=te(G,K),Q=[`Dashboard`],$={...Z.Dashboard,tags:[`svelte-csf-v5`]}}))();export{$ as Dashboard,Q as __namedExportsOrder,K as default};