<script>
  let {
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {Array} */
    items = [],
    /** @type {any} */
    value = null,
  } = $props();
</script>

<div
  class={[
    'toggle-group',
    size != 'md' && `is-${size}`,
  ]}
>
  {#each items as item}
    <div class={['toggle-group__item', value === item && 'is-active']}>{item}</div>
  {/each}
</div>

<style>
  :global {
    .toggle-group {
      display: flex;
    }
  }
</style>
