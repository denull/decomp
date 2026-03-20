<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tabs from '$lib/components/Tabs.svelte';

  const { Story } = defineMeta({
    title: 'Navigation/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
      position: {
        control: { type: 'select' },
        options: ['top', 'bottom'],
      },
    },
  });
</script>

<Story name="Top Tabs">
  {#snippet children(args)}
    <div style="width: 480px;">
      <Tabs
        position="top"
        value="overview"
        items={[
          { label: 'Overview', value: 'overview' },
          { label: 'Activity', value: 'activity' },
          { label: 'Settings', value: 'settings' },
          { label: 'Members', value: 'members', badge: 3 },
        ]}
      >
        <div style="padding: var(--space-lg);">
          <p style="color: var(--text-secondary); margin: 0;">Tab content goes here.</p>
        </div>
      </Tabs>
    </div>
  {/snippet}
</Story>

<Story name="Bottom Tab Bar">
  {#snippet children(args)}
    <div style="width: 375px; height: 300px; border: 1px solid var(--border-default); border-radius: var(--radius-lg); overflow: hidden;">
      <Tabs
        position="bottom"
        value="home"
        items={[
          { label: 'Home', value: 'home' },
          { label: 'Search', value: 'search' },
          { label: 'Library', value: 'library' },
          { label: 'Profile', value: 'profile' },
        ]}
      >
        <div style="padding: var(--space-xl); text-align: center;">
          <p style="color: var(--text-secondary); margin: 0;">Mobile tab bar layout</p>
        </div>
      </Tabs>
    </div>
  {/snippet}
</Story>

<Story name="With Disabled Tab">
  {#snippet children(args)}
    <div style="width: 480px;">
      <Tabs
        position="top"
        value="general"
        items={[
          { label: 'General', value: 'general' },
          { label: 'Advanced', value: 'advanced' },
          { label: 'Billing', value: 'billing', disabled: true },
        ]}
      >
        <div style="padding: var(--space-lg);">
          <p style="color: var(--text-secondary); margin: 0;">Billing tab is disabled.</p>
        </div>
      </Tabs>
    </div>
  {/snippet}
</Story>
