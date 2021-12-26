<script lang="ts">
  import { generateUuidV5 } from './helpers';
  import { notifications } from '../../toast/notifications.js';

  const uuid = () => generateUuidV5('hi', '1b671a64-40d5-491e-99b0-da01ff1f3341');

  let id = uuid();
  export let active: boolean;

  function copy() {
    navigator.clipboard.writeText(id);
    notifications.info('Copied', 700);
    id = generateUuidV5();
  }

</script>

<div class="uuid-title">UUIDv5</div>
{#if active}
    <div class="uuid-container">
        <p on:click={copy} class="cursor-pointer">
            {id}
        </p>
    </div>
{/if}

<style>
</style>
