<script lang="ts">
  import bmwsb from '$lib/images/BMWSB.png';
  import fbh_bms from '$lib/images/FHB_BMS.png';
  import Instagram from 'svelte-feathers/Instagram.svelte';

</script>

<footer class="flex flex-col-reverse lg:flex-row border-t border-gray-900 bg-oliv-lt p-4 gap-10 {$$restProps.class}">
  <div class="flex flex-row align-top w-full lg:w-5/12">
    <div class="w-full">
      <img class="object-contain" src={bmwsb} alt="Bunderministerium für Wohnen, Stadtentwicklung und Bauwesen">
    </div>
    <div class="w-full">
      <img class="object-contain" src={fbh_bms} alt="Die Senatorin für Bau, Mobilitäat und Stadtentwicklung">
    </div>
  </div>
  <div class="grow flex gap-3">
    <nav >
      <ul class="flex flex-col gap-3 text-base border-black">
				<ul class="flex gap-2 items-start">
          <li>
            <a class="border-2 rounded-lg border-black px-2 hover:shadow-inner-top" href="/kontakt"> Kontakt </a>
          </li>
          <li>
            <a class="border-2 h-8 3xl:h-11 rounded-lg border-black px-1 3xl:px-2 inline-block flex hover:shadow-inner-top" href="/impressum"> <Instagram class="self-center h-6 w-6 3xl:h-3xl:8 w-8" /> </a>
          </li>
				</ul>
	
        <li>
					<a class="border-2 rounded-lg border-black px-2 hover:shadow-inner-top" href="/impressum"> Impressum </a>
				</li>
		
        <li>
					<a class="border-2 rounded-lg border-black px-2 hover:shadow-inner-top"href="/datenschutz"> Datenschutz </a>
				</li>

			</ul>
    </nav>

    <nav class="grow">
      <ul class="flex flex-col gap-2 w-full text-base">
        <li>
					<a class="inline-block border-2 rounded-lg border-black px-2 hover:shadow-inner-top" href="/anmeldung-netzwerk"> Anmeldung Netzwerk </a>
				</li>
		
        <li>
					<a class="inline-block border-2 rounded-lg border-black px-2 hover:shadow-inner-top" href="/anmeldung-mail"> Anmeldung Mailvertailer </a>
				</li>
	
			</ul>
    </nav>
  </div>
</footer>
