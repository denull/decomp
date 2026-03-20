<script>
  import ThemeProvider from '$lib/_components/ThemeProvider.svelte';

  let { globals, children } = $props();
  let theme = $derived(globals?.theme ?? 'semiflat');
  let scheme = $derived(globals?.scheme ?? 'day');
</script>

<ThemeProvider {theme} {scheme}>
  <div class="story-wrapper">
    {@render children?.()}
  </div>
</ThemeProvider>

<style>
  .story-wrapper {
    padding: var(--space-xl);
    min-width: 320px;
  }
</style>
