<script>
    import ListItem from './ListItem.svelte';

  let {
    /** @type {null | 'primary' | 'destructive'} */
    variant = null,
    /** @type {String} */
    header = null,
    /** @type {String} */
    footer = null,
    /** @type {boolean} */
    disabled = false,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    /** @type {Array | null} */
    items = null,
  } = $props();

  const headerId = `label-${Math.floor(Math.random() * 2176782336).toString(36)}`;
</script>

<!-- Using role="listitem" and role="list" instead of (no role) and role="group" (which would be more semantically correct), because apparently ARIA 1.2 no longer allows "group"s directly inside "list"s. -->
<div
  class={[
    'list-section', 
    variant && `is-${variant}`,
  ]}
  role="listitem"
>
  {#if header}
  <div class="list-section__header" id={headerId}>{header}</div>
  {/if}
  <div
    class="list-section__body"
    role="list"
    aria-labelledby={header ? headerId : undefined}
  >
    {@render children?.()}
    {#each items as item}
      {#if typeof item == 'string'}
      <ListItem>{item}</ListItem>
      {:else if item.type != 'section'}
      <ListItem {...item}/>
      {:else}
      <ListSection header={item.header} footer={item.footer} items={item.children}/>
      {/if}
    {/each}
  </div>
  {#if footer}
  <div class="list-section__footer">{footer}</div>
  {/if}
</div>

<style>
  
</style>
