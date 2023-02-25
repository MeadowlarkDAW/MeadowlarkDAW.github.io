<script lang="ts">
	import { icons, IconType, type Icon } from './icons';

	export let width = '2rem';
	export let height = '2rem';

	export let iconId: IconType = IconType.None;

	export let fill = 'var(--text-active)';

	let icon = icons.get(iconId) as Icon;

	function tryParseRemUnit(size: string): string {
		// let remUnit = parseFloat(document.documentElement.style.fontSize);
		if (size.includes('rem')) {
			size.replace('rem', '');
			let unit = parseFloat(size);
			return (unit * 16.0).toString() + 'px';
		}

		return '';
	}
</script>

<svg
	width={tryParseRemUnit(width)}
	height={tryParseRemUnit(height)}
	viewBox="0 0 {icon.viewbox[0]} {icon.viewbox[1]}"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	{#each icon.d as d}
		<path {d} {fill} />
	{/each}
</svg>
