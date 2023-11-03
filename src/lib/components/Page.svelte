<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	
	let main: HTMLElement;

	afterNavigate(() => {
	if (main) { 
		//main.scrollIntoView();
	}
	});
</script>
<section class="
	flex-col
	min-h-[calc(100vh-24rem)]
	bg-oliv-lt
	{$$restProps.class}" 
	bind:this={main}>
	<slot />
</section>