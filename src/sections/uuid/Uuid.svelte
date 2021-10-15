<script lang="ts">
  import Uuid1 from './Uuid1.svelte';
  import Uuid3 from './Uuid3.svelte';
  import Uuid4 from './Uuid4.svelte';
  import Uuid5 from './Uuid5.svelte';

  let active = 4;

</script>

<div class="w-full">
    <h1 class="header">UUID</h1>
    <blockquote class="relative p-4 text-base border-l-4 bg-neutral-500 text-neutral-600 border-neutral-500 quote my-4">
        <p class="pl-4">
            Universally unique identifier <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_blank">[wiki]</a>.
            RFC4122 compliant lib used <a href="https://github.com/uuidjs/uuid" target="_blank">[github]</a>.</p>
    </blockquote>
    <ul class="flex-auto flex-row gap-4">
        <li class="flex-grow" on:click={() => active = 1}>
            <Uuid1 active={active === 1} />
        </li>

        <li class="flex-grow" on:click={() => active = 3}>
            <Uuid3 active={active === 3} />
        </li>

        <li class="flex-grow" on:click={() => active = 4}>
            <Uuid4 active={active === 4} />
        </li>

        <li class="flex-grow" on:click={() => active = 5}>
            <Uuid5 active={active === 5} />
        </li>
    </ul>
</div>

<style>
</style>
