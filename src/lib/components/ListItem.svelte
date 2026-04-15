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
    /** @type {String | null} */
    title = null,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    /** @type {null | 'chevron' | 'switch' } */
    accessory = null,
    /** */
    onclick = null,
  } = $props();
</script>

<div
  class={[
    'list-item', 
    variant && `is-${variant}`,
    selected && `is-selected`,
  ]}
>
  <button {onclick}>
    {#if leading}
      <span class="list-item__leading">{@render leading()}</span>
    {/if}
    <span class="list-item__content">
      {#if title || children}
        <span class="list-item__title">{title}{@render children?.()}</span>
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
  </button>
</div>

<style>
  .list-item {
    display: flex;

    > button {
      display: flex;
      align-items: center;
      flex: 1;
      border: none;
      text-align: inherit;
      cursor: inherit;
      color: inherit;
    }

    &.is-selected {
      color: var(--accent-text);
      background: var(--accent);
    }
  }
  .list-item__content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
