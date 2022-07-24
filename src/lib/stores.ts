import { Theme } from "$lib/theme";
import { readable, writable } from "svelte/store";

import features from "$lib/features.json";
import type { Feature } from "./types";

function createTheme() {
    const { subscribe, set, update } = writable(Theme.Dark);

    return {
        subscribe,
        toggle: () => {
            update(t => t = t == Theme.Dark ? Theme.Light : Theme.Dark)
        },
        set
    }
}

export const theme = createTheme()
export const sfeatures = readable(features as Feature[]) 
