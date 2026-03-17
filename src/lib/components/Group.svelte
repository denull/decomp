<script>
  /**
   * Section wrapper with optional title. Used standalone for grouped content
   * (like iOS settings groups) or inside List as section headers.
   */

  let {
    /** @type {string | undefined} */
    title = undefined,
    /** @type {string | undefined} */
    description = undefined,
    /** @type {boolean} Inset style (rounded, elevated) */
    inset = false,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    ...rest
  } = $props();

  let classes = $derived(
    [
      'group',
      inset && 'is-inset',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<section class={classes} {...rest}>
  {#if title || description}
    <div class="group__header">
      {#if title}
        <h3 class="group__title">{title}</h3>
      {/if}
      {#if description}
        <p class="group__description">{description}</p>
      {/if}
    </div>
  {/if}
  <div class="group__content">
    {@render children?.()}
  </div>
</section>

<style>
  .group {
    display: flex;
    flex-direction: column;
  }

  .group__header {
    padding: var(--space-xs) var(--space-lg) var(--space-xs);
  }

  .group__title {
    font-size: var(--font-sm);
    font-weight: var(--weight-semibold);
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    margin: 0;
  }

  .group__description {
    font-size: var(--font-xs);
    color: var(--text-tertiary);
    margin: 2px 0 0;
  }

  .group__content {
    display: flex;
    flex-direction: column;
  }

  /* Inset variant: rounded card-like appearance */
  .group.is-inset .group__content {
    background: var(--surface-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
  }

  .group.is-inset .group__header {
    padding-bottom: var(--space-sm);
  }

  /* Spacing between groups */
  :global(.group + .group) {
    margin-top: var(--space-xl);
  }
</style>
