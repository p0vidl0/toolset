<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
  import NavLink from './Link.svelte';
  import Toast from './toast/Toast.svelte';
</script>
<div class="tui-bg-blue-white pt-4 fixed w-full h-full  overscroll-auto overflow-y-scroll">
    <div class="max-w-screen-lg white-168 mx-auto tui-shadow pb-8">
        <header class="">
            <div class="tui-panel cyan-168 full-width tui-no-shadow center"><a href="#/">Toolset</a></div>
            <nav class="">
                <div class="tui-tabs">
                    <ul class="">
                        <NavLink path="/uuid">UUID</NavLink>
                        <NavLink path="/nanoid">Nano ID</NavLink>
                        <NavLink path="/date">Date</NavLink>
                    </ul>
                </div>
            </nav>
        </header>
        <main class="flex flex-row">
            <Router {routes}/>
        </main>
    </div>
    <footer class="tui-statusbar cyan-168 white-255-text fixed">
        <div class="">
            <div class="text-center">
                Made with <a href="https://svelte.dev" target="_blank">Svelte</a>, <a href="https://github.com/vinibiavatti1/TuiCss" target="_blank">TuiCss</a>, <a href="https://github.com/tailwindlabs/tailwindcss" target="_blank">Tailwind CSS</a>, and ❤️
            </div>
        </div>
    </footer>
</div>

<Toast />

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /*.nav-item {*/
    /*    @apply text-gray-50 font-bold font-mono cursor-pointer p-2 rounded hover:bg-green-600;*/
    /*}*/

    /*.uuid-title {*/
    /*    @apply bg-blue-100 p-2 my-1 cursor-pointer;*/
    /*}*/

    /*.uuid-title-active {*/
    /*    @apply bg-blue-200;*/
    /*}*/

    /*.uuid-container {*/
    /*    @apply p-2 flex flex-row space-x-2;*/
    /*}*/

    /*.header {*/
    /*    @apply text-lg font-medium;*/
    /*}*/
</style>
