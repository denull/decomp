<script>
  let {
    /** @type {null | 'email'} */
    variant = null,
    /** @type {boolean} */
    multiline = false,
    /** @type {boolean} */
    disabled = false,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    /** @type {String} */
    value = $bindable(''),
    /** @type {String} */
    placeholder = '',
  } = $props();
</script>

<div
  class={[
    'input',
    multiline && `is-multiline`,
    disabled && `is-disabled`,
  ]}
>
  {#if multiline}
    <textarea
      bind:value={value}
      {disabled}
      {placeholder}></textarea>
  {:else}
    <input
      type={variant == 'email' ? 'email' : 'text'}
      bind:value={value}
      {disabled}
      {placeholder}/>
  {/if}
  {@render children?.()}
</div>

<style>
  .input {
    display: flex;

    input, textarea {
      flex: 1;
    }
  }
</style>
