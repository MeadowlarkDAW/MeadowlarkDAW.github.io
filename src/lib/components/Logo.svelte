<script lang="ts">
    import { logos, Logos, type Logo } from "../logos";

    export let width = "2rem";
    export let height = "2rem";

    export let logoId: Logos = Logos.None;

    export let fill = "var(--text-active)";

    let logo = logos.get(logoId) as Logo;

    let tryParseRemUnit = (size: string) => {
        // let remUnit = parseFloat(document.documentElement.style.fontSize);
        if (size.includes("rem")) {
            size.replace("rem", "");
            let unit = parseFloat(size);
            return (unit * 16.0).toString() + "px";
        }
    };
</script>

<svg
    width={tryParseRemUnit(width)}
    height={tryParseRemUnit(height)}
    viewBox="0 0 {logo?.viewbox[0]} {logo?.viewbox[1]}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    {#each logo.d as d}
        <path {d} {fill} />
    {/each}
</svg>
