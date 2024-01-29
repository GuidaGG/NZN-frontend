<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import './styles.css';

</script>

<div class="app">
	<Header />
	<main id="main" class="flex justify-between h-[calc(100dvh-9rem)] sm:h-screen sm:pt-[13rem] 3xl:pt-[14rem]">
		<slot />
	</main>
</div>