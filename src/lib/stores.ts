import { Theme } from "$lib/theme";
import { writable } from "svelte/store";

function createTheme() {
    const { subscribe, set, update } = writable(Theme.Dark);

    return {
        subscribe,
        toggle: () => {
            update(t => t == Theme.Dark ? Theme.Light : Theme.Dark)
        },
        set
    }
}

export let theme = createTheme()