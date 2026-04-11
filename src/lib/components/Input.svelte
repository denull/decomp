<script>
  let {
    /** @type {null | 'email'} */
    variant = null,
    /** @type {boolean} */
    multiline = false,
    /** @type {boolean} */
    disabled = false,
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {String} */
    value = $bindable(''),
    /** @type {String} */
    placeholder = '',
    /** @type {String | null} */
    label = null,
  } = $props();

  const uid = `input-${Math.random().toString(36).slice(2, 8)}`;
</script>

{#snippet input()}
  <div
    class={[
      'input',
      multiline && `is-multiline`,
      disabled && `is-disabled`,
    ]}
  >
    {#if multiline}
      <textarea
        id={label && uid}
        bind:value={value}
        {disabled}
        {placeholder}></textarea>
    {:else}
      <input
        id={label && uid}
        type={variant == 'email' ? 'email' : 'text'}
        bind:value={value}
        {disabled}
        {placeholder}/>
    {/if}
    {@render children?.()}
  </div>
{/snippet}

{#if label !== null}
<div class="field">
  <label for={uid} class="field__label">{label}</label>

  {@render input()}
</div>
{:else}
{@render input()}
{/if}

<style>
  .input {
    display: flex;

    input, textarea {
      flex: 1;
    }
  }
</style>
