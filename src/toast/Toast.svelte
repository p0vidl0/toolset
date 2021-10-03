<script>
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import { notifications } from "./notifications.js";

  export let themes = {
    danger: "#E26D69",
    success: "#84C991",
    warning: "#f0ad4e",
    info: "#5bc0de",
    default: "#aaaaaa",
  };
</script>

<div class="fixed top-4 right-4 my-0 mx-0 p-0 z-100 flex flex-col justify-start items-center	pointer-events-none gap-2">
    {#each $notifications as notification (notification.id)}
        <div
            animate:flip
            class="flex-auto flex-grow-0 flex-shrink-0"
            style="background: {themes[notification.type]};"
            transition:fly={{ y: 30 }}
        >
            <div class="p-4 block font-medium text-white">{notification.message}</div>
            {#if notification.icon}<i class={notification.icon} />{/if}
        </div>
    {/each}
</div>

<style>
</style>
