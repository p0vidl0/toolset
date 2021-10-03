<script lang="ts">
  import { generateUuidV1 } from './helpers';

  export let active: boolean;

  let id = generateUuidV1();

  function generateUuid() {
    id = generateUuidV1();
  }

  function copy() {
    navigator.clipboard.writeText(id);
  }
</script>

{#if active}
    <div>
        <input type="button" on:click={generateUuid} value="Renew" />

        <p class="cursor-pointer select-all">
            {id}
        </p>
    </div>
{:else}
    <div>UUIDv1</div>
{/if}

<style>
</style>
