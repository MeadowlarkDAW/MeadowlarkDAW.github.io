<script lang="ts">
    export let color = "var(--accent-color)";
    export let hoverColor = "var(--accent-color-hover)";
    export let text = "button";
    export let textColor: string = "";
    export let textColorHover: string = "";

    $: hover = false;
</script>

<div
    on:click
    class="main-content-button"
    style="background: {hover ? hoverColor : color};"
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
>
    <p
        style="color: {hover
            ? textColor == ''
                ? 'var(--interactable-main)'
                : textColor
            : textColorHover == ''
            ? 'var(--interactable-disabled)'
            : textColorHover};"
    >
        {text}
    </p>
</div>

<style>
    .main-content-button {
        border: 1px solid var(--light-accent);
        border-radius: 2rem;
        cursor: pointer;
    }

    .main-content-button p {
        padding: 0.5rem 1rem;
    }
</style>
