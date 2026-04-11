<script>
  let {
    title = null,
    draggable = false,
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {import('svelte').Snippet | null} */
    header = null,
    /** @type {import('svelte').Snippet | null} */
    footer = null,
    /** @type {boolean} */
    open = $bindable(false),
  } = $props();

  export function show() {
    open = true;
  }
</script>

{#if open}
<dialog
  class={[
    'dialog', 
    draggable && `is-draggable`,
  ]}
>
  <div class="dialog__header">
    <div class="dialog__title">{title}</div>
    {@render header?.()}
  </div>
  <div class="dialog__body">
    {@render children?.()}
  </div>
  {#if footer}
    <div class="dialog__footer">
    {@render footer()}
    </div>
  {/if}
</dialog>
{/if}

<style>
  :global {
    .dialog {
      display: flex;
      flex-direction: column;
    }
  }
</style>
