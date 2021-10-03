<script>
    import { location } from 'svelte-spa-router';
    export let path = '/';
</script>

<li class="nav-item">
    <a class="{`p-3 hover:text-red-900${path === $location ? ' active' : ''}`}" href="#{path}"><slot /></a>
</li>
