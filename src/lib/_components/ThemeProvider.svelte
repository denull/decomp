<script>
  import { setThemeContext } from '$lib/_core/theme.js';
  import '$lib/_core/reset.css';
  import '$lib/_core/tokens.css';
  import '$lib/_themes/semiflat.css';
  import '$lib/_themes/ios.css';
  import '$lib/_themes/android.css';
  import '$lib/_themes/windows.css';
  import '$lib/_themes/skeuo.css';
  import '$lib/_themes/win98.css';

  /**
   * @typedef {import('$lib/_core/theme.js').ThemeName} ThemeName
   * @typedef {import('$lib/_core/theme.js').SchemeName} SchemeName
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
    class: className = null,
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
