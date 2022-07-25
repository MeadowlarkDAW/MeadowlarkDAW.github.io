import { Theme } from "$lib/theme";
import { readable, writable } from "svelte/store";

import sfeatures from "$lib/features.json";
import smilestones from "$lib/milestones.json";
import type { Feature, Milestone } from "./types";

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
export const features = readable(sfeatures as Feature[])
export const milestones = readable(smilestones as Milestone[]) 
