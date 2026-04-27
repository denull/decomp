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
    /** @type {Function | null} */
    ondismiss = null,
    /** @type {Function | null} */
    onfocus = null,
  } = $props();

  let el = $state(null);
  let offset = $state([0, 0]);
  let dragging = $state(null);

  export function show() {
    el?.show();
  }

  export function showModal() {
    el?.showModal();
  }

  // Used by AppShell after reordering overlays for stacking: when Svelte moves
  // the <dialog> in the DOM, the [open] entry animation re-fires from the
  // center, so we cancel it to keep the dialog in place.
  export function cancelAnimations() {
    el?.getAnimations().forEach(a => a.cancel());
  }
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
  onclick={() => onfocus?.()}
>
  <div class="dialog__header">
    <div class="dialog__drag-handle"
      {@attach draggable && drag((dx, dy, final) => {
        dragging = [dx, dy];
        if (final) {
          dragging = null;
          offset = [offset[0] + dx, offset[1] + dy];
        }
      })}
      onpointerdown={() => onfocus?.()}></div>
    <div class="dialog__title">{title}</div>
    {@render header?.()}
    <div class="dialog__header-buttons">
      <Button size="sm" icon="css:close" onclick={() => ondismiss?.()}/>
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