<script lang="ts">
import Maintray from '$lib/components/Maintray.svelte';
import Page from '$lib/components/Page.svelte';
import Sidetray from '$lib/components/Sidetray.svelte';
import Footer from '$lib/components/Footer.svelte';
</script>


<Maintray>
	<div class="bg-grun-dk p-10">
		<div class="bg-oliv-lt w-full sm:w-5/6 mx-auto p-10 rounded-xl border border-black">
			<h1>Registrierung erfolgreich</h1>
			<div class="text-base">
				<p class="pb-8">Ihre Organisation wird bald online sein. 
					Wenn du einen Fehler gemacht hast oder etwas ändern möchtest, kannst du uns schreiben.</p> 
			</div>
		</div>
	</div>
	<Footer />
</Maintray>
<Sidetray />
