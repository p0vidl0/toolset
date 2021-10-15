<script lang="ts">
  import { generateUuidV1 } from './helpers';
  import { notifications } from '../../toast/notifications.js';

  const minCount = 1;
  const maxCount = 8;

  export let active: boolean;
  let ids = [''];
  let number = 1;

  const updateUuid = () => {
    if (number < minCount) number = minCount;
    if (number > maxCount) number = maxCount;
    ids = new Array(number).fill('').map(() => generateUuidV1());
  };

  function copy() {
    navigator.clipboard.writeText(ids.join('\n'));
    notifications.info('Copied', 700);
    updateUuid();
  }

  updateUuid();
</script>

<div class="uuid-title">UUIDv1</div>
{#if active}
    <div class="uuid-container flex flex-row">
        <ul on:click={copy}>
            {#each ids as id, i}
                <li class="font-mono cursor-pointer">
                    {id}
                </li>
            {/each}
        </ul>
        <div class="ml-2">
            <label title="Number of IDs to generate" class="text-gray-500">
                Number of IDs to generate:
                <input
                        class="font-mono text-black text-center"
                        bind:value={number}
                        on:input={() => updateUuid()}
                        type="number"
                        min={minCount}
                        max={maxCount}
                />
            </label>
        </div>
    </div>
{/if}

<style>
</style>
