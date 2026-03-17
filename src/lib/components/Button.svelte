<script>
  import { getTheme } from '$lib/core/theme.js';

  /**
   * @typedef {'default' | 'primary' | 'destructive' | 'ghost'} ButtonVariant
   * @typedef {'sm' | 'md' | 'lg'} ButtonSize
   */

  let {
    /** @type {ButtonVariant} */
    variant = 'default',
    /** @type {ButtonSize} */
    size = 'md',
    disabled = false,
    loading = false,
    /** @type {boolean} Whether this button is in a group */
    grouped = false,
    /** @type {boolean} Whether this grouped button is selected */
    selected = false,
    /** @type {import('svelte').Snippet | undefined} */
    leading,
    /** @type {import('svelte').Snippet | undefined} */
    trailing,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    ...rest
  } = $props();

  const theme = getTheme();

  let classes = $derived(
    [
      'button',
      size !== 'md' && `button--${size}`,
      variant !== 'default' && `is-${variant}`,
      disabled && 'is-disabled',
      loading && 'is-loading',
      grouped && 'is-grouped',
      selected && 'is-selected',
      !children && (leading || trailing) && 'is-icon-only',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<button
  class={classes}
  disabled={disabled || loading}
  aria-busy={loading || undefined}
  {...rest}
>
  {#if loading}
    <span class="button__spinner" aria-hidden="true"></span>
  {/if}
  {#if leading}
    <span class="button__icon">{@render leading()}</span>
  {/if}
  {#if children}
    <span class="button__label">{@render children()}</span>
  {/if}
  {#if trailing}
    <span class="button__icon">{@render trailing()}</span>
  {/if}
</button>

<style>
  .button {
    --_bg: var(--control-bg);
    --_color: var(--text-primary);
    --_border: var(--control-border);
    --_radius: var(--radius-md);
    --_height: var(--control-height-md);
    --_px: var(--space-lg);
    --_font: var(--font-md);
    --_shadow: var(--shadow-sm);

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    height: var(--_height);
    padding-inline: var(--_px);
    background: var(--_bg);
    color: var(--_color);
    border: 1px solid var(--_border);
    border-radius: var(--_radius);
    font-family: var(--font-family);
    font-size: var(--_font);
    font-weight: var(--weight-medium);
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition:
      background var(--duration-fast) var(--ease-default),
      border-color var(--duration-fast) var(--ease-default),
      box-shadow var(--duration-fast) var(--ease-default),
      transform var(--duration-fast) var(--ease-default),
      opacity var(--duration-fast) var(--ease-default);
    box-shadow: var(--_shadow);
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  /* Size variants */
  .button--sm {
    --_height: var(--control-height-sm);
    --_px: var(--space-md);
    --_font: var(--font-sm);
  }
  .button--lg {
    --_height: var(--control-height-lg);
    --_px: var(--space-xl);
    --_font: var(--font-lg);
  }

  /* Variant: primary */
  .button.is-primary {
    --_bg: var(--accent);
    --_color: var(--text-on-accent);
    --_border: transparent;
  }
  .button.is-primary:hover:not(:disabled) {
    --_bg: var(--accent-hover);
  }
  .button.is-primary:active:not(:disabled) {
    --_bg: var(--accent-active);
  }

  /* Variant: destructive */
  .button.is-destructive {
    --_bg: var(--danger);
    --_color: var(--text-on-accent);
    --_border: transparent;
  }
  .button.is-destructive:hover:not(:disabled) {
    --_bg: var(--danger-hover);
  }
  .button.is-destructive:active:not(:disabled) {
    --_bg: oklch(from var(--danger) calc(l - 0.08) c h);
  }

  /* Variant: ghost */
  .button.is-ghost {
    --_bg: transparent;
    --_border: transparent;
    --_shadow: none;
  }
  .button.is-ghost:hover:not(:disabled) {
    --_bg: var(--surface-secondary);
  }
  .button.is-ghost:active:not(:disabled) {
    --_bg: var(--surface-tertiary);
  }

  /* Default hover/active */
  .button:not(.is-primary):not(.is-destructive):not(.is-ghost):hover:not(:disabled) {
    --_bg: var(--control-bg-hover);
    --_border: var(--border-strong);
  }
  .button:not(.is-primary):not(.is-destructive):not(.is-ghost):active:not(:disabled) {
    --_bg: var(--control-bg-active);
  }

  /* Active press */
  .button:active:not(:disabled) {
    transform: scale(0.98);
  }

  /* Disabled */
  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Focus */
  .button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  /* Icon-only */
  .button.is-icon-only {
    --_px: 0;
    width: var(--_height);
  }

  /* Grouped / segment control */
  .button.is-grouped {
    --_radius: 0;
    --_shadow: none;
    border-right-width: 0;
  }
  .button.is-grouped:first-child {
    --_radius: var(--radius-md) 0 0 var(--radius-md);
  }
  .button.is-grouped:last-child {
    --_radius: 0 var(--radius-md) var(--radius-md) 0;
    border-right-width: 1px;
  }
  .button.is-grouped:only-child {
    --_radius: var(--radius-md);
    border-right-width: 1px;
  }
  .button.is-grouped.is-selected {
    --_bg: var(--accent-subtle);
    --_color: var(--accent-text);
    --_border: var(--accent);
    border-right-width: 1px;
  }
  :global(.button.is-grouped.is-selected + .button.is-grouped) {
    border-left-width: 0;
  }

  /* Loading spinner */
  .button.is-loading .button__label,
  .button.is-loading .button__icon {
    visibility: hidden;
  }

  .button__spinner {
    position: absolute;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: button-spin 0.6s linear infinite;
  }

  @keyframes button-spin {
    to { transform: rotate(360deg); }
  }

  /* Sub-elements */
  .button__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .button__label {
    display: flex;
    align-items: center;
  }

  /* Touch target - ensure 44px minimum on touch devices */
  @media (pointer: coarse) {
    .button {
      min-height: 44px;
    }
    .button--sm {
      min-height: 36px;
    }
  }
</style>
