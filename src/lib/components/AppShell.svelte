<script>
  import '$lib/themes/win98.css';
  import '$lib/themes/aqua.css';

  let {
    theme = null,
    scheme = null,
    children = null,
  } = $props();
</script>

<div class="app-shell" data-theme={theme} data-scheme={scheme}>
  {@render children?.()}
</div>

<style>
  
</style>
