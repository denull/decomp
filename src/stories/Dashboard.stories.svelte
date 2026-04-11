<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import ListSection from '$lib/components/ListSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/Input.svelte';
  import Tabs from '$lib/components/Tabs.svelte';
  import Table from '$lib/components/Table.svelte';
  import Checkbox from '$lib/components/Checkbox.svelte';
  import Progress from '$lib/components/Progress.svelte';
  import ToggleGroup from '$lib/components/ToggleGroup.svelte';
  import Switch from '$lib/components/Switch.svelte';
  import Slider from '$lib/components/Slider.svelte';
  import Spinner from '$lib/components/Spinner.svelte';
  import Dialog from '$lib/components/Dialog.svelte';

  const { Story } = defineMeta({
    title: 'Dashboard',
    tags: [],
  });

  let radioGroup = $state(0);
  let expirience = $state(5);
  let dialog = $state(null);
</script>


<Story name="Dashboard">
  <!-- ======== Header ======== -->
  <header class="header">
    <div>
      <h1>UI Components</h1>
      <p>Dashboard Showcase</p>
    </div>
  </header>

  <!-- ======== Dashboard ======== -->
  <main class="dashboard">

    <!-- ---- Buttons ---- -->
    <section class="card">
      <div class="card__title">Buttons</div>
      <div class="row">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div class="row">
        <Button disabled>Disabled</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
      <div class="row">
        <Button size="sm">Default</Button>
        <Button variant="primary" size="sm">Primary</Button>
        <Button variant="destructive" size="sm">Destructive</Button>
        <Button variant="ghost" size="sm">Ghost</Button>
      </div>
      <hr class="separator">
      <div class="card__title">Toggle Group</div>
      <ToggleGroup items={['Day', 'Week', 'Month']}/>
    </section>

    <!-- ---- Form Controls ---- -->
    <section class="card">
      <div class="card__title">Form Controls</div>
      <form>
        <div class="row">
          <Input label="Full Name" placeholder="Jane Doe"/>
          <Input variant="email" label="Email" placeholder="jane@example.com"/>
        </div>
        <Input variant="multiline" label="Message" placeholder="Write something..."/>
        <Input variant="select" label="Department" placeholder="Select department…" options={['Engineering', 'Design', 'Marketing', 'Product', 'Operations']}/>
        <Slider min={0} max={15} bind:value={expirience}>
          {#snippet label()}
            Experience <span class="label-value"><span id="slider-val">{expirience}</span> years</span>
          {/snippet}
        </Slider>
        <div class="row">
          <Checkbox label="Email notifications" checked disabled/>
          <Checkbox label="SMS notifications"/>
        </div>
        <div class="field">
          <label class="field__label">Priority</label>
          <div class="row">
            <Checkbox variant="radio" label="Low" bind:group={radioGroup} value={0} disabled/>
            <Checkbox variant="radio" label="Medium" bind:group={radioGroup} value={1}/>
            <Checkbox variant="radio" label="High" bind:group={radioGroup} value={2}/>
          </div>
        </div>
        <Switch label="Active status"/>
        <Button variant="primary">Submit</Button>
      </form>
    </section>

    <!-- ---- Tabs ---- -->
    <section class="card tabs">
      <div class="card__title">Tabs</div>
      <Tabs items={[
        { label: 'Overview', snippet: 'overview' },
        { label: 'Activity', snippet: 'activity' },
        { label: 'Settings', snippet: 'settings' },
      ]}>
        {#snippet overview()}
          <p>The project is currently on track. Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule. Team capacity remains stable at 85%.</p>
        {/snippet}
        {#snippet activity()}
          <p><strong>Today</strong> &mdash; Alice pushed 3 commits to <code>feature/dashboard</code><br>
          <strong>Yesterday</strong> &mdash; Bob merged PR #142 into main<br>
          <strong>Mar 8</strong> &mdash; Eve updated the project roadmap</p>
        {/snippet}
        {#snippet settings()}
          <Switch label="Compact view"/>
          <Switch label="Show archived"/>
        {/snippet}
      </Tabs>
    </section>

    <!-- ---- Progress & Loading ---- -->
    <section class="card">
      <div class="card__title">Progress &amp; Loading</div>
      <div class="row">
        <span class="progress-label">Project Alpha</span>
        <Progress value={67}/>
        <span class="progress-pct">67%</span>
      </div>
      <div class="row">
        <span class="progress-label">Storage Used</span>
        <Progress variant="segmented" value={35}/>
        <span class="progress-pct">35%</span>
      </div>
      <div class="row">
        <span class="progress-label">Upload</span>
        <Progress value={89}/>
        <span class="progress-pct">89%</span>
      </div>
      <Spinner size="lg" label="Loading data&hellip;"/>
    </section>

    <!-- ---- Table ---- -->
    <section class="card span-2">
      <div class="card__title">Team Members</div>
      <Table columns={[
        { title: 'Name', snippet: 'name' },
        { title: 'Role', value: 'role' },
        { title: 'Department', value: 'department' },
        { title: 'Status', snippet: 'status' },
        { title: '', snippet: 'actions' },
      ]} rows={[{
        name: 'Alice Chen',
        role: 'Frontend Developer',
        department: 'Engineering',
        status: 'Active',
      }, {
        name: 'Bob Park',
        role: 'Backend Developer',
        department: 'Engineering',
        status: 'Away',
      }, {
        name: 'Charlie Kim',
        role: 'DevOps Engineer',
        department: 'Operations',
        status: 'Active',
      }, {
        name: 'Diana Lee',
        role: 'UI Designer',
        department: 'Design',
        status: 'Offline',
      }, {
        name: 'Eve Wang',
        role: 'Product Manager',
        department: 'Product',
        status: 'Active',
      }]}>
        {#snippet name(row)}
          <td class="cell-name">{row.name}</td>
        {/snippet}
        {#snippet status(row)}
          <td><span class={[
            'badge',
            { Active: 'is-success', Away: 'is-warning', Offline: 'is-neutral' }[row.status],
          ]}>{row.status}</span></td>
        {/snippet}
        {#snippet actions(row)}
          <td><Button size="sm">Edit</Button></td>
        {/snippet}
      </Table>
    </section>

    <!-- ---- List View ---- -->
    <section class="card">
      <div class="card__title">Projects</div>

      <List>
        <ListSection header="Active">
          <ListItem accessory="chevron">
            Dashboard Redesign
            {#snippet description()}
              Frontend team &middot; Due Mar 15
            {/snippet}
          </ListItem>
          <ListItem accessory="chevron">
            API Migration
            {#snippet description()}
              Backend team &middot; Due Apr 1
            {/snippet}
          </ListItem>
          <ListItem accessory="chevron">
            Mobile App v2
            {#snippet description()}
              Mobile team &middot; Due Apr 20
            {/snippet}
          </ListItem>
        </ListSection>

        <ListSection header="Completed">
          <ListItem accessory="chevron">
            Brand Guidelines
            {#snippet description()}
              Design team &middot; Feb 28
            {/snippet}
          </ListItem>
          <ListItem accessory="chevron">
            Security Audit
            {#snippet description()}
              DevOps team &middot; Mar 1
            {/snippet}
          </ListItem>
        </ListSection>
      </List>
    </section>

    <!-- ---- Dashboard Cards ---- -->
    <section class="card">
      <div class="card__title">Dashboard Cards</div>
      <div class="row">
        <div class="metric-card">
          <span class="metric-label">Revenue</span>
          <span class="metric-value">$24,500</span>
          <span class="metric-trend is-up">&uarr; 12.3%</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Users</span>
          <span class="metric-value">1,234</span>
          <span class="metric-trend is-up">&uarr; 8.1%</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Conversion</span>
          <span class="metric-value">3.2%</span>
          <span class="metric-trend is-down">&darr; 0.5%</span>
        </div>
      </div>
    </section>

    <!-- ---- Overlays & Menus ---- -->
    <section class="card span-2">
      <div class="card__title">Overlays &amp; Menus</div>
      <div class="row">
        <Button onclick={() => dialog.show()}>Open Dialog</Button>

        <div class="popover-anchor">
          <Button>
            Show Popover
            {#snippet popover()}
              <strong>Popover Title</strong>
              This is a contextual popover with additional information. It appears relative to the trigger element and closes on outside click.
            {/snippet}
          </Button>
        </div>

        <div class="dropdown">
          <Button dropdown={[
            { label: 'Edit' },
            { label: 'Duplicate' },
            { label: 'Archive' },
            { separator: true },
            { label: 'Delete', variant: 'destructive' },
          ]}>Actions</Button>
        </div>
      </div>
    </section>
  </main>

  <!-- ======== Dialog ======== -->
  <Dialog bind:this={dialog} title="Confirm Action" draggable>
    Are you sure you want to proceed with this action? This operation cannot be undone and will permanently affect the selected items.

    {#snippet footer()}
      <button class="btn" type="button" data-close>Cancel</button>
      <button class="btn btn-primary" type="button" data-close>Confirm</button>
    {/snippet}
  </Dialog>

</Story>
<style>
  .header {
    max-width: 1120px;
    margin: 0 auto;
    padding: 32px 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header h1 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
  .header p { font-size: 13px; color: var(--text-muted); margin-top: 2px; }
  
  .dashboard {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }

  .cell-name {
    font-weight: 500;
  }

  .span-2 {
    grid-column: span 2;
  }

  .badge {
    display: inline-block;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 10px;
    letter-spacing: 0.3px;
  }
  .badge.is-success { background: var(--badge-success-bg); color: var(--badge-success-text); }
  .badge.is-warning { background: var(--badge-warning-bg); color: var(--badge-warning-text); }
  .badge.is-neutral { background: var(--badge-neutral-bg); color: var(--badge-neutral-text); }

  .progress-label {
    font-weight: 500;
    min-width: 110px;
    color: var(--text-secondary);
  }

  .label-value {
    opacity: 0.6;
    font-weight: 400;
  }
</style>