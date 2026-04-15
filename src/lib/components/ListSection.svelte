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
    collapsible = false,
    /** @type {boolean} */
    collapsed = false,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    /** @type {Array | null} */
    items = null,
  } = $props();

  const uid = $props.id();
</script>

<!-- Using role="listitem" and role="list" instead of (no role) and role="group" (which would be more semantically correct), because apparently ARIA 1.2 no longer allows "group"s directly inside "list"s. -->
<div
  class={[
    'list-section', 
    variant && `is-${variant}`,
    collapsible && `is-collapsible`,
    collapsed && `is-collapsed`,
  ]}
  role="listitem"
>
  {#if header}
  <div class="list-section__header" id={`section-header-${uid}`}>{header}</div>
  {/if}
  <div
    class="list-section__body"
    role="list"
    aria-labelledby={header ? `section-header-${uid}` : undefined}
  >
    {@render children?.()}
    {#each items as item}
      {#if typeof item == 'string'}
      <ListItem>{item}</ListItem>
      {:else}
      <ListItem {...item}/>
      {/if}
    {/each}
  </div>
  {#if footer}
  <div class="list-section__footer">{footer}</div>
  {/if}
</div>