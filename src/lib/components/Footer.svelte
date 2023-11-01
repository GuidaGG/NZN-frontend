<script lang="ts">
  import bmwsb from '$lib/images/BMWSB.png';
  import fbh_bms from '$lib/images/FHB_BMS.png';
</script>

<footer class="flex flex-col-reverse lg:flex-row border-t border-gray-900 bg-oliv-lt p-4 gap-10">
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
				<ul class="flex gap-2">
          <li>
            <a class="border rounded-lg border-black px-2" href="/kontakt">Kontakt</a>
          </li>
          <li>
            <a class="border rounded-lg border-black px-2"href="/impressum"> I </a>
          </li>
				</ul>
	
        <li>
					<a class="border rounded-lg border-black px-2" href="/impressum"> Impressum </a>
				</li>
		
        <li>
					<a class="border rounded-lg border-black px-2"href="/datenschutz"> Datenschutz</a>
				</li>

			</ul>
    </nav>

    <nav class="grow">
      <ul class="flex flex-col gap-2 w-full text-base">
        <li>
					<a class="inline-block border rounded-lg border-black px-2" href="/anmeldung-netzwerk">Anmeldung Netzwerk</a>
				</li>
		
        <li>
					<a class="inline-block border rounded-lg border-black px-2" href="/anmeldung-mail">Anmeldung Mailvertailer</a>
				</li>
	
			</ul>
    </nav>
  </div>
</footer>
