<script lang="ts">
    import { sfeatures } from "$lib/stores";
    import FeatureBlock from "./FeatureBlock.svelte";
</script>

<div class="parallax-layer features-background" />
<div class="parallax-layer front">
    <div class="features">
        {#each $sfeatures as { title, prompt, promptColor, text, img }, i}
            <FeatureBlock
                {title}
                {prompt}
                {promptColor}
                {text}
                {img}
                flipped={i % 2 == 1}
            />
        {/each}
    </div>
</div>

<style>
    .features-background {
        transform: translateZ(-60px) scale(1.25);
        z-index: 1;
        background: var(--background-main);
        height: 100%;
    }

    .front {
        transform: translateZ(0) scale(1);
        z-index: 100;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .features {
        width: 100%;
        height: 100%;
        max-width: 60rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 2rem;
    }
</style>
