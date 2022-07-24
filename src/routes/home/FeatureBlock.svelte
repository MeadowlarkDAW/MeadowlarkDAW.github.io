<script lang="ts">
    export let title = "";
    export let prompt = "";
    export let promptColor = "";
    export let text = "";
    export let img = "";
    export let flipped = false;
</script>

{#if flipped}
    <div class="feature-block flipped">
        <img class="feature-img" src={img} alt={img} />
        <div class="feature-about">
            <div
                class="feature-prompt"
                style="background-color: {promptColor};"
            >
                <p>{prompt}</p>
            </div>
            <h2 class="feature-title">{title}</h2>
            <p class="feature-text">{text}</p>
        </div>
    </div>
{:else}
    <div class="feature-block">
        <div class="feature-about">
            <div
                class="feature-prompt"
                style="background-color: {promptColor};"
            >
                <p>{prompt}</p>
            </div>
            <h2 class="feature-title">{title}</h2>
            <p class="feature-text">{text}</p>
        </div>
        <img class="feature-img" src={img} alt={img} />
    </div>
{/if}

<style>
    .feature-block {
        display: flex;
        flex-direction: row;
        padding: 1rem 0 1rem 0;
        align-items: flex-start;
        gap: 1rem;
    }

    .feature-block.flipped .feature-about {
        align-items: flex-end;
    }

    .feature-block.flipped .feature-about .feature-text {
        text-align: end;
    }

    .feature-text {
        text-align: start;
    }

    .feature-about {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem 0 1rem 0;
        gap: 0.5rem;
        height: 100%;
    }

    .feature-prompt {
        width: fit-content;
        border-radius: 3rem;
    }

    .feature-prompt p {
        padding: 0.25rem 0.5rem;
        font-family: SUIT;
        font-weight: 900;
        font-size: 1rem;
        width: fit-content;
    }

    .feature-img {
        width: 25rem;
        height: 15rem;
        background-position: center;
        background-repeat: no-repeat;
    }

    .feature-title {
        font-family: SUIT;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.5rem;
    }
</style>
