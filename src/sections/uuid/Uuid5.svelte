<script lang="ts">

  import { generateUuidV5, generateUuidV4 } from './helpers';
  import { notifications } from '../../toast/notifications.js';

  const uuid = () => generateUuidV5(name, namespace);
  const uuidRegexp = /^\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b$/

  let name = new Date().getTime().toString();
  let namespace = generateUuidV4();
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

  const updateSeedName = () => {
    name = new Date().getTime().toString();
    updateUuid();
  };
  const updateSeedNamespace = () => {
    namespace = generateUuidV4();
    updateUuid();
  };

</script>
<div class="flex my-4">
    <div class="tui-window uuid-container1 flex-row flex-grow">
        <fieldset class="tui-fieldset">
            <legend class="px-1">UUIDv5</legend>
            <button class="tui-fieldset-button">
                <span class="green-255-text">-</span>
            </button>
            <div class="container">
                <div class="row">
                    <div class="col s6 m6 l6 font-mono" on:click={copy}>
                        {id}
                    </div>
                    <div class="col s6 m6 l6">
                        <div>
                            <fieldset class="tui-fieldset tui-border-solid">
                                <legend class="px-1">Seed Name</legend>

                                <div class="flex gap-x-2">
                                    <div class="flex-grow">
                                        <label title="Seed Name">
                                            <input
                                                bind:value={name}
                                                on:input={e => handleNameChange(e.target.value)}
                                                class="tui-input font-mono w-full pl-2"
                                            >
                                        </label>
                                    </div>
                                    <div class="flex-none w-8">
                                        <button class="tui-button tui-no-shadow" on:click={updateSeedName}>↺</button>
                                    </div>
                                </div>
                                <div>
                                    {#if errors.name}
                                        <span class="error red-168-text">{errors.name}</span>
                                    {/if}
                                </div>
                            </fieldset>
                        </div>
                        <div>
                            <fieldset class="tui-fieldset tui-border-solid">
                                <legend class="px-1">Seed Namespace</legend>
                                <div class="flex gap-x-2">
                                    <div class="flex-grow">
                                        <label title="Seed Namespace">
                                            <input
                                                bind:value={namespace}
                                                on:input={e => handleNamespaceChange(e.target.value)}
                                                class="tui-input font-mono w-full pl-2"
                                            >
                                        </label>
                                    </div>
                                    <div class="flex-none w-8">
                                        <button class="tui-button tui-no-shadow" on:click={updateSeedNamespace}>↺</button>
                                    </div>
                                </div>
                                <div>
                                    {#if errors.namespace}
                                        <span class="error">{errors.namespace}</span>
                                    {/if}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</div>

<style>
</style>
