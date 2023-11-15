<script lang="ts">
	import CheckboxGroup from "./form/CheckboxGroup.svelte";
    import Input from "./form/Input.svelte";
    import TextArea from "./form/TextArea.svelte";
    import RadioBox from "./RadioBox.svelte";
    import Upload from 'svelte-feathers/Upload.svelte';
    import ArrowRight from 'svelte-feathers/ArrowRight.svelte';
    export let content 

    let selected = 0;
    let imageInput: HTMLInputElement;
    let logoInput: HTMLInputElement;

    // checkbox contents
	const states = content.states;
    const organizationalForms = content.organizationalForms;
    const workAreas = content.workAreas;
	const expertises = content.expertises;
	const workTypes = content.workTypes;
	const contexts = content.contexts;
	const organizationalGoals = content.organizationalGoals
	
	const supports = content.supports
    
    $: formData = {
        name: '',
        states: [],
        city: '',
        organizationalForms: [],
        other_organizational_forms: '',
        workAreas: [],
        other_work_areas: '',
        contexts: [],
        other_contextx: '',
        description: '',
        email: '',
        website: '',
        contact_person: '',
        phone: '', 
        organizationalGoals: [],
        other_organizational_goals: '',
        workTypes: [],
        other_work_types: '',
        finances: '',
        expertises: [], 
        other_expertises: '',
        supports: [], 
        other_supports: '',
        special_info: '',
        image: [],
        logo: [],
        agreement: selected,
    };


    function handleSubmit(e){
       console.log(formData)
    }

</script>

<form class="w-2/3 m-auto my-10" on:submit|preventDefault={handleSubmit}>
    <div class="rounded-xl border-black border p-5">
  
        <h2 class="text-base font-nznBold pb-10">Anmeldung Netzwerk</h2>
        <Input name="name" label="Name des Akteurs/Organisation/Verein/Initiative:" required bind:value={formData.name}/>
        <CheckboxGroup options={states} name="states" label="In welchem Bundesland ist ihre Organisation aktiv?" bind:group={formData.states} required/>
        <Input name="city" label="In welcher Stadt ist der Hauptsitz ihrer Organisation?" bind:value={formData.city} />
        <CheckboxGroup options={organizationalForms} name="state" label="Organisationsform:" bind:group={formData.organizationalForms} other_value="other_organizational_forms"/>
        <CheckboxGroup options={workAreas} name="work-area" label="Arbeitsbereiche:" other_value="other_work_areas" bind:group={formData.workAreas}/>
        <CheckboxGroup options={contexts} name="context" label="Kontext:"  other_value="other_context" bind:group={formData.contexts} />
        <TextArea name="description" label="Kurzbeschreibung Ihrer Organisation (max. 1800 Zeichen inklusive Leerzeichen):" bind:value={formData.description}/>
        <Input name="email" label="E-mail" type="email" bind:value={formData.email} required/>
        <Input name="website" label="Webseite" type="url bind:value={formData.website}"/>
        <Input name="contact_person" label="Name der Ansprechperson(en) " type="text" bind:value={formData.contact_person}/>
        <Input name="phone" label="Telefonnummer" type="text" bind:value={formData.phone}/>
        <CheckboxGroup options={organizationalGoals} name="organizational_goals" label="Was sind die Ziele ihrer Organisation?" bind:group={formData.organizationalGoals} other_value="other_prganozational_goals" required/>
        <CheckboxGroup options={workTypes} name="work_types" label="Sind Sie hauptamtlich oder ehrenamtlich tätig?" bind:group={formData.workTypes} other_value="other_work_types" required/>
        <TextArea name="finances" label="Wie finanziert ihre Organisation die Arbeit bezüglich Zwischennutzungen und Leerstandsbelebung? Bitte geben Sie an, welche Förderungen Sie erhalten und wie ggf. Stellen finanziert werden." bind:value={formData.finances}/>
        <CheckboxGroup options={expertises} name="expertise" label="In diesen Feldern haben wir Expertise und können Unterstützung anbieten:" bind:group={formData.expertises} other_value="other_expertises"/>
        <CheckboxGroup options={supports} name="support" label="In diesen Feldern benötigen wir Unterstützung:" bind:group={formData.supports} other_value="other_supports"/>
        <TextArea name="special_info" label="Gibt es sonst noch Besonderheiten bezüglich Ihrer Organisation?" bind:value={formData.special_info}/>
        <div class="py-2">
            <label for="image" class="text-xs uppercase">Bild:</label>
            <Upload on:click={() => imageInput.click()} class="border border-black rounded-md p-2 h-10 w-10 my-2"/>
            <input class="py-2 hidden" type="file" name="image" bind:this={imageInput} bind:value={formData.image}/> 
        </div>
        <div class="py-2">
            <label for="image" class="text-xs uppercas">Logo:</label>
            <Upload on:click={() => logoInput.click()} class="border border-black rounded-md p-2 my-2 h-10 w-10"/>
            <input class="py-2 hidden"  type="file" name="logo" bind:this={logoInput} bind:value={formData.logo}/>
        </div>
        <div class="pt-10">
        <fieldset>
            <legend class="text-xs pb-2 relative">Ich bin damit einverstanden, dass die von mir hier eingegebenen Daten zwecks einer frei zugänglichen Onlinedatenbank auf der Webseite des Netzwerks Zwischennutzung veröffentlicht werden. Das Einverständnis kann jederzeit widerrufen werden.<span class="text-grun-dk text-xl absolute right-0 -top-2">*</span></legend>
            <div class="flex flex-col gap-2">
                <RadioBox name="agreement" value="1" label="Ich stimme zu" bind:selected />
                <RadioBox name="agreemen" value="0" label="Ich stimme nicht zu" bind:selected  />
            </div>
        </fieldset>
     </div>
    </div>
    <button type="submit" class="bg-oliv-lt py-2 px-5 rounded-xl border border-black text-base hover:shadow-inner-top mt-5 flex justify-between items-center">
        <span class="w-80 text-left">Abschicken</span>
        <span><ArrowRight /></span>
    </button>
</form>


