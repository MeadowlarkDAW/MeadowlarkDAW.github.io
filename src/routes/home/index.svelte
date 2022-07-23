<script>
    import Navbar from "$lib/assets/navbar/Navbar.svelte";

    import { theme } from "$lib/stores";
    import { themeToString } from "$lib/theme";
    import Features from "./Features.svelte";
    import MainContent from "./MainContent.svelte";
</script>

<div class="app {themeToString($theme)}">
    <Navbar />
    <div class="home">
        <div class="parallax-group decor-wrapper">
            <div class="parallax-layer decor-1" />
            <div class="parallax-layer decor-2" />
            <MainContent />
        </div>

        <div class="parallax-group decor-wrapper">
            <Features />
        </div>
    </div>
</div>

<style>
    .app {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }

    .home {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        perspective: 300px;
        background-color: var(--background-secondary);
        display: block;
    }

    .decor-wrapper {
        height: 100%;
        width: 100%;
    }

    .decor-1 {
        position: absolute;

        width: 100%;
        height: 15rem;
        background: linear-gradient(var(--background-decor) 0%, black 100%);
        transform: translateZ(-150px) scale(1.5) rotate(-15deg)
            translate(0, 45rem);
        z-index: 12;
    }

    .decor-2 {
        position: absolute;

        width: 100%;
        height: 30rem;
        background: linear-gradient(var(--accent-shaded) 0%, black 100%);
        transform: translateZ(-225px) scale(2) rotate(35deg) translate(0, 40rem);
        z-index: 2;
    }
</style>
