<script lang="ts">

  import { generateUuidV3 } from './helpers';

  const uuid = () => generateUuidV3('hi', '1b671a64-40d5-491e-99b0-da01ff1f3341');

  export let active: boolean;

  let id = uuid();

  // function generateUuid() {
  //   id = uuid();
  // }
  //
  // function copy() {
  //   navigator.clipboard.writeText(id);
  // }
</script>

{#if active}
<div>
    <p class="cursor-pointer select-all">
        {id}
    </p>
</div>
{:else}
    <div>UUIDv3</div>
{/if}


<style>
</style>
