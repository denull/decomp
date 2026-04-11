<script>
  let {
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {Array} */
    items = [],
    /** @type {any} */
    value = null,
  } = $props();

  const uid = $props.id();
</script>

<div
  class={[
    'toggle-group',
    size != 'md' && `is-${size}`,
  ]}
  style={`--_active-toggle: --_active-toggle-${uid}`}
>
  {#each items as item}
    <div
      class={['toggle-group__item', value === item && 'is-active']}
      style={
        value === item ? `anchor-name: --_active-toggle-${uid}` : ''
      }
      aria-selected={value === item}
      onclick={() => value = item}
    >{item}</div>
  {/each}
</div>

<style>
  :global {
    .toggle-group {
      display: flex;
    }
  }
</style>
