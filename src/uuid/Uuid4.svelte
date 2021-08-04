<script lang="ts" xmlns="http://www.w3.org/1999/html">
  import { v4 as uuid } from 'uuid';

  let id = uuid();

  const generateUuid = () => {
    id = uuid();
  };

  const copy = () => {
    navigator.clipboard.writeText(id);
    isOpen = true;
    setTimeout(() => isOpen = false, 500);
  };

  let isOpen = false;
</script>

<div>
    <p class="result-string" on:click={copy}>
        {id}
        <span id="dummy"></span>
    </p>
    <input type="button" on:click={generateUuid} value="Renew" />
</div>

<style>
    .result-string {
        cursor: pointer;
    }
</style>
