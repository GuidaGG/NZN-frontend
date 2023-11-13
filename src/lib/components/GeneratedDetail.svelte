<script lang="ts">
    export let text: string = "hello"
</script>

<div id="container">
    <h1 class="text-2xl bg-green-400">
        {text} world!
    </h1>
</div>


<style>
    #container {
        width: 4000px;
        height: 2000px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: rgb(63,94,251);
        background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    }

</style>