<script>
    import Field from './Field.svelte';

  let {
    /** @type {null | 'vertical'} */
    variant = null,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {number} */
    value = $bindable(0),
    /** @type {number} */
    min = 0,
    /** @type {number} */
    max = 100,
    /** @type {String | import('svelte').Snippet | null} */
    label = null,
    /** @type {boolean} */
    inline = false,
  } = $props();
</script>

<Field {label} {inline}>
  <div
    class={[
      'slider', 
      variant && `is-${variant}`,
      size != 'md' && `is-${size}`,
    ]}
    style={`--_progress: ${100 * value / max}`}
  >
    <div class="slider__bar"></div>
    <input type="range" {min} {max} bind:value={value}/>
    {@render children?.()}
  </div>
</Field>