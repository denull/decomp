<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import ListSection from '$lib/components/ListSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/Input.svelte';
  import Tabs from '$lib/components/Tabs.svelte';
  import Table from '$lib/components/Table.svelte';
  import Checkbox from '$lib/components/Checkbox.svelte';
  import Progress from '$lib/components/Progress.svelte';
  import Selector from '$lib/components/Selector.svelte';
  import Switch from '$lib/components/Switch.svelte';
  import Slider from '$lib/components/Slider.svelte';
  import Spinner from '$lib/components/Spinner.svelte';
  import Dialog from '$lib/components/Dialog.svelte';
  import Field from '$lib/components/Field.svelte';
  import AppShell from '$lib/components/AppShell.svelte';
  import { getContext } from 'svelte';

  const { Story } = defineMeta({
    title: 'Mobile',
    tags: [],
    parameters: {
      layout: 'fullscreen',
    },
  });

  let shell = $state();

  function gotoX() {
    shell.push({
      title: 'Child',
      content: tasks,
      props: { id: 1 },
    });
  }
</script>

{#snippet tasks()}
  <List>
    <ListSection header="Section 1">
      <ListItem accessory="chevron" onclick={gotoX}>X</ListItem>
      <ListItem>Y</ListItem>
      <ListItem accessory="switch">Z</ListItem>
    </ListSection>
  </List>
{/snippet}

<Story name="Mobile">
  <AppShell bind:this={shell} sections={[{
    id: 'tasks',
    title: 'Tasks',
    content: tasks,
  }, {
    id: 1,
    title: 'Tab 2',
  }]} selected="tasks"/>
</Story>
<style>
  
</style>