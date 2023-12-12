<script lang="ts">
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import RegistrationForm from '$lib/components/RegistrationForm.svelte';
	import * as yup from 'yup';
	import { goto } from '$app/navigation';
	import { error } from '@sveltejs/kit';
	import { config } from '$lib/config.js';

	export let data;

	let selected: string = "false" ;
	const page = data.page.pages[0];
	const content = data.form;

	
	let form :HTMLFormElement;
	$: fileImage = {} as FileList;
	$: fileLogo = {} as FileList;


	$: responseHandler = "register"
	$: validationErrors = {}
	$: formData = {
		title: '',
		states: [],
        city: '',
        organizational_forms: [],
        other_organizational_forms: '',
        work_areas: [],
        other_work_areas: '',
        context: [],
        other_context: '',
        description: '',
        email: '',
        website: '',
        contact_person: '',
        phone: '', 
        organisation_goals: [],
        other_organisation_goals: '',
        work_types: [],
        other_work_types: '',
        finances: '',
        expertise: [], 
        other_expertise: '',
        support: [], 
        other_support: '',
        special_info: '',
        agreement: selected,
		publishedAt: null
	}


	const schema = yup.object().shape({
        title: yup.string().required("Name ist ein Pflichtfeld"),
        states: yup.array().min(1, "Du musst mindestens eine Option wählen").required("Du musst mindestens eine Option wählen"),
        organizational_forms: yup.array().min(1,"Du musst mindestens eine Option wählen"),
        description: yup.string().max(1800, "Der Text ist zu lang"),
        email: yup.string().required("E-Mail ist ein Pflichtfeld").email("Dies ist keine gültige E-Mail"),
        organisation_goals: yup.array().min(1, "Du musst mindestens eine Option wählen"),
        work_types: yup.array().min(1, "Du musst mindestens eine Option wählen"),
        agreement: yup.bool().required("Du musst der Datenvereinbarung zustimmen.")
        .oneOf([true], "Du musst der Datenvereinbarung zustimmen."),
    });


    const handleSubmit = async (event: Event) => {
       
        try {
                await schema.validate(formData, { abortEarly: false });

                try {

    				const data = new FormData();

					//appends image to FormData
					if(fileImage){
					data.append(`files.image`, fileImage[0], fileImage[0].name);
					}
					if(fileLogo){
						data.append(`files.logo`, fileLogo[0], fileLogo[0].name);
					}
					
					data.append('data', JSON.stringify(formData));
				
					const response = await fetch(`${config.apiUrl}/api/members`, {
						method: 'post',
						body: data
					});
					
                    if (response.ok) {
                        const data = await response.json();
                        responseHandler = "sucess"

                    } 
					else{ 
						console.log(error)
						responseHandler = "error"
					}
                }
                catch(error){ 
                    console.log(error)
					responseHandler = "error"
                }
          
            } catch (error: any) {
                console.log(error)
                validationErrors = error.inner.reduce((acc: any, err: any) => {
                    return { ...acc, [err.path]: err.message };
                }, {});

                console.log(validationErrors)

                let firstElement = document.querySelector(`#${Object.keys(validationErrors)[0]}`);
                if(firstElement){
                    firstElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    }
            }

    }

</script>


<svelte:head>
	<title>{page.title}</title>
	<meta name="NZN" content="website for netzwerkzwischennutzung" />
</svelte:head>

<Maintray>
	<Page class="{page.slug}">
		{#if (responseHandler === "register")}
		<form class="w-full md:w-2/3 m-auto my-10" on:submit|preventDefault={handleSubmit} method="POST" bind:this={form}>
			<RegistrationForm 
				{content} 
				bind:formData={formData} 
				bind:errors={validationErrors}
				bind:fileImage={fileImage}
				bind:fileLogo={fileLogo}
				/>
			
			 
		</form>
		{:else if (responseHandler === "sucess")}
			<div class="bg-oliv-lt w-full sm:w-5/6 mx-auto p-10 mt-10 rounded-xl border border-black">
				<h1>Registrierung erfolgreich</h1>
				<div class="text-base">
					<p class="pb-8">Ihre Organisation wird bald online sein. 
						Wenn du einen Fehler gemacht hast oder etwas ändern möchtest, kannst du uns schreiben.</p> 
				</div>
			</div>
		{:else}
			<div class="bg-oliv-lt w-full sm:w-5/6 mx-auto p-10 mt-10 rounded-xl border border-black">
				<h1>Oops, es ist ein Fehler aufgetreten.</h1>
				<div class="text-base">
					<p class="pb-8">
						Es gab einen Fehler bei der Registrierung deiner Organisation.
						
						Lade die Seite neu und versuche es erneut. Falls das Problem weiterhin besteht, kontaktiere uns bitte.</p> 
				</div>
			</div>
		{/if}
	</Page>

	<Footer />
</Maintray>

<Sidetray>
	<div class="flex flex-col">
		{#each page.content as section}
			{#if section.__typename === "ComponentTextTextContent"}
				<!--<TextContent content={section} /> -->
			{:else if section.__typename === "ComponentTextContactData"}
				<ul class="text-base py-5">
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Netzwerk Zwischennutzung:</li>
						<li class="px-5 py-2 pb-14">{section.description}</li>
					<li>
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Umsetzung der Webseite:</li>
						<li class="px-5 py-2 pb-14">{section.website}</li>
					<li>
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Ansprechpartnerin:</li>
						<li class="px-5 py-2 pb-14">{section.contact_person}</li>
					<li>
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Telefon:</li>
						<li class="px-5 py-2 pb-14">{section.phone_number}</li>
					<li>
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Mail:</li>
						<li class="px-5 py-2 pb-14">{section.email}</li>
					<li class="border-t border-black  px-5 py-2 pb-14">
						{section.steuer}
					<li>

				</ul>
			{/if}
		{/each}
	</div>
</Sidetray>
