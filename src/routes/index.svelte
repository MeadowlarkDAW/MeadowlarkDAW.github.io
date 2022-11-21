<script>
    // @ts-nocheck

    import Navbar from "$lib/components/navbar/Navbar.svelte";

    import { theme } from "$lib/stores";
    import { themeToString } from "$lib/theme";
    import Features from "$lib/components/Features.svelte";
    import MainContent from "$lib/components/MainContent.svelte";
    import Milestones from "$lib/components/Milestones.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="app {themeToString($theme)}">
    <Navbar />
    <div class="home">
        <div class="parallax-group main">
            <div class="parallax-layer decor decor-1" />
            <div class="parallax-layer decor decor-2" />
            <div class="parallax-layer decor decor-3" />
            <MainContent />
        </div>
        <div class="parallax-group">
            <Features />
        </div>
        <div class="parallax-group">
            <Milestones />
        </div>
    </div>
</div>

<style>
    .main {
        height: 90%;
    }
    .app {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .home {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        perspective: 300px;
        background-color: var(--contrast);
        transition: none;
        display: block;
    }

    .decor {
        position: absolute;

        width: 100%;
        height: 100%;
    }

    .decor-1 {
        background: radial-gradient(
            ellipse at top right,
            var(--header-color-2) 0%,
            transparent 80%
        );
        transform: translateZ(-250px) scale(2);
    }

    .decor-2 {
        background: radial-gradient(
            ellipse at top left,
            var(--header-color-1) 0%,
            transparent 60%
        );
        transform: translateZ(-350px) scale(3);
    }

    .decor-3 {
        background: radial-gradient(
            ellipse at bottom,
            var(--contrast) 0%,
            transparent 60%
        );
        transform: translateZ(-150px) scale(1.5);
    }

    @media screen and (min-width: 80rem) {
        .main {
            height: 120%;
        }
    }
</style>
