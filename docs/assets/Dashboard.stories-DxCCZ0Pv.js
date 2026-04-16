import{n as e}from"./chunk-BneVvdWh.js";import{A as t,E as n,G as r,J as i,K as a,N as o,O as s,V as c,W as l,Y as u,lt as d,m as f,nt as p,o as m,ot as h,p as ee,st as g,t as _,tt as v,ut as y,z as b}from"./client-kmAv9JMI.js";import{n as x,t as S}from"./iframe-DB_btR-K.js";import{i as te,n as C,r as ne,t as w}from"./create-runtime-stories-x5tpYKlc.js";import{a as T,i as re,n as E,o as D,r as ie,t as ae}from"./List-D9FpxJwl.js";import{n as O,t as k}from"./Input-CDPTS0BG.js";import{n as A,t as j}from"./Field-j1_jNJaB.js";import{n as M,t as oe}from"./Tabs-B4zN0g69.js";import{n as N,t as se}from"./Table-Bw2SzqJf.js";import{n as P,t as F}from"./Checkbox-KRuyJmp-.js";import{n as I,t as L}from"./Progress-BrMMTmlI.js";import{n as R,t as ce}from"./ToggleGroup-BM5sRPfu.js";import{n as z,t as B}from"./Switch-BmvJeVqs.js";import{n as V,t as le}from"./Slider-C4p9QSe8.js";import{n as H,t as ue}from"./Spinner-BdpcU_tc.js";import{n as U,t as de}from"./Dialog-DpsqCgB4.js";var W=e((()=>{}));function G(e,t){p(t,!0),q(e,{name:`Dashboard`,children:(e,t)=>{var u=Ae(),p=a(r(u),2),_=l(p),v=a(l(_),2),y=l(v);S(y,{children:(e,t)=>{h(),s(e,o(`Default`))},$$slots:{default:!0}});var x=a(y,2);S(x,{variant:`primary`,children:(e,t)=>{h(),s(e,o(`Primary`))},$$slots:{default:!0}});var te=a(x,2);S(te,{variant:`destructive`,children:(e,t)=>{h(),s(e,o(`Destructive`))},$$slots:{default:!0}}),S(a(te,2),{variant:`ghost`,children:(e,t)=>{h(),s(e,o(`Ghost`))},$$slots:{default:!0}}),g(v);var C=a(v,2),ne=l(C);S(ne,{disabled:!0,children:(e,t)=>{h(),s(e,o(`Disabled`))},$$slots:{default:!0}}),S(a(ne,2),{variant:`primary`,disabled:!0,children:(e,t)=>{h(),s(e,o(`Disabled`))},$$slots:{default:!0}}),g(C);var w=a(C,2),re=l(w);S(re,{size:`sm`,children:(e,t)=>{h(),s(e,o(`Default`))},$$slots:{default:!0}});var E=a(re,2);S(E,{variant:`primary`,size:`sm`,children:(e,t)=>{h(),s(e,o(`Primary`))},$$slots:{default:!0}});var D=a(E,2);S(D,{variant:`destructive`,size:`sm`,children:(e,t)=>{h(),s(e,o(`Destructive`))},$$slots:{default:!0}}),S(a(D,2),{variant:`ghost`,size:`sm`,children:(e,t)=>{h(),s(e,o(`Ghost`))},$$slots:{default:!0}}),g(w);var O=a(w,2),A=l(O);S(A,{icon:`css:close`});var M=a(A,2);S(M,{icon:`css:plus`});var N=a(M,2);S(N,{icon:`css:minus`});var P=a(N,2);S(P,{icon:`css:sidebar`}),S(a(P,2),{icon:`css:heart`}),g(O),ce(a(O,6),{options:[`Day`,`Week`,`Month`],value:`Day`}),g(_);var I=a(_,2),R=a(l(I),2),z=l(R),V=l(z);k(V,{label:`Full Name`,placeholder:`Jane Doe`}),k(a(V,2),{variant:`email`,label:`Email`,placeholder:`jane@example.com`}),g(z);var H=a(z,2);k(H,{variant:`multiline`,label:`Message`,placeholder:`Write something...`});var U=a(H,2);k(U,{variant:`select`,label:`Department`,placeholder:`Select department…`,options:[`Engineering`,`Design`,`Marketing`,`Product`,`Operations`]});var W=a(U,2);le(W,{min:0,max:15,get value(){return b(Y)},set value(e){i(Y,e,!0)},label:e=>{h();var t=fe(),i=a(r(t)),o=l(i),u=l(o,!0);g(o),h(),g(i),c(()=>n(u,b(Y))),s(e,t)},$$slots:{label:!0}});var G=a(W,2);j(G,{children:(e,t)=>{var n=pe(),r=l(n);F(r,{label:`Email notifications`,checked:!0,disabled:!0}),F(a(r,2),{label:`SMS notifications`}),g(n),s(e,n)},$$slots:{default:!0}});var K=a(G,2);j(K,{label:`Priority`,children:(e,t)=>{var n=me(),r=l(n);F(r,{variant:`radio`,label:`Low`,value:0,disabled:!0,get group(){return b(J)},set group(e){i(J,e,!0)}});var o=a(r,2);F(o,{variant:`radio`,label:`Medium`,value:1,get group(){return b(J)},set group(e){i(J,e,!0)}}),F(a(o,2),{variant:`radio`,label:`High`,value:2,get group(){return b(J)},set group(e){i(J,e,!0)}}),g(n),s(e,n)},$$slots:{default:!0}});var q=a(K,2);B(q,{label:`Active status`}),S(a(q,2),{variant:`primary`,children:(e,t)=>{h(),s(e,o(`Submit`))},$$slots:{default:!0}}),g(R),g(I);var Z=a(I,2);oe(a(l(Z),2),{tabs:[{title:`Overview`,value:`overview`,snippet:`overview`},{title:`Activity`,value:`activity`,snippet:`activity`},{title:`Settings`,value:`settings`,snippet:`settings`},{title:`Inline controls`,value:`inline`,snippet:`inline`}],value:`overview`,overview:e=>{s(e,he())},activity:e=>{s(e,ge())},settings:e=>{var t=_e(),n=r(t);B(n,{label:`Compact view`}),B(a(n,2),{label:`Show archived`}),s(e,t)},inline:e=>{var t=xe(),u=r(t),d=l(u);k(d,{label:`Full Name`,placeholder:`Jane Doe`,inline:!0}),k(a(d,2),{variant:`email`,label:`Email`,placeholder:`jane@example.com`,inline:!0}),g(u);var f=a(u,2);k(f,{variant:`multiline`,label:`Message`,placeholder:`Write something...`,inline:!0});var p=a(f,2);k(p,{variant:`select`,label:`Department`,placeholder:`Select department…`,options:[`Engineering`,`Design`,`Marketing`,`Product`,`Operations`],inline:!0});var m=a(p,2);le(m,{min:0,max:15,inline:!0,get value(){return b(Y)},set value(e){i(Y,e,!0)},label:e=>{h();var t=ve(),i=a(r(t)),o=l(i),u=l(o,!0);g(o),h(),g(i),c(()=>n(u,b(Y))),s(e,t)},$$slots:{label:!0}});var ee=a(m,2);j(ee,{inline:!0,children:(e,t)=>{var n=ye(),r=l(n);F(r,{label:`Email notifications`,checked:!0,disabled:!0}),F(a(r,2),{label:`SMS notifications`}),g(n),s(e,n)},$$slots:{default:!0}});var _=a(ee,2);j(_,{label:`Priority`,inline:!0,children:(e,t)=>{var n=be(),r=l(n);F(r,{variant:`radio`,label:`Low`,value:0,disabled:!0,get group(){return b(J)},set group(e){i(J,e,!0)}});var o=a(r,2);F(o,{variant:`radio`,label:`Medium`,value:1,get group(){return b(J)},set group(e){i(J,e,!0)}}),F(a(o,2),{variant:`radio`,label:`High`,value:2,get group(){return b(J)},set group(e){i(J,e,!0)}}),g(n),s(e,n)},$$slots:{default:!0}});var v=a(_,2);B(v,{label:`Active status`}),S(a(v,2),{variant:`primary`,children:(e,t)=>{h(),s(e,o(`Submit`))},$$slots:{default:!0}}),s(e,t)},$$slots:{overview:!0,activity:!0,settings:!0,inline:!0}}),g(Z);var Q=a(Z,2),$=a(l(Q),2);L($,{label:`Project Alpha`,value:67,inline:!0,children:(e,t)=>{h(),s(e,o(`67%`))},$$slots:{default:!0}});var je=a($,2);L(je,{label:`Storage Used`,variant:`segmented`,value:35,inline:!0,children:(e,t)=>{h(),s(e,o(`35%`))},$$slots:{default:!0}});var Me=a(je,2);L(Me,{label:`Upload`,value:89,inline:!0,children:(e,t)=>{h(),s(e,o(`89%`))},$$slots:{default:!0}}),ue(a(Me,2),{size:`lg`,label:`Loading data…`}),g(Q);var Ne=a(Q,2);se(a(l(Ne),2),{columns:[{title:`Name`,snippet:`name`},{title:`Role`,value:`role`},{title:`Department`,value:`department`},{title:`Status`,snippet:`status`},{title:``,snippet:`actions`}],rows:[{name:`Alice Chen`,role:`Frontend Developer`,department:`Engineering`,status:`Active`},{name:`Bob Park`,role:`Backend Developer`,department:`Engineering`,status:`Away`},{name:`Charlie Kim`,role:`DevOps Engineer`,department:`Operations`,status:`Active`},{name:`Diana Lee`,role:`UI Designer`,department:`Design`,status:`Offline`},{name:`Eve Wang`,role:`Product Manager`,department:`Product`,status:`Active`}],rowKey:`name`,name:(e,t=d)=>{var r=Se(),i=l(r,!0);g(r),c(()=>n(i,t().name)),s(e,r)},status:(e,t=d)=>{var r=Ce(),i=l(r),a=l(i,!0);g(i),g(r),c(()=>{ee(i,1,f([`badge`,{Active:`is-success`,Away:`is-warning`,Offline:`is-neutral`}[t().status]]),`svelte-8pf2k`),n(a,t().status)}),s(e,r)},actions:(e,t=d)=>{var n=we();S(l(n),{size:`sm`,children:(e,t)=>{h(),s(e,o(`Edit`))},$$slots:{default:!0}}),g(n),s(e,n)},$$slots:{name:!0,status:!0,actions:!0}}),g(Ne);var Pe=a(Ne,2),Fe=a(l(Pe),2),Ie=l(Fe);S(Ie,{onclick:()=>b(X).show(),children:(e,t)=>{h(),s(e,o(`Open Dialog`))},$$slots:{default:!0}});var Le=a(Ie,2);S(l(Le),{dropdown:[{label:`Edit`},{label:`Duplicate`},{label:`Archive`},{separator:!0},{label:`Delete`,variant:`destructive`}],children:(e,t)=>{h(),s(e,o(`Actions`))},$$slots:{default:!0}}),g(Le),g(Fe),g(Pe);var Re=a(Pe,2);ae(a(l(Re),2),{children:(e,t)=>{var n=De(),i=r(n);ie(i,{header:`Active`,children:(e,t)=>{var n=Te(),i=r(n);T(i,{accessory:`chevron`,description:e=>{h(),s(e,o(`Frontend team · Due Mar 15`))},children:(e,t)=>{h(),s(e,o(`Dashboard Redesign`))},$$slots:{description:!0,default:!0}});var c=a(i,2);T(c,{accessory:`chevron`,description:e=>{h(),s(e,o(`Backend team · Due Apr 1`))},children:(e,t)=>{h(),s(e,o(`API Migration`))},$$slots:{description:!0,default:!0}}),T(a(c,2),{accessory:`chevron`,description:e=>{h(),s(e,o(`Mobile team · Due Apr 20`))},children:(e,t)=>{h(),s(e,o(`Mobile App v2`))},$$slots:{description:!0,default:!0}}),s(e,n)},$$slots:{default:!0}}),ie(a(i,2),{header:`Completed`,children:(e,t)=>{var n=Ee(),i=r(n);T(i,{accessory:`chevron`,description:e=>{h(),s(e,o(`Design team · Feb 28`))},children:(e,t)=>{h(),s(e,o(`Brand Guidelines`))},$$slots:{description:!0,default:!0}}),T(a(i,2),{accessory:`chevron`,description:e=>{h(),s(e,o(`DevOps team · Mar 1`))},children:(e,t)=>{h(),s(e,o(`Security Audit`))},$$slots:{description:!0,default:!0}}),s(e,n)},$$slots:{default:!0}}),s(e,n)},$$slots:{default:!0}}),g(Re),h(2),g(p),m(de(a(p,2),{variant:`alert`,title:`Confirm Action`,draggable:!0,footer:e=>{var t=Oe(),n=r(t);S(n,{onclick:()=>b(X).hide(),children:(e,t)=>{h(),s(e,o(`Cancel`))},$$slots:{default:!0}}),S(a(n,2),{variant:`primary`,onclick:()=>b(X).hide(),children:(e,t)=>{h(),s(e,o(`Confirm`))},$$slots:{default:!0}}),s(e,t)},children:(e,t)=>{s(e,ke())},$$slots:{footer:!0,default:!0}}),e=>i(X,e,!0),()=>b(X)),s(e,u)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
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
  <ToggleGroup options={['Day', 'Week', 'Month']} value="Day"/>\r
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
    { title: 'Overview', value: 'overview', snippet: 'overview' },\r
    { title: 'Activity', value: 'activity', snippet: 'activity' },\r
    { title: 'Settings', value: 'settings', snippet: 'settings' },\r
    { title: 'Inline controls', value: 'inline', snippet: 'inline' },\r
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
      <Switch label="Show archived"/>\r
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
          Frontend team &middot; Due Mar 15\r
        {/snippet}\r
      </ListItem>\r
      <ListItem accessory="chevron">\r
        API Migration\r
        {#snippet description()}\r
          Backend team &middot; Due Apr 1\r
        {/snippet}\r
      </ListItem>\r
      <ListItem accessory="chevron">\r
        Mobile App v2\r
        {#snippet description()}\r
          Mobile team &middot; Due Apr 20\r
        {/snippet}\r
      </ListItem>\r
    </ListSection>\r
\r
    <ListSection header="Completed">\r
      <ListItem accessory="chevron">\r
        Brand Guidelines\r
        {#snippet description()}\r
          Design team &middot; Feb 28\r
        {/snippet}\r
      </ListItem>\r
      <ListItem accessory="chevron">\r
        Security Audit\r
        {#snippet description()}\r
          DevOps team &middot; Mar 1\r
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
</undefined>`}}}),v()}var K,q,J,Y,X,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,Z,Q,$;e((()=>{y(),te(),E(),D(),re(),x(),O(),M(),N(),P(),I(),R(),z(),V(),H(),U(),A(),_(),W(),C(),K={title:`Dashboard`,tags:[],parameters:{layout:`fullscreen`}},{Story:q}=ne(K),J=u(0),Y=u(5),X=u(null),fe=t(`Experience <span class="label-value svelte-8pf2k"><span id="slider-val"> </span> years</span>`,1),pe=t(`<div class="row"><!> <!></div>`),me=t(`<div class="row"><!> <!> <!></div>`),he=t(`<p>The project is currently on track. Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule. Team capacity remains stable at 85%.</p>`),ge=t(`<p><strong>Today</strong> &mdash; Alice pushed 3 commits to <code>feature/dashboard</code><br/> <strong>Yesterday</strong> &mdash; Bob merged PR #142 into main<br/> <strong>Mar 8</strong> &mdash; Eve updated the project roadmap</p>`),_e=t(`<!> <!>`,1),ve=t(`Experience <span class="label-value svelte-8pf2k"><span id="slider-val"> </span> years</span>`,1),ye=t(`<div class="row"><!> <!></div>`),be=t(`<div class="row"><!> <!> <!></div>`),xe=t(`<div class="row"><!> <!></div> <!> <!> <!> <!> <!> <!> <!>`,1),Se=t(`<td class="cell-name svelte-8pf2k"> </td>`),Ce=t(`<td><span> </span></td>`),we=t(`<td><!></td>`),Te=t(`<!> <!> <!>`,1),Ee=t(`<!> <!>`,1),De=t(`<!> <!>`,1),Oe=t(`<!> <!>`,1),ke=t(`<p>Are you sure you want to proceed with this action? This operation cannot be undone and will permanently affect the selected items.</p>`),Ae=t(`<header class="header svelte-8pf2k"><div><h1>UI Components</h1> <p class="svelte-8pf2k">Dashboard Showcase</p></div></header> <main class="dashboard svelte-8pf2k"><section class="card"><div class="card__title">Buttons</div> <div class="row"><!> <!> <!> <!></div> <div class="row"><!> <!></div> <div class="row"><!> <!> <!> <!></div> <div class="row"><!> <!> <!> <!> <!></div> <hr class="separator"/> <div class="card__title">Toggle Group</div> <!></section> <section class="card"><div class="card__title">Form Controls</div> <form><div class="row"><!> <!></div> <!> <!> <!> <!> <!> <!> <!></form></section> <section class="card tabs"><div class="card__title">Tabs</div> <!></section> <section class="card"><div class="card__title">Progress &amp; Loading</div> <!> <!> <!> <!></section> <section class="card span-2 svelte-8pf2k"><div class="card__title">Team Members</div> <!></section> <section class="card span-2 svelte-8pf2k"><div class="card__title">Overlays &amp; Menus</div> <div class="row"><!> <div class="dropdown"><!></div></div></section> <section class="card"><div class="card__title">Projects</div> <!></section> <section class="card"><div class="card__title">Dashboard Cards</div> <div class="row"><div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Revenue</span> <span class="metric-value svelte-8pf2k">$24,500</span> <span class="metric-trend is-up svelte-8pf2k">&uarr; 12.3%</span></div> <div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Users</span> <span class="metric-value svelte-8pf2k">1,234</span> <span class="metric-trend is-up svelte-8pf2k">&uarr; 8.1%</span></div> <div class="metric-card svelte-8pf2k"><span class="metric-label svelte-8pf2k">Conversion</span> <span class="metric-value svelte-8pf2k">3.2%</span> <span class="metric-trend is-down svelte-8pf2k">&darr; 0.5%</span></div></div></section></main> <!>`,1),G.__docgen={data:[],name:`Dashboard.stories.svelte`},Z=w(G,K),Q=[`Dashboard`],$={...Z.Dashboard,tags:[`svelte-csf-v5`]}}))();export{$ as Dashboard,Q as __namedExportsOrder,K as default};