<script>
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import ListSection from '$lib/components/ListSection.svelte';
  import { getContext } from 'svelte';
  import MobileChildPage2 from './MobileChildPage2.svelte';

  const shell = getContext('shell');
</script>

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