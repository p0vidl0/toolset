<script lang="ts">
  import { v4 as uuid } from 'uuid';
  import {
    Icon,
    Button,
  } from 'sveltestrap';

  let id = uuid();

  function generateUuid() {
    id = uuid();
  }

  function copy() {
    navigator.clipboard.writeText(id);
  }
</script>

<div>
    <p on:click={copy}>
        {id}
    </p>
    <Button color="primary" outline on:click={generateUuid}>
        Renew
    </Button>
</div>

<style>
</style>
