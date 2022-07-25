<script lang="ts">
    import Logo from "$lib/assets/logos/Logo.svelte";
    import { stringToLogos } from "$lib/assets/logos/logos";

    export let name = "";
    export let description = "";
    export let expected = "";
    export let color = "";
    export let icon = "";
    export let odd = false;
</script>

<div class="milestone {odd ? 'odd' : ''}">
    <div class="icon-wrapper" style="background-color: {color};">
        <Logo
            fill="var(--color-level-9)"
            width="2rem"
            height="2rem"
            logoId={stringToLogos(icon)}
        />
    </div>
    <div class="milestone-about">
        <h4 class="milestone-name">{name}</h4>
        <p class="milestone-description">{description}</p>
    </div>
    <p>{expected}</p>
</div>

<style>
    .milestone {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        padding: 1rem;
        border-radius: 0.5rem;
        gap: 1rem;
    }

    .milestone.odd {
        background-color: var(--background-secondary);
    }

    .icon-wrapper {
        box-sizing: content-box;
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
        border-radius: 100%;
        display: grid;
        place-items: center;
    }

    .milestone-about {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .milestone-name {
        width: 20rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 700;
        font-size: 1.2rem;
    }

    .milestone-description {
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
