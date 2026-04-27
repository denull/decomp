<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Dialog from '$lib/components/Dialog.svelte';
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/Input.svelte';

  const { Story } = defineMeta({
    title: 'Containers/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: [null, 'alert'],
      },
      draggable: { control: 'boolean' },
    },
  });

  let basicDialog = $state(null);
  let alertDialog = $state(null);
  let draggableDialog = $state(null);
  let formDialog = $state(null);
</script>

<Story name="Basic">
  {#snippet template()}
    <Button onclick={() => basicDialog.show()}>Open Dialog</Button>
    <Dialog bind:this={basicDialog} title="Welcome">
      <p>This is a basic dialog. Click the close button to dismiss.</p>
    </Dialog>
  {/snippet}
</Story>

<Story name="Alert with Footer">
  {#snippet template()}
    <Button variant="destructive" onclick={() => alertDialog.show()}>Delete Account</Button>
    <Dialog bind:this={alertDialog} variant="alert" title="Confirm Action">
      <p>Are you sure you want to proceed? This operation cannot be undone.</p>
      {#snippet footer()}
        <Button onclick={() => alertDialog.hide()}>Cancel</Button>
        <Button variant="destructive" onclick={() => alertDialog.hide()}>Delete</Button>
      {/snippet}
    </Dialog>
  {/snippet}
</Story>

<Story name="Draggable">
  {#snippet template()}
    <Button onclick={() => draggableDialog.show()}>Open Draggable</Button>
    <Dialog bind:this={draggableDialog} title="Draggable Dialog" draggable>
      <p>Grab the title bar and drag this dialog around.</p>
    </Dialog>
  {/snippet}
</Story>

<Story name="With Form">
  {#snippet template()}
    <Button variant="primary" onclick={() => formDialog.show()}>New Project</Button>
    <Dialog bind:this={formDialog} title="Create Project">
      <div style="display: flex; flex-direction: column; gap: 12px; min-width: 320px;">
        <Input label="Project Name" placeholder="My Project" />
        <Input variant="multiline" label="Description" placeholder="What is this project about?" />
        <Input variant="select" label="Visibility" options={['Public', 'Private', 'Internal']} placeholder="Choose..." />
      </div>
      {#snippet footer()}
        <Button onclick={() => formDialog.hide()}>Cancel</Button>
        <Button variant="primary" onclick={() => formDialog.hide()}>Create</Button>
      {/snippet}
    </Dialog>
  {/snippet}
</Story>