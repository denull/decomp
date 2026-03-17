<script>
  let {
    /** @type {boolean} */
    collapsed = false,
    /** @type {boolean} Whether sidebar is open on mobile (drawer mode) */
    open = $bindable(false),
    /** @type {string} */
    width = '260px',
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    onclose,
    ...rest
  } = $props();

  let classes = $derived(
    [
      'sidebar',
      collapsed && 'is-collapsed',
      open && 'is-open',
      className,
    ].filter(Boolean).join(' ')
  );

  function handleBackdropClick() {
    open = false;
    onclose?.();
  }
</script>

<!-- Mobile backdrop -->
{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="sidebar__backdrop" onclick={handleBackdropClick} role="presentation"></div>
{/if}

<aside class={classes} style:--_width={width} {...rest}>
  {#if children}
    <div class="sidebar__content">
      {@render children()}
    </div>
  {/if}
</aside>

<style>
  .sidebar {
    width: var(--_width, 260px);
    background: var(--surface-elevated);
    border-inline-end: 1px solid var(--border-subtle);
    overflow-y: auto;
    overflow-x: hidden;
    flex-shrink: 0;
    transition: width var(--duration-normal) var(--ease-default);
  }

  .sidebar.is-collapsed {
    width: 0;
    border-inline-end: none;
    overflow: hidden;
  }

  .sidebar__content {
    padding: var(--space-sm);
    min-width: var(--_width, 260px);
  }

  .sidebar__backdrop {
    display: none;
  }

  /* Mobile: sidebar becomes a drawer overlay */
  @media (max-width: 768px) {
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: var(--z-overlay);
      transform: translateX(-100%);
      transition: transform var(--duration-normal) var(--ease-default);
      border-inline-end: none;
      box-shadow: var(--shadow-lg);
    }

    .sidebar.is-open {
      transform: translateX(0);
    }

    .sidebar__backdrop {
      display: block;
      position: fixed;
      inset: 0;
      background: oklch(0 0 0 / 0.4);
      z-index: calc(var(--z-overlay) - 1);
      animation: sidebar-backdrop-in var(--duration-normal) var(--ease-out);
    }
  }

  @keyframes sidebar-backdrop-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
