<script>
  let {
    /** @type {number} */
    activeTabIndex = $bindable(0),

    /** @type {Array} */
    items = [],
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
  } = $props();

  const uid = Math.random().toString(36).slice(2, 8);
  const anchorName = `--_active-tab-${uid}`;
</script>

<div
  class={['tabs']}
  style="--_active-tab: {anchorName}"
>
  <div class="tabs__head" role="tablist">
    {#each items as item, i}
      <div
        class={[
          'tabs__tab',
          i == activeTabIndex && 'is-active'
        ]}
        style={
          i == activeTabIndex ? `anchor-name: ${anchorName}` : ''
        }
        role="tab"
        tabindex={i}
        aria-selected={activeTabIndex == i}
        onclick={() => activeTabIndex = i}>
        {item.label}
      </div>
    {/each}
  </div>
  <div class="tabs__body">
    {#if items[activeTabIndex]}
    {@const Component = items[activeTabIndex].component}
    <Component/>
    {/if}
    {@render children?.()}
  </div>
</div>

<style>
  :global {
    .tabs {
      .tabs__tab {
        cursor: pointer;
        user-select: none;
      }
      .tabs__body {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
