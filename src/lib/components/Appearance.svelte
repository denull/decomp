<script>
  import { getContext, setContext } from 'svelte';
  import '../reset.css';
  import '../common.css';
  import '../icons.css';
  const themes = import.meta.glob('../themes/*.css', { query: '?inline', eager: false });

  const APPEARANCE_KEY = Symbol.for('appearance');
  const isNested = getContext(APPEARANCE_KEY) === true;
  setContext(APPEARANCE_KEY, true);

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
    if (isNested) return;
    const key = `../themes/${theme}.css`;
    const loader = themes[key];
    if (!loader) return;

    loader().then((mod) => {
      themeCSS = /** @type {{ default: string }} */ (mod).default;
    });
  });

  $effect(() => {
    if (isNested) return;
    document.documentElement.dataset.theme = theme;
    if (scheme) {
      document.documentElement.dataset.scheme = scheme;
    } else {
      delete document.documentElement.dataset.scheme;
    }
  });
</script>

<svelte:head>
  {#if !isNested}
    {@html `<style>${themeCSS}</style>`}
  {/if}
</svelte:head>

{@render children?.()}