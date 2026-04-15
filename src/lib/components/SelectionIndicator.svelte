<script>
  let {
    /** @type {Boolean} */
    visible,
    /** @type {Function} */
    send,
    /** @type {Function} */
    receive,
    /** @type {String} */
    key,
    /** @type {String | null} */
    class: className = null,
  } = $props();
</script>

{#if visible}
  <div
    class={['selection-indicator', className]}
    in:receive={{ key }}
    out:send={{ key }}
  ></div>
{/if}