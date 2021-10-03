<script lang="ts">
  import { generateUuidV4 } from './helpers';

  export let active: boolean;
  let id = generateUuidV4();

  const generateUuid = () => {
    id = generateUuidV4();
  };

  const copy = () => {
    navigator.clipboard.writeText(id);
    isOpen = true;
    setTimeout(() => isOpen = false, 500);
  };

  let isOpen = false;
</script>

{#if active}
<div class="flex-grow1">
    <p class="cursor-pointer select-all" on:click={copy}>
        {id}
        <span id="dummy"></span>
    </p>
    <input type="button" on:click={generateUuid} value="Renew" />
</div>
{:else}
<div>UUIDv4</div>
{/if}

<style>
</style>
