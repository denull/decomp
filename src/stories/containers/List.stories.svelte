<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import ListSection from '$lib/components/ListSection.svelte';

  const { Story } = defineMeta({
    title: 'Lists/List',
    component: List,
    tags: ['autodocs'],
  });
</script>

<Story name="Simple List">
  <ListSection>
    <ListItem>Inbox</ListItem>
    <ListItem>Sent</ListItem>
    <ListItem>Drafts</ListItem>
    <ListItem>Trash</ListItem>
  </ListSection>
</Story>

<Story name="With Descriptions">
  <ListSection>
    <ListItem>
      {#snippet leading()}<span style="font-size: 24px;">📱</span>{/snippet}
      iPhone 15 Pro
      {#snippet description()}256 GB · Space Black{/snippet}
      {#snippet trailing()}$999{/snippet}
    </ListItem>
    <ListItem>
      {#snippet leading()}<span style="font-size: 24px;">💻</span>{/snippet}
      MacBook Air
      {#snippet description()}M3 · 16 GB · Midnight{/snippet}
      {#snippet trailing()}$1,299{/snippet}
    </ListItem>
    <ListItem>
      {#snippet leading()}<span style="font-size: 24px;">⌚</span>{/snippet}
      Apple Watch Ultra
      {#snippet description()}49mm · Titanium{/snippet}
      {#snippet trailing()}$799{/snippet}
    </ListItem>
  </ListSection>
</Story>

<Story name="Grouped (Settings Style)">
  <ListSection header="General">
    <ListItem accessory="chevron">
      Language
      {#snippet trailing()}English{/snippet}
    </ListItem>
    <ListItem>
      Region
      {#snippet trailing()}United States{/snippet}
    </ListItem>
  </ListSection>

  <ListSection header="Notifications">
    <ListItem accessory="switch">
      Push Notifications
      {#snippet trailing()}On{/snippet}
    </ListItem>
    <ListItem accessory="switch">
      Email Alerts
      {#snippet trailing()}Off{/snippet}
    </ListItem>
    <ListItem accessory="chevron">
      Sound
      {#snippet trailing()}Default{/snippet}
    </ListItem>
  </ListSection>
</Story>

<Story name="Scrollable" args={{ scrollable: true, maxHeight: '200px' }}>
  <ListSection>
    {#each Array.from({ length: 20 }, (_, i) => i + 1) as item}
      <ListItem>Item {item}</ListItem>
    {/each}
  </ListSection>
</Story>

<Story name="With Selection">
  <ListSection>
    <ListItem selected>Selected item</ListItem>
    <ListItem>Normal item</ListItem>
    <ListItem disabled>Disabled item</ListItem>
    <ListItem>Another item</ListItem>
  </ListSection>
</Story>
