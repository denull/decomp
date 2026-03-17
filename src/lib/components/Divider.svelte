<script>
  let {
    /** @type {'horizontal' | 'vertical'} */
    orientation = 'horizontal',
    /** @type {string | undefined} Optional text label in the middle */
    label = undefined,
    class: className,
    ...rest
  } = $props();

  let classes = $derived(
    [
      'divider',
      `divider--${orientation}`,
      label && 'has-label',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<div class={classes} role="separator" aria-orientation={orientation} {...rest}>
  {#if label}
    <span class="divider__label">{label}</span>
  {/if}
</div>

<style>
  .divider {
    flex-shrink: 0;
  }

  .divider--horizontal {
    width: 100%;
    height: 1px;
    background: var(--border-subtle);
  }

  .divider--vertical {
    width: 1px;
    align-self: stretch;
    background: var(--border-subtle);
  }

  .divider.has-label {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    background: none;
    height: auto;
  }

  .divider.has-label::before,
  .divider.has-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border-subtle);
  }

  .divider__label {
    font-size: var(--font-xs);
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }
</style>
