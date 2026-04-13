<script>
  let {
    /** @type {null | 'primary' | 'destructive' | 'ghost'} */
    variant = null,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {String | null} */
    label = null,
    /** @type {boolean} */
    inline = false,
    /** @type {number} */
    value = 0,
    /** @type {number} */
    min = 0,
    /** @type {number} */
    max = 100,
  } = $props();
</script>

{#snippet body()}
  <div
    class={[
      'progress', 
      variant && `is-${variant}`,
      typeof value !== 'number' || isNaN(value) && `is-indeterminate`,
      size != 'md' && `is-${size}`,
    ]}
    style={`--_progress: ${100 * (value - min) / (max - min)}`}
  >
    <div class="progress__bar"></div>
    {#if children}
    <div class="progress__value">
      {@render children?.()}
    </div>
    {/if}
  </div>
{/snippet}

{#if label === null}
  {@render body()}
{:else}
  <div class={['field', inline && `is-inline`]}>
    <div class="field__label">
      {#if typeof label === 'function'}{@render label()}{:else}{label}{/if}
    </div>
    {@render body()}
  </div>
{/if}

<style>
  :global {
    .progress {
      display: flex;
      align-items: center;
      gap: var(--space);
      flex: 1;
    }
    .progress__bar {
      display: flex;
      overflow: hidden;
      flex: 1;

      &::before {
        content: '';
        width: calc(var(--_progress) * 1%);
        height: 100%;
      }
    }
  }
</style>
