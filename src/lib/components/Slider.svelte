<script>
  let {
    /** @type {null | 'vertical'} */
    variant = null,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {number} */
    value = $bindable(0),
    /** @type {number} */
    min = 0,
    /** @type {number} */
    max = 100,
    /** @type {String | import('svelte').Snippet | null} */
    label = null,
  } = $props();
</script>

{#snippet body()}
  <div
    class={[
      'slider', 
      variant && `is-${variant}`,
      size != 'md' && `is-${size}`,
    ]}
    style={`--_progress: ${100 * value / max}`}
  >
    <div class="slider__bar"></div>
    <input type="range" {min} {max} bind:value={value}/>
    {@render children?.()}
  </div>
{/snippet}

{#if label === null}
  {@render body()}
{:else}
  <div class="field">
    <label class="field__label">
      {#if typeof label === 'function'}{@render label()}{:else}{label}{/if}
    </label>
    {@render body()}
  </div>
{/if}

<style>
  :global {
    .slider {
      display: flex;
      .slider__bar {
        height: 100%;
      }
      > input {
        flex: 1;
      }
    }
  }
</style>
