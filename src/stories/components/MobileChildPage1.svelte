<script>
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import ListSection from '$lib/components/ListSection.svelte';
  import { getContext } from 'svelte';
  import MobileChildPage2 from './MobileChildPage2.svelte';

  const shell = getContext('shell');
</script>

<div style="background: #008000; width: 200px; height: 400px;"></div>
<List>
  <ListSection>
    <ListItem accessory="chevron" onclick={() => {
      shell.pushPage({
        title: 'Page 2',
        view: MobileChildPage2,
      });
    }}>Child Page 2</ListItem>
  </ListSection>
</List>

<div style="background: #008000; width: 200px; height: 1000px;"></div>