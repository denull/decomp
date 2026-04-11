<script>
    import ListItem from './ListItem.svelte';
import ListSection from './ListSection.svelte';

  let {
    /** @type {null | 'menu'} */
    variant = null,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    /** @type {Array | null} */
    items = null,
    /** @type */
    onselect = null,
  } = $props();

</script>

<div
  class={[
    'list', 
    variant && `is-${variant}`,
  ]}
  role="list"
>
  {@render children?.()}
  {#each items as item, i}
    {#if typeof item == 'string'}
    <ListItem onclick={() => onselect?.(item, i)}>{item}</ListItem>
    {:else if item.type != 'section'}
    <ListItem {...item} onclick={() => onselect?.(item, i)}/>
    {:else}
    <ListSection header={item.header} footer={item.footer} items={item.children}/>
    {/if}
  {/each}
</div>