<script>
  import { uid } from '$lib/core/a11y.js';

  /**
   * Scrollable list container. Used for full-screen lists, dropdown menus,
   * and grouped settings. Wraps ListItem and Group components.
   */

  let {
    /** @type {'list' | 'menu'} */
    role = 'list',
    /** @type {string | undefined} Accessible label */
    label = undefined,
    /** @type {boolean} Constrain height and make scrollable */
    scrollable = false,
    /** @type {string | undefined} Max height when scrollable */
    maxHeight = undefined,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    ...rest
  } = $props();

  const id = uid('list');

  let classes = $derived(
    [
      'list',
      scrollable && 'is-scrollable',
      className,
    ].filter(Boolean).join(' ')
  );

  let listStyle = $derived(
    maxHeight ? `max-height: ${maxHeight}` : undefined
  );
</script>

<div
  {id}
  class={classes}
  {role}
  aria-label={label}
  style={listStyle}
  {...rest}
>
  {@render children?.()}
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .list.is-scrollable {
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  /* Smooth scroll on iOS */
  @supports (-webkit-overflow-scrolling: touch) {
    .list.is-scrollable {
      -webkit-overflow-scrolling: touch;
    }
  }
</style>
