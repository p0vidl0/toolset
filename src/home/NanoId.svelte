<script lang="ts">

  import { generateNanoId } from '../nanoid/helpers';

  let id = generateNanoId();

  function copy() {
    navigator.clipboard.writeText(id);
  }
</script>

<div>
    <div>Nano ID</div>
    <div on:click={copy} class="font-mono p-2 m-2 bg-blue-100 text-center select-all cursor-pointer">{id}</div>
    <div>more...</div>
</div>

<style>
</style>
