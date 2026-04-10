<script>
  let {
    /** @type {boolean} */
    multiline = false,
    /** @type {boolean} */
    disabled = false,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    /** @type {String} */
    value = $bindable(''),
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
    <textarea bind:value={value} {disabled}></textarea>
  {:else}
    <input type="text" bind:value={value} {disabled}/>
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
