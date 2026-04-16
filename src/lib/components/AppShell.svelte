<script>
  import Appearance from './Appearance.svelte';
    import Button from './Button.svelte';

  let {
    theme = 'default',
    scheme = null,
    children = null,
    title = null,
    header = null,
    footer = null,
    sidebar = null,
    sidebarOpen = $bindable(false),
    fullwidth = false,
  } = $props();
</script>

<Appearance {theme} {scheme}/>

<div
  class={[
    'app-shell',
    fullwidth && `is-fullwidth`,
    sidebarOpen && `is-sidebar-open`,
  ]}
>
  {#if header || sidebar || title}
    <header class="app-shell__header">
      <Button
        class="app-shell__sidebar-toggle"
        icon="css:sidebar"
        onclick={() => sidebarOpen = !sidebarOpen}
      />
      {#if title}
        <div class="app-shell__title">{title}</div>
      {/if}
      {@render header?.()}
    </header>
  {/if}
  <div class="app-shell__body">
    {#if sidebar}
      <nav class="app-shell__sidebar">
        {@render sidebar()}
      </nav>
    {/if}
    <main class="app-shell__main">
      {@render children?.()}
    </main>
  </div>
  {#if footer}
    <div class="app-shell__footer">
      {@render footer()}
    </div>
  {/if}
</div>