export enum Theme {
    Dark, Light
}

export function themeToString(value: Theme): string {
    switch (value) {
        case Theme.Dark:
            return "dark";
        case Theme.Light:
            return "light";
    }
}