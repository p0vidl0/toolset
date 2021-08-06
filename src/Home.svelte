<script lang="ts">
  import Uuid from './home/Uuid.svelte';
  import NanoId from './home/NanoId.svelte';

</script>

<div class="grid grid-flow-row md:grid-cols-2 grid-cols-1 gap-4">
    <div class="bg-green-200 rounded">
        <Uuid />
    </div>
    <div class="bg-green-200 rounded">
        <NanoId />
    </div>
</div>

<style>
</style>
