<script>
    import Button from './Button.svelte';

  let {
    /** @type {null | 'alert'} */
    variant = null,
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

  let el = $state(null);

  export function show() {
    open = true;
    el.showModal();
  }
  export function hide() {
    open = false;
    el.close();
  }

  $effect(() => {
    if (!el) return;
    if (open) {
      el.showModal();
    } else {
      el.close();
    }
  });
</script>

<dialog
  bind:this={el}
  class={[
    'dialog',
    variant && `is-${variant}`,
    draggable && `is-draggable`,
  ]}
>
  <div class="dialog__header">
    <div class="dialog__title">{title}</div>
    {@render header?.()}
    <div class="dialog__header-buttons">
      <Button size="sm" icon="css:close" onclick={hide}/>
    </div>
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