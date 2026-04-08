<script>
  let {
    /** @type {boolean} */
    multiline = false,
    /** @type {boolean} */
    disabled = false,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
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
    <textarea {disabled}></textarea>
  {:else}
    <input type="text" {disabled}/>
  {/if}
  {@render children?.()}
</div>

<style>
  .input {
    display: flex;
  }
</style>
