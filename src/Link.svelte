<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
    import { location } from 'svelte-spa-router';
    export let path = '/';
    console.log($location);

    onMount(() => {
      console.log('onMount', $location);
    });

    onDestroy(() => {
      console.log('onDestroy', $location);
    });

    beforeUpdate(() => {
      console.log('beforeUpdate', $location);
    });

    afterUpdate(() => {
      console.log('afterUpdate', $location);
    });
</script>

<li class="nav-item">
    <a class="{`tui-tab active${path === $location ? ' active' : ''}`}" href="#{path}"><slot /></a>
</li>
