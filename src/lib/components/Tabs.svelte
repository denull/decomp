<script>
  import { crossfade } from 'svelte/transition';
  import { isSnippet, itemTitle, itemValue } from '../utils.js';
  import SelectionIndicator from './SelectionIndicator.svelte';

  let {
    /** @type {any} */
    selected = $bindable(null),
    /** @type {String} */
    tabKey = 'id',

    /** @type {Array} */
    tabs = [],
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    ...rest
  } = $props();

  const uid = $props.id();

  const selectedTab = $derived(
    selected !== null &&
    tabs.find(tab => selected === tab[tabKey]) || null);
  const [send, receive] = crossfade({ duration: (d) => Math.sqrt(d * 200) });
</script>

<div
  class={['tabs']}
>
  <div class="tabs__head" role="tablist">
    {#each tabs as tab, i}
      {@const isSelected = selected === tab[tabKey]}
      <div
        class={[
          'tabs__tab',
          isSelected && 'is-selected'
        ]}
        role="tab"
        tabindex={isSelected ? 0 : -1}
        aria-selected={isSelected}
        onclick={() => selected = tab[tabKey]}>
        <SelectionIndicator
          class="tabs__indicator"
          key={`selection-${uid}`}
          {send} {receive}
          visible={isSelected}/>
        {itemTitle(tab)}
      </div>
    {/each}
  </div>
  <div class="tabs__body" role="tabpanel">
    {#if selectedTab?.content}
      {#if typeof selectedTab.content === 'string'}
        {@render rest[selectedTab.content](selectedTab)}
      {:else if isSnippet(selectedTab.content)}
        {@render selectedTab.content(selectedTab)}
      {:else}
        {@const Component = selectedTab.content}
        <Component/>
      {/if}
    {/if}
    {@render children?.(selectedTab)}
  </div>
</div>