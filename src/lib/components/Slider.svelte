<script>
  import { uid } from '$lib/core/a11y.js';

  let {
    value = $bindable(50),
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {string | undefined} */
    label = undefined,
    /** @type {boolean} Show current value label */
    showValue = false,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    oninput,
    onchange,
    ...rest
  } = $props();

  const id = uid('slider');

  let progress = $derived(((value - min) / (max - min)) * 100);

  let classes = $derived(
    [
      'slider',
      size !== 'md' && `slider--${size}`,
      disabled && 'is-disabled',
      className,
    ].filter(Boolean).join(' ')
  );

  function handleInput(e) {
    value = Number(e.target.value);
    oninput?.(e);
  }
</script>

<div class={classes} {...rest}>
  {#if label || showValue}
    <div class="slider__header">
      {#if label}
        <label class="slider__label" for={id}>{label}</label>
      {/if}
      {#if showValue}
        <span class="slider__value">{value}</span>
      {/if}
    </div>
  {/if}
  <div class="slider__track-wrapper">
    <input
      {id}
      type="range"
      class="slider__input"
      {value}
      {min}
      {max}
      {step}
      {disabled}
      oninput={handleInput}
      {onchange}
      style="--_progress: {progress}%"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label={label || undefined}
    />
  </div>
</div>

<style>
  .slider {
    --_track-h: 4px;
    --_thumb: 18px;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    width: 100%;
  }

  .slider--sm { --_track-h: 3px; --_thumb: 14px; }
  .slider--lg { --_track-h: 6px; --_thumb: 22px; }

  .slider.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .slider__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: var(--space-sm);
  }

  .slider__label {
    font-size: var(--font-sm);
    color: var(--text-secondary);
    font-weight: var(--weight-medium);
  }

  .slider__value {
    font-size: var(--font-sm);
    color: var(--text-tertiary);
    font-variant-numeric: tabular-nums;
  }

  .slider__track-wrapper {
    display: flex;
    align-items: center;
    height: var(--_thumb);
  }

  .slider__input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: var(--_track-h);
    border-radius: var(--radius-full);
    background: linear-gradient(
      to right,
      var(--accent) 0%,
      var(--accent) var(--_progress),
      var(--surface-tertiary) var(--_progress),
      var(--surface-tertiary) 100%
    );
    outline: none;
    cursor: pointer;
    margin: 0;
  }

  /* Thumb - WebKit */
  .slider__input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: var(--_thumb);
    height: var(--_thumb);
    border-radius: 50%;
    background: var(--surface-elevated);
    border: 2px solid var(--accent);
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition:
      transform var(--duration-fast) var(--ease-spring),
      box-shadow var(--duration-fast) var(--ease-default);
  }

  .slider__input::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    box-shadow: var(--shadow-md);
  }

  .slider__input::-webkit-slider-thumb:active {
    transform: scale(1.05);
  }

  /* Thumb - Firefox */
  .slider__input::-moz-range-thumb {
    width: var(--_thumb);
    height: var(--_thumb);
    border-radius: 50%;
    background: var(--surface-elevated);
    border: 2px solid var(--accent);
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition:
      transform var(--duration-fast) var(--ease-spring),
      box-shadow var(--duration-fast) var(--ease-default);
  }

  .slider__input::-moz-range-thumb:hover {
    transform: scale(1.15);
  }

  /* Firefox track (override default) */
  .slider__input::-moz-range-track {
    height: var(--_track-h);
    border-radius: var(--radius-full);
    background: transparent;
  }

  .slider__input::-moz-range-progress {
    height: var(--_track-h);
    border-radius: var(--radius-full);
    background: var(--accent);
  }

  /* Focus */
  .slider__input:focus-visible::-webkit-slider-thumb {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .slider__input:focus-visible::-moz-range-thumb {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  /* Touch target */
  @media (pointer: coarse) {
    .slider__input {
      height: 6px;
    }
    .slider__input::-webkit-slider-thumb {
      width: 24px;
      height: 24px;
    }
    .slider__input::-moz-range-thumb {
      width: 24px;
      height: 24px;
    }
  }
</style>
