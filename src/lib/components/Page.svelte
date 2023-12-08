<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	export let scrollTop = false

	let main: HTMLElement;

	afterNavigate(() => {
	if (main && scrollTop) { 
		main.scrollIntoView();
	}
	});
</script>
<section class="
	flex-col
	min-h-[calc(100vh-24rem)]
	pb-10
	{$$restProps.class}" 
	bind:this={main}>
	<slot />
</section>