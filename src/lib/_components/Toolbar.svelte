<script>
  let {
    /** @type {string | undefined} */
    title = undefined,
    /** @type {import('svelte').Snippet | undefined} */
    leading,
    /** @type {import('svelte').Snippet | undefined} */
    trailing,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    ...rest
  } = $props();

  let classes = $derived(
    ['toolbar', className].filter(Boolean).join(' ')
  );
</script>

<header class={classes} {...rest}>
  {#if leading}
    <div class="toolbar__leading">{@render leading()}</div>
  {/if}
  <div class="toolbar__center">
    {#if title}
      <h1 class="toolbar__title">{title}</h1>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </div>
  {#if trailing}
    <div class="toolbar__trailing">{@render trailing()}</div>
  {/if}
</header>

<style>
  .toolbar {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    height: 48px;
    padding-inline: var(--space-lg);
    padding-top: env(safe-area-inset-top, 0);
    background: var(--surface-elevated);
    border-bottom: 1px solid var(--border-subtle);
    flex-shrink: 0;
    z-index: var(--z-sticky);
  }

  .toolbar__leading,
  .toolbar__trailing {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    flex-shrink: 0;
  }

  .toolbar__center {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
  }

  .toolbar__title {
    font-size: var(--font-lg);
    font-weight: var(--weight-semibold);
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (pointer: coarse) {
    .toolbar {
      height: 56px;
    }
  }
</style>
