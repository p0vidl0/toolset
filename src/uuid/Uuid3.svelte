<script lang="ts">
  import { v3 } from 'uuid';

  const uuid = () => v3('hi', '1b671a64-40d5-491e-99b0-da01ff1f3341');

  let id = uuid();

  function generateUuid() {
    id = uuid();
  }

  function copy() {
    navigator.clipboard.writeText(id);
  }
</script>

<div>
    <p>
        {id}
    </p>
</div>

<style>
</style>
