<script lang="ts">
  import { v3 } from 'uuid';
  import {
    Icon,
    Button,
  } from 'sveltestrap';

  const uuid = () => v3('hi', '1b671a64-40d5-491e-99b0-da01ff1f3341');

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
