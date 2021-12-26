<script>
    import { location } from 'svelte-spa-router';
    export let path = '/';
</script>

<li class="nav-item">
    <a class="{`tui-tab active${path === $location ? ' active' : ''}`}" href="#{path}"><slot /></a>
</li>
