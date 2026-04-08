<script>
  let {
    /** @type {null | 'primary' | 'destructive'} */
    variant = null,
    /** @type {boolean} */
    selected = false,
    /** @type {boolean} */
    disabled = false,
    /** @type {import('svelte').Snippet | undefined} */
    leading = null,
    /** @type {import('svelte').Snippet | undefined} */
    trailing = null,
    /** @type {import('svelte').Snippet | undefined} */
    description = null,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
  } = $props();
</script>

<div
  class={[
    'list-item', 
    variant && `is-${variant}`,
  ]}
  role="listitem"
>
  {#if leading}
    <span class="list-item__leading">{@render leading()}</span>
  {/if}
  <span class="list-item__content">
    {#if children}
      <span class="list-item__title">{@render children()}</span>
    {/if}
    {#if description}
      <span class="list-item__description">{@render description()}</span>
    {/if}
  </span>
  {#if trailing}
    <span class="list-item__trailing">{@render trailing()}</span>
  {/if}
</div>

<style>
  .list-item {
    display: flex;
    align-items: center;
  }
  .list-item__content {
    display: flex;
    flex-direction: column;
  }
</style>
