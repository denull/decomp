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
    /** @type {null | 'chevron' | 'switch' } */
    accessory = null,
  } = $props();
</script>

<div
  class={[
    'list-item', 
    variant && `is-${variant}`,
    selected && `is-selected`,
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
  {#if accessory}
    <div class="list-item__accessory">
      {#if accessory == 'chevron'}
        <svg class="list-chevron" width="7" height="12" viewBox="0 0 7 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l5 5-5 5"></path></svg>
      {:else if accessory == 'toggle'}
        <!-- bind:value={value} bind:this={toggleRef} {disabled} {oninput}/-->
      {/if}
    </div>
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
    flex: 1;
  }
</style>
