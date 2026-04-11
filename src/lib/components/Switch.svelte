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
    onclick={() => checked = !checked}
  >
    <div class="switch__thumb"></div>
  </div>
{/snippet}

{#if label === null}
  {@render body()}
{:else}
  <div class="field is-row">
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
      overflow: hidden;
    }
  }
</style>
