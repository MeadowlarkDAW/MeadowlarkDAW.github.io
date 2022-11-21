<script lang="ts">
    import { data } from "$lib/stores";
    import FeatureBlock from "./FeatureBlock.svelte";
    import Milestone from "./Milestone.svelte";
</script>

<div class="milestones">
    <h1>Roadmap</h1>
    <div class="divisor" />
    <div class="milestones-list">
        {#each $data.roadmap as { name, description, status, color, icon }, i}
            <Milestone
                {name}
                {description}
                {status}
                {color}
                {icon}
                odd={i % 2 == 1}
            />
        {/each}
    </div>
</div>

<style>
    .milestones {
        width: 100%;

        background: var(--background-main);
        padding: 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .milestones-list {
        width: 100%;
        max-width: 70rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        padding: 2rem 0rem;
        gap: 1rem;
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
</style>
