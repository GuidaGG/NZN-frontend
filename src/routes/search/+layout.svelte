<script lang="ts">
	import Maintray from '$lib/components/Maintray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';

</script>

<svelte:head>
	<title> Search </title>
</svelte:head>


<Maintray>
		<slot />
	<Footer />
</Maintray>

<Sidetray>


</Sidetray>