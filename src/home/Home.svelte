<script lang="ts">
  import Uuid from './widgets/Uuid.svelte';
  import NanoId from './widgets/NanoId.svelte';

</script>
<div class="flex-grow">
    <div class="row mt-6">
        <div class="col s12 m12 l6 flex">
            <div class="tui-window flex-grow">
                <fieldset class="tui-fieldset">
                    <legend class="px-1">UUID</legend>
                    <a href="#/uuid" class="tui-fieldset-button"><span class="green-255-text">↕</span></a>
                    <div class="">
                        <Uuid />
                    </div>
                </fieldset>
            </div>
        </div>
        <div class="col s12 m12 l6 flex">
            <div class="tui-window flex-grow">
                <fieldset class="tui-fieldset">
                    <legend class="px-1"> Nano ID </legend>
                    <a href="#/nanoid" class="tui-fieldset-button"><span class="green-255-text">↕</span></a>
                    <div class="">
                        <NanoId />
                    </div>
                </fieldset>
            </div>
        </div>
    </div></div>

<style>
</style>
