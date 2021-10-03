<script lang="ts">
  import Uuid from './Uuid.svelte';
  import NanoId from './NanoId.svelte';

</script>

<div class="grid grid-flow-row md:grid-cols-2 grid-cols-1 gap-4">
    <div class="bg-gray-200 rounded h-28">
        <div class="relative">
            <div class="font-mono font-black absolute -top-3 -left-3 bg-gray-300 p-1 px-3 rounded">UUID</div>
        </div>
        <div class="mt-6">
            <Uuid />
        </div>
    </div>
    <div class="bg-gray-200 rounded h-28">
        <div class="relative">
            <div class="font-mono font-black absolute -top-3 -left-3 bg-gray-300 p-1 px-3 rounded">Nano ID</div>
        </div>
        <div class="mt-6">
            <NanoId />
        </div>
    </div>
</div>

<style>
</style>
