<script lang="ts">
    export let text = "Button";
    export let accented = false;
    export let link: string;
</script>

<a href={link}>
    <div on:click class="main-content-button {accented ? 'accented' : ''}">
        <p>{text}</p>
    </div>
</a>

<style>
    .main-content-button {
        border-radius: 2rem;
        cursor: pointer;
        border: 1px solid var(--interactable-idle-border);
        background-color: var(--interactable-idle);
    }

    .main-content-button:hover {
        border: 1px solid var(--interactable-active-border);
        background-color: var(--interactable-active);
    }

    .main-content-button p {
        color: var(--text-idle);
        padding: 0.5rem 1rem;
    }

    .main-content-button:hover p {
        color: var(--text-active);
    }

    /* Accented */
    .main-content-button.accented:hover {
        border: 1px solid var(--accent-lighter);
        background-color: var(--accent-color);
    }

    .main-content-button.accented:hover p {
        color: var(--color-level-9);
    }
</style>
