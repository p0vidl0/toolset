<script lang="ts">
  import { nanoid } from 'nanoid';
  let id = nanoid();

  function generateUuid() {
    id = nanoid();
  }

  function copy() {
    navigator.clipboard.writeText(id);
  }

</script>

<div>
    <h1>Nano ID</h1>

    <button on:click={generateUuid}>
        Renew
    </button>

    <p>
        {id}    <button on:click={copy}>Copy</button>
    </p>
</div>

<style>
</style>
