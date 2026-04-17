<script>
    import { setContext } from 'svelte';
  import Appearance from './Appearance.svelte';
  import Button from './Button.svelte';
    import { isSnippet } from '$lib/utils.js';
    import { SvelteMap } from 'svelte/reactivity';

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
    /** @type {String} */
    sectionKey = 'id',
    ...rest
  } = $props();

  let stacks = new SvelteMap();

  $effect(() => {
    if (!sections) return;
    for (const section of sections) {
      if (!stacks.has(section[sectionKey])) {
        // TODO: for now, simply storing section itself as a root page
        // This may not always work
        stacks.set(section[sectionKey], [section]);
      }
    }
    console.log(sections, stacks);
  });

  export function push(page) {
    if (!selected || !stacks.has(selected)) return;
    stacks.set(selected, [...stacks.get(selected), page]);
  }

  setContext('nav', {
    push,
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
      {#if sections}
        {#if stacks.has(selected)}
          {#each stacks.get(selected) as page}
            <div class="app-shell__page">
              {#if typeof page.content === 'string'}
                {@render rest[page.content](page)}
              {:else if isSnippet(page.content)}
                {@render page.content(page)}
              {:else}
                {@const Component = page.content}
                <Component/>
              {/if}
            </div>
          {/each}
        {/if}
      {:else}
        {@render children?.()}
      
        {#if footer}
          <div class="app-shell__footer">
            {@render footer()}
          </div>
        {/if}
      {/if}
    </main>
  </div>
  <div class="app-shell__dock">
    {JSON.stringify(sections)}
  </div>
</div>