<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AppShell from '$lib/components/AppShell.svelte';
  import Toolbar from '$lib/components/Toolbar.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Button from '$lib/components/Button.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import Group from '$lib/components/Group.svelte';

  const { Story } = defineMeta({
    title: 'Layout/AppShell',
    component: AppShell,
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
  });
</script>

<Story name="Full Layout">
  {#snippet children(args)}
    <div style="height: 500px; border: 1px solid var(--border-default); border-radius: var(--radius-lg); overflow: hidden;">
      <AppShell>
        {#snippet toolbar()}
          <Toolbar title="My App">
            {#snippet leading()}
              <Button variant="ghost" size="sm">
                {#snippet leading()}<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>{/snippet}
              </Button>
            {/snippet}
            {#snippet trailing()}
              <Button variant="ghost" size="sm">
                {#snippet leading()}<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v3l2 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>{/snippet}
              </Button>
            {/snippet}
          </Toolbar>
        {/snippet}
        {#snippet sidebar()}
          <Sidebar>
            <Group title="Navigation">
              <ListItem selected>Dashboard</ListItem>
              <ListItem>Projects</ListItem>
              <ListItem>Settings</ListItem>
              <ListItem>Help</ListItem>
            </Group>
          </Sidebar>
        {/snippet}
        <div style="padding: var(--space-xl);">
          <h2 style="margin: 0 0 var(--space-md);">Dashboard</h2>
          <p style="color: var(--text-secondary);">Welcome back! Here's your overview.</p>
        </div>
      </AppShell>
    </div>
  {/snippet}
</Story>

<Story name="Without Sidebar">
  {#snippet children(args)}
    <div style="height: 400px; border: 1px solid var(--border-default); border-radius: var(--radius-lg); overflow: hidden;">
      <AppShell>
        {#snippet toolbar()}
          <Toolbar title="Simple Layout" />
        {/snippet}
        <div style="padding: var(--space-xl);">
          <p style="color: var(--text-secondary);">A layout with toolbar only, no sidebar.</p>
        </div>
      </AppShell>
    </div>
  {/snippet}
</Story>
