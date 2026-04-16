<script>
  import '../reset.css';
  import '../common.css';
  const themes = import.meta.glob('../themes/*.css', { query: '?inline', eager: false });

  let {
    /** @type {String} */
    theme = 'default',
    /** @type {null | 'light' | 'dark'} */
    scheme = null,
    /** @type {import('svelte').Snippet | null} */
    children = null,
  } = $props();

  let themeCSS = $state('');

  $effect(() => {
    const key = `../themes/${theme}.css`;
    const loader = themes[key];
    if (!loader) return;

    loader().then((mod) => {
      themeCSS = /** @type {{ default: string }} */ (mod).default;
    });
  });

  $effect(() => {
    document.documentElement.dataset.theme = theme;
    if (scheme) {
      document.documentElement.dataset.scheme = scheme;
    } else {
      delete document.documentElement.dataset.scheme;
    }
  });
</script>

<svelte:head>
  {@html `<style>${themeCSS}</style>`}
</svelte:head>

{@render children?.()}