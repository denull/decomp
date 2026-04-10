<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import ListSection from '$lib/components/ListSection.svelte';
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';
    import Tabs from '$lib/components/Tabs.svelte';
    import Table from '$lib/components/Table.svelte';

  const { Story } = defineMeta({
    title: 'Dashboard',
    tags: ['autodocs'],
  });
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
      <hr class="sep">
      <div class="card__title" style="margin-bottom:12px">Segmented Control</div>
      <div class="segmented">
        <button class="seg-item is-active" type="button">Day</button>
        <button class="seg-item" type="button">Week</button>
        <button class="seg-item" type="button">Month</button>
      </div>
    </section>

    <!-- ---- Form Controls ---- -->
    <section class="card">
      <div class="card__title">Form Controls</div>
      <form>
        <div class="row">
          <div class="field">
            <label class="label" for="f-name">Full Name</label>
            <Input placeholder="Jane Doe"/>
          </div>
          <div class="field">
            <label class="label" for="f-email">Email</label>
            <Input variant="email" placeholder="jane@example.com"/>
          </div>
        </div>
        <div class="field">
          <label class="label" for="f-message">Message</label>
          <Input multiline placeholder="Write something..."/>
        </div>
        <div class="field">
          <label class="label">Department</label>
          <div class="select">
            <button class="select-trigger" type="button">
              <span class="select-value is-placeholder">Select department&hellip;</span>
              <svg class="select-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l4 4 4-4"/></svg>
            </button>
            <div class="select-menu">
              <div class="select-option">Engineering</div>
              <div class="select-option">Design</div>
              <div class="select-option">Marketing</div>
              <div class="select-option">Product</div>
              <div class="select-option">Operations</div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Experience <span class="label-value"><span id="slider-val">5</span> years</span></label>
          <input type="range" min="0" max="15" value="5" data-output="slider-val">
        </div>
        <div class="field">
          <div class="row">
            <label class="label-inline checkbox">
              <input type="checkbox" checked>
              <span class="checkbox-box"></span>
              Email notifications
            </label>
            <label class="label-inline checkbox">
              <input type="checkbox">
              <span class="checkbox-box"></span>
              SMS notifications
            </label>
          </div>
        </div>
        <div class="field">
          <label class="label">Priority</label>
          <div class="radio-group">
            <label class="label-inline radio">
              <input type="radio" name="priority" checked>
              <span class="radio-dot"></span>
              Low
            </label>
            <label class="label-inline radio">
              <input type="radio" name="priority">
              <span class="radio-dot"></span>
              Medium
            </label>
            <label class="label-inline radio">
              <input type="radio" name="priority">
              <span class="radio-dot"></span>
              High
            </label>
          </div>
        </div>
        <div class="field">
          <div class="row">
            <span class="label" style="margin:0">Active status</span>
            <label class="switch">
              <input type="checkbox" checked>
              <span class="switch-track"><span class="switch-thumb"></span></span>
            </label>
          </div>
        </div>
        <div class="field" style="margin-top:20px">
          <Button variant="primary">Submit</Button>
        </div>
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
          <div class="row" style="margin-bottom:12px">
            <span style="font-size:14px">Compact view</span>
            <label class="switch"><input type="checkbox"><span class="switch-track"><span class="switch-thumb"></span></span></label>
          </div>
          <div class="row">
            <span style="font-size:14px">Show archived</span>
            <label class="switch"><input type="checkbox"><span class="switch-track"><span class="switch-thumb"></span></span></label>
          </div>
        {/snippet}
      </Tabs>
    </section>

    <!-- ---- Progress & Loading ---- -->
    <section class="card">
      <div class="card__title">Progress &amp; Loading</div>
      <div class="progress-row">
        <span class="progress-label">Project Alpha</span>
        <div class="progress"><div class="progress-fill" style="width:67%"></div></div>
        <span class="progress-pct">67%</span>
      </div>
      <div class="progress-row">
        <span class="progress-label">Storage Used</span>
        <div class="progress"><div class="progress-fill" style="width:35%"></div></div>
        <span class="progress-pct">35%</span>
      </div>
      <div class="progress-row">
        <span class="progress-label">Upload</span>
        <div class="progress"><div class="progress-fill" style="width:89%"></div></div>
        <span class="progress-pct">89%</span>
      </div>
      <div class="loading-row">
        <div class="spinner spinner-lg"></div>
        <span>Loading data&hellip;</span>
      </div>
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
            `badge-${{ Active: 'success', Away: 'warning', Offline: 'neutral' }[row.status]}`,
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
      <div class="metric-grid">
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
        <button class="btn" type="button" id="open-dialog">Open Dialog</button>

        <div class="popover-anchor">
          <button class="btn popover-trigger" type="button" id="popover-trigger">Show Popover</button>
          <div class="popover" id="demo-popover">
            <strong>Popover Title</strong>
            This is a contextual popover with additional information. It appears relative to the trigger element and closes on outside click.
          </div>
        </div>

        <div class="dropdown">
          <button class="btn dropdown-trigger" type="button">
            Actions
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l4 4 4-4"/></svg>
          </button>
          <div class="dropdown-menu">
            <div class="dropdown-item">Edit</div>
            <div class="dropdown-item">Duplicate</div>
            <div class="dropdown-item">Archive</div>
            <div class="dropdown-sep"></div>
            <div class="dropdown-item is-danger">Delete</div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- ======== Dialog ======== -->
  <dialog id="demo-dialog">
    <div class="dialog-header">
      <h3>Confirm Action</h3>
      <button class="dialog-close" data-close type="button">&times;</button>
    </div>
    <div class="dialog-body">
      Are you sure you want to proceed with this action? This operation cannot be undone and will permanently affect the selected items.
    </div>
    <div class="dialog-footer">
      <button class="btn" type="button" data-close>Cancel</button>
      <button class="btn btn-primary" type="button" data-close>Confirm</button>
    </div>
  </dialog>

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
</style>