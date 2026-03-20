<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Slider from '$lib/components/Slider.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Slider',
    component: Slider,
    tags: ['autodocs'],
    argTypes: {
      value: { control: { type: 'range', min: 0, max: 100 } },
      min: { control: 'number' },
      max: { control: 'number' },
      step: { control: 'number' },
      disabled: { control: 'boolean' },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
    },
  });
</script>

<Story name="Default" args={{ value: 50 }}>
  {#snippet template(args)}
    <div style="width: 300px;">
      <Slider {...args} />
    </div>
  {/snippet}
</Story>

<Story name="With Label" args={{ value: 75, label: 'Volume', showValue: true }}>
  {#snippet template(args)}
    <div style="width: 300px;">
      <Slider {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Stepped" args={{ value: 3, min: 0, max: 10, step: 1, label: 'Rating', showValue: true }}>
  {#snippet template(args)}
    <div style="width: 300px;">
      <Slider {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Sizes">
  {#snippet template(args)}
    <div style="display: flex; flex-direction: column; gap: 24px; width: 300px;">
      <Slider size="sm" value={30} label="Small" showValue />
      <Slider size="md" value={50} label="Medium" showValue />
      <Slider size="lg" value={70} label="Large" showValue />
    </div>
  {/snippet}
</Story>

<Story name="Disabled" args={{ value: 40, disabled: true, label: 'Disabled', showValue: true }}>
  {#snippet template(args)}
    <div style="width: 300px;">
      <Slider {...args} />
    </div>
  {/snippet}
</Story>
