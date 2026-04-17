<script>
  import { drag } from '../attachments/drag.svelte.js';
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
  let offset = $state([0, 0]);
  let dragging = $state(null);

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
  style:--_offset-x={offset[0]}
  style:--_offset-y={offset[1]}
  style:--_drag-x={dragging && dragging[0]}
  style:--_drag-y={dragging && dragging[1]}
>
  <div class="dialog__header"
    {@attach draggable && drag((dx, dy, final) => {
      dragging = [dx, dy];
      if (final) {
        dragging = null;
        offset = [offset[0] + dx, offset[1] + dy];
      }
    })}>
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