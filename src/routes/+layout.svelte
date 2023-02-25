<script lang="ts">
	import '../styles.scss';
	import '../themes.scss';

	import Header from '$lib/Header.svelte';
</script>

<main class=" dark">
	<Header />

	<div class="app">
		<slot />
	</div>
</main>

<style lang="scss">
	.app {
		height: 100%;
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - var(--header-size));
		margin-top: var(--header-size);
	}
</style>
