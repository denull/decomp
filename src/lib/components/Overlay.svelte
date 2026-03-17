<script>
  import { uid } from '$lib/core/a11y.js';
  import { portal } from '$lib/actions/portal.js';
  import { clickOutside } from '$lib/actions/clickOutside.js';
  import { focusTrap } from '$lib/actions/focusTrap.js';

  /**
   * Unified overlay: popover, modal, or tooltip.
   * @typedef {'popover' | 'modal' | 'tooltip'} OverlayMode
   * @typedef {'top' | 'bottom' | 'left' | 'right' | 'auto'} Placement
   */

  let {
    /** @type {OverlayMode} */
    mode = 'popover',
    open = $bindable(false),
    /** @type {HTMLElement | undefined} Anchor element for popover/tooltip */
    anchor = undefined,
    /** @type {Placement} */
    placement = 'bottom',
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    onclose,
    ...rest
  } = $props();

  const id = uid('overlay');
  let overlayEl = $state(null);

  let isModal = $derived(mode === 'modal');
  let isTooltip = $derived(mode === 'tooltip');

  // Positioning state for popover/tooltip
  let pos = $state({ top: 0, left: 0, actualPlacement: placement });

  function updatePosition() {
    if (!anchor || !overlayEl || isModal) return;

    const anchorRect = anchor.getBoundingClientRect();
    const overlayRect = overlayEl.getBoundingClientRect();
    const gap = 8;
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;

    let top = 0, left = 0;
    let place = placement;

    // Auto placement: prefer bottom, fall back if no space
    if (place === 'auto') {
      const spaceBelow = viewportH - anchorRect.bottom;
      const spaceAbove = anchorRect.top;
      place = spaceBelow >= overlayRect.height + gap ? 'bottom'
        : spaceAbove >= overlayRect.height + gap ? 'top'
        : 'bottom';
    }

    switch (place) {
      case 'bottom':
        top = anchorRect.bottom + gap;
        left = anchorRect.left + (anchorRect.width - overlayRect.width) / 2;
        break;
      case 'top':
        top = anchorRect.top - overlayRect.height - gap;
        left = anchorRect.left + (anchorRect.width - overlayRect.width) / 2;
        break;
      case 'left':
        top = anchorRect.top + (anchorRect.height - overlayRect.height) / 2;
        left = anchorRect.left - overlayRect.width - gap;
        break;
      case 'right':
        top = anchorRect.top + (anchorRect.height - overlayRect.height) / 2;
        left = anchorRect.right + gap;
        break;
    }

    // Clamp to viewport
    left = Math.max(gap, Math.min(left, viewportW - overlayRect.width - gap));
    top = Math.max(gap, Math.min(top, viewportH - overlayRect.height - gap));

    pos = { top, left, actualPlacement: place };
  }

  $effect(() => {
    if (open && anchor && overlayEl && !isModal) {
      updatePosition();
      // Also update on scroll/resize
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  });

  // Also re-position when overlayEl first renders
  $effect(() => {
    if (open && overlayEl && !isModal) {
      // Use requestAnimationFrame to get accurate measurements after render
      requestAnimationFrame(updatePosition);
    }
  });

  function close() {
    open = false;
    onclose?.();
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      close();
    }
  }

  let classes = $derived(
    [
      'overlay',
      `overlay--${mode}`,
      open && 'is-open',
      className,
    ].filter(Boolean).join(' ')
  );

  let overlayStyle = $derived(
    !isModal && open
      ? `top: ${pos.top}px; left: ${pos.left}px;`
      : undefined
  );
</script>

{#if open}
  {#if isModal}
    <!-- Modal: backdrop + centered content -->
    <div
      class="overlay__backdrop"
      use:portal
      onkeydown={handleKeydown}
      role="presentation"
    >
      <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
      <div class="overlay__backdrop-fill" onclick={close}></div>
      <div
        bind:this={overlayEl}
        {id}
        class={classes}
        role="dialog"
        aria-modal="true"
        use:focusTrap={{ enabled: open }}
        {...rest}
      >
        {@render children?.()}
      </div>
    </div>
  {:else if isTooltip}
    <!-- Tooltip: no interaction, just positioned -->
    <div
      bind:this={overlayEl}
      {id}
      class={classes}
      style={overlayStyle}
      role="tooltip"
      use:portal
      {...rest}
    >
      {@render children?.()}
    </div>
  {:else}
    <!-- Popover: positioned, dismissable -->
    <div
      bind:this={overlayEl}
      {id}
      class={classes}
      style={overlayStyle}
      role="menu"
      use:portal
      use:clickOutside={{ enabled: open, handler: close }}
      onkeydown={handleKeydown}
      {...rest}
    >
      {@render children?.()}
    </div>
  {/if}
{/if}

<style>
  /* === Backdrop (modal) === */
  .overlay__backdrop {
    position: fixed;
    inset: 0;
    z-index: var(--z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-xl);
  }

  .overlay__backdrop-fill {
    position: absolute;
    inset: 0;
    background: oklch(0 0 0 / 0.4);
    animation: overlay-fade-in var(--duration-normal) var(--ease-out);
  }

  /* === Base overlay surface === */
  .overlay {
    background: var(--surface-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
  }

  /* === Modal === */
  .overlay--modal {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 480px;
    max-height: calc(100dvh - var(--space-2xl) * 2);
    overflow-y: auto;
    animation: overlay-scale-in var(--duration-normal) var(--ease-spring);
  }

  /* === Popover === */
  .overlay--popover {
    position: fixed;
    z-index: var(--z-popover);
    min-width: 180px;
    max-width: min(360px, calc(100vw - 16px));
    max-height: calc(100dvh - 16px);
    overflow-y: auto;
    animation: overlay-fade-in var(--duration-fast) var(--ease-out);
  }

  /* === Tooltip === */
  .overlay--tooltip {
    position: fixed;
    z-index: var(--z-tooltip);
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-sm);
    color: var(--text-on-accent);
    background: var(--text-primary);
    border: none;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-md);
    pointer-events: none;
    max-width: 240px;
    animation: overlay-fade-in var(--duration-fast) var(--ease-out);
  }

  /* === Mobile: modal becomes bottom sheet === */
  @media (max-width: 640px) {
    .overlay__backdrop {
      align-items: flex-end;
      padding: 0;
    }

    .overlay--modal {
      max-width: 100%;
      max-height: 85dvh;
      border-radius: var(--radius-xl) var(--radius-xl) 0 0;
      animation: overlay-slide-up var(--duration-slow) var(--ease-spring);
      padding-bottom: env(safe-area-inset-bottom, 0);
    }
  }

  /* === Mobile: popover becomes action sheet === */
  @media (max-width: 640px) {
    .overlay--popover {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: auto !important;
      max-width: 100%;
      border-radius: var(--radius-xl) var(--radius-xl) 0 0;
      animation: overlay-slide-up var(--duration-normal) var(--ease-spring);
      padding-bottom: env(safe-area-inset-bottom, 0);
    }
  }

  /* === Animations === */
  @keyframes overlay-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes overlay-scale-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes overlay-slide-up {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
