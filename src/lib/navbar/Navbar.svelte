<script>
    import NavbarButton from "./NavbarButton.svelte";
    import NavbarDivisor from "./NavbarDivisor.svelte";
    import { Logos } from "$lib/assets/logos/logos";
    import NavbarThemeToggle from "./NavbarThemeToggle.svelte";
</script>

<div class="navbar">
    <div class="navbar-wrapper">
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
            <NavbarThemeToggle />
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
    </div>
</div>

<style>
    .navbar {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        background-color: var(--background-main);
        position: sticky;

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
    }

    .navbar-logo {
        width: 3.5rem;
        height: 3.5rem;
        padding: 1rem;
    }

    .navbar-right {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
</style>
