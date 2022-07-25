<script lang="ts">
    import NavbarButton from "./NavbarButton.svelte";
    import NavbarDivisor from "./NavbarDivisor.svelte";
    import { stringToLogos } from "$lib/assets/logos/logos";
    import NavbarThemeToggle from "./NavbarThemeToggle.svelte";
    import { data } from "$lib/stores";
</script>

<div class="navbar">
    <div class="navbar-wrapper">
        <img
            class="navbar-logo"
            src="meadowlark-logo-64.png"
            alt="meadowlark logo"
        />
        <div class="navbar-right">
            {#each $data.navbarButtons as { text, link, icon }}
                {#if text == "divisor" && link == ""}
                    <NavbarDivisor />
                {:else if text === "themeToggle"}
                    <NavbarThemeToggle />
                {:else if icon !== undefined}
                    <NavbarButton {text} {link} icon={stringToLogos(icon)} />
                {:else}
                    <NavbarButton {text} {link} />
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>
    .navbar {
        width: 100%;

        height: 4rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        background: var(--background-main);
        position: absolute;
        filter: drop-shadow(0rem 0.1rem 4px #00000022);

        z-index: 999;

        top: 0;
        left: 0;
    }

    .navbar-wrapper {
        width: 100%;
        max-width: 60rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0rem 1rem;
    }

    .navbar-logo {
        width: 2rem;
        height: 2rem;
    }

    .navbar-right {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
</style>
