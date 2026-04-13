<script>
  let {
    /** @type {number} */
    activeTabIndex = $bindable(0),

    /** @type {Array} */
    items = [],
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    ...rest
  } = $props();

  const uid = $props.id();
</script>

<div
  class={['tabs']}
  style={`--_active-tab: --_active-tab-${uid}`}
>
  <div class="tabs__head" role="tablist">
    {#each items as item, i}
      <div
        class={[
          'tabs__tab',
          i == activeTabIndex && 'is-active'
        ]}
        style={
          i == activeTabIndex ? `anchor-name: --_active-tab-${uid}` : ''
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
    {#if items[activeTabIndex]?.component}
    {@const Component = items[activeTabIndex].component}
    <Component/>
    {:else if items[activeTabIndex]?.snippet}
    {@render rest[items[activeTabIndex]?.snippet](items[activeTabIndex], activeTabIndex, items)}
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
        white-space: nowrap;
      }
      .tabs__body {
        display: flex;
        flex-direction: column;
        container-type: inline-size;
      }
    }
  }
</style>
