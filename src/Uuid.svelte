<script lang="ts">
  import Uuid1 from './uuid/Uuid1.svelte';
  import Uuid3 from './uuid/Uuid3.svelte';
  import Uuid4 from './uuid/Uuid4.svelte';
  import Uuid5 from './uuid/Uuid5.svelte';
</script>

<div>
    <h1>UUID</h1>
    <p>Universally unique identifier</p>
    <ul>
        <li>
            <Uuid1 />
        </li>

        <li>
            <Uuid3 />
        </li>

        <li>
            <Uuid4 />
        </li>

        <li>
            <Uuid5 />
        </li>
    </ul>
</div>

<style>
</style>
