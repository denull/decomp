<script>
  import { setContext } from 'svelte';
  import Appearance from './Appearance.svelte';
  import Button from './Button.svelte';
  import { SvelteMap } from 'svelte/reactivity';
  import { fly } from 'svelte/transition';
  import ViewRenderer from './ViewRenderer.svelte';

  let {
    /** @type {String} */
    theme = 'default',
    /** @type {null | 'light' | 'dark'} */
    scheme = null,
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {String | null} */
    title = null,
    /** @type {import('svelte').Snippet | null} */
    header = null,
    /** @type {Boolean} */
    withHeader = null,
    /** @type {import('svelte').Snippet | null} */
    footer = null,
    /** @type {import('svelte').Snippet | null} */
    sidebar = null,
    /** @type {boolean} */
    sidebarOpen = $bindable(false),
    /** @type {boolean} */
    fullwidth = false,
    /** @type {Array | null} */
    sections = null,
    /** @type {any} */
    selected = $bindable(null),
    ...rest
  } = $props();

  let stacks = new SvelteMap();

  let shouldDisplayHeader = $derived(
    header ||
    title ||
    withHeader
  );

  let page = $derived(stacks.get(selected) &&
    stacks.get(selected)[stacks.get(selected).length - 1]);

  $effect(() => {
    if (!sections) {
      stacks.set(null, [{
        id: null,
        title,
      }]);
      return;
    }
    for (const section of sections) {
      if (!stacks.has(section.id)) {
        // TODO: for now, simply storing section itself as a root page
        // This may not always work
        stacks.set(section.id, [section]);
      }
    }
  });

  export function push(page) {
    if (!selected || !stacks.has(selected)) return;
    stacks.set(selected, [...stacks.get(selected), page]);
  }

  export function pop() {
    if (!selected || !stacks.has(selected)) return;
    const stack = stacks.get(selected);
    stacks.set(selected, stack.slice(0, stack.length - 1));
  }

  setContext('nav', {
    push, pop,
    section: selected,
  });
</script>

<Appearance {theme} {scheme}/>

<div
  class={[
    'app-shell',
    fullwidth && `is-fullwidth`,
    sidebarOpen && `is-sidebar-open`,
  ]}
>
  {#if shouldDisplayHeader}
    <header class="app-shell__header">
      {#if stacks.has(selected) && stacks.get(selected).length > 1}
      <Button
        class="app-shell__back-button"
        variant="ghost"
        onclick={pop}
      >&lt; {stacks.get(selected)[stacks.get(selected).length - 2].title || 'Back'}</Button>
      {/if}
      <Button
        class="app-shell__sidebar-toggle"
        icon="css:sidebar"
        onclick={() => sidebarOpen = !sidebarOpen}
      />
      {#if page?.title}
        <div class="app-shell__title">{page.title}</div>
      {/if}
      {@render header?.()}
    </header>
    <!-- this is another potential location for dock (below/inside header) -->
  {/if}
  <div class="app-shell__body">
    <!-- this is another potential location for dock (to the left of sidebar) -->
    {#if sidebar}
      <nav class="app-shell__sidebar">
        {@render sidebar()}
      </nav>
    {/if}
    <main class="app-shell__main">
      {#if stacks.has(selected)}
        {#each stacks.get(selected) as page, i}
          <div
            class={[
              'app-shell__page',
              i < stacks.get(selected).length - 1 && 'is-covered',
            ]}
            transition:fly={{ x: 200, duration: 320 }}
          >
            <ViewRenderer view={page.view} fallback={children} data={page.data} {...rest}/>
            {#if footer}
              <div class="app-shell__footer">
                {@render footer()}
              </div>
            {/if}
          </div>
        {/each}
      {/if}
    </main>
  </div>
  <!--div class="app-shell__dock">
    {JSON.stringify(sections)}
  </div-->
</div>