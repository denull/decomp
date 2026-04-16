<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Slider from '$lib/components/Slider.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Slider',
    component: Slider,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: [null, 'vertical'],
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
      inline: { control: 'boolean' },
    },
  });

  let experience = $state(7);
</script>

<Story name="Default" args={{ value: 40, min: 0, max: 100 }} />

<Story name="With Label" args={{ label: 'Volume', value: 65, min: 0, max: 100 }} />

<Story name="Inline Label" args={{ label: 'Brightness', value: 80, min: 0, max: 100, inline: true }} />

<Story name="Sizes">
  {#snippet template()}
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <Slider size="sm" value={25} />
      <Slider size="md" value={50} />
      <Slider size="lg" value={75} />
    </div>
  {/snippet}
</Story>

<Story name="Custom Range" args={{ label: 'Temperature', value: 18, min: -10, max: 40 }} />

<Story name="Snippet Label">
  {#snippet template()}
    <Slider bind:value={experience} min={0} max={15}>
      {#snippet label()}
        Experience <span style="opacity:0.6">{experience} years</span>
      {/snippet}
    </Slider>
  {/snippet}
</Story>
