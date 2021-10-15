<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
  import NavLink from './Link.svelte';
  import Toast from './toast/Toast.svelte';
</script>

<div class="container max-w-screen-lg bg-gray-100 min-h-screen mx-auto flex flex-col h-screen justify-between px-8 py-4 space-y-4">
    <header class="">
        <nav class="">
            <div class="bg-green-500 bg-header-texture p-3 py-2 relative rounded">
                <div class="font-mono font-black absolute -top-3 -left-3 bg-gray-300 p-1 px-3 rounded"><a href="#/">Toolset</a></div>
                <ul class="ml-16 flex gap-4">
                    <NavLink path="/uuid">UUID</NavLink>
                    <NavLink path="/nanoid">Nano ID</NavLink>
                    <NavLink path="/date">Date</NavLink>
                </ul>
            </div>
        </nav>
    </header>
    <main class="flex flex-row flex-grow">
        <Router {routes}/>
    </main>
    <footer>
        <div class="bg-green-500 p-3 py-2 relative rounded text-center text-cyan-50">
            Made with <a href="https://svelte.dev">Svelte</a>, <a href="https://tailwindcss.com">Tailwind CSS</a> and ❤️
        </div>
    </footer>
</div>

<Toast />

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .nav-item {
        @apply text-gray-50 font-bold font-mono cursor-pointer p-2 rounded hover:bg-green-600;
    }

    .uuid-title {
        @apply bg-blue-100 p-2 my-1 cursor-pointer;
    }

    .uuid-title-active {
        @apply bg-blue-200;
    }

    .uuid-container {
        @apply p-2 flex flex-row space-x-2;
    }

    .header {
        @apply text-lg font-medium;
    }
</style>
