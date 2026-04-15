<script>
  let {
    /** @type {boolean} */
    checked = $bindable(false),
    /** @type {String | null} */
    label = null,
  } = $props();
</script>

{#snippet body()}
  <div
    class={[
      'switch', 
      checked && `is-checked`,
    ]}
    role="switch"
    tabindex="0"
    onclick={() => checked = !checked}
    aria-checked={checked}
  >
    <div class="switch__thumb"></div>
  </div>
{/snippet}

{#if label === null}
  {@render body()}
{:else}
  <div class="field is-inline">
    <div class="field__label">
      {#if typeof label === 'function'}{@render label()}{:else}{label}{/if}
    </div>
    {@render body()}
  </div>
{/if}

<style>
  :global {
    .switch {
      display: flex;
    }
  }
</style>
