import { Theme } from "$lib/theme";
import { readable, writable } from "svelte/store";

import type { Data } from "./types";

import sdata from "$lib/data.json"

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
export const data = readable(sdata as Data)
