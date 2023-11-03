<script lang="ts">
	import Header from '../lib/components/Header.svelte';
	import './styles.css';

</script>

<div class="app">
	<Header />
	<!-- temporary mobile -->
	<main class="pt-36 sm:p-0 flex flex-col sm:flex-row justify-between sm:h-[calc(100vh-13rem)] 3xl:h-[calc(100vh-14rem)] ">
		<div class="block sm:hidden px-5 py-2 bg-oliv-dk border border-black">Diese Website befindet sich noch in der Entwicklung und funktioniert besser auf größeren Bildschirmen.</div>
		<slot />
	</main>
</div>