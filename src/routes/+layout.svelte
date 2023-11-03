<script lang="ts">
	import Header from '../lib/components/Header.svelte';
	import './styles.css';

</script>

<div class="app">
	<Header />
	<main class="flex justify-between h-[calc(100vh-14rem)]">
		<slot />
	</main>
</div>