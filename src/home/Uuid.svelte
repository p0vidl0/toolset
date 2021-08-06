<script lang="ts">

  import { generateUuidV4 } from '../uuid/helpers';

  let id = generateUuidV4();

  function copy() {
    navigator.clipboard.writeText(id);
  }
</script>

<div>
    <div>UUID</div>
    <div on:click={copy} class="font-mono p-2 m-2 bg-blue-100 text-center select-all cursor-pointer">{id}</div>
    <div>more...</div>
</div>

<style>
</style>
