<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Icon from '$lib/components/Icon.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
      filled: { control: 'boolean' },
      strokeWidth: { control: { type: 'range', min: 1, max: 4, step: 0.5 } },
    },
  });

  const plusPath = 'M12 5v14M5 12h14';
  const heartPath = 'M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z';
</script>

<Story name="SVG Path" args={{ icon: plusPath }} />

<Story name="Filled" args={{ icon: heartPath, filled: true }} />

<Story name="CSS Icon" args={{ icon: 'css:close' }} />

<Story name="Sizes">
  {#snippet template()}
    <div style="display: flex; align-items: center; gap: 16px;">
      <Icon icon={plusPath} size="sm" />
      <Icon icon={plusPath} size="md" />
      <Icon icon={plusPath} size="lg" />
    </div>
  {/snippet}
</Story>

<Story name="Stroke Width">
  {#snippet template()}
    <div style="display: flex; align-items: center; gap: 16px;">
      <Icon icon={plusPath} strokeWidth={1} />
      <Icon icon={plusPath} strokeWidth={2} />
      <Icon icon={plusPath} strokeWidth={3} />
    </div>
  {/snippet}
</Story>

<Story name="Inline SVG String">
  {#snippet template()}
    <Icon icon={`<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>`} />
  {/snippet}
</Story>
