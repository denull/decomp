<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from '$lib/components/Input.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['text', 'password', 'email', 'number', 'search', 'url', 'tel'],
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
      disabled: { control: 'boolean' },
      readonly: { control: 'boolean' },
    },
  });
</script>

<Story name="Text Input" args={{ label: 'Name', placeholder: 'Enter your name' }}>
</Story>

<Story name="With Error" args={{ label: 'Email', type: 'email', placeholder: 'user@example.com', error: 'Please enter a valid email address' }}>
</Story>

<Story name="With Hint" args={{ label: 'Username', placeholder: 'Choose a username', hint: 'Must be 3-20 characters, letters and numbers only' }}>
</Story>

<Story name="Sizes">
  {#snippet template(args)}
    <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  {/snippet}
</Story>

<Story name="Multiline / Textarea" args={{ multiline: true, label: 'Description', placeholder: 'Tell us about yourself...' }}>
</Story>

<Story name="Search" args={{ type: 'search', placeholder: 'Search...' }}>
  {#snippet leading()}
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M11 11l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  {/snippet}
</Story>

<Story name="Select (Dropdown)" args={{ label: 'Country', placeholder: 'Choose a country...', options: [
          { label: 'United States', value: 'us' },
          { label: 'United Kingdom', value: 'uk' },
          { label: 'Canada', value: 'ca' },
          { label: 'Germany', value: 'de' },
          { label: 'France', value: 'fr' },
          { label: 'Japan', value: 'jp' },
          { label: 'Australia', value: 'au' },
        ] }}>
</Story>

<Story name="Combobox (Autocomplete)">
  {#snippet children(args)}
    <div style="width: 300px;">
      <Input
        label="Language"
        placeholder="Type to search..."
        autocomplete
        options={[
          { label: 'JavaScript', value: 'js' },
          { label: 'TypeScript', value: 'ts' },
          { label: 'Python', value: 'py' },
          { label: 'Rust', value: 'rs' },
          { label: 'Go', value: 'go' },
          { label: 'Swift', value: 'swift' },
          { label: 'Kotlin', value: 'kt' },
          { label: 'C++', value: 'cpp' },
        ]}
      />
    </div>
  {/snippet}
</Story>

<Story name="Tag Input" args={{ label: 'Technologies', placeholder: 'Add a tag...', tags: ['Svelte', 'React', 'Vue'] }}>
</Story>