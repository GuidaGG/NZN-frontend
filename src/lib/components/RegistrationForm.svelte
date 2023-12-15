<script lang="ts">
	import CheckboxGroup from "./form/CheckboxGroup.svelte";
    import Input from "./form/Input.svelte";
    import TextArea from "./form/TextArea.svelte";
    import RadioBox from "./RadioBox.svelte";
    import Upload from 'svelte-feathers/Upload.svelte';
    import ArrowRight from 'svelte-feathers/ArrowRight.svelte';
    import Star from 'svelte-feathers/Star.svelte';
    import X from 'svelte-feathers/X.svelte';
	import { fix_and_destroy_block } from "svelte/internal";

    type FormData = {
    [key: string]: string  | number[];
    }

    type FormErrors = {
    [key: string]: string;
    };

    export let content 
    export let formData: FormData;
    export let errors: FormErrors;
    export let fileImage: FileList;
    export let fileLogo: FileList;

    let imageInput: HTMLInputElement;
    let logoInput: HTMLInputElement;
    $: logo = "";
    $: image = ""

    let errorMessage = '';

    // checkbox contents
	const states = content.states;
    const organizationalForms = content.organizationalForms;
    const workAreas = content.workAreas;
	const expertises = content.expertises;
	const workTypes = content.workTypes;
	const contexts = content.contexts;
	const organizationalGoals = content.organizationalGoals
	
	const supports = content.supports



</script>

    <div class="rounded-xl md:border-black md:border p-5">
        <h2 class="text-base font-nznBold pb-10">Anmeldung Netzwerk</h2>

        <Input name="title" label="Name des Akteurs/Organisation/Verein/Initiative:" required bind:value={formData.title}/>
        {#if errors.title}
            <span class="p-1 px-2 border rounded-md border-red-500 text-red-500">{errors.title}</span>
        {/if}

        <CheckboxGroup 
            options={states} 
            name="states" 
            label="In welchem Bundesland ist ihre Organisation aktiv?" 
            bind:group={formData.states} 
            other
            required/>
        {#if errors.states}
        <span class="p-1 px-2 border rounded-md border-red-500 text-red-500">{errors.states}</span>
        {/if}

         <Input name="city" label="In welcher Stadt ist der Hauptsitz ihrer Organisation?" bind:value={formData.city} />
        <CheckboxGroup 
            options={organizationalForms} 
            name="organizational_forms" 
            label="Organisationsform:" 
            bind:group={formData.organizational_forms} 
            other_value="other_organizational_forms" 
            bind:other={formData.other_organizational_forms} 
            required/>
        {#if errors.organizational_forms}
            <span class="p-1 px-2 border rounded-md border-red-500 text-red-500">{errors.organizational_forms}</span>
        {/if}
       <CheckboxGroup 
            options={workAreas} 
            name="work-area" 
            label="Arbeitsbereiche:" 
            other_value="other_work_areas" 
            bind:group={formData.work_areas}
            bind:other={formData.other_work_areas}
        />
        <CheckboxGroup 
            options={contexts} 
            name="context" 
            label="Kontext:"  
            other_value="other_context" 
            bind:group={formData.context} 
            bind:other={formData.other_context}
        />
        <TextArea name="description" label="Kurzbeschreibung Ihrer Organisation (max. 1800 Zeichen inklusive Leerzeichen):" bind:value={formData.description}/>
        {#if errors.description}
         <span class="p-1 px-2 border rounded-md border-red-500 text-red-500">{errors.description}</span>
        {/if}
        <Input name="email" label="E-mail" bind:value={formData.email} required/>
        {#if errors.email}
            <span class="p-1 px-2 border rounded-md border-red-500 text-red-500">{errors.email}</span>
        {/if}
        <Input name="website" label="Webseite" bind:value={formData.website} />
        <Input name="contact_person" label="Name der Ansprechperson(en) " type="text" bind:value={formData.contact_person}/>
        <Input name="phone" label="Telefonnummer" type="text" bind:value={formData.phone}/>
        <CheckboxGroup 
            options={organizationalGoals} 
            name="organizational_goals"
            label="Was sind die Ziele ihrer Organisation?" 
            bind:group={formData.organisation_goals}
            other_value="other_organizational_goals"
            bind:other={formData.other_organizational_goals} 
            required
        />
        {#if errors.organisation_goals}
            <span class="p-1 px-2 border rounded-md border-red-500 text-red-500">{errors.organisation_goals}</span>
        {/if}
        <CheckboxGroup 
            options={workTypes}
            name="workTypes"
            label="Sind Sie hauptamtlich oder ehrenamtlich tätig?"
            bind:group={formData.work_types}
            other_value="other_work_types" 
            bind:other={formData.other_work_types} 
            required
        />
        {#if errors.work_types}
            <span class="p-1 px-2 border rounded-md border-red-500 text-red-500">{errors.work_types}</span>
        {/if}   
        <TextArea name="finances" label="Wie finanziert ihre Organisation die Arbeit bezüglich Zwischennutzungen und Leerstandsbelebung? Bitte geben Sie an, welche Förderungen Sie erhalten und wie ggf. Stellen finanziert werden." bind:value={formData.finances}/>
        <CheckboxGroup 
            options={expertises} 
            name="expertise"
            label="In diesen Feldern haben wir Expertise und können Unterstützung anbieten:" 
            bind:group={formData.expertise} 
            bind:other={formData.other_expertise} 
            other_value="other_expertises"/>
        <CheckboxGroup 
            options={supports} 
            name="support"
            label="In diesen Feldern benötigen wir Unterstützung:"
            bind:group={formData.support}
            other_value="other_supports"
            bind:other={formData.other_support} 
        />
        <TextArea name="special_info" label="Gibt es sonst noch Besonderheiten bezüglich Ihrer Organisation?" bind:value={formData.special_info}/>
        <div class="py-2">
            <label for="image" class="text-xs uppercase">Bild:</label>
            <div class="flex items-center gap-2">
                <Upload on:click={() => imageInput.click()} class="border border-black rounded-md p-2 h-10 w-10 my-2"/>
                <input class="py-2 hidden" type="file" name="image" bind:this={imageInput} 
                bind:files={fileImage}
                bind:value={image}
                /> 
                {#if fileImage[0]}
                <div class="flex gap-1 items-center">
                    <span class="border border-black rounded-md p-2">{image}</span>
                    <X on:click={() =>imageInput.value = ""} class=" cursor-pointer w-11 h-11 border border-red-500 rounded-md p-2 stroke-1 stroke-red-500"/>
                </div>
            {/if}
            </div>
        </div>
      
       <div class="py-2">
            <label for="image" class="text-xs uppercase">Logo:</label>
            <div class="flex items-center gap-2">
                <Upload on:click={() => logoInput.click()} class="border border-black rounded-md p-2 my-2 h-10 w-10"/>
                <input class="py-2 hidden"  type="file" name="logo" bind:this={logoInput} 
                bind:value={logo}
                bind:files={fileLogo}/>
                {#if fileLogo[0]}
                    <div class="flex gap-1 items-center">
                        <span class="border border-black rounded-md p-2">{logo}</span>
                        <X on:click={() =>logoInput.value = ""} class=" cursor-pointer w-11 h-11 border border-red-500 rounded-md p-2 stroke-1 stroke-red-500"/>
                    </div>
                {/if}
            </div>
        </div>
        <div class="pt-10">
        <fieldset>
            <legend class="text-xs pb-2 relative">Ich bin damit einverstanden, dass die von mir hier eingegebenen Daten zwecks einer frei zugänglichen Onlinedatenbank auf der Webseite des Netzwerks Zwischennutzung veröffentlicht werden. Das Einverständnis kann jederzeit widerrufen werden.
                <span class="text-grun-dk">
                    <Star class="inline h-5 pb-2"/>
                </span>
            </legend>
            <div class="flex flex-col gap-2">
                <RadioBox name="agreement" value=true label="Ich stimme zu" bind:selected={formData.agreement} />
                <RadioBox name="agreement" value=false label="Ich stimme nicht zu" bind:selected={formData.agreement} />
            </div>
        </fieldset>

        {#if errors.agreement}
        <div class="mt-3"> 
            <span class="p-1 px-2  border rounded-md border-red-500 text-red-500">{errors.agreement}</span>
        </div>
        {/if}
     </div>
    </div>
    <button type="submit" class="bg-oliv-lt ml-5 md:ml-0 py-2 px-5 rounded-xl border border-black text-base hover:shadow-inner-top mt-5 flex justify-between items-center">
        <span class="w-48 md:w-64 text-left">Abschicken</span>
        <span><ArrowRight /></span>
    </button>



