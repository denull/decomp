<script>
  import { uid } from '$lib/core/a11y.js';

  /**
   * Unified component for checkbox, radio, and toggle.
   * @typedef {'checkbox' | 'radio' | 'toggle'} CheckType
   * @typedef {'sm' | 'md' | 'lg'} CheckSize
   */

  let {
    /** @type {CheckType} */
    type = 'checkbox',
    checked = $bindable(false),
    /** @type {any} Value for radio mode */
    value = undefined,
    /** @type {any} Bound group value for radio mode */
    group = $bindable(undefined),
    name = '',
    disabled = false,
    /** @type {CheckSize} */
    size = 'md',
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    onchange,
    ...rest
  } = $props();

  const id = uid('check');

  let isChecked = $derived(
    type === 'radio' ? group === value : checked
  );

  function handleChange(e) {
    if (type === 'radio') {
      group = value;
    } else {
      checked = !checked;
    }
    onchange?.(e);
  }

  let inputType = $derived(type === 'toggle' ? 'checkbox' : type);

  let classes = $derived(
    [
      'check',
      `check--${type}`,
      size !== 'md' && `check--${size}`,
      isChecked && 'is-checked',
      disabled && 'is-disabled',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<label class={classes} for={id} {...rest}>
  <input
    {id}
    type={inputType}
    class="check__input"
    checked={isChecked}
    {value}
    {name}
    {disabled}
    onchange={handleChange}
    role={type === 'toggle' ? 'switch' : undefined}
    aria-checked={type === 'toggle' ? isChecked : undefined}
  />
  <span class="check__indicator" aria-hidden="true">
    {#if type === 'checkbox'}
      <svg class="check__icon" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    {:else if type === 'radio'}
      <span class="check__dot"></span>
    {:else}
      <span class="check__knob"></span>
    {/if}
  </span>
  {#if children}
    <span class="check__label">{@render children()}</span>
  {/if}
</label>

<style>
  .check {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    cursor: pointer;
    user-select: none;
    font-size: var(--font-md);
    color: var(--text-primary);
    line-height: 1.4;
  }

  .check.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .check--sm { font-size: var(--font-sm); }
  .check--lg { font-size: var(--font-lg); }

  /* Hidden native input */
  .check__input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* === Checkbox indicator === */
  .check--checkbox .check__indicator {
    --_size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--_size);
    height: var(--_size);
    border: 1.5px solid var(--control-border);
    border-radius: var(--radius-sm);
    background: var(--control-bg);
    transition:
      background var(--duration-fast) var(--ease-default),
      border-color var(--duration-fast) var(--ease-default);
    flex-shrink: 0;
  }

  .check--sm.check--checkbox .check__indicator { --_size: 15px; }
  .check--lg.check--checkbox .check__indicator { --_size: 22px; }

  .check--checkbox .check__icon {
    width: 12px;
    height: 12px;
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--duration-fast) var(--ease-default),
      transform var(--duration-fast) var(--ease-spring);
  }

  .check--checkbox.is-checked .check__indicator {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--text-on-accent);
  }

  .check--checkbox.is-checked .check__icon {
    opacity: 1;
    transform: scale(1);
  }

  /* === Radio indicator === */
  .check--radio .check__indicator {
    --_size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--_size);
    height: var(--_size);
    border: 1.5px solid var(--control-border);
    border-radius: 50%;
    background: var(--control-bg);
    transition:
      border-color var(--duration-fast) var(--ease-default);
    flex-shrink: 0;
  }

  .check--sm.check--radio .check__indicator { --_size: 15px; }
  .check--lg.check--radio .check__indicator { --_size: 22px; }

  .check__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0;
    transform: scale(0);
    transition:
      opacity var(--duration-fast) var(--ease-default),
      transform var(--duration-fast) var(--ease-spring);
  }

  .check--radio.is-checked .check__indicator {
    border-color: var(--accent);
  }

  .check--radio.is-checked .check__dot {
    opacity: 1;
    transform: scale(1);
  }

  /* === Toggle indicator === */
  .check--toggle .check__indicator {
    --_width: 44px;
    --_height: 24px;
    --_knob: 18px;
    --_pad: 3px;

    position: relative;
    width: var(--_width);
    height: var(--_height);
    border-radius: var(--radius-full);
    background: var(--border-default);
    transition: background var(--duration-normal) var(--ease-default);
    flex-shrink: 0;
  }

  .check--sm.check--toggle .check__indicator {
    --_width: 36px;
    --_height: 20px;
    --_knob: 14px;
  }
  .check--lg.check--toggle .check__indicator {
    --_width: 52px;
    --_height: 28px;
    --_knob: 22px;
  }

  .check__knob {
    position: absolute;
    top: var(--_pad);
    left: var(--_pad);
    width: var(--_knob);
    height: var(--_knob);
    border-radius: 50%;
    background: var(--surface-elevated);
    box-shadow: var(--shadow-sm);
    transition:
      transform var(--duration-normal) var(--ease-spring);
  }

  .check--toggle.is-checked .check__indicator {
    background: var(--accent);
  }

  .check--toggle.is-checked .check__knob {
    transform: translateX(calc(var(--_width) - var(--_knob) - var(--_pad) * 2));
  }

  /* Focus ring on indicator when input is focused */
  .check__input:focus-visible + .check__indicator {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .check__label {
    min-width: 0;
  }

  /* Touch target */
  @media (pointer: coarse) {
    .check {
      min-height: 44px;
    }
  }
</style>
