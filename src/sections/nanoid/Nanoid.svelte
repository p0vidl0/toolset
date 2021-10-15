<script lang="ts">
  import { nanoid } from 'nanoid';
  import { notifications } from '../../toast/notifications.js';

  let id = nanoid();

  function generateUuid() {
    id = nanoid();
  }

  function copy() {
    navigator.clipboard.writeText(id);
    notifications.info('Copied', 700);
    generateUuid();
  }

</script>

<div>
    <h1 class="header">Nano ID</h1>

    <blockquote class="relative p-4 text-base border-l-4 bg-neutral-500 text-neutral-600 border-neutral-500 quote my-4">
        <p class="pl-4">Modern and efficient unique ID <a href="https://github.com/ai/nanoid" target="_blank">[github]</a>.</p>
    </blockquote>

    <p on:click={copy} class="font-mono cursor-pointer">
        {id}
    </p>
</div>

<style>
</style>
