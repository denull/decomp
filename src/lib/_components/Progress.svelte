<script>
  let {
    /** @type {'bar' | 'spinner'} */
    type = 'bar',
    /** @type {number} Current value (0-max) */
    value = 0,
    max = 100,
    /** @type {boolean} Indeterminate state (unknown progress) */
    indeterminate = false,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {string | undefined} Accessible label */
    label = undefined,
    class: className,
    ...rest
  } = $props();

  let progress = $derived(Math.min(100, Math.max(0, (value / max) * 100)));

  let classes = $derived(
    [
      'progress',
      `progress--${type}`,
      `progress--${size}`,
      indeterminate && 'is-indeterminate',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

{#if type === 'bar'}
  <div
    class={classes}
    role="progressbar"
    aria-valuenow={indeterminate ? undefined : value}
    aria-valuemin={0}
    aria-valuemax={max}
    aria-label={label}
    {...rest}
  >
    <div class="progress__track">
      <div class="progress__fill" style:width="{indeterminate ? 100 : progress}%"></div>
    </div>
  </div>
{:else}
  <div
    class={classes}
    role="progressbar"
    aria-valuenow={indeterminate ? undefined : value}
    aria-label={label ?? 'Loading'}
    {...rest}
  >
    <svg class="progress__circle" viewBox="0 0 36 36">
      <circle class="progress__circle-track" cx="18" cy="18" r="15" fill="none" stroke-width="3" />
      <circle
        class="progress__circle-fill"
        cx="18" cy="18" r="15"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="94.25"
        stroke-dashoffset={indeterminate ? 70 : 94.25 - (progress / 100) * 94.25}
      />
    </svg>
  </div>
{/if}

<style>
  /* === Progress Bar === */
  .progress--bar {
    width: 100%;
  }

  .progress__track {
    width: 100%;
    border-radius: var(--radius-full);
    background: var(--surface-tertiary);
    overflow: hidden;
  }

  .progress--sm .progress__track { height: 3px; }
  .progress--md .progress__track { height: 6px; }
  .progress--lg .progress__track { height: 10px; }

  .progress__fill {
    height: 100%;
    background: var(--accent);
    border-radius: var(--radius-full);
    transition: width var(--duration-normal) var(--ease-default);
  }

  .progress--bar.is-indeterminate .progress__fill {
    width: 30% !important;
    animation: progress-slide 1.5s var(--ease-default) infinite;
  }

  @keyframes progress-slide {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(400%); }
  }

  /* === Spinner === */
  .progress--spinner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .progress--sm.progress--spinner .progress__circle { width: 20px; height: 20px; }
  .progress--md.progress--spinner .progress__circle { width: 32px; height: 32px; }
  .progress--lg.progress--spinner .progress__circle { width: 48px; height: 48px; }

  .progress__circle {
    transform: rotate(-90deg);
  }

  .progress__circle-track {
    stroke: var(--surface-tertiary);
  }

  .progress__circle-fill {
    stroke: var(--accent);
    transition: stroke-dashoffset var(--duration-normal) var(--ease-default);
  }

  .progress--spinner.is-indeterminate .progress__circle {
    animation: spinner-rotate 1.4s linear infinite;
  }

  .progress--spinner.is-indeterminate .progress__circle-fill {
    animation: spinner-dash 1.4s var(--ease-default) infinite;
    stroke-dashoffset: 70;
  }

  @keyframes spinner-rotate {
    100% { transform: rotate(270deg); }
  }

  @keyframes spinner-dash {
    0% {
      stroke-dashoffset: 70;
      transform: rotate(0deg);
    }
    50% {
      stroke-dashoffset: 20;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 70;
      transform: rotate(360deg);
    }
  }
</style>
