<script lang="ts">
  import { generateUuidV4 } from '../../sections/uuid/helpers';
  import { notifications } from '../../toast/notifications.js';

  let id = generateUuidV4();

  function copy() {
    navigator.clipboard.writeText(id);
    notifications.info('Copied', 700);
    id = generateUuidV4();
  }
</script>

<div>
    <div on:click={copy} class="font-mono p-2 m-2 select-all cursor-pointer yellow-255-text">{id}</div>
    <div class="flex">
        <div class="m-2 mt-0 p-1 px-2 cursor-pointer">
            <a href="#/uuid" class="tui-button white-text">More...</a>
        </div>
    </div>
</div>

<style>
</style>
