<script lang="ts">
	import { sidetrayVisible, activeName } from '$lib/stores';

	$: isOpen = false;
	$: title = '';

	sidetrayVisible.subscribe(value => {
		isOpen = value;
	});

	$: activeName.subscribe(value => {
		title = value;
	});

</script>

<div id="sidetray" class={`sm:relative sm:translate-x-0 sm:transform-none sm:w-1/4 fixed top-0 right-0 z-20
  w-[calc(100%-3rem)] h-[calc(100dvh-9rem)] sm:h-auto bg-oliv-lt overflow-x-hidden overflow-y-scroll scrollbar-hide
	transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} border-l border-black`}
>
	<div class="sm:hidden border-b border-black h-12 flex items-center px-4 text-sm font-nznBold">
		<h2> {title} </h2>
	</div>
	<slot />
</div>