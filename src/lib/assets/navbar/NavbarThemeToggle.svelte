<script lang="ts">
    import { theme } from "$lib/stores";
    import Logo from "../logos/Logo.svelte";
    import { Logos } from "../logos/logos";
    $: toggled = false;

    const toggle = () => {
        console.log("toggle theme");
        toggled = !toggled;
        theme.toggle();
    };
</script>

<div class="navbar-theme-toggle" on:click={toggle}>
    <div class="navbar-theme-toggle-handle {toggled ? 'displaced' : ''}">
        {#if toggled}
            <Logo logoId={Logos.Sun} width="1rem" height="1rem" />
        {:else}
            <Logo logoId={Logos.Moon} width="1rem" height="1rem" />
        {/if}
    </div>
</div>

<style>
    .navbar-theme-toggle {
        width: 2.5rem;
        height: 1.5rem;
        border: 0.1rem solid var(--interactable-disabled);
        border-radius: 1.5rem;
        background-color: var(--background-secondary);
        cursor: pointer;
        box-sizing: content-box;
    }

    .navbar-theme-toggle:hover {
        border: 0.1rem solid var(--interactable-main);
    }

    .navbar-theme-toggle-handle {
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-items: center;
        margin: 0.25rem;
    }
    .navbar-theme-toggle-handle.displaced {
        margin-left: 1.25rem;
    }
</style>
