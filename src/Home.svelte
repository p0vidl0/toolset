<script lang="ts">
  import * as uuid from 'uuid';
  import { Button } from 'sveltestrap';
  import { Icon } from 'sveltestrap';

  let id = uuid.v4();

  function generateUuid() {
    id = uuid.v4();
  }

  function copy() {
    navigator.clipboard.writeText(id);
  }

</script>

<div>
    <h1>Home</h1>

    <Button color="primary" outline on:click={generateUuid}>
        Renew
    </Button>

    <p>
        {id}    <Button on:click={copy}><Icon name="clipboard-plus" /> Copy</Button>
    </p>
</div>

<style>
</style>
