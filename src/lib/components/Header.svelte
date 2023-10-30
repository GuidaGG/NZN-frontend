<script lang="ts">
	import { page } from '$app/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
	import nzn from '$lib/images/nzn_.png';

	let activeName: string;
	$: switch ($page.url.pathname) {
    case '/':
      activeName = 'News';
      break;
    case '/netzwerk':
      activeName = 'Netzwerk';
      break;
    case '/best-practice':
      activeName = 'Best Practice';
      break;
    case '/arbeitsmaterialen':
      activeName = 'Arbeitsmaterialen';
      break;
    case '/kontakt':
      activeName = 'Kontakt';
      break;
    default:
      activeName = 'News';
  }
</script>


<header class="flex justify-between border-b border-gray-900 bg-oliv-lt">

	<div class="w-full border-r border-gray-900">

		<div class="flex items-center h-40 px-5">
			<div class="h-3/4">
				<a href="/">
					<img class="h-full object-contain" src={nzn} alt="NZN-logo" />
				</a>
			</div>
		</div>

		<nav class="h-16 flex w-full border-t border-gray-900 justify-center font-bold">
			<ul class="flex w-full justify-between px-5 text-base">
				<li class="flex  items-center" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/"> News </a>
				</li>
		
				<li class="flex items-center" aria-current={$page.url.pathname === '/netzwerk' ? 'page' : undefined}>
					<a href="/netzwerk"> Netzwerk </a>
				</li>
		
				<li class="flex items-center" aria-current={$page.url.pathname === '/best-practice' ? 'page' : undefined}>
					<a href="/best-practice"> Best Practice </a>
				</li>
		
				<li class="flex items-center" aria-current={$page.url.pathname === '/arbeitsmaterialen' ? 'page' : undefined}>
					<a href="/arbeitsmaterialen"> Arbeitsmaterialen </a>
				</li>
		
				<li class="flex items-center" aria-current={$page.url.pathname === '/kontakt' ? 'page' : undefined}>
					<a href="/kontakt"> Kontakt </a>
				</li>
			</ul>
		</nav>

	</div>


	<div class="w-1/3 flex-col">

		<div class="h-40"> </div>

		<div class="flex h-16 border-t border-gray-900 items-center px-5">
			<p class="text-base font-bold"> {activeName} </p>
		</div>

	</div>

</header>