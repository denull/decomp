<script>
  let {
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {String | import('svelte').Snippet | null}*/
    label = null,
    /** @type {boolean} */
    inline = false,
    /** @type {String | null} */
    inputId = null,
  } = $props();
</script>

{#if label === null}
  {@render children?.()}
{:else}
  <div class={['field', inline && `is-inline`]}>
    <label for={inputId} class="field__label">
      {#if typeof label === 'function'}{@render label()}{:else}{label}{/if}
    </label>
    {@render children?.()}
  </div>
{/if}