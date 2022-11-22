<script lang="ts">
    import { Logos } from "$lib/assets/logos/logos";
    import Logo from "$lib/assets/logos/Logo.svelte";

    export let icon: Logos = Logos.None;
    export let text: string = "Button";
    export let link: string;

    $: logoHover = false;
</script>

<a href={link}>
    {#if icon === Logos.None}
        <div class="navbar-button" on:click>
            {text}
        </div>
    {:else}
        <div
            class="navbar-button"
            on:click
            on:mouseenter={() => (logoHover = true)}
            on:mouseleave={() => (logoHover = false)}
        >
            <Logo
                logoId={icon}
                height="1.5rem"
                width="1.5rem"
                fill={logoHover ? "var(--accent-color)" : "var(--text-idle)"}
            />
        </div>
    {/if}
</a>

<style>
    .navbar-button {
        cursor: pointer;
        user-select: none;
        text-align: center;
        display: flex;
        align-items: center;
        justify-items: center;
        width: 100%;
        height: 100%;
    }

    .navbar-button:hover {
        color: var(--accent-color);
    }

    a {
        text-decoration: none;
    }
</style>
