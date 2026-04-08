<script>
  import '../reset.css';
  import '../themes/apple.css';
  import '../themes/win98.css';
  import '../themes/aqua.css';

  let {
    theme = null,
    scheme = null,
    children = null,
  } = $props();

  $effect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.scheme = scheme;
  });
</script>

<div class="app-shell">
  {@render children?.()}
</div>

<style>
  
</style>
