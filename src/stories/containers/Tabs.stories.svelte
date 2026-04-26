<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tabs from '$lib/components/Tabs.svelte';

  const { Story } = defineMeta({
    title: 'Containers/Tabs',
    component: Tabs,
    tags: ['autodocs'],
  });

  let selected = $state('Overview');
</script>

<Story name="String Tabs">
  {#snippet template()}
    <Tabs tabs={['Overview', 'Activity', 'Settings']} bind:selected={selected}>
      <p style="padding-top: 12px;">Current tab: <strong>{selected}</strong></p>
    </Tabs>
  {/snippet}
</Story>

<Story name="Object Tabs with Snippets">
  {#snippet template()}
    <Tabs tabs={[
      { id: 'overview', title: 'Overview', view: 'overview' },
      { id: 'activity', title: 'Activity', view: 'activity' },
      { id: 'settings', title: 'Settings', view: 'settings' },
    ]} selected="overview">
      {#snippet overview()}
        <p>Sprint velocity has increased by 12% compared to last quarter, with 3 features shipped ahead of schedule.</p>
      {/snippet}
      {#snippet activity()}
        <p><strong>Today</strong> — Alice pushed 3 commits<br>
        <strong>Yesterday</strong> — Bob merged PR #142<br>
        <strong>Mar 8</strong> — Eve updated the project roadmap</p>
      {/snippet}
      {#snippet settings()}
        <p>Settings panel content goes here.</p>
      {/snippet}
    </Tabs>
  {/snippet}
</Story>

<Story name="Many Tabs">
  {#snippet template()}
    <Tabs tabs={['Home', 'Profile', 'Messages', 'Notifications', 'Privacy', 'Billing', 'Help'].map(name => ({ id: name, title: name }))} selected="Home" />
  {/snippet}
</Story>

<Story name="Two Tabs">
  {#snippet template()}
    <Tabs tabs={['Login', 'Sign Up'].map(name => ({ id: name, title: name }))} selected="Login" />
  {/snippet}
</Story>
