<script module>
  import { DurationGentle1, DurationLong2 } from '../constants.js';
  let toast = $state({ view: null, visible: false });
  let toastTimer = null;

  export function showToast(view) {
    toast = { view, visible: true };
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.visible = false; }, DurationLong2);
  }
</script>

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
    section = $bindable(null),
    ...rest
  } = $props();

  let stacks = new SvelteMap();

  let shouldDisplayHeader = $derived(
    header ||
    title ||
    withHeader
  );

  let page = $derived(stacks.get(section) &&
    stacks.get(section)[stacks.get(section).length - 1]);

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

  export function pushPage(page) {
    if (!section || !stacks.has(section)) return;
    stacks.set(section, [...stacks.get(section), page]);
  }

  export function popPage() {
    if (!section || !stacks.has(section)) return;
    const stack = stacks.get(section);
    stacks.set(section, stack.slice(0, stack.length - 1));
  }

  setContext('shell', {
    section, pushPage, popPage,
    showToast,
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
      {#if stacks.has(section) && stacks.get(section).length > 1}
      <Button
        class="app-shell__back-button"
        variant="ghost"
        onclick={popPage}
      >&lt; {stacks.get(section)[stacks.get(section).length - 2].title || 'Back'}</Button>
      {/if}
      {#if sidebar}
      <Button
        class="app-shell__sidebar-toggle"
        icon="css:sidebar"
        onclick={() => sidebarOpen = !sidebarOpen}
      />
      {/if}
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
      {#if stacks.has(section)}
        {#each stacks.get(section) as page, i}
          <div
            class={[
              'app-shell__page',
            ]}
            transition:fly={{ x: 200, duration: DurationGentle1 }}
          >
            <div class="app-shell__page-header"></div>
            <div class="app-shell__page-body">
              <ViewRenderer view={page.view} fallback={children} data={page.data} {...rest}/>
            </div>
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

  <div class={[
    'app-shell__toast',
    toast.visible && 'is-visible',
  ]}>{#if typeof toast.view === 'string'}{
    toast.view
  }{:else if typeof toast.view === 'function'}
    {@render toast.view()}
  {/if}</div>
</div>