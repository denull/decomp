<script>
  let {
    /** @type {'vertical' | 'horizontal'} */
    direction = 'vertical',
    /** @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'} */
    gap = 'md',
    /** @type {string | undefined} CSS align-items */
    align = undefined,
    /** @type {string | undefined} CSS justify-content */
    justify = undefined,
    /** @type {boolean} */
    wrap = false,
    /** @type {boolean} Children fill available space equally */
    fill = false,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    ...rest
  } = $props();

  let classes = $derived(
    [
      'stack',
      `stack--${direction}`,
      fill && 'is-fill',
      wrap && 'is-wrap',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<div
  class={classes}
  style:gap="var(--space-{gap})"
  style:align-items={align}
  style:justify-content={justify}
  {...rest}
>
  {@render children?.()}
</div>

<style>
  .stack {
    display: flex;
  }

  .stack--vertical {
    flex-direction: column;
  }

  .stack--horizontal {
    flex-direction: row;
    align-items: center;
  }

  .stack.is-wrap {
    flex-wrap: wrap;
  }

  .stack.is-fill > :global(*) {
    flex: 1;
    min-width: 0;
    min-height: 0;
  }
</style>
