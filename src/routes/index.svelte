<script>
    import Navbar from "$lib/assets/navbar/Navbar.svelte";

    import { theme } from "$lib/stores";
    import { themeToString } from "$lib/theme";
</script>

<main class={themeToString($theme)}>
    <Navbar />
    <div id="#home" />
</main>

<style>
    main {
        height: 100%;
        background-color: var(--background-main);
    }

    div * {
        width: auto;
    }
</style>
