<script>
  import { setThemeContext } from '$lib/core/theme.js';
  import '$lib/core/reset.css';
  import '$lib/core/tokens.css';
  import '$lib/themes/semiflat.css';
  import '$lib/themes/ios.css';
  import '$lib/themes/android.css';
  import '$lib/themes/windows.css';
  import '$lib/themes/skeuo.css';
  import '$lib/themes/win98.css';

  /**
   * @typedef {import('$lib/core/theme.js').ThemeName} ThemeName
   * @typedef {import('$lib/core/theme.js').SchemeName} SchemeName
   */

  let {
    /** @type {ThemeName} */
    theme = 'semiflat',
    /** @type {SchemeName} */
    scheme = 'day',
    /** @type {string | undefined} */
    accent = undefined,
    /** @type {import('svelte').Snippet} */
    children,
    class: className,
    ...rest
  } = $props();

  setThemeContext(() => ({ theme, scheme }));

  let style = $derived(accent ? `--accent-base: ${accent}` : undefined);
  let classes = $derived(
    ['theme-root', className].filter(Boolean).join(' ')
  );
</script>

<div
  data-theme={theme}
  data-scheme={scheme}
  {style}
  class={classes}
  {...rest}
>
  {@render children?.()}
</div>

<style>
  .theme-root {
    min-height: 100%;
  }
</style>
