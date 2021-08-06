<script lang="ts">
  import { generateUuidV5 } from './helpers';
  const uuid = () => generateUuidV5('hi', '1b671a64-40d5-491e-99b0-da01ff1f3341');

  let id = uuid();
  export let active: boolean;

  // function generateUuid() {
  //   id = uuid();
  // }

  function copy() {
    navigator.clipboard.writeText(id);
  }

</script>

{#if active}
<div>
    <p class="cursor-pointer select-all" on:click={copy}>
        {id}
    </p>
</div>
{:else}
<div>UUIDv5</div>
{/if}

<style>
</style>
