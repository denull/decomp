<script>
  import '../reset.css';
  import '../themes/default.css';
  import '../themes/apple.css';
  import '../themes/win98.css';
  import '../themes/aqua.css';

  let {
    theme = 'default',
    scheme = null,
    children = null,
  } = $props();

  $effect(() => {
    document.documentElement.dataset.theme = theme;
    if (scheme) {
      document.documentElement.dataset.scheme = scheme;
    } else {
      delete document.documentElement.dataset.scheme;
    }
  });
</script>

<div class="app-shell">
  {@render children?.()}
</div>

<style>
  :global {
    [data-scheme="light"] {
      color-scheme: light;
    }
    [data-scheme="dark"] {
      color-scheme: dark;
    }
  }
</style>
