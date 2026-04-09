<script>
  let {
    /** @type {null | 'primary' | 'destructive'} */
    variant = null,
    /** @type {boolean} */
    disabled = false,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
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
</div>