<script lang="ts">
  import { generateUuidV1 } from './helpers';
  import { notifications } from '../../toast/notifications.js';

  const minCount = 1;
  const maxCount = 250;

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


<div class="flex my-4">
    <div class="tui-window uuid-container1 flex-row flex-grow">
        <fieldset class="tui-fieldset">
            <legend class="px-1">UUIDv1</legend>
            <button class="tui-fieldset-button">
                <span class="green-255-text">-</span>
            </button>
            <div class="container">
                <div class="row">
                    <div class="col s6 m6 l6">
                        <ul on:click={copy} class="tui-scroll-white max-h-32 overscroll-auto overflow-y-scroll">
                            {#each ids as id, i}
                                <li class="font-mono cursor-pointer">
                                    {id}
                                </li>
                            {/each}
                        </ul>
                    </div>
                    <div class="col s6 m6 l6">
                        <label title="Number of IDs to generate" class="">
                            Number of IDs to generate:
                            <input
                                    class="tui-input font-mono text-center"
                                    bind:value={number}
                                    on:input={() => updateUuid()}
                                    type="number"
                                    min={minCount}
                                    max={maxCount}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</div>

<style>
</style>
