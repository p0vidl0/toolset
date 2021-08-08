<script lang="ts">

  import { generateNanoId } from '../nanoid/helpers';
  import { notifications } from '../toast/notifications.js';

  let id = generateNanoId();

  function copy() {
    navigator.clipboard.writeText(id);
    notifications.info('Copied', 700);
    id = generateNanoId();
  }
</script>

<div>
    <div on:click={copy} class="font-mono p-2 m-2 bg-blue-100 text-center select-all cursor-pointer">{id}</div>
    <div class="flex">
        <div class="m-2 mt-0 p-1 px-2 hover:bg-blue-100 cursor-pointer text-sm">
            <a href="#/nanoid">more...</a>
        </div>
    </div>
</div>

<style>
</style>
