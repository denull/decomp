<script>
  import Appearance from './Appearance.svelte';

  let {
    theme = 'default',
    scheme = null,
    children = null,
    header = null,
    footer = null,
    sidebar = null,
  } = $props();
</script>

<Appearance {theme} {scheme}/>

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