<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Group from '$lib/components/Group.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import Check from '$lib/components/Check.svelte';

  const { Story } = defineMeta({
    title: 'Layout/Group',
    component: Group,
    tags: ['autodocs'],
  });
</script>

<Story name="Default">
  {#snippet children(args)}
    <div style="width: 360px;">
      <Group title="Account Settings">
        <ListItem>
          Profile
          {#snippet trailing()}›{/snippet}
        </ListItem>
        <ListItem>
          Security
          {#snippet trailing()}›{/snippet}
        </ListItem>
        <ListItem>
          Notifications
          {#snippet trailing()}›{/snippet}
        </ListItem>
      </Group>
    </div>
  {/snippet}
</Story>

<Story name="Inset (Rounded Card)">
  {#snippet children(args)}
    <div style="width: 360px; background: var(--surface-secondary); padding: var(--space-lg); border-radius: var(--radius-lg);">
      <Group title="Preferences" description="Customize your experience" inset>
        <ListItem>
          Dark Mode
          {#snippet trailing()}<Check type="toggle" checked />{/snippet}
        </ListItem>
        <ListItem>
          Compact View
          {#snippet trailing()}<Check type="toggle" />{/snippet}
        </ListItem>
        <ListItem>
          Sounds
          {#snippet trailing()}<Check type="toggle" checked />{/snippet}
        </ListItem>
      </Group>
    </div>
  {/snippet}
</Story>
