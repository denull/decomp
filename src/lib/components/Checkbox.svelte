<script>
  let {
    /** @type {null | 'radio'} */
    variant = null,
    /** @type {boolean} */
    checked = $bindable(null),
    /** @type {any} */
    group = $bindable(null),
    /** @type {any} */
    value = null,
    /** @type {boolean} */
    disabled = false,
    /** @type {String} */
    label = '',
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
  } = $props();
</script>

<label
  class={[
    'checkbox', 
    variant && `is-${variant}`,
    checked && `is-checked`,
    disabled && `is-disabled`,
  ]}
>
  {#if variant == 'radio'}
  <input type="radio" bind:group={group} {value} {disabled}>
  {:else}
  <input type="checkbox" bind:group={group} {value} bind:checked={checked} {disabled}>
  {/if}
  <span class="checkbox__box"></span>
  <span class="checkbox__label">{label}</span>
  {@render children?.()}
</label>

<style>
  :global {
    .checkbox {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;

      > input {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: 0;
        border: none;
        margin: 0;
        opacity: 0;
        position: fixed;
      }
    }
  }
</style>
