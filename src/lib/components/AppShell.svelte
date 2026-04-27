<script>
  import { DurationGentle1, DurationLong2 } from '../constants.js';
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
    sidebarSliding = false,
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

  
  let toast = $state({ view: null, visible: false });
  let toastTimer = null;

  let stacks = new SvelteMap();

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

  export function getSection() {
    return section;
  }

  export function setSection(newSection) {
    section = newSection;
  }

  export function pushPage(page) {
    if (!section || !stacks.has(section)) return;
    stacks.set(section, [...stacks.get(section), page]);
  }

  export function popPage() {
    if (!section || !stacks.has(section)) return;
    const stack = stacks.get(section);
    stacks.set(section, stack.slice(0, stack.length - 1));
  }

  export function isSidebarOpen() {
    return sidebarOpen;
  }

  export function openSidebar() {
    sidebarOpen = true;
  }

  export function closeSidebar() {
    sidebarOpen = false;
  }
  
  export function showToast(view) {
    toast = { view, visible: true };
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.visible = false; }, DurationLong2);
  }

  setContext('shell', {
    getSection, setSection,
    pushPage, popPage,
    isSidebarOpen, openSidebar, closeSidebar,
    // showModal / showWindow ?
    showToast,
  });
</script>

<Appearance {theme} {scheme}/>

<div
  class={[
    'app-shell',
    fullwidth && `is-fullwidth`,
    sidebarSliding && `is-sidebar-sliding`,
    sidebarOpen && `is-sidebar-open`,
  ]}
>
  {#if sidebar}
    <button class="app-shell__sidebar-backdrop"
      aria-label="Close Sidebar"
      onclick={() => sidebarOpen = false}></button>
    <nav class="app-shell__sidebar">
      {@render sidebar()}
    </nav>
  {/if}

  <main class="app-shell__main">
    {#if header || (!withHeader && title)}
      <header class="app-shell__header">
        {#if sidebar && !withHeader}
          <Button
            class="app-shell__sidebar-toggle"
            icon="css:sidebar"
            onclick={() => sidebarOpen = !sidebarOpen}
          />
        {/if}
        {#if title}
          <div class="app-shell__title">{title}</div>
        {/if}
        {@render header?.()}
      </header>
      <!-- this is another potential location for dock (below/inside header) -->
    {/if}

    {#if stacks.has(section)}
      {#each stacks.get(section) as page, i}
        <div
          class={[
            'app-shell__page',
          ]}
          transition:fly={{ x: 200, duration: DurationGentle1 }}
        >
          {#if withHeader}
            <div class="app-shell__page-header">
              {#if i > 0}
                <Button
                  class="app-shell__back-button"
                  variant="ghost"
                  onclick={popPage}
                >⏴{stacks.get(section)[i - 1].title || 'Back'}</Button>
              {:else if sidebar}
                <Button
                  class="app-shell__sidebar-toggle"
                  icon="css:sidebar"
                  onclick={() => sidebarOpen = !sidebarOpen}
                />
              {/if}
              {#if page?.title}
                <div class="app-shell__title">{page.title}</div>
              {/if}
            </div>
          {/if}
          <div class="app-shell__page-body">
            <ViewRenderer view={page.view} fallback={children} data={page.data} {...rest}/>
          </div>
          <div class="app-shell__page-footer"></div>
        </div>
      {/each}
    {/if}

    {#if footer}
      <div class="app-shell__footer">
        {@render footer()}
        <!--{JSON.stringify(sections)}-->
      </div>
    {/if}
  </main>

  <!-- bottom sheets and modals should live here -->

  <div class={[
    'app-shell__toast',
    toast.visible && 'is-visible',
  ]}>{#if typeof toast.view === 'string'}{
    toast.view
  }{:else if typeof toast.view === 'function'}
    {@render toast.view()}
  {/if}</div>
</div>