<script>
  let {
    /** @type {string | undefined} Image URL */
    src = undefined,
    /** @type {string} Alt text */
    alt = '',
    /** @type {string | undefined} Fallback initials */
    fallback = undefined,
    /** @type {'sm' | 'md' | 'lg' | 'xl'} */
    size = 'md',
    class: className,
    ...rest
  } = $props();

  let imgError = $state(false);

  let initials = $derived(
    fallback ?? alt.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  );

  let showImage = $derived(!!src && !imgError);

  let classes = $derived(
    [
      'avatar',
      `avatar--${size}`,
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<span class={classes} role="img" aria-label={alt} {...rest}>
  {#if showImage}
    <img class="avatar__img" {src} {alt} onerror={() => imgError = true} />
  {:else}
    <span class="avatar__fallback">{initials}</span>
  {/if}
</span>

<style>
  .avatar {
    --_size: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--_size);
    height: var(--_size);
    border-radius: 50%;
    background: var(--accent-subtle);
    color: var(--accent-text);
    overflow: hidden;
    flex-shrink: 0;
  }

  .avatar--sm { --_size: 28px; }
  .avatar--md { --_size: 36px; }
  .avatar--lg { --_size: 48px; }
  .avatar--xl { --_size: 64px; }

  .avatar__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar__fallback {
    font-size: calc(var(--_size) * 0.38);
    font-weight: var(--weight-semibold);
    line-height: 1;
    user-select: none;
  }
</style>
