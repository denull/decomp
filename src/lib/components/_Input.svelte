<!-- Megainput from Openly -->

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import InputOptions from './InputOptions.svelte';

  let {
    value = $bindable(),
    placeholder, suffix, options,
    formatOption = (option: string) => option,
    formatSection,
    formatDescription,

    readOnly = false, multiline = false,
    numeric = false, allowCustom = false,
    autoFocus = false, autoSelect = false,
    autoHeight = false, withDone = false,
    withClear = false, withCopy = false,
    withChips = false,
    withExternalOptions = false,

    dropDirection = 'down',

    labelClear, labelCopy,

    onInput,
    onOptionsUpdated,
  }: {
    value: string | string[] | null,
    placeholder?: string,
    suffix?: string,
    options?: string[],
    formatOption?: Function,
    formatSection?: Function,
    formatDescription?: Function,

    readOnly?: boolean,
    multiline?: boolean,
    numeric?: boolean,
    allowCustom?: boolean,
    autoFocus?: boolean,
    autoSelect?: boolean,
    autoHeight?: boolean,
    withDone?: boolean,
    withClear?: boolean,
    withCopy?: boolean,
    withChips?: boolean,
    withExternalOptions?: boolean,

    dropDirection?: string,

    labelClear?: string,
    labelCopy?: string,

    onInput?: Function,
    onOptionsUpdated?: Function,
  } = $props();

  let isFocused = $state(false);
  let inputValue = $state(withChips ? '' : value);
  let el = $state(null as HTMLElement | null);
  let inputEl = $state(null as HTMLElement | null);

  let filteredOptions = $derived.by(() => {
    const query = ((inputValue || '') + '').toLocaleLowerCase();
    return (options || []).filter(option => {
      if (option.startsWith('section:')) {
        return true;
      }
      const label = formatOption(option);
      if (withChips && (value as string[]).includes(option)) {
        return false;
      }
      return query === '' || label.toLocaleLowerCase().indexOf(query) > -1;
    }).filter((option, index, list) => {
      if (!option.startsWith('section:')) {
        return true;
      }
      return (index < list.length - 1) && !list[index + 1].startsWith('section:');
    });
  });

  $effect(() => {
    if (!withChips) {
      inputValue = value;
    }
  });
  $effect(() => {
    if (!withChips && value != inputValue) {
      value = inputValue;
      onInput && onInput();
    }
  });
  $effect(() => {
    onOptionsUpdated?.(filteredOptions);
  });

  function updateHeight() {
    if (inputEl && autoHeight) {
      inputEl.style.height = 'auto';
      inputEl.style.height = `${inputEl.scrollHeight}px`;
    }
  }

  function blur() {
    inputEl?.blur();
    isFocused = false;
  }
   
  function clear() {
    value = withChips ? [] : null;
    onInput && onInput();
    blur();
  }

  function copy() {
    inputEl!.focus();
    (inputEl! as HTMLTextAreaElement).select();
    navigator.clipboard.writeText(inputValue as string);
  }

  function deleteChip(option: string) {
    value = (value as string[]).filter(v => v !== option);
    onInput && onInput();
    blur();
  }
   
  function onKeyDown(e: any) {
    if (withChips && inputValue === '' && e.keyCode === 8 && value!.length) {
      // Backspace on empty input -> remove last chip
      (value as string[]).pop();
    }
    if (withChips && inputValue !== '' && e.keyCode === 13 && allowCustom) {
      // Append new value
      (value as string[]).push(inputValue as string);
      inputValue = '';
    }
    if (e.keyCode === 27 || (withDone && e.keyCode === 13)) {
      blur();
    }
  }

  function onFocus(e: any) {
    if (autoSelect) {
      e.target.select();
    }
    isFocused = true;
  }

  export function onSelectOption(option: string) {
    if (withChips) {
      (value as string[]).push(option);
      inputValue = '';
    } else {
      value = formatOption(option);
    }
    onInput && onInput();
    blur();
  }
  
  function onDocumentClick(e: any) {
    if (el && el.contains(e.target)) {
      return;
    }
    blur();
  }
  
  onMount(() => {
    document.body.addEventListener('click', onDocumentClick);
    updateHeight();

    if (autoFocus) {
      setTimeout(() => {
        inputEl && inputEl.focus();
      }, 0);
    }
  });

  onDestroy(() => {
    document.body.removeEventListener('click', onDocumentClick);
  });
</script>

<div class={{
  'input': true,
  'is-with-chips': withChips,
  'is-with-clear': withClear,
}} bind:this={el}>
  {#if withChips}
    {#each value as option}
    <div class="input__chip">
      { formatOption(option) }
      <button type="button" class="input__chip-delete" onclick={e => { e.stopPropagation(); deleteChip(option) }}>×</button>
    </div>
    {/each}
  {/if}
  {#if !multiline}
    <input type="text"
      placeholder={placeholder}
      enterkeyhint={withDone ? 'done' : 'enter'}
      pattern={numeric ? '[0-9]*' : null}
      inputmode={numeric ? 'numeric' : 'text'}
      readonly={readOnly}
      bind:value={inputValue}
      bind:this={inputEl}
      onkeydown={onKeyDown}
      oninput={updateHeight}
      onfocus={onFocus}/>
  {:else}
    <textarea
      placeholder={placeholder}
      readonly={readOnly}
      bind:value={inputValue}
      bind:this={inputEl}
      oninput={updateHeight}
      onfocus={onFocus}></textarea>
  {/if}
  {#if suffix && inputValue}
    <div class="input__suffix">
      <span class="input__suffix-value">{ inputValue }</span>{ suffix }
    </div>
  {/if}
  {#if withClear && (withChips ? value.length : value)}
    <button type="button" class="input__clear" onclick={clear} aria-label={labelClear} title={labelClear}>⊗</button>
  {/if}
  {#if withCopy && (withChips ? value.length : value)}
    <button type="button" class="input__copy" onclick={copy} aria-label={labelCopy} title={labelCopy}><i class="icon-copy"></i></button>
  {/if}
  {#if !withExternalOptions && filteredOptions && isFocused}
    <InputOptions
      isFloating
      options={filteredOptions}
      {formatOption} {formatDescription} {formatSection}
      {dropDirection}
      onSelect={onSelectOption}
    ></InputOptions>
  {/if}
</div>

<style>
textarea {
  min-height: 3em;
}

.input {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  gap: var(--space-sm);
}
.input.is-with-clear {
  padding-right: 24px;
}
.input input, .input textarea {
  background: var(--surface-2);
  flex: 1;
  min-width: 160px;
  border: none;
  border-radius: var(--space);
  -webkit-user-select: text;
  user-select: text;
  resize: vertical;
  padding: var(--space-sm) var(--space);
}
.input input::placeholder, .input textarea::placeholder {
  color: var(--text-2);
}
.input input:focus, .input textarea:focus {
  outline: none;
}
.input__chip {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
  background-color: var(--tg-theme-secondary-bg-color);
  padding: 3px 8px;
  border-radius: 10px;
  display: flex;
}
.input__chip-delete {
  font-family: 'icons';
  margin: 0px -3px 0px 5px;
  cursor: pointer;
}
.input__clear {
  font-family: 'icons';
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: -8px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: auto;
  cursor: pointer;
}
.input__copy {
  font-family: 'icons';
  /*position: absolute;
  top: 1px;
  bottom: 0px;
  right: -10px;*/

  font-size: 20px;
  line-height: 20px;
  display: flex;
  /*margin: auto;*/
  margin-left: 6px;
  margin-right: -4px;
  cursor: pointer;
}
.input__suffix {
  position: absolute;
  top: 1px;
  left: 0px;
  pointer-events: none;
  color: var(--text-2);
}
.input__suffix-value {
  visibility: hidden;
}
</style>