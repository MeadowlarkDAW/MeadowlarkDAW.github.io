<script lang="ts">
    import { data } from "$lib/stores";
    import FeatureBlock from "./FeatureBlock.svelte";
</script>

<div class="features" id="features">
    <h1>Main features</h1>
    <div class="divisor" />
    <div class="features-grid">
        {#each $data.features as { title, text, svg }}
            <FeatureBlock {title} {text} {svg} />
        {/each}
    </div>
</div>

<style>
    .features {
        width: 100%;

        background: var(--background-main);
        padding: 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .features-grid {
        width: 100%;
        max-width: 70rem;
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        padding: 2rem 0rem;
        gap: 2rem;
    }

    h1 {
        font-family: SUIT;
        font-weight: 700;
        font-size: 2.5rem;

        padding: 2rem 0rem;
    }

    .divisor {
        width: 100%;
        height: 1px;
        max-width: 70rem;
        margin: 2rem 0rem;
        background: var(--background-secondary);
    }

    @media screen and (min-width: 35rem) {
        .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media screen and (min-width: 80rem) {
        .features-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
</style>
