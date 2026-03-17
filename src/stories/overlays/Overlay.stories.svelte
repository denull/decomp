<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Overlay from '$lib/components/Overlay.svelte';
  import Button from '$lib/components/Button.svelte';
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';

  const { Story } = defineMeta({
    title: 'Overlays/Overlay',
    component: Overlay,
    tags: ['autodocs'],
    argTypes: {
      mode: {
        control: { type: 'select' },
        options: ['popover', 'modal', 'tooltip'],
      },
      placement: {
        control: { type: 'select' },
        options: ['top', 'bottom', 'left', 'right', 'auto'],
      },
    },
  });
</script>

<Story name="Popover">
  {#snippet children(args)}
    <PopoverDemo />
  {/snippet}
</Story>

<Story name="Modal">
  {#snippet children(args)}
    <ModalDemo />
  {/snippet}
</Story>

<Story name="Tooltip">
  {#snippet children(args)}
    <TooltipDemo />
  {/snippet}
</Story>

<!-- Inline helper components for stories -->

<script>
  import { onMount } from 'svelte';

  // Popover demo state
  let popoverOpen = $state(false);
  let popoverAnchor = $state(null);

  // Modal demo state
  let modalOpen = $state(false);

  // Tooltip demo state
  let tooltipOpen = $state(false);
  let tooltipAnchor = $state(null);
</script>

{#snippet PopoverDemo()}
  <div>
    <Button bind:this={popoverAnchor} onclick={() => popoverOpen = !popoverOpen}>
      Open Popover
    </Button>
    <Overlay mode="popover" bind:open={popoverOpen} anchor={popoverAnchor} placement="bottom">
      <List>
        <ListItem onclick={() => popoverOpen = false}>Edit</ListItem>
        <ListItem onclick={() => popoverOpen = false}>Duplicate</ListItem>
        <ListItem onclick={() => popoverOpen = false}>Archive</ListItem>
        <ListItem onclick={() => popoverOpen = false}>Delete</ListItem>
      </List>
    </Overlay>
  </div>
{/snippet}

{#snippet ModalDemo()}
  <div>
    <Button onclick={() => modalOpen = true}>Open Modal</Button>
    <Overlay mode="modal" bind:open={modalOpen}>
      <div style="padding: var(--space-xl);">
        <h2 style="margin: 0 0 8px; font-size: var(--font-lg); font-weight: var(--weight-semibold);">Confirm Action</h2>
        <p style="margin: 0 0 20px; color: var(--text-secondary);">Are you sure you want to proceed? This action cannot be undone.</p>
        <div style="display: flex; justify-content: flex-end; gap: 8px;">
          <Button variant="ghost" onclick={() => modalOpen = false}>Cancel</Button>
          <Button variant="primary" onclick={() => modalOpen = false}>Confirm</Button>
        </div>
      </div>
    </Overlay>
  </div>
{/snippet}

{#snippet TooltipDemo()}
  <div style="padding: 60px;">
    <Button
      bind:this={tooltipAnchor}
      onmouseenter={() => tooltipOpen = true}
      onmouseleave={() => tooltipOpen = false}
      onfocus={() => tooltipOpen = true}
      onblur={() => tooltipOpen = false}
    >
      Hover me
    </Button>
    <Overlay mode="tooltip" open={tooltipOpen} anchor={tooltipAnchor} placement="top">
      This is a helpful tooltip
    </Overlay>
  </div>
{/snippet}
