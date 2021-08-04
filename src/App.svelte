<script lang="ts">
  import Router, { location } from 'svelte-spa-router';
  import { routes } from './routes';
  import NavLink from './Link.svelte';
</script>

<div class="">
    <header class="">
        <nav class="bg-blue-900 shadow-lg">
            <div class="container mx-auto">
                <div class="sm:flex">
                    <a href="#" class="text-white text-3xl font-bold p-3">Toolset</a>
                    <div class="ml-55 mt-4">
                        <ul class="text-white sm:self-center text-xl">
                            <NavLink path="/" currentPath="{$location}">Home</NavLink>
                            <NavLink path="/uuid" currentPath="{$location}">Uuid</NavLink>
                            <NavLink path="/nanoid" currentPath="{$location}">Nanoid</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main class="px-3">
        <div>
            <Router {routes}/>
        </div>
    </main>
    <footer class="mt-auto text-white-50">
        <p>Made with <a href="https://svelte.dev/" class="text-white">Svelte</a> and ❤️</p>
    </footer>
</div>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
