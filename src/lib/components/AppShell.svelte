<script>
  import '../reset.css';
  import '../common.css';
  const themes = import.meta.glob('../themes/*.css', { query: '?inline', eager: false });

  let {
    theme = 'default',
    scheme = null,
    children = null,
    header = null,
    footer = null,
    sidebar = null,
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

<div class="app-shell">
  {#if header}
    <header class="header">
      {@render header()}
    </header>
  {/if}
  {#if sidebar}
    <nav class="sidebar">
      {@render sidebar()}
    </nav>
  {/if}
  <main class="main">
    {@render children?.()}
  </main>
  {#if footer}
    <div class="footer">
      {@render footer()}
    </div>
  {/if}
</div>