<script lang="ts">
  import Bm from './BM.svelte';
  import fbh_bms from '$lib/images/FHB_Senatorin.png';
  import { Instagram, X, Facebook } from 'svelte-feathers';
  import Nsp from './NSP_rgb.svelte';
</script>

<footer class="flex flex-col-reverse lg:flex-row border-t border-gray-900 bg-oliv-lt p-4 gap-10 {$$restProps.class}">
  <div class="align-top w-full lg:w-6/12">
    <div class="text-[10px]">Das Projekt wird durch das Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen im Rahmen der Nationalen Stadtentwicklungspolitik gefördert.</div>
    <div class="text-[10px]">Realisiert wird das Projekt von der AAA GmbH, die seit 2009 das Projekt ZZZ – ZwischenZeitZentrale Bremen im Auftrag der Stadt Bremen umsetzt, das von 2009 bis 2012 ebenfalls im Rahmen der Nationalen Stadtentwicklungspolitik gefördert wurde.</div>
    <div class="text-[10px]">Das Netzwerk Zwischennutzung wird von der Bremer Senatorin für Klimaschutz, Umwelt, Mobilität, Stadtentwicklung und Wohnungsbau unterstützt.</div>
    <div class="flex flex-row justify-between items-center">
      <div class="w-full">
        <Bm class="max-h-24 w-full" />
      </div>
      <div class="w-full">
        <Nsp class="max-h-24 w-full" />
      </div>
      <div class="w-full">
        <img class="object-contain" src={fbh_bms} alt="Die Senatorin für Bau, Mobilitäat und Stadtentwicklung">
      </div>
    </div>
  </div>
  <div class="grow flex gap-3">
    <nav >
      <ul class="flex flex-col gap-3 text-base border-black">

        <li>
          <a class="border-2 rounded-lg border-black px-2 hover:shadow-inner-top" href="/kontakt"> Kontakt </a>
        </li>
   
	
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
					<a class="inline-block border-2 rounded-lg border-black px-2 hover:shadow-inner-top" href="/kontakt"> Anmeldung Netzwerk </a>
				</li>
		
        <li>
					<a class="inline-block border-2 rounded-lg border-black px-2 hover:shadow-inner-top" href="/kontakt"> Anmeldung Mailverteiler </a>
				</li>
        <ul class="flex gap-1">
          <li>
            <a class="border-2 h-8 3xl:h-11 rounded-lg border-black px-1 3xl:px-2 inline-block flex hover:shadow-inner-top" target="_blank" href="https://www.instagram.com/netzwerk_zwischennutzung"> <Instagram class="self-center h-6  3xl:h-3xl:8 w-8" /> </a>
          </li>
          <li>
            <a class="border-2 h-8 3xl:h-11 rounded-lg border-black px-1 3xl:px-2 inline-block flex hover:shadow-inner-top" target="_blank" href="https://twitter.com/zw65089?s=20"> <X class="self-center h-6 w-6 3xl:h-3xl:8 w-8" /> </a>
          </li>
          <li>
            <a class="border-2 h-8 3xl:h-11 rounded-lg border-black px-1 3xl:px-2 inline-block flex hover:shadow-inner-top" target="_blank" href="https://www.facebook.com/profile.php?id=61551498520154"> <Facebook class="self-center h-6 w-6 3xl:h-3xl:8 w-8" /> </a>
          </li>
        </ul>
			</ul>
    </nav>
  </div>
</footer>
