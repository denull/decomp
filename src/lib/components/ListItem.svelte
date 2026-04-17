<script>
    import Switch from './Switch.svelte';

  let {
    /** @type {null | 'primary' | 'destructive'} */
    variant = null,
    /** @type {boolean} */
    selected = false,
    /** @type {any} */
    value = $bindable(null),
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
    /** @type {Function | null} */
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
        {:else if accessory == 'switch'}
          <Switch bind:checked={value} {disabled}/>
        {/if}
      </div>
    {/if}
  </button>
</div>