<script lang="ts">
  import Uuid1 from './Uuid1.svelte';
  import Uuid3 from './Uuid3.svelte';
  import Uuid4 from './Uuid4.svelte';
  import Uuid5 from './Uuid5.svelte';

  let active = 4;

</script>

<div class="w-full">
    <div class="p-4">
        <fieldset class="tui-fieldset tui-border-dotted">
            <legend>UUID</legend>
            Universally unique identifier <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_blank">[wiki]</a>.
            RFC4122 compliant lib used <a href="https://github.com/uuidjs/uuid" target="_blank">[github]</a>.
        </fieldset>
    </div>

    <ul class="flex-auto flex-row gap-4 px-4">
        <li class="flex-grow" on:click={() => active = 4}>
            <Uuid4 active={active === 4} />
        </li>

        <li class="flex-grow" on:click={() => active = 1}>
            <Uuid1 active={active === 1} />
        </li>

        <li class="flex-grow" on:click={() => active = 3}>
            <Uuid3 active={active === 3} />
        </li>

        <li class="flex-grow" on:click={() => active = 5}>
            <Uuid5 active={active === 5} />
        </li>
    </ul>
</div>

<style>
</style>
