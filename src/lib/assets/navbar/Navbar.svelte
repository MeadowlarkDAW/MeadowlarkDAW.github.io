<script lang="ts">
    import { theme } from "$lib/stores";

    import NavbarButton from "./NavbarButton.svelte";
    import NavbarDivisor from "./NavbarDivisor.svelte";
    import { Logos } from "../logos/logos";
</script>

<nav class="navbar">
    <img
        class="navbar-logo"
        src="meadowlark-logo-64.png"
        alt="meadowlark logo"
    />
    <div class="navbar-right">
        <NavbarButton text="Home" link="#home" />
        <NavbarButton text="News" link="" />
        <NavbarButton text="Features" link="#features" />
        <NavbarButton text="Download" link="" />
        <NavbarDivisor />
        <NavbarButton text="Theme Switcher" on:click={theme.toggle} link="" />
        <NavbarDivisor />
        <NavbarButton
            text="discord"
            icon={Logos.Discord}
            link="https://discord.gg/2W3Xvc8wy4"
        />
        <NavbarButton
            text="github"
            icon={Logos.Github}
            link="https://github.com/MeadowlarkDAW/Meadowlark"
        />
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-logo {
        width: 3.5rem;
        height: 3.5rem;
        padding: 1rem;
    }

    .navbar-right {
        display: flex;
        flex-direction: row;
    }
</style>
