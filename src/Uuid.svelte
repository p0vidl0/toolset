<script lang="ts">
  import * as uuid from 'uuid';

  import {
    Nav,
    Icon,
    Button,
    NavItem,
    NavLink,
    TabPane,
    TabContent,
  } from 'sveltestrap';

  let id = uuid.v4();
  let activeTab = 'v1';

  function generateUuid() {
    id = uuid.v4();
  }

  function copy() {
    navigator.clipboard.writeText(id);
  }

  console.log('activeTab', activeTab);

</script>

<div>
    <h1>UUID</h1>
    <p>Universally unique identifier</p>
<!--    <Nav tabs>-->
<!--        <NavItem>-->
<!--            <NavLink-->
<!--                    on:click={() => activeTab = 'v1'}-->
<!--                    active={activeTab === 'v1'}>-->
<!--                UUID v1-->
<!--            </NavLink>-->
<!--        </NavItem>-->
<!--        <NavItem>-->
<!--            <NavLink-->
<!--                    on:click={() => activeTab = '3'}-->
<!--                    active={activeTab === 'v3'}>-->
<!--                UUID v3-->
<!--            </NavLink>-->
<!--        </NavItem>-->
<!--        <NavItem>-->
<!--            <NavLink-->
<!--                    on:click={() => activeTab = 'v4'}-->
<!--                    active={activeTab === 'v4'}>-->
<!--                UUID v4-->
<!--            </NavLink>-->
<!--        </NavItem>-->
<!--        <NavItem>-->
<!--            <NavLink-->
<!--                    on:click={() => activeTab = 'v5'}-->
<!--                    active={activeTab === 'v5'}>-->
<!--                UUID v5-->
<!--            </NavLink>-->
<!--        </NavItem>-->
<!--    </Nav>-->

    <TabContent>
        <TabPane id="v1" tabId="v1" class="fade show">
            <h3>v1</h3>
        </TabPane>

        <TabPane id="v3" tabId="v3" class="fade show">
            <h3>v3</h3>
        </TabPane>

        <TabPane id="v4" tabId="v4" class="fade show">
            <h3>v4</h3>
        </TabPane>

        <TabPane id="v5" tabId="v5" class="fade show">
            <h3>v5</h3>
        </TabPane>
    </TabContent>

    <Button color="primary" outline on:click={generateUuid}>
        Renew
    </Button>

    <p>
        {id}
        <Button on:click={copy}>
            <Icon name="clipboard-plus"/>
            Copy
        </Button>
    </p>
</div>

<style>
</style>
