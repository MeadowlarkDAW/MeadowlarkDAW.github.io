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
            <NavbarButton text="Features" link="#features" />
            <NavbarButton
                text="Blog"
                link="https://github.com/MeadowlarkDAW/Meadowlark"
            />
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
