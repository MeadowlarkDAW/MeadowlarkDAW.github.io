<script lang="ts">
	import HeaderButton from './HeaderButton.svelte';
	import { IconType } from './icons';
</script>

<div class="header">
	<div class="header-wrapper">
		<img class="header-icon" src="meadowlark-logo-64.png" alt="meadowlark icon" />
		<div class="header-right">
			<HeaderButton text="Features" link="#features" />
			<HeaderButton text="Blog" link="https://github.com/MeadowlarkDAW/Meadowlark" />
			<div class="divisor" />
			<!-- <HeaderThemeToggle /> -->
			<HeaderButton text="Discord" link="https://discord.gg/2W3Xvc8wy4" icon={IconType.Discord} />
			<HeaderButton
				text="Github"
				link="https://github.com/MeadowlarkDAW/Meadowlark"
				icon={IconType.Github}
			/>
		</div>
	</div>
</div>

<style>
	.header {
		width: 100%;

		height: 4rem;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		background: var(--background-main);
		position: fixed;
		filter: drop-shadow(0rem 0.1rem 4px #00000022);

		z-index: 999;

		top: 0;
		left: 0;
	}

	.header-wrapper {
		width: 100%;
		height: 100%;
		max-width: var(--page-width);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 1rem;
	}

	.header-icon {
		width: 2rem;
		height: 2rem;
	}

	.header-right {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.divisor {
		min-width: 1px;
		min-height: 100%;
		background-color: var(--background-secondary);
	}
</style>
