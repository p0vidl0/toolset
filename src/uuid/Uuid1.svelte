<script lang="ts">
  import { v1 as uuid } from 'uuid';
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
    <Button color="primary" outline on:click={generateUuid}>
        Renew
    </Button>

    <p>
        {id}
        <Button on:click={copy}>
            <Icon name="clipboard-plus"/>
            Copy
        </Button>
    </p>
</div>

<style>
</style>
