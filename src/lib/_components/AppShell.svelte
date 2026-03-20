<script>
  /**
   * Top-level layout: toolbar + sidebar + main content + tabbar.
   * Uses CSS Grid for reliable positioning.
   */

  let {
    /** @type {import('svelte').Snippet | undefined} */
    toolbar,
    /** @type {import('svelte').Snippet | undefined} */
    sidebar,
    /** @type {import('svelte').Snippet | undefined} */
    tabbar,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    ...rest
  } = $props();

  let classes = $derived(
    [
      'app-shell',
      sidebar && 'has-sidebar',
      toolbar && 'has-toolbar',
      tabbar && 'has-tabbar',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<div class={classes} {...rest}>
  {#if toolbar}
    <div class="app-shell__toolbar">
      {@render toolbar()}
    </div>
  {/if}
  {#if sidebar}
    <div class="app-shell__sidebar">
      {@render sidebar()}
    </div>
  {/if}
  <main class="app-shell__main">
    {@render children?.()}
  </main>
  {#if tabbar}
    <div class="app-shell__tabbar">
      {@render tabbar()}
    </div>
  {/if}
</div>

<style>
  .app-shell {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
    height: 100dvh;
    overflow: hidden;
    background: var(--surface-primary);
    color: var(--text-primary);
  }

  .app-shell__toolbar {
    grid-column: 1 / -1;
    grid-row: 1;
  }

  .app-shell__sidebar {
    grid-row: 2;
    grid-column: 1;
    min-width: 0;
    overflow: hidden;
  }

  .app-shell__main {
    grid-row: 2;
    grid-column: 2;
    overflow-y: auto;
    overflow-x: hidden;
    min-width: 0;
    min-height: 0;
  }

  /* When no sidebar, main takes both columns */
  .app-shell:not(.has-sidebar) .app-shell__main {
    grid-column: 1 / -1;
  }

  .app-shell__tabbar {
    grid-column: 1 / -1;
    grid-row: 3;
  }

  /* Mobile: sidebar column collapses, sidebar becomes overlay */
  @media (max-width: 768px) {
    .app-shell {
      grid-template-columns: 1fr;
    }

    .app-shell__sidebar {
      display: contents;
    }

    .app-shell__main {
      grid-column: 1;
    }
  }
</style>
