<script lang="ts">
  import * as uuid from 'uuid';
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

    <input type="button" color="primary" outline on:click={generateUuid} value="Renew"/>

    <p>
        {id}
    </p>
</div>

<style>
</style>
