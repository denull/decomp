<script>
  let {
    /** @type {String} */
    icon = null,
    /** @type {String} */
    alt = null,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {import('svelte').Snippet | null} */
    children = null,

    /** @type {String} */
    viewBox = "0 0 24 24",
    /** @type {Number} */
    strokeWidth = 2,
    /** @type {boolean} */
    filled = false,
  } = $props();

  const cssIcon = $derived(icon && icon.startsWith('css:') && icon.substring(4));
  const pathIcon = $derived(icon && icon.startsWith('M'));
  const urlIcon = $derived(icon && (icon.startsWith('http:') || icon.startsWith('https:')));
</script>

<div
  class={[
    'icon',
    size != 'md' && `is-${size}`,
    cssIcon && `is-css icon-${cssIcon}`,
  ]}>
  {#if cssIcon}
  <i></i>
  {:else if pathIcon}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    {viewBox}
    fill={filled ? 'currentColor' : 'none'}
    stroke={!filled && 'currentColor'}
    stroke-width={!filled && strokeWidth || null}
    stroke-linecap={!filled && 'round' || null}
    stroke-linejoin={!filled && 'round' || null}
  ><path d={pathIcon}/></svg>
  {:else if urlIcon}
  <img src={urlIcon} {alt}/>
  {:else if icon}
  {@html icon}
  {/if}
  {@render children?.()}
</div>

<style>
  :global {
    .icon {
      display: inline-flex;
      align-items: center;
      position: relative;

      > i {
        /** This is an utility markup for CSS-only icons, hidden by default **/
        display: none;
      }
    }
  }
</style>
