<script>
  let {
    /** @type {null | 'primary' | 'destructive' | 'ghost'} */
    variant = null,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {number} */
    value = 0,
    /** @type {number} */
    min = 0,
    /** @type {number} */
    max = 100,
  } = $props();
</script>

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
  {@render children?.()}
</div>

<style>
  :global {
    .progress {
      display: flex;
      overflow: hidden;
    }
    .progress__bar {
      width: calc(var(--_progress) * 1%);
      height: 100%;
    }
  }
</style>
