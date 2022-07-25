<script>
    import Navbar from "$lib/navbar/Navbar.svelte";

    import { theme } from "$lib/stores";
    import { themeToString } from "$lib/theme";
    import Features from "./Features.svelte";
    import MainContent from "./MainContent.svelte";
</script>

<div class="app {themeToString($theme)}">
    <Navbar />
    <div class="home">
        <div class="parallax-group main">
            <div class="parallax-layer decor f1" />
            <div class="parallax-layer decor f2" />
            <div class="parallax-layer decor f3" />
            <div class="parallax-layer decor f4" />
            <div class="parallax-layer decor d1" />
            <div class="parallax-layer decor d2" />
            <div class="parallax-layer decor d3" />
            <div class="parallax-layer decor d4" />
            <!-- <div class="parallax-layer decor-2" /> -->
            <MainContent />
        </div>
        <div class="parallax-group">
            <Features />
        </div>
    </div>
</div>

<style>
    .main {
        height: 140%;
    }
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
        background-color: var(--contrast);
        display: block;
    }

    .decor {
        position: absolute;

        width: 200%;
        height: 30rem;
    }

    .f1 {
        background: linear-gradient(
            var(--background-decor) 0%,
            var(--contrast) 100%
        );
        transform: translateZ(-200px) scale(1.25) rotate(-20deg)
            translate(15rem, 50rem);
        z-index: 12;
    }

    .f2 {
        background: linear-gradient(
            var(--background-decor) -25%,
            var(--contrast) 75%
        );
        transform: translateZ(-400px) scale(1.5) rotate(-25deg)
            translate(15rem, 40rem);
        z-index: 12;
    }

    .f3 {
        background: linear-gradient(
            var(--background-decor) -50%,
            var(--contrast) 50%
        );
        transform: translateZ(-600px) scale(1.75) rotate(-30deg)
            translate(15rem, 30rem);
        z-index: 12;
    }

    .f4 {
        background: linear-gradient(
            var(--background-decor) -75%,
            var(--contrast) 25%
        );
        transform: translateZ(-800px) scale(2) rotate(-35deg)
            translate(15rem, 20rem);
        z-index: 12;
    }

    .d1 {
        background: linear-gradient(
            var(--accent-color) 0%,
            var(--contrast) 100%
        );
        transform: translateZ(-150px) scale(1.2) rotate(20deg)
            translate(-5rem, 80rem);
        z-index: 12;
    }

    .d2 {
        background: linear-gradient(
            var(--accent-color) -25%,
            var(--contrast) 75%
        );
        transform: translateZ(-300px) scale(1.6) rotate(35deg)
            translate(-10rem, 70rem);
        z-index: 12;
    }

    .d3 {
        background: linear-gradient(
            var(--accent-color) -50%,
            var(--contrast) 50%
        );
        transform: translateZ(-450px) scale(2.1) rotate(50deg)
            translate(-15rem, 60rem);
        z-index: 12;
    }

    .d4 {
        background: linear-gradient(
            var(--accent-color) -75%,
            var(--contrast) 25%
        );
        transform: translateZ(-600px) scale(2.8) rotate(65deg)
            translate(-20rem, 50rem);
        z-index: 12;
    }
</style>
