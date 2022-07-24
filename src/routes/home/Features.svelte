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
    .front {
        transform: translateZ(0) scale(1);
        z-index: 100;
    }

    .features-background {
        transform: translateZ(-25px) scale(1.25);
        z-index: 2;
        background-color: var(--background-main);
    }

    .features {
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding-bottom: 8rem;
        gap: 2rem;
    }
</style>
