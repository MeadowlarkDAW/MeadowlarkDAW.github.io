<script lang="ts">
	import { IconType } from '$lib/icons';
	import Icon from '$lib/Icon.svelte';

	export let icon: IconType = IconType.None;
	export let text = 'Button';
	export let link = '';

	$: logoHover = false;
</script>

<a
	href={link}
	class="navbar-button"
	on:click
	on:mouseenter={() => (logoHover = true)}
	on:mouseleave={() => (logoHover = false)}
>
	{#if icon === IconType.None}
		{text}
	{:else}
		<Icon
			bind:iconId={icon}
			height="1.5rem"
			width="1.5rem"
			fill={logoHover ? 'var(--accent-color)' : 'var(--text-idle)'}
		/>
	{/if}
</a>

<style>
	.navbar-button {
		cursor: pointer;
		user-select: none;
		text-align: center;
		display: flex;
		align-items: center;
		justify-items: center;
		width: 100%;
		height: 100%;
	}

	.navbar-button:hover {
		color: var(--accent-color);
	}

	a {
		text-decoration: none;
	}
</style>
