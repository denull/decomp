<script>
  let {
    /** @type {null | 'primary' | 'destructive' | 'ghost'} */
    variant = null,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {boolean} */
    disabled = false,
    /** @type {boolean} */
    grouped = false,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
  } = $props();
</script>

<button
  class={[
    'button', 
    variant && `is-${variant}`,
    size != 'md' && `is-${size}`,
    grouped && `is-grouped`,
  ]}
  {disabled}
  ontouchstart={() => {}}
>
  <div class="button__back"></div>
  {@render children?.()}
</button>

<style>
  :global {
    .button {
      position: relative;
      isolation: isolate;
      cursor: pointer;
      border: none;
    }
    .button:disabled {
      cursor: default;
      pointer-events: none;
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
