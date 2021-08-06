<script lang="ts">
  import Uuid1 from './uuid/Uuid1.svelte';
  import Uuid3 from './uuid/Uuid3.svelte';
  import Uuid4 from './uuid/Uuid4.svelte';
  import Uuid5 from './uuid/Uuid5.svelte';

  let active = 4;

</script>

<div class="w-full">
    <h1>UUID</h1>
    <p>Universally unique identifier</p>
    active is: {active}
    <ul class="flex-auto flex-row gap-4">
        <li class="flex" on:click={() => active = 1}>
            <Uuid1 active={active === 1} />
        </li>

        <li class="flex" on:click={() => active = 3}>
            <Uuid3 active={active === 3} />
        </li>

        <li class="flex-grow" on:click={() => active = 4}>
            <Uuid4 active={active === 4} />
        </li>

        <li class="flex" on:click={() => active = 5}>
            <Uuid5 active={active === 5} />
        </li>
    </ul>
</div>

<style>
</style>
