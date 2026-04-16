<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Progress from '$lib/components/Progress.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: [null, 'primary', 'destructive', 'ghost'],
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
      inline: { control: 'boolean' },
    },
  });
</script>

<Story name="Default" args={{ value: 40 }} />

<Story name="With Label" args={{ label: 'Uploading', value: 67 }} />

<Story name="Inline Label" args={{ label: 'Project Alpha', value: 67, inline: true }}>
  67%
</Story>

<Story name="Sizes">
  {#snippet template()}
    <div style="display: flex; flex-direction: column; gap: 12px; width: 320px;">
      <Progress size="sm" value={25} />
      <Progress size="md" value={50} />
      <Progress size="lg" value={75} />
    </div>
  {/snippet}
</Story>

<Story name="Variants">
  {#snippet template()}
    <div style="display: flex; flex-direction: column; gap: 12px; width: 320px;">
      <Progress label="Default" value={40} inline />
      <Progress label="Primary" variant="primary" value={55} inline />
      <Progress label="Destructive" variant="destructive" value={85} inline />
      <Progress label="Ghost" variant="ghost" value={30} inline />
    </div>
  {/snippet}
</Story>

<Story name="Custom Range" args={{ label: 'Storage', value: 12, min: 0, max: 16, inline: true }}>
  12 / 16 GB
</Story>
