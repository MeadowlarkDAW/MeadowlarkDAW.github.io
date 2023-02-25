<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { IconType, stringToIconType } from '$lib/icons';

	export let title = '';
	export let text = '';
	export let icon: IconType = IconType.None;
</script>

<div class="feature-block">
	<div class="icon-wrapper">
		<Icon iconId={icon} fill="var(--text-active)" height="4rem" width="4rem" />
	</div>
	<h2>{@html title}</h2>
	<p class="feature-text">{@html text}</p>
</div>

<style>
	.feature-block {
		padding: 2rem;

		display: flex;
		flex-direction: column;

		background-color: var(--background-secondary);
		border-radius: 0.5rem;

		gap: 0.5rem;
	}

	.icon-wrapper {
		width: 100%;
		box-sizing: content-box;
		border-radius: 0.5rem;
		display: grid;
		place-items: center;
		padding: 1rem 0rem;
	}

	.feature-text {
		text-align: start;
	}

	h2 {
		height: fit-content;
		font-family: SUIT;
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 2rem;
	}
</style>
