<script lang="ts">
  import { Styles, Nav } from 'sveltestrap';
  import { Router, Route } from 'svelte-routing';
  import Home from './Home.svelte';
  import Uuid from './Uuid.svelte';
  import Nanoid from './Nanoid.svelte';
  import NavLink from './NavLink.svelte';

  export let url = '/uuid';
</script>

<Router url="{url}" basepath="toolset">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0">Utils</h3>
                <Nav class="nav-masthead justify-content-center float-md-end">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="uuid">Uuid</NavLink>
                    <NavLink className="nav-link" to="nanoid">Nanoid</NavLink>
                </Nav>
            </div>
        </header>
        <main class="px-3">
            <div>
                <Route path="/" component="{Home}"/>
                <Route path="uuid" component="{Uuid}"/>
                <Route path="nanoid" component="{Nanoid}"/>
            </div>
        </main>
        <footer class="mt-auto text-white-50">
            <p>Made with <a href="https://svelte.dev/" class="text-white">Svelte</a> with ❤️</p>
        </footer>
    </div>
</Router>

<Styles/>

<style>

</style>
