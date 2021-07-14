<script lang="ts">
  import Uuid1 from './uuid/Uuid1.svelte';
  import Uuid3 from './uuid/Uuid3.svelte';
  import Uuid4 from './uuid/Uuid4.svelte';
  import Uuid5 from './uuid/Uuid5.svelte';

  import {
    TabPane,
    TabContent,
  } from 'sveltestrap';
</script>

<div>
    <h1>UUID</h1>
    <p>Universally unique identifier</p>
    <TabContent>
        <TabPane tab="v1" tabId="v1">
            <Uuid1 />
        </TabPane>

        <TabPane tab="v3" tabId="v3">
            <Uuid3 />
        </TabPane>

        <TabPane tab="v4" tabId="v4" active>
            <Uuid4 />
        </TabPane>

        <TabPane tab="v5" tabId="v5">
            <Uuid5 />
        </TabPane>
    </TabContent>
</div>

<style>
</style>
