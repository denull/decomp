<script>
  let {
    /** @type {string | number | undefined} */
    value = undefined,
    /** @type {'default' | 'primary' | 'success' | 'warning' | 'danger'} */
    variant = 'default',
    /** @type {boolean} Show as a small dot instead of a label */
    dot = false,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    ...rest
  } = $props();

  let classes = $derived(
    [
      'badge',
      variant !== 'default' && `is-${variant}`,
      dot && 'is-dot',
      children && 'has-anchor',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

{#if children}
  <span class={classes} {...rest}>
    {@render children()}
    <span class="badge__indicator">
      {#if !dot && value != null}{value}{/if}
    </span>
  </span>
{:else}
  <span class={classes} {...rest}>
    {#if !dot && value != null}{value}{/if}
  </span>
{/if}

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    background: var(--surface-tertiary);
    color: var(--text-primary);
    font-size: var(--font-xs);
    font-weight: var(--weight-bold);
    border-radius: var(--radius-full);
    line-height: 1;
    white-space: nowrap;
  }

  /* Variants */
  .badge.is-primary {
    background: var(--accent);
    color: var(--text-on-accent);
  }

  .badge.is-success {
    background: var(--success);
    color: var(--text-on-accent);
  }

  .badge.is-warning {
    background: var(--warning);
    color: oklch(0.2 0 0);
  }

  .badge.is-danger {
    background: var(--danger);
    color: var(--text-on-accent);
  }

  /* Dot mode */
  .badge.is-dot {
    min-width: 8px;
    width: 8px;
    height: 8px;
    padding: 0;
  }

  /* Anchored: positioned relative to child */
  .badge.has-anchor {
    position: relative;
    display: inline-flex;
    background: transparent;
    color: inherit;
    min-width: auto;
    height: auto;
    padding: 0;
  }

  .badge__indicator {
    position: absolute;
    top: -4px;
    right: -4px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background: var(--danger);
    color: var(--text-on-accent);
    font-size: 10px;
    font-weight: var(--weight-bold);
    border-radius: var(--radius-full);
    line-height: 1;
    border: 2px solid var(--surface-primary);
  }

  .badge.has-anchor.is-dot .badge__indicator {
    min-width: 10px;
    width: 10px;
    height: 10px;
    padding: 0;
    top: -2px;
    right: -2px;
  }

  .badge.has-anchor.is-primary .badge__indicator { background: var(--accent); }
  .badge.has-anchor.is-success .badge__indicator { background: var(--success); }
  .badge.has-anchor.is-warning .badge__indicator { background: var(--warning); }
</style>
