<script>
  let {
    /** @type {'sm' | 'md' | 'lg' | 'none'} */
    padding = 'md',
    /** @type {import('svelte').Snippet | undefined} */
    header,
    /** @type {import('svelte').Snippet | undefined} */
    footer,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    ...rest
  } = $props();

  let classes = $derived(
    [
      'card',
      padding !== 'none' && `card--pad-${padding}`,
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<div class={classes} {...rest}>
  {#if header}
    <div class="card__header">{@render header()}</div>
  {/if}
  {#if children}
    <div class="card__body">{@render children()}</div>
  {/if}
  {#if footer}
    <div class="card__footer">{@render footer()}</div>
  {/if}
</div>

<style>
  .card {
    background: var(--surface-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    container-type: inline-size;
  }

  .card__header {
    padding: var(--space-lg);
    border-bottom: 1px solid var(--border-subtle);
    font-weight: var(--weight-semibold);
  }

  .card--pad-sm .card__body { padding: var(--space-sm); }
  .card--pad-md .card__body { padding: var(--space-lg); }
  .card--pad-lg .card__body { padding: var(--space-xl); }

  .card__footer {
    padding: var(--space-md) var(--space-lg);
    border-top: 1px solid var(--border-subtle);
    background: var(--surface-secondary);
  }

  /* Responsive: stack footer actions on narrow cards */
  @container (max-width: 320px) {
    .card__footer {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }
  }
</style>
