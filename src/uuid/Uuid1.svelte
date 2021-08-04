<script lang="ts">
  import { v1 as uuid } from 'uuid';

  let id = uuid();

  function generateUuid() {
    id = uuid();
  }

  function copy() {
    navigator.clipboard.writeText(id);
  }
</script>

<div>
    <input type="button" on:click={generateUuid} value="Renew" />

    <p>
        {id}
    </p>
</div>

<style>
</style>
