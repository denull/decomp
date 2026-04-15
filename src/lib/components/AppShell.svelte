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

<style>
  :global {
    .app-shell {
      display: grid;
      grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
    }

    .app-shell .header {
      grid-area: header;
    }

    .app-shell .sidebar {
      grid-area: sidebar;
      display: flex;
      flex-direction: column;
      gap: var(--space);
      padding: var(--space);
    }

    .app-shell .main {
      grid-area: main;
    }

    .app-shell .footer {
      grid-area: footer;
    }
  }
</style>
