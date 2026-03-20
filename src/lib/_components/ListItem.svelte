<script>
  /**
   * Individual row within a List. Supports leading/trailing snippets.
   */

  let {
    selected = false,
    disabled = false,
    /** @type {boolean} Whether this item is interactive (clickable) */
    interactive = true,
    /** @type {import('svelte').Snippet | undefined} */
    leading,
    /** @type {import('svelte').Snippet | undefined} */
    trailing,
    /** @type {import('svelte').Snippet | undefined} */
    description,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    onclick,
    ...rest
  } = $props();

  let classes = $derived(
    [
      'list-item',
      interactive && 'is-interactive',
      selected && 'is-selected',
      disabled && 'is-disabled',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

{#if interactive}
  <button
    class={classes}
    {disabled}
    role="option"
    aria-selected={selected}
    {onclick}
    {...rest}
  >
    {#if leading}
      <span class="list-item__leading">{@render leading()}</span>
    {/if}
    <span class="list-item__content">
      {#if children}
        <span class="list-item__title">{@render children()}</span>
      {/if}
      {#if description}
        <span class="list-item__description">{@render description()}</span>
      {/if}
    </span>
    {#if trailing}
      <span class="list-item__trailing">{@render trailing()}</span>
    {/if}
  </button>
{:else}
  <div class={classes} role="option" aria-selected={selected} {...rest}>
    {#if leading}
      <span class="list-item__leading">{@render leading()}</span>
    {/if}
    <span class="list-item__content">
      {#if children}
        <span class="list-item__title">{@render children()}</span>
      {/if}
      {#if description}
        <span class="list-item__description">{@render description()}</span>
      {/if}
    </span>
    {#if trailing}
      <span class="list-item__trailing">{@render trailing()}</span>
    {/if}
  </div>
{/if}

<style>
  .list-item {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-sm) var(--space-lg);
    min-height: var(--control-height-lg);
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-family: var(--font-family);
    font-size: var(--font-md);
    line-height: 1.4;
    transition: background var(--duration-fast) var(--ease-default);
  }

  .list-item.is-interactive {
    cursor: pointer;
  }

  .list-item.is-interactive:hover:not(.is-disabled) {
    background: var(--surface-secondary);
  }

  .list-item.is-interactive:active:not(.is-disabled) {
    background: var(--surface-tertiary);
  }

  .list-item.is-selected {
    background: var(--accent-subtle);
    color: var(--accent-text);
  }

  .list-item.is-selected:hover:not(.is-disabled) {
    background: oklch(from var(--accent) l c h / 0.16);
  }

  .list-item.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .list-item__leading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--text-secondary);
  }

  .list-item__content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .list-item__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-item__description {
    font-size: var(--font-sm);
    color: var(--text-secondary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-item__trailing {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: var(--text-tertiary);
    font-size: var(--font-sm);
  }

  /* Divider between items */
  :global(.list-item + .list-item) {
    border-top: 1px solid var(--border-subtle);
  }

  /* Focus */
  .list-item:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
    border-radius: var(--radius-sm);
  }

  /* Touch target */
  @media (pointer: coarse) {
    .list-item {
      min-height: 48px;
      padding: var(--space-md) var(--space-lg);
    }
  }
</style>
