<script lang="ts">

  import { generateUuidV4 } from '../uuid/helpers';

  let id = generateUuidV4();

  function copy() {
    navigator.clipboard.writeText(id);
  }
</script>

<div>
    <div on:click={copy} class="font-mono p-2 m-2 bg-blue-100 text-center select-all cursor-pointer">{id}</div>
    <div class="m-2 p-1 bg-blue-100 text-sm flex-0">more...</div>
</div>

<style>
</style>
