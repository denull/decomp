<script>
    import Field from './Field.svelte';

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

<Field {label} {inline}>
  <div
    class={[
      'progress', 
      variant && `is-${variant}`,
      typeof value !== 'number' || isNaN(value) && `is-indeterminate`,
      size != 'md' && `is-${size}`,
    ]}
    style={`--_progress: ${100 * (value - min) / (max - min)}`}
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin={min}
    aria-valuemax={max}
  >
    <div class="progress__bar"></div>
    {#if children}
    <div class="progress__value">
      {@render children?.()}
    </div>
    {/if}
  </div>
</Field>

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
