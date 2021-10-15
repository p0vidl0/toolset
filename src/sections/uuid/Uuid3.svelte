<script lang="ts">

  import { generateUuidV3 } from './helpers';
  import { notifications } from '../../toast/notifications.js';

  const uuid = () => generateUuidV3(name, namespace);
  const uuidRegexp = /^\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b$/

  let namespace = '4da31149-b8ba-4f3f-af89-84f8d48540d3';
  let name = new Date().getTime().toString();
  let errors = {
    name: '',
    namespace: '',
  };
  let id = uuid();

  export let active: boolean;

  const updateUuid = () => {
    if (errors.namespace || errors.name) return;
    id = uuid();
  };

  const copy = () => {
    navigator.clipboard.writeText(id);
    notifications.info('Copied', 700);
    updateUuid();
  }

  const handleNamespaceChange = (val) => {
    namespace = val;
    errors.namespace = uuidRegexp.test(namespace) ? '' : 'Must be a valid UUID';
    updateUuid();
  };

  const handleNameChange = (val) => {
    name = val;
    errors.name = name.length > 0 ? '' : 'Must be a non-empty string';
    updateUuid();
  };

</script>

<div class="uuid-title">UUIDv3</div>
{#if active}
    <div class="uuid-container items-center">
        <p on:click={copy} class="font-mono cursor-pointer">
            {id}
        </p>
        <div class="flex flex-col">
            <label title="Seed Name">
                <input bind:value={name}
                       placeholder="Seed Name"
                       on:input={e => handleNameChange(e.target.value)}
                       class="p-2"
                >
            </label>
            {#if errors.name}
                <span class="error">{errors.name}</span>
            {/if}
        </div>
        <div class="flex flex-col">
            <label title="Seed Namespace">
                <input
                        bind:value={namespace}
                        placeholder="Seed Namespace"
                        on:input={e => handleNamespaceChange(e.target.value)}
                        class="p-2 w-80"
                >
            </label>
            {#if errors.namespace}
                <span class="error">{errors.namespace}</span>
            {/if}
        </div>
    </div>
{/if}


<style>
</style>
