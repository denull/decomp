<script>
  let {
    /** @type {null | 'primary' | 'destructive' | 'ghost'} */
    variant = null,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {boolean} */
    round = false,
    /** @type {boolean} */
    disabled = false,
    /** @type {boolean} */
    grouped = false,
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {Function | null} */
    onclick = null,
    /** @type {Array | null} */
    dropdown = null,
  } = $props();
</script>

<button
  class={[
    'button', 
    variant && `is-${variant}`,
    size != 'md' && `is-${size}`,
    round && `is-round`,
    grouped && `is-grouped`,
  ]}
  {disabled}
  ontouchstart={() => {}}
  {onclick}
>
  <div class="button__back"></div>
  {@render children?.()}
  {#if dropdown}
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l4 4 4-4"/></svg>
  {/if}
</button>

<style>
  :global {
    .button {
      position: relative;
      isolation: isolate;
      cursor: pointer;
      border: none;
      align-self: start;

      &:disabled {
        cursor: default;
        pointer-events: none;
      }
    }
    .button__back {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      pointer-events: none;
    }
  }
</style>
