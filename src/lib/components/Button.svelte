<script>
  import Icon from './Icon.svelte';

  let {
    /** @type {null | 'primary' | 'destructive' | 'ghost'} */
    variant = null,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {String} */
    icon = null,
    /** @type {boolean} */
    disabled = false,
    /** @type {boolean} */
    grouped = false,
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {Function | null} */
    onclick = null,
    /** @type {Array | null} */
    dropdown = null,
    /** @type {String | null} */
    class: className = null,
  } = $props();
</script>

<button
  class={[
    'button', 
    variant && `is-${variant}`,
    size != 'md' && `is-${size}`,
    icon && !children && `is-icon`,
    grouped && `is-grouped`,
    className,
  ]}
  {disabled}
  ontouchstart={() => {}}
  {onclick}
>
  <div class="button__back"></div>
  {#if icon}
    <Icon {icon}/>
  {/if}
  {@render children?.()}
  {#if dropdown}
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l4 4 4-4"/></svg>
  {/if}
</button>